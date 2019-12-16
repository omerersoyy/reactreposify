import Config from './ApiConfig'
import { create } from 'apisauce'

const createApi = () => {
    
    const {repos, issuesAndPulls, baseUrl} = Config

    const api = create({
        baseURL: baseUrl,
        headers: { Accept: 'application/vnd.github.v3+json' },
        timeout: 10000
    })
    
    
    const getAllRepos = () =>  api.get(repos)

    const getAllReposAtPage = (page) => api.get(`${repos}?page=${page}`)
    
    const getRepoById = (repo)  => api.get(`${repos}/${repo}`)

    const getPullRequestsAtPage = (repo, page) => api.get(`${issuesAndPulls}/${repo}/pulls?page=${page}`)

    const getIssuesAtPage = (repo, page) => api.get(`${issuesAndPulls}/${repo}/issues?page=${page}`)

    
    
    return {
        api,
        getAllRepos,
        getAllReposAtPage,
        getRepoById,
        getPullRequestsAtPage,
        getIssuesAtPage
    }
}

export default {
    createApi
} 