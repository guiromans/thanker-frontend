import '../style/Hurray.css';
import raisedHands from '../../src/assets/images/raisedhands.png';
import handsTogether from '../../src/assets/images/handstogether.png';
import party from '../../src/assets/images/party.png';
import { useEffect, useState } from 'react';

export interface HurrayProps {
    isVisible: boolean;
}

export const HurrayCard = (props: HurrayProps) => {

    const images = [raisedHands, handsTogether, party];
    const [hide, setHide] = useState<boolean>(false);

    useEffect(() => {
        setHide(!props.isVisible);
    }, [props.isVisible])

    const pickImage = () => {
        const randomIndex: number = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    const resolveStyle = (): string => {
        return `hurray-overlay ${props.isVisible ? 'show' : ''}`;
    }

    const handleHurrayClick = () => {
        setHide(true);
    }

    return (
        <div className={resolveStyle()}>
            {props.isVisible && !hide && <img src={pickImage()} className='hurray-size' onClick={handleHurrayClick} />}
        </div>
    );

}