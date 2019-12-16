import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    reposRequest: ['page'],
    reposRequestSuccess: ['repos', 'hasNext', 'nextPage'],
    reposRequestError: ['error']
})

const initialState = Immutable({
    repos: [],
    page: 0,
    hasNext: false,
    nextPage: -1,
    fetching: false,
    error: null
})

export const ReposTypes = Types
export default Creators

export const reposRequest = (state, { page }) =>  {
    return state.merge({ fetching: true, page: page })
}

export const reposRequestSuccess = (state, { repos, hasNext, nextPage }) => {
    return state.merge({ fetching: initialState.fetching, repos, hasNext, nextPage })
}

export const reposRequestError = (state, { error }) => {
    return state.merge({ fetching: initialState.fetching, error })
}

export const reducer = createReducer(initialState, {
    [Types.REPOS_REQUEST]: reposRequest,
    [Types.REPOS_REQUEST_SUCCESS]: reposRequestSuccess,
    [Types.REPOS_REQUEST_ERROR]: reposRequestError
})