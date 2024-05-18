import { UserResponse } from "../model/UserModel";
import '../style/UserStyle.css';
import { resolveUserImage } from "../utils/UserUtils";

export interface UserProps {
    user: UserResponse;
    onClick: (user: UserResponse) => void;
    size: string;
}

export const UserItem: React.FC<UserProps> = ({ user, onClick, size }) => {

    const classResolver = (): string => {
        return `circle-thanks clickable ${size}`
    }

    return (
        <div className='custom-link user-item' onClick={() => onClick(user)}>
            <div className={classResolver()}>
                <img src={resolveUserImage(user)} />
            </div>
            <div>
                <div className="name-search">
                    {user.name}
                </div>
                <div className="handle-search">
                    {user.handle}
                </div>
            </div>
        </div>
    );

}