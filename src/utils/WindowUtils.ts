export const newWindowOf = (path: string) => {
    const url: string = `${window.location.origin}/#/${path}`;
    window.open(url, "_blank"); 
}