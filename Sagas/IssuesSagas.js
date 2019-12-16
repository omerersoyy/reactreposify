import {call, put} from 'redux-saga/effects'
import IssuesActions from './../Redux/Issues'

const R = require('ramda')

export function* issuesRequest (api, {repo, page}) {

  const response = page ? yield call(api.getIssuesAtPage, repo, page) : yield call(api.getIssues, repo)

  // success?
  if (response.ok) {
    const issues = R.pathOr(null, ['data'], response)
    const link = R.pathOr(null, ['headers', 'link'], response)
    let hasNext = false
    let nextPage = 1

    if(link && link.indexOf('next') > -1) {
      hasNext = true
      nextPage = page + 1
    }
    yield put(IssuesActions.issuesRequestSuccess(issues, hasNext, nextPage))
  } else {
    yield put(IssuesActions.issuesRequestError(''))
  }
}