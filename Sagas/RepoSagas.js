import {call, put, select} from 'redux-saga/effects'
import ReposActions from './../Redux/Repos'

const R = require('ramda')

export function* reposRequest (api, {page}) {

  console.log(page)  
  const response = page ? yield call(api.getAllReposAtPage, page) : yield call(api.getAllRepos)

  // success?
  if (response.ok) {
    const repos = R.pathOr(null, ['data'], response)
    const link = R.pathOr(null, ['headers', 'link'], response)
    let hasNext = false
    let nextPage

    if(link && link.indexOf('next') > -1) {
      hasNext = true
      nextPage = page + 1
    }
    yield put(ReposActions.reposRequestSuccess(repos, hasNext, nextPage))
  } else {
    yield put(ReposActions.reposRequestError(error))
  }
}