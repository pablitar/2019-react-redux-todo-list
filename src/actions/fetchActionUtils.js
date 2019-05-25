import _ from "lodash"
export function fetchConstants(prefix) {
  return {
    "loading": prefix + "_LOADING",
    "ok": prefix + "_OK",
    "error": prefix + "_ERROR"
  }
}

export function fetchStateFrom(fetchActionConstants, fetchAction, state) {
  const key = _.findKey(fetchActionConstants, value => value === fetchAction.type);
  return key ? key : state;
}

const jsonBody = body => ({
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})

export const postWithJSONBody = body => ({
  method: 'POST',
  ...jsonBody(body)
})

export const deleteRequest = () => ({
  method: 'DELETE'
})

export const putRequestWithJSONBody = body => ({
  method: 'PUT',
  ...jsonBody(body)
})