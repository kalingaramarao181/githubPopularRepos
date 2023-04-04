import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {reposData: [], language: 'ALL', isactive: false, isLoading: true}

  componentDidMount() {
    this.onFilterRepos()
  }

  onFilterRepos = async () => {
    const {language} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${language}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    if (response.ok === true) {
      const repoData = data.popular_repos.map(eachData => ({
        id: eachData.id,
        name: eachData.name,
        issuesCount: eachData.issues_count,
        forksCount: eachData.forks_count,
        starsCount: eachData.stars_count,
        avatarUrl: eachData.avatar_url,
      }))
      this.setState({reposData: repoData, isLoading: false})
    }
  }

  changeLanguage = id => {
    this.setState(
      {language: id, isactive: true, isLoading: true},
      this.onFilterRepos,
    )
  }

  render() {
    const {reposData, isactive, isLoading} = this.state

    console.log(reposData)
    return (
      <div className="main-cont">
        <h1 className="popular">Popular</h1>
        <ul className="buttons-cont">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              eachLanguage={eachLanguage}
              key={eachLanguage.id}
              isactive={isactive}
              changeRepo={this.changeLanguage}
            />
          ))}
        </ul>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="all-repos-cont">
            {reposData.map(eachRepos => (
              <RepositoryItem
                filteredLanguage={eachRepos}
                key={eachRepos.name}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
