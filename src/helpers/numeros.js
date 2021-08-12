export function onlyNumber (num) {
  return typeof num === 'string'
    ? num.replace(/[^0-9]+/g, '')
    : undefined
}
