import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    issuesRequest: ['repo','page'],
    issuesRequestSuccess: ['issues', 'hasNext', 'nextPage'],
    issuesRequestError: ['error']
})

const initialState = Immutable({
    issues: [],
    page: 0,
    hasNext: false,
    fetching: false,
    error: null
})

export const IssuesTypes = Types
export default Creators

export const issuesRequest = (state, { repo, page }) => {
    return state.merge({ fetching: true, page, repo })
}

export const issuesRequestSuccess = (state, { issues, hasNext, nextPage }) => {
    return state.merge({ fetching: initialState.fetching, issues, hasNext, nextPage })

}
export const issuesRequestError = (state, { error }) => {
    return state.merge({ fetching: initialState.fetching, error })
}

export const reducer = createReducer(initialState, {
    [Types.ISSUES_REQUEST]: issuesRequest,
    [Types.ISSUES_REQUEST_SUCCESS]: issuesRequestSuccess,
    [Types.ISSUES_REQUEST_ERROR]: issuesRequestError
})
