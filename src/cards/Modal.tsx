import { Language, NO, TranslationService, YES } from '../services/TranslationService';
import '../style/Modal.css';

export interface ModalProps {
    isVisible: boolean;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
    language: Language | undefined;
}

export const Modal = (props: ModalProps) => {

    const translationService: TranslationService = new TranslationService();

    if (!props.isVisible) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <p>{props.message}</p>
                <button onClick={props.onConfirm}>{translationService.getFor(YES)}</button>
                <button onClick={props.onCancel}>{translationService.getFor(NO)}</button>
            </div>
        </div>
    )

}