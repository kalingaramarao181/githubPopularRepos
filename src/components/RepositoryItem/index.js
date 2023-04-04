import {Component} from 'react'

import './index.css'

class RepositoryItem extends Component {
  render() {
    const {filteredLanguage} = this.props
    const {
      name,
      starsCount,
      forksCount,
      issuesCount,
      avatarUrl,
    } = filteredLanguage
    return (
      <li className="each-repo">
        <h1 className="repo-name">{name}</h1>

        <img src={avatarUrl} alt={name} className="avatar-image" />

        <div className="logo-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="image-style"
          />
          <p>{starsCount} count</p>
        </div>
        <div className="logo-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="image-style"
          />
          <p>{forksCount} count</p>
        </div>
        <div className="logo-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="image-style"
          />
          <p>{issuesCount} count</p>
        </div>
      </li>
    )
  }
}
export default RepositoryItem
