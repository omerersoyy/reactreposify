import {call, put} from 'redux-saga/effects'
import PRActions from './../Redux/PullRequests'

const R = require('ramda')

export function* prRequest (api, {repo, page}) {

  const response = page ? yield call(api.getPullRequestsAtPage, repo, page) : yield call(api.getAllPullRequests, repo)

  // success?
  if (response.ok) {
    const pullRequests = R.pathOr(null, ['data'], response)
    const link = R.pathOr(null, ['headers', 'link'], response)
    let hasNext = false
    let nextPage

    if(link && link.indexOf('next') > -1) {
      hasNext = true
      nextPage = page + 1
    }
    yield put(PRActions.prRequestSuccess(pullRequests, hasNext, nextPage))
  } else {
    yield put(PRActions.prRequestError(''))
  }
}