import { ThanksService } from "./services/ThanksService";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { CreateThanksRequest, DeleteThanksResponse, PrivacyChangeResponse, PrivacyType, ThanksResponse } from "./model/ThanksModel";
import { ErrorResponse } from "./model/ErrorResponse";
import { getUniqueById, privacyTypeOf } from "./utils/ThanksUtils";
import { AuthService } from "./services/AuthService";
import { ARE_YOU_SURE_TO_DELETE, CHANGED_PRIVACY_TYPE, ERROR_CHANGE_PRIVACY_TYPE, ERROR_TRYING_TO_FOLLOW, FOLLOW, FOLLOWING, Language, TEXT_NOT_EMPTY, THANK, TranslationService, YOU_ARE_NOW_FOLLOWING } from "./services/TranslationService";
import { FollowerResponse } from "./model/FollowerModel";
import { UserResponse } from "./model/UserModel";
import { UserService } from "./services/UserService";
import { Loader } from "./cards/Loader";
import ThanksCard from "./cards/ThanksCard";
import { HurrayCard } from "./cards/HurrayCard";
import './style/UserPage.css';
import './style/Fonts.css';
import UserCard from "./cards/UserCard";
import QuoteCard from "./cards/QuoteCard";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import infoIcon from './assets/images/info_icon.png';
import { Modal } from "./cards/Modal";
import { StorageService } from "./services/StorageService";
import { NoThanksCard } from "./cards/NoThanksCard";

interface UserProps {
  userId: string | null | undefined;
  language: Language;
  loadingUsers: boolean;
}

export const UserPage = (props: UserProps) => {
  const PAGE_SIZE: number = 5;

  const params = useParams();

  const resolveUserId = () => {
    return props && props.userId ? props.userId : params.userId;
  }

  const [userId, setUserId] = useState<string | undefined | null>(resolveUserId());
  const thanksScrollableDivRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(0);
  const [user, setUser] = useState<UserResponse>();
  const [thanks, setThanks] = useState<ThanksResponse[]>([]);
  const [textThanks, setTextThanks] = useState<string>('');
  const [privacyType, setPrivacyType] = useState<PrivacyType>();
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [loadingPage, setLoadingPage] = useState<boolean>(true);
  const [loadingThanks, setLoadingThanks] = useState<boolean>(true);
  const [gettingMoreThanks, setGettingMoreThanks] = useState<boolean>(false);
  // This one is to prevent the "scroll" event from being triggered, in the end of the thanks list
  // if user does not have any more Thanks.
  const [hasMoreThanks, setHasMoreThanks] = useState<boolean>(true);
  const [showHurray, setShowHurray] = useState<boolean>(false);
  const [showConfirmationModal, setShowConfirmationModel] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const [thanksIdToDelete, setThanksIdToDelete] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language | undefined>(props?.language);
  const [imageCount, setImageCount] = useState<number>(0);
  const [userImageUrl, setUserImageUrl] = useState<string | null>('');
  const { enqueueSnackbar } = useSnackbar();

  const userService: UserService = new UserService();
  const thanksService: ThanksService = new ThanksService();
  const authService: AuthService = new AuthService();
  const translationService: TranslationService = new TranslationService();
  const storageService: StorageService = new StorageService();

  useEffect(() => {
    setPrivacyType(loadDefaultThanksPrivacy());
  }, []);

  useEffect(() => {
    setPage(0);
    setThanks([]);
    setTextThanks('');
    setLoadingPage(true);

    if (userId && userId !== null) {
      getThanks(userId, 0);
      checkIsFollowing(userId);
      getUser(userId);
    }
  }, [userId]);

  useEffect(() => {
    if (props && props.userId && props.userId !== null) {
      setUserId(props.userId);
    }
  }, [props?.userId]);

  useEffect(() => {
    if (userId && userId !== null && hasMoreThanks) {
      setGettingMoreThanks(true);
      setTimeout(() => {
        getThanks(userId, page);
      }, 1000);
    }
  }, [page]);

  useEffect(() => {
    if (props && props?.language !== language) {
      setLanguage(props.language);
    }
  }, [props?.language])

  const checkScroll = () => {
    const div = thanksScrollableDivRef.current;
    console.log("Scroll at:", div?.scrollHeight, "\nAnd client height:", div?.clientHeight, "\nAnd scrollTop + clientheight:", (div && (div?.scrollTop + div?.clientHeight)), "\nPage:", page, "\nLoading thanks:", loadingThanks)
    if (div !== null && !gettingMoreThanks) {
      const isAtBottom = div.scrollTop + div.clientHeight >= div.scrollHeight - 20;
      if (isAtBottom) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  const getThanks = async (userId: string, page: number) => {
    if (userId) {
      const size: number = PAGE_SIZE;
      await thanksService.getThanksFrom(userId, page, size)
        .then((resp) => {
          const respThanks: ThanksResponse[] = resp.data as ThanksResponse[];
          setThanks(prevThanks => [...prevThanks, ...respThanks]);
          setHasMoreThanks(respThanks.length === size);
        })
        .finally(() => {
          setGettingMoreThanks(false);
          setLoadingThanks(false);
        });
    }
  }

  const checkIsFollowing = async (userId: string) => {
    if (!isUserPage()) {
      await userService.isUserFollowingById(userId)
        .then((resp) => {
          const followResponse: FollowerResponse = resp.data as FollowerResponse;
          setIsFollowing(followResponse.isFollowing);
        });
    }
  }

  const getUser = async (userId: string) => {
    await userService.getUser(userId)
      .then((resp) => {
        const user: UserResponse = resp.data as UserResponse;
        setUser(user);
        setUserImageUrl(user.profilePictureUrl);
        setTimeout(() => {
          setLoadingPage(false);
        }, 500);
      });
  }

  const getUserId = (): string | undefined => {
    return authService.readUserIdFromToken();
  }

  const isUserPage = (): boolean => {
    return userId === getUserId();
  }

  const loadDefaultThanksPrivacy = (): PrivacyType => {
    return storageService.getDefaultThanksPrivacy();
  }

  const handleTextThanksChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextThanks(event.target.value);
  }

  const handlePrivacyTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPrivacyType(privacyTypeOf(event.target.value));
  }

  const handleGiveThanks = async (event: React.FormEvent) => {
    event.preventDefault();

    if (userId) {
      if (textThanks.length > 0) {
        setShowHurray(true);
        const thanksRequest: CreateThanksRequest = {
          receiverId: userId,
          text: textThanks,
          privacyType: privacyType!
        }
        await thanksService.giveThanksTo(thanksRequest)
          .then((resp) => {
            const thanksResponse: ThanksResponse = resp.data as ThanksResponse;
            setThanks(prevThanks => [thanksResponse, ...prevThanks]);
            setTextThanks("");
            if (user && user !== null) {
              const newUser: UserResponse = {
                id: user.id,
                name: user.name,
                handle: user.handle,
                numberOfThanks: user.numberOfThanks + 1,
                profilePictureUrl: user.profilePictureUrl,
                isOpenProfile: user.isOpenProfile
              }
              setUser(newUser);
            }
          })
          .catch(e => {
            const error: ErrorResponse = e.response.data as ErrorResponse;
            enqueueSnackbar(`Could not thank ${user?.name}`, { variant: 'error' });
            console.log("Error giving thanks:", error);
          })
          .finally(() => {
            setTimeout(() => {
              setShowHurray(false);
            }, 1500);
          })
      } else {
        enqueueSnackbar(`${translationService.getFor(TEXT_NOT_EMPTY)}`, { variant: 'error' })
      }
    }
  }

  const resolveTextAreaPlaceholder = (): string => {
    const chosenHint: string | undefined = isUserPage() ? translationService.getHint()
      : `${translationService.getHintOther()} ${user?.name}?`;

    return chosenHint ? chosenHint : "";
  }

  // This is so the ThanksCard's don't get re-rendered
  const handleThanksPrivacyChange = useCallback((thanksId: string, privacyType: PrivacyType) => {
    const changePrivacyOfThanks = async () => {
      await thanksService.changePrivacy(thanksId, privacyType)
        .then((resp) => {
          const language: Language = storageService.getLanguage()!!;
          const privacyChangedResponse: PrivacyChangeResponse = resp.data as PrivacyChangeResponse;
          const privacyChanged: boolean = privacyChangedResponse.hasChanged;
          const messageType = privacyChanged ? 'success' : 'error';
          const message: string | undefined = privacyChanged ? `${translationService.getForLanguage(CHANGED_PRIVACY_TYPE, language)}` : translationService.getFor(ERROR_CHANGE_PRIVACY_TYPE);
          enqueueSnackbar(`${message} ${privacyType}`, { variant: messageType });

          setThanks(currentThanksList =>
            currentThanksList.map(thanks => thanks.id === thanksId ? { ...thanks, ...{ privacyType: privacyType } } : thanks)
          )
        })
        .catch(() => enqueueSnackbar(`${translationService.getFor(ERROR_CHANGE_PRIVACY_TYPE)} ${privacyType}`, { variant: 'error' }));
    }
    changePrivacyOfThanks();
  }, []);

  const handleUserImageClick = useCallback((clickedUserId: string) => {
    setUserId(clickedUserId);
  }, []);

  const handleFollowClick = async () => {
    if (authService.readUserIdFromToken() !== userId && userId && userId !== null) {
      await userService.followUser(userId)
        .then((resp) => {
          const followResp: FollowerResponse = resp.data as FollowerResponse;
          setIsFollowing(followResp.isFollowing);
          if (followResp.isFollowing) {
            enqueueSnackbar(`${translationService.getFor(YOU_ARE_NOW_FOLLOWING)} ${user?.name}`, { variant: 'success' });
          }
        })
        .catch(() => enqueueSnackbar(`${translationService.getFor(ERROR_TRYING_TO_FOLLOW)} ${user?.name}`, { variant: 'error' }))
    }
  }

  const handleImageUpdated = (imageUrl: string) => {
    setImageCount(imageCount + 1);
    setUserImageUrl(imageUrl);
  }

  const handleClickedDelete = useCallback((thanksId: string) => {
    const message: string | undefined = translationService.getFor(ARE_YOU_SURE_TO_DELETE);
    setThanksIdToDelete(thanksId);
    setShowConfirmationModel(true);
    setModalMessage(message || "");
  }, []);

  const handleConfirmDelete = async () => {
    if (thanksIdToDelete !== null) {
      await thanksService.deleteById(thanksIdToDelete)
        .then((resp) => {
          console.log("Got response from delete thanks:", resp);
          const response: DeleteThanksResponse = resp.data as DeleteThanksResponse;

          if (response.deleted) {
            const deletedId: string = response.thanksId;
            setThanks(currThanks => currThanks.filter(thanks => thanks.id !== deletedId));
            if (user) {
              const updatedUser: UserResponse = {
                ...user,
                numberOfThanks: user.numberOfThanks - 1
              };
              setUser(updatedUser);
            }
          }
        })
        .finally(() => {
          hideDeleteModal();
        })
    }
  }

  const handleCancelDelete = () => {
    hideDeleteModal();
  }

  const hideDeleteModal = () => {
    setThanksIdToDelete(null);
    setShowConfirmationModel(false);
    setModalMessage('');
  }

  const resolveShowThanksForm = (): boolean => {
    return isUserPage() || user?.isOpenProfile || false;
  }

  if (loadingPage) {
    return (
      <div className="top-padding">
        <Loader size="massive" />
      </div>
    );
  }

  return (
    <div className='centerish-2 container top-padding'>
      <div className="left page-padding">
        <UserCard user={user} language={props?.language} onImageUpdated={handleImageUpdated} />
        {!isUserPage() && !isFollowing && <button onClick={handleFollowClick}>{translationService.getFor(FOLLOW)}</button>}
        <b className="thanker-color">{isFollowing && translationService.getFor(FOLLOWING)}</b>
        { resolveShowThanksForm() &&
          <form onSubmit={handleGiveThanks} className="thanks-form">
            <textarea
              name='textThanks'
              value={textThanks}
              onChange={handleTextThanksChange}
              className="thanks-text-box"
              placeholder={resolveTextAreaPlaceholder()}
            />
            <div className="privacy">
              <select value={privacyType} name='privacyType' onChange={handlePrivacyTypeChange} className="privacy privacy-select">
                {Object.values(PrivacyType).filter(type => typeof type === 'string').map(type => (
                  <option key={type} value={type}>{translationService.getFor(type)}</option>
                ))}
              </select>
              <img src={infoIcon} className="info-icon" />
            </div>
            <button type='submit' className="thanks-button">{translationService.getFor(THANK)}!</button>
          </form>
        }
      </div>
      <div className="right page-padding" ref={thanksScrollableDivRef} onScroll={checkScroll}>
        {!loadingPage && loadingThanks && <Loader size="big" />}
        <div className="absolute-center">
          {props.loadingUsers && <Loader size="big" />}
        </div>
        <div className="thanks-container">
          {getUniqueById(thanks).map(thanks => (
            <ThanksCard
              key={thanks.id}
              thanks={thanks}
              onPrivacyTypeChange={handleThanksPrivacyChange}
              onUserImageClick={handleUserImageClick}
              language={language}
              onClickedDelete={handleClickedDelete}
              imageCount={imageCount}
              userImageUrl={userImageUrl}
              pageUserId={userId}
            />
          ))}
          {thanks.length === 0 && page === 0 && <NoThanksCard language={language} isOpenProfile={user?.isOpenProfile!} />}
          <br />
          {gettingMoreThanks && <div className='centerish'><Loader size="small" /></div>}
        </div>
        <HurrayCard isVisible={showHurray} />
      </div>
      <div className="quote">
        <QuoteCard language={props?.language} pageUserId={userId} />
      </div>
      <Modal
        message={modalMessage}
        isVisible={showConfirmationModal}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        language={props?.language}
      />
    </div>
  );
};