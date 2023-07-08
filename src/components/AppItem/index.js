// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl} = appDetails
  return (
    <li className="app-container">
      <div className="each-app">
        <img src={imageUrl} className="app-image" alt={appName} key={appId} />
        <p className="app-desc">{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
