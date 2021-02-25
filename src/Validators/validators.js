export const requiredField = (value) => {
    if (value) return undefined;
    return 'Field is required';
}
export const minLength = length => value => {
    if (value.length >= length) return undefined;
    return `Minimal length is ${length}`;
}
