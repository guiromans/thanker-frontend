export const validatePasswordRules = (password: string): boolean => {
    return password.length >= 8 && containsSpecialChars(password);
}

const containsSpecialChars = (password: string): boolean => {
    const specialChars: string [] = ["!", "?", ".", "-", "(", ")", "/", "&", "$", "#", "@", "\\", "&", "«",
        "»", "_", ";", ":", "{", "}", "%", "\"", "*"];

    return specialChars.some(char => password.includes(char));
}