import React, { useEffect, useState } from "react";
import { AI_PRO_ERROR_GETTING_DOCUMENT, AI_PRO_GRATITUDE_VISUALIZER, AI_PRO_HIGHLIGHTS, AI_PRO_INSIGHTS_VALUE, AI_PRO_MESSAGE_OF_THE_DAY, AI_PRO_PSEUDO_CELEBRITY_SAYS, AI_PRO_PSEUDO_CELEBRITY_VALUE, Language, SUBSCRIPTION_COME_BACK_TOMORROW, TranslationService } from "./services/TranslationService";
import '../src/style/AiPro.css';
import { resolveMainContainerClasses, resolveTitleClasses, resolveTopPadding } from "./utils/AiProUtils";
import { AiProService } from "./services/AiProService";
import { AiPro, AiProDocumentsSizeResponse, FamousQuote } from "./model/AiProModel";
import { enqueueSnackbar } from "notistack";
import { Loader } from "./cards/Loader";
import { toDateString } from "./utils/DateUtils";
import { isMobile } from "react-device-detect";
import { CardinalDirections, LegendRendererProps, PieChart, PieValueType } from "@mui/x-charts";
import rightArrow from './assets/images/green_arrow.png';
import tomorrowIdeaIcon from './assets/images/tomorrow_idea.png';
import { AiProSection } from "./cards/AiProSection";
import { useParams } from "react-router-dom";

export interface AiProps {
    language: Language | undefined;
}

export const AiProPage: React.FC<AiProps> = (props: AiProps) => {

    const params = useParams();
    const subscriptionSessionId: string | undefined = params.sessionId;
    const subscriptionUserId: string | undefined = params.userId;

    const translationService: TranslationService = new TranslationService();
    const aiProService: AiProService = new AiProService();
    const [index, setIndex] = useState<number>(0);
    const [documentsSize, setDocumentsSize] = useState<number>(0);
    const [aiPro, setAiPro] = useState<AiPro>();
    const [chartData, setChartData] = useState<PieValueType[]>([]);
    const [translatedChartData, setTranslatedChartData] = useState<PieValueType[]>([]);
    const [fetchingDocuments, setFetchingDocuments] = useState<boolean>(true);
    const [fetchingDocumentsSize, setFetchingDocumentsSize] = useState<boolean>(true);
    const [canIncrementIndex, setCanIncrementIndex] = useState<boolean>(false);
    const [canDecrementIndex, setCanDecrementIndex] = useState<boolean>(false);
    const [language, setLanguage] = useState<Language>(props.language!);

    useEffect(() => {
        fetchDocumentsSize();

        if (subscriptionSessionId && subscriptionUserId) {
            
        }
    }, []);

    useEffect(() => {
        fetchDocument();
        updateDocumentScrollers();
    }, [index]);

    useEffect(() => {
        updateDocumentScrollers();
    }, [documentsSize]);

    useEffect(() => {
        translationService.setLanguage(language);
        translateAndSortChartData();
    }, [chartData, language]);

    useEffect(() => {
        setLanguage(props.language!);
    }, [props.language]);

    const fetchDocument = async() => {
        await aiProService.getAiProDocumentBy(index)
            .then((resp) => {
                const aiProResponse: AiPro = resp.data as AiPro;
                
                setAiPro(aiProResponse);
                resolveChartDataOf(aiProResponse);
            })
            .catch(() => enqueueSnackbar(translationService.getFor(AI_PRO_ERROR_GETTING_DOCUMENT), { variant: 'error'}))
            .finally(() => {
                setFetchingDocuments(false)
            });
    }

    const fetchDocumentsSize = async() => {
        await aiProService.getNumberDocumentsOfUser()
            .then((resp) => {
                const response: AiProDocumentsSizeResponse = resp.data as AiProDocumentsSizeResponse;
                setDocumentsSize(response.size);
            })
            .catch(() => setDocumentsSize(0))
            .finally(() => {
                setFetchingDocumentsSize(false)
            }
        );
    }

    const updateDocumentScrollers = () => {
        setCanIncrementIndex(canIncrementIndexOperation());
        setCanDecrementIndex(canDecrementIndexOperation());
    }

    const resolveChartDataOf = (aiPro: AiPro) => {
        const stats: Map<string, number> = new Map<string, number>(Object.entries(aiPro.gratitudeStats))
        const data: PieValueType[] = []
        let index = 0

        stats.forEach((value: number, key: string) => {
            data.push({id: index, value: value, label: key});
            index++;
        })

        setChartData(data) ;
    }

    const translateAndSortChartData = () => {
        const translatedData: PieValueType[] = []
        let index = 0

        chartData.forEach((p: PieValueType) => {
            translatedData.push({id: p.id, value: p.value, label: translationService.getFor(p.label!.toString())});
            index++;
        })

        setTranslatedChartData(translatedData.sort((a, b) => {
            const translatedA: string = translationService.getFor(a.label!.toString())
            const translatedB: string = translationService.getFor(b.label!.toString())

            return translatedA.localeCompare(translatedB);
        }))
    }

    const resolveDocumentContainerClass = (): string => {
        return `ai-pro-document-container-${isMobile ? "mobile" : "desktop"}`;
    }

    const decrementIndex = () => {
        setIndex(index - 1);
    }

    const incrementIndex = () => {
        setIndex(index + 1);
    }

    const canDecrementIndexOperation = (): boolean => {
        return index - 1 >= 0;
    }

    const canIncrementIndexOperation = (): boolean => {
        return index + 1 < documentsSize;
    }

    const resolveChartHeight = (): number => {
        return isMobile ? 400 : 400;
    }

    const resolveCenterClasses = (): string => {
        return `ai-pro-center ai-pro-center-${isMobile ? "mobile" : "desktop"}`;
    }

    const resolveFamousQuoteTextOf = (aiPro: AiPro): string => {
        const famousQuote: FamousQuote = aiPro.famousQuote

        return `${famousQuote.name} ${translationService.getFor(AI_PRO_PSEUDO_CELEBRITY_SAYS)}: "${famousQuote.quote}"`;
    }

    const resolveSideClassFor = (baseName: string): string => {
        return `${baseName}-${isMobile ? "mobile" : "desktop"}`;
    }

    const resolveDateClass = (): string => {
        return `ai-pro-date ai-pro-date-${isMobile ? "mobile" : "desktop"}`;
    }

    const resolveArrowClassesPlus = (additionalClass?: string): string => {
        return `${additionalClass && additionalClass} ai-pro-arrow ai-pro-arrow-${isMobile ? "mobile" : "desktop"}`;
    }

    const resolveLegendProps = (): Partial<LegendRendererProps> => {
        return isMobile ?
            {
                hidden: false,
                direction: "row",
                itemMarkWidth: 10,
                itemMarkHeight: 5,
                markGap: 6,
                itemGap: 1,
                position: { vertical: 'top', horizontal: 'middle' },
                padding: {top: 220, bottom: 0, left: 0, right: 0}
            }
            :
            {
                direction: "row",
                itemMarkWidth: 24,
                itemMarkHeight: 5,
                markGap: 10,
                itemGap: 1,
                position: { vertical: 'middle', horizontal: 'right' },
                padding: {bottom: 50, left: 600, right: 0}
            }
    }

    const resolveMarginProps = (): Partial<CardinalDirections<number>> => {
        return isMobile ? 
            { top: 0, bottom: 172, left: 5, right: 5 }
            :
            { top: 10, bottom: 10, left: 10, right: 240 }
    }

    if (fetchingDocuments && fetchingDocumentsSize) {
        return(
            <div className={resolveTopPadding()}>
                <Loader size="massive" />
            </div>
        )
    }

    return (
        <div className={resolveMainContainerClasses("subscriber")}>
            <div className={resolveSideClassFor("ai-pro-left")}>
                {canIncrementIndex && <img className={resolveArrowClassesPlus("ai-pro-arrow-left")} src={rightArrow} onClick={incrementIndex} /> }
            </div>
            <div className={resolveCenterClasses()}>
                <div className={resolveTitleClasses()}>
                    {translationService.getFor("Thanker AI Pro™")}
                </div>
                <div className={resolveDateClass()}>
                    {aiPro && aiPro.date && toDateString(aiPro.date)}
                </div>
                <div className="ai-pro-chart ai-pro-section">
                    {aiPro && <AiProSection title={translationService.getFor(AI_PRO_MESSAGE_OF_THE_DAY)} text={aiPro.messageOfTheDay} />}
                    {aiPro && <AiProSection title={translationService.getFor(AI_PRO_GRATITUDE_VISUALIZER)} text={undefined}> 
                        <div>
                            <PieChart
                                className="ai-pro-chart"
                                colors={["#e6194b", "#3cb44b", "#ffe119", "#4363d8", "#f58231", "#911eb4", "#42d4f4", "#f032e6", "#bfef45", "#fabebe", "#469990", "#e6beff", "#9a6324", "#800000", "#aaffc3", "#808000", "#ffd8b1", "#000075", "#6a0dad"]}
                                slotProps={{
                                legend: resolveLegendProps()
                                }}
                                margin={resolveMarginProps()}
                                series={[
                                    {
                                        innerRadius: 0,
                                        data: translatedChartData,
                                        highlightScope: { fade: 'global', highlight: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                        arcLabelRadius: "1%"
                                    },
                                ]}
                                height={resolveChartHeight()}
                            />
                            </div>
                            </AiProSection>
                        }
                        {aiPro && <AiProSection title={translationService.getFor(AI_PRO_INSIGHTS_VALUE)} text={aiPro.analysis} /> }
                        {aiPro && <AiProSection title={translationService.getFor(AI_PRO_HIGHLIGHTS)} text={aiPro.highlights} /> }
                        {aiPro && <AiProSection title={`${translationService.getFor(AI_PRO_PSEUDO_CELEBRITY_VALUE)} 😄`} text={resolveFamousQuoteTextOf(aiPro)} /> }
                        <div className="come-back">
                            <img src={tomorrowIdeaIcon} width={48}/>
                            <label className="come-back-text">{translationService.getFor(SUBSCRIPTION_COME_BACK_TOMORROW)}</label>
                        </div>
                </div>
            </div>
            <div className={resolveSideClassFor("ai-pro-right")}>
                {canDecrementIndex && <img className={resolveArrowClassesPlus()} src={rightArrow} onClick={decrementIndex} /> }
            </div>
        </div>
    )

}