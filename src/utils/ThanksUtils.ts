import { PrivacyType, ThanksResponse } from "../model/ThanksModel"

export const getUniqueById = (list: ThanksResponse[]): ThanksResponse[] => {
    const ids: Set<String> = new Set();
    const result: ThanksResponse[] = [];

    list.forEach(thanksElement => {
        if (!ids.has(thanksElement.id)) {
            ids.add(thanksElement.id);
            result.push(thanksElement);
        }
    });

    return result;
}

export const privacyTypeOf = (enumStr: string): PrivacyType => {
    const str: string = enumStr.trim().toUpperCase();
    let type: PrivacyType = PrivacyType.PRIVATE;

    switch (str) {
        case PrivacyType.PRIVATE.toString(): type = PrivacyType.PRIVATE; break;
        case PrivacyType.PUBLIC.toString(): type = PrivacyType.PUBLIC; break;
    }

    return type;
}