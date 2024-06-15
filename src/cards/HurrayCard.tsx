import '../style/Hurray.css';
import raisedHands from '../../src/assets/images/raisedhands.png';
import handsTogether from '../../src/assets/images/handstogether.png';
import party from '../../src/assets/images/party.png';
import coolSmile from '../../src/assets/images/sunglasses.png';
import muscle from '../../src/assets/images/muscle.png';
import fine from '../../src/assets/images/fine.png';
import heartHands from '../../src/assets/images/heartHands.png';
import fingersLove from '../../src/assets/images/fingersLove.png';
import { useEffect, useState } from 'react';

export interface HurrayProps {
    isVisible: boolean;
}

export const HurrayCard = (props: HurrayProps) => {

    const images = [raisedHands, handsTogether, party, coolSmile, muscle, fine, heartHands, fingersLove];
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