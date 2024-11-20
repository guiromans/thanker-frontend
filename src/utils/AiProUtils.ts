import { isMobile } from "react-device-detect";

export const resolveMainContainerClasses = (mode: string): string => {
    return `page-ai-pro page-ai-pro-${mode} ${isMobile ? "" : "top-padding"} page-ai-pro-${isMobile ? "mobile" : ""}`;
}

export const resolveContainerClass = (): string => {
    return `ai-container ai-container-${isMobile ? "mobile" : "desktop"}`;
}

export const resolveTitleClasses = (): string => {
    return `ai-pro-title ai-pro-title-${isMobile ? "mobile" : "desktop"}`;
}

export const resolveSubTitleClasses = (): string => {
    return `ai-pro-sub-title ai-pro-sub-title-${isMobile ? "mobile" : "desktop"}`;
}

export const resolveTopPadding = (): string => {
    return `top-padding${isMobile ? "" : "-higher"}`;
}