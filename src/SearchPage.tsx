import { ChangeEvent, useEffect, useRef, useState } from "react"
import { UserService } from "./services/UserService";
import { UserResponse } from "./model/UserModel";
import { ErrorResponse } from "./model/ErrorResponse";
import { getUniqueById } from "./utils/UserUtils";
import { UserItem } from "./cards/UserItem";
import { Language, SEARCH_USERS_HINT, TranslationService } from "./services/TranslationService";

export interface SearchProps {
    onClick: (userId: string) => void;
    language: Language | undefined;
    onLoading: (isLoading: boolean) => void;
}

export const SearchPage = (props: SearchProps) => {
    const searchProps: SearchProps = props;

    const [query, setQuery] = useState<string>('');
    const [users, setUsers] = useState<UserResponse[]>([]);
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);
    const [isGettingUsers, setIsGettingUsers] = useState<boolean>(false);
    const [canGetMoreUsers, setCanGetMoreUsers] = useState<boolean>(true);

    const resultsDivRef = useRef<HTMLDivElement>(null);

    const userService: UserService = new UserService();
    const translationService: TranslationService = new TranslationService();

    useEffect(() => {
        setUsers([]);
        setPage(0);
        searchUsers();
    }, [query]);

    useEffect(() => {
        searchUsers();
    }, [page]);

    const checkScroll = () => {
        const div = resultsDivRef.current;
        if (div !== null && !isGettingUsers && canGetMoreUsers) {
          const isAtBottom = div.scrollTop + div.clientHeight >= div.scrollHeight -5;
          if (isAtBottom) {
            setTimeout(() => {
                setPage((prevPage) => prevPage + 1);
            }, 1000);
          }
        }
      };

    const searchUsers = async() => {
        setIsGettingUsers(true);
        props.onLoading(true);
        if (query.length === 0) {
            setUsers([]);
            setIsGettingUsers(false);
        } else {
            await userService.searchUsers(query, page)
            .then((resp) => {
                const respUsers: UserResponse[] = resp.data as UserResponse[];
                setUsers(prevUsers => [...prevUsers, ...respUsers]);
                setCanGetMoreUsers(respUsers.length > 0);
            })
            .catch((e) => {
                const err: ErrorResponse = e.response.data as ErrorResponse;
            })
            .finally(() => {
                setIsGettingUsers(false);
                props.onLoading(false);
            });
        }
    }

    const handleChangedQuery = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    const handleUserClick = (user: UserResponse) => {
        searchProps.onClick(user.id);
        setQuery('');
    }

    const handleSearchFocus = () => {
        setHasFocus(true);
    }

    const handleSearchBlur = () => {
        setTimeout(() => {
            setHasFocus(false);
        }, 200);
    }

    return (
        <div>
            <input 
                type='text' 
                name='query' 
                value={query} 
                onChange={handleChangedQuery}
                placeholder={`${translationService.getFor(SEARCH_USERS_HINT)} 🔍`}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                autoComplete="off"
            /><br/>
            {query.length > 0 && hasFocus && users.length > 0 && (
                <div ref={resultsDivRef} className='overlay search-box search-box-height' onScroll={checkScroll}>
                    {getUniqueById(users).map(user =>
                        <UserItem key={user.id} user={user} onClick={(user) => handleUserClick(user)} size="user-search-size" />
                    )}
                </div>
                )
            }
        </div>
    )
}