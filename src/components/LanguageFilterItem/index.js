import './index.css'

const LanguageFilterItem = props => {
  const {eachLanguage, changeRepo, isactive} = props
  const {id, language} = eachLanguage

  const onChangeLanguage = () => {
    changeRepo(id)
  }

  return (
    <li>
      {isactive ? (
        <button
          className="active-button"
          type="button"
          onClick={onChangeLanguage}
        >
          {language}
        </button>
      ) : (
        <button
          className="button-style"
          type="button"
          onClick={onChangeLanguage}
        >
          {language}
        </button>
      )}
    </li>
  )
}
export default LanguageFilterItem
