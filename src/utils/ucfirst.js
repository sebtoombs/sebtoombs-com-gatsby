const ucfirst = (string) => {
    if(!string) return null
    if(string.length < 2) return string.toUpperCase();

    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.substring(1);
}
export default ucfirst