export const toDateString = (date: Date): string => {
    return new Date(date.toString()).toDateString();
}

export const toTimeString = (date: Date): string => {
    return new Date(date.toString()).toLocaleTimeString().substring(0, 5);
}

export const toDateAndTimeString = (date: Date): string => {
    return `${toDateString(date)} @ ${toTimeString(date)}`; 
}