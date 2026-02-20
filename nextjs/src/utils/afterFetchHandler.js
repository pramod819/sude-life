import { handleApiErrors } from './api-errors'

export function handleRequest(request) {
    return request
        .then(handleApiErrors)
        .then((response) => {
            // console.log('--------------response-------------------')
            // console.log(response)
            return response.json()
        })
        .then((json) => {
            // console.log('--------------response json-------------------')
            // console.log(json)
            return json
        })
        .catch((error) => {
            console.log('--------------error-------------------')
            console.log(error)
            throw error
        })
}
