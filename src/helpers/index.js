export const getHeaders = (token) => {
  let headers = {'Authorization': `Token ${token}`}
  return {headers}
}