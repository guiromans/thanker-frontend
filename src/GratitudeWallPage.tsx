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
import { UserResponse } from "./model/UserModel";

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
    const [user, setUser] = useState<UserResponse>();
    const [userId, setUserId] = useState<string>(userService.getUserId()!);
    const [canRequestMoreThanks, SetCanRequestMoreThanks] = useState<boolean>(true);
    const [canSendEmail, setCanSendEmail] = useState<boolean>(false);
    const [sendingEmail, setSendingEmail] = useState<boolean>(false);
    
    const thanksScrollableDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        loadUser();
    }, []);

    useEffect(() => {
        if (canRequestMoreThanks) {
            loadThanks(page);
        }
    }, [page]);

    const loadUser = async() => {
        await userService.getUser(userService.getUserId()!)
            .then((resp) => {
                const respUser: UserResponse = resp.data as UserResponse;
                setUser(respUser);
                setCanSendEmail(respUser.canSendEmail);
            })
    }

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

      const resolveCanSendEmail = (thanks: ThanksResponse): boolean => {
        return canSendEmail && thanks.giver.id === userService.getUserId()! &&
          thanks.giver.id !== thanks.receiver.id;
      }

      const handleSentEmail = () => {
        setCanSendEmail(false);
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
                        userCanSendEmail={canSendEmail !== undefined && canSendEmail}
                        sentEmail={handleSentEmail}
                    />
                ))}
                {thanks.length === 0 && page === 0 && !loadingThanks && <NoThanksCard language={language} pageType={PageType.WALL} isOpenProfile={true} />}
                <br />
                {(loadingThanks || sendingEmail) && <div className='centerish'><Loader size="massive" /></div>}
            </div>
        </div>
      )

}