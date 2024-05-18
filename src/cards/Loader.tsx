import '../style/Loader.css';
import '../style/Styles.css';

export interface LoaderProps {
    size: string;
}

export const Loader = (props: LoaderProps) => {

    const resolveDivClasses = (): string => {
        return `loader ${props.size}`;
    }

    return (
        <div className="loader-container top-padding">
            <div className={resolveDivClasses()} />
        </div>
    );

}