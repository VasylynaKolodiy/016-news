export const getHeaders = (token) => {
  let headers = {'Authorization': `Token ${token}`}
  return {headers}
}

export const convertNumber = (num) => {
  if (num < 1000) {return num}
  if (num > 999 && num < 1000000) {return Math.floor(num/1000) + 'k'}
  if (num > 999999 && num < 1000000000) {return Math.floor(num/1000000) + 'm'}
  return num
}

