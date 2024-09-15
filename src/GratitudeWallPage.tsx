import { useCallback, useEffect, useRef, useState } from "react"
import { ThanksResponse } from "./model/ThanksModel";
import { ThanksService } from "./services/ThanksService";
import { enqueueSnackbar } from "notistack";
import { getUniqueById } from "./utils/ThanksUtils";
import ThanksCard from "./cards/ThanksCard";
import { Loader } from "./cards/Loader";
import { Language } from "./services/TranslationService";
import { UserService } from "./services/UserService";
import { NoThanksCard } from "./cards/NoThanksCard";
import { PageType } from "./model/PageType";
import './style/UserPage.css';
import { isMobile } from "react-device-detect";

export interface WallProps {
    language?: Language;
    onUserClick: (userId: string) => void;
}

export const GratitudeWallPage = (props: WallProps) => {

    const PAGE_SIZE: number = 10;
    const DELAY_IN_MS: number = 500;

    const thanksService: ThanksService = new ThanksService();
    const userService: UserService = new UserService();

    const [page, setPage] = useState<number>(0);
    const [thanks, setThanks] = useState<ThanksResponse[]>([]);
    const [loadingThanks, setLoadingThanks] = useState<boolean>(false);
    const [language, setLanguage] = useState<Language>(props.language!);
    const [userId, setUserId] = useState<string>(userService.getUserId()!);
    const [canRequestMoreThanks, SetCanRequestMoreThanks] = useState<boolean>(true);
    
    const thanksScrollableDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (canRequestMoreThanks) {
            loadThanks(page);
        }
    }, [page]);

    const loadThanks = async(page: number) => {
        setLoadingThanks(true);
        await thanksService.getGratitudeWallThanks(page, PAGE_SIZE)
            .then(resp => {
                const newThanks: ThanksResponse[] = resp.data as ThanksResponse[];
                if (newThanks.length > 0) {
                    updateThanks(newThanks);
                } else {
                    SetCanRequestMoreThanks(false);
                }
            })
            .catch(e => enqueueSnackbar(`Error loading thanks: ${e}`, { variant: 'error' }))
            .finally(() => {
                setTimeout(() => {
                    setLoadingThanks(false);
                }, DELAY_IN_MS);
                
            });
    }

    const updateThanks = (updatedThanks: ThanksResponse[]) => {
        setTimeout(() => {
            setThanks(prevThanks => [...prevThanks, ...updatedThanks]);
        }, DELAY_IN_MS);
    }

    const checkScroll = () => {
        const div = thanksScrollableDivRef.current;
        console.log("Check scroll method")
        if (div !== null && !loadingThanks && canRequestMoreThanks) {
          const isAtBottom = div.scrollTop + div.clientHeight >= div.scrollHeight - 20;
          if (isAtBottom) {
            setPage((prevPage) => prevPage + 1);
          }
        }
      };

      const handleUserImageClick = useCallback((clickedUserId: string) => {
        props.onUserClick(clickedUserId);
      }, []);

      const handleThanksPrivacyChange = () => {
        // Empty
      }

      const handleClickedDelete = () => {
        // Empty
      }

      const resolveDivClasses = () => {
        return `container mobile-user ${isMobile ? "top-padding-mobile" : "centerish-2 top-padding" }`; 
      }


      return (
        <div className={resolveDivClasses()} ref={thanksScrollableDivRef} onScroll={checkScroll}>
            <div className="thanks-container">
            {
                getUniqueById(thanks)
                    .map(thanksItem => (
                    <ThanksCard
                        key={thanksItem.id}
                        thanks={thanksItem}
                        onPrivacyTypeChange={handleThanksPrivacyChange}
                        onUserImageClick={handleUserImageClick}
                        language={language}
                        onClickedDelete={handleClickedDelete}
                        userImageUrl={thanksItem.giver.profilePictureUrl}
                        pageUserId={userId}
                        timestamp={0}
                    />
                ))}
                {thanks.length === 0 && page === 0 && !loadingThanks && <NoThanksCard language={language} pageType={PageType.WALL} isOpenProfile={true} />}
                <br />
                {loadingThanks && <div className='centerish'><Loader size="big" /></div>}
            </div>
        </div>
      )

}