export const getHeaders = (token) => {
  let headers = {'Authorization': `Token ${token}`}
  return {headers}
}

export const convertNumber = (num) => {
  if (num < 1000) {return num}
  if (num > 999 && num < 1000000) {
    return `${(num / 1000).toFixed(1).replace(/\.0$/, "")}K`
  }
  if (num > 999999 && num < 1000000000) {
    return  `${(num / 1000000).toFixed(1).replace(/\.0$/, "")}M`
  }
  return num
}

