import '../style/Styles.css';
import '../style/SettingLabel.css';

export interface SettingLabelProps {
    icon: string;
    text: string;
    onClick: () => void;
}

export const SettingLabel: React.FC<SettingLabelProps> = (props: SettingLabelProps) => {

    const handleLabelClick = () => {
        props.onClick();
    }

    return (
        <div className="setting-label-container" onClick={handleLabelClick}>
            <img className='setting-label-image' src={props.icon} alt="Icon Setting Label Thanker" />
            <label>{props.text}</label>
        </div>
    )

}