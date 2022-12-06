export const getHeaders = (token) => {
  let headers
  if ({token}) headers = {'Authorization': `Token ${token}`}
  return {headers}
}