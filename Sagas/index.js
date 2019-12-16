import { ReposTypes } from './../Redux/Repos'
import { PRTypes } from './../Redux/PullRequests'
import {IssuesTypes} from './../Redux/Issues'
import Service from './../Api/Service'
import { reposRequest, reposRequestSuccess, reposRequestError } from './../Sagas/RepoSagas'
import { prRequest, prRequestSuccess, prRequestError } from './../Sagas/PRSagas'
import {issuesRequest, issuesRequestSuccess, issuesRequestError} from './../Sagas/IssuesSagas'
import { all, takeLatest } from 'redux-saga/effects'

const api = Service.createApi();


export default function* root() {
    yield all([
        takeLatest(ReposTypes.REPOS_REQUEST, reposRequest, api),
        //takeLatest(ReposTypes.REPOS_REQUEST_SUCCESS, reposRequestSuccess),
        //takeLatest(ReposTypes.REPOS_REQUEST_ERROR, reposRequestError),

        takeLatest(PRTypes.PR_REQUEST, prRequest, api),
        //takeLatest(PRTypes.PR_REQUEST_SUCCESS, prRequestSuccess),
        //takeLatest(PRTypes.PR_REQUEST_ERROR, prRequestError),

        takeLatest(IssuesTypes.ISSUES_REQUEST, issuesRequest, api),
        //takeLatest(IssuesTypes.ISSUES_REQUEST_SUCCESS, issuesRequestSuccess),
        //takeLatest(IssuesTypes.ISSUES_REQUEST_ERROR, issuesRequestError)
    ])
}