import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    prRequest: ['repo', 'page'],
    prRequestSuccess: ['pullRequests', 'hasNext', 'nextPage'],
    prRequestError: ['error']
})

const initialState = Immutable({
    pullRequests: [],
    page: 0,
    hasNext: false,
    fetching: false,
    error: null
})

export const PRTypes = Types
export default Creators

export const prRequest = (state, {repo, page }) => {
    return state.merge({ fetching: true, page, repo })
}

export const prRequestSuccess = (state, { pullRequests, hasNext, nextPage }) => {
    return state.merge({ fetching: initialState.fetching, pullRequests, hasNext, nextPage })
}

export const prRequestError = (state, { error }) => {
    return state.merge({ fetching: initialState.fetching, error })
}

export const reducer = createReducer(initialState, {
    [Types.PR_REQUEST]: prRequest,
    [Types.PR_REQUEST_SUCCESS]: prRequestSuccess,
    [Types.PR_REQUEST_ERROR]: prRequestError
})
