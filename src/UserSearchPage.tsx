import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Language, SEARCH_FOLLOWING_HINT, TranslationService } from "./services/TranslationService";
import { UserResponse } from "./model/UserModel";
import { UserService } from "./services/UserService";
import { AxiosResponse } from "axios";
import './style/Following.css';
import './style/Styles.css';
import { getUniqueById } from "./utils/UserUtils";
import { UserItem } from "./cards/UserItem";
import { Loader } from "./cards/Loader";
import { NoFollowingCard } from "./cards/NoFollowingCard";
import { isMobile } from "react-device-detect";

export interface UserSearchProps {
    language: Language | undefined;
    onClick(user: UserResponse): void;
}

export const UserSearchPage = (props: UserSearchProps) => {

    const translationService: TranslationService = new TranslationService();
    const userService: UserService = new UserService();

    const [query, setQuery] = useState<string>("");
    const [page, setPage] = useState<number>(0);
    const [users, setUsers] = useState<UserResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [usersLoading, setUsersLoading] = useState<boolean>(false);
    const [canLoadMoreFollowing, setCanLoadMoreFollowing] = useState<boolean>(true);
    const [noneFollowing, setNoneFollowing] = useState<boolean>(false);
    const scrollableDivRef = useRef<HTMLDivElement>(null);

    const PAGE_SIZE: number = isMobile ? 20 : 10;
    
    useEffect(() => {
        searchUsers();
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    useEffect(() => {
        searchUsers();
    }, [query, page]);

    useEffect(() => {
        setUsers([]);
        setPage(0);
    }, [query]);

    const checkScroll = () => {
        const div = scrollableDivRef.current;
        if (div !== null) {
          const isAtBottom = div.scrollTop + div.clientHeight >= div.scrollHeight - 2;
          if (isAtBottom && !usersLoading && canLoadMoreFollowing) {
            setPage((prevPage) => prevPage + 1);
          }
        }
      };

    const searchUsers = () => {
        if (isMobile) {
            setUsersLoading(true);
            const searchMethod = query.length > 0 ? searchByName : searchPaged;
            callSearch(searchMethod);
        }
    }

    const callSearch = async(searchMethod:() => Promise<AxiosResponse>) => {
        setUsersLoading(true);
        await searchMethod()
            .then((resp) => {
                const respUsers: UserResponse[] = resp.data as UserResponse[];
                if (respUsers.length > 0) {
                    setUsers([...users, ...respUsers]);
                } else {
                    setCanLoadMoreFollowing(false);
                }
                setNoneFollowing(users.length === 0 && respUsers.length === 0 && page === 0 && query.trim() === "");
            })
            .finally(() => setUsersLoading(false));
    }

    const searchPaged = async(): Promise<AxiosResponse> => {
        return await userService.searchPagedFollowingUsers(page, PAGE_SIZE);
    }

    const searchByName = async(): Promise<AxiosResponse> => {
        return await userService.searchFollowingUsersByName(query, page, PAGE_SIZE);
    }

    const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    const handleUserClick = (user: UserResponse) => {
        props.onClick(user);
    }

    if (loading) {
        return (
            <div className="top-padding">
                <Loader size="massive" />
            </div>
        )
    }

    return (
        <div className="following-container top-padding-following">
            <div className="search-container">
                <input className="search-following"
                    type="text" 
                    value={query}
                    placeholder={translationService.getFor(SEARCH_FOLLOWING_HINT)}
                    onChange={handleQueryChange}
                />
            </div>
            <div className="users-container" ref={scrollableDivRef} onScroll={checkScroll}>
                <div className="user-items">
                    {getUniqueById(users).map(user =>(
                        <UserItem 
                        key={user.id} 
                        user={user} 
                        onClick={(user) => handleUserClick(user)} size="page-size" />
                    ))}
                </div>
                <div className="loader-confirmations">
                    {usersLoading && <Loader size="big" />}
                </div>
                { noneFollowing &&
                    <NoFollowingCard language={props.language} />
                }
            </div>
        </div>
    );

}