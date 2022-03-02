// https://gist.github.com/patik/c9e8d95dd5c35ae634d418a48b70d042
export const formatDollar = function(value: string): string {
    return '$' + (value)
    .split('').reverse().join('')
    .replace(/(...)/g, '$1,')
    .split('').reverse().join('')
    .replace(/^,/, '');
};
