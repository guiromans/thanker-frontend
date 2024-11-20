import React, { ReactNode } from "react";
import '../style/AiPro.css';
import { isMobile } from "react-device-detect";

export interface SectionProps {
    title?: string
    text?: string
    children?: ReactNode
}

export const AiProSection: React.FC<SectionProps> = (props: SectionProps) => {

    const resolveSectionClasses = (): string => {
        return `ai-pro-title-section ai-pro-title-section-${isMobile ? "mobile" : "desktop"}`;
    }

    const resolveTextClasses = (): string => {
        return `ai-pro-text ai-pro-text-${isMobile ? "mobile" : "desktop"}`;
    }

    return (
        <div className="ai-pro-section">
            <div className={resolveSectionClasses()}>
                {props.title && props.title}
            </div>
            <div className={resolveTextClasses()}>
                {props.text && props.text}
            </div>
            <div>{props.children && props.children}</div>
        </div>
    )

}