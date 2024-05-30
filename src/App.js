import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import SavedVideos from './components/SavedVideos'
import ItemDetailedView from './components/ItemDetailedView'
import SavedVideoContext from './Context/SavedVideoContext'

// Replace your code here
class App extends Component {
  state = {savedVideoList: [], mode: 'light'}

  addVideoItem = itemsData => {
    const {savedVideoList} = this.state
    const videoObject = savedVideoList.find(
      eachItem => eachItem.id === itemsData.id,
    )
    if (videoObject === undefined) {
      this.setState({savedVideoList: [...savedVideoList, itemsData]})
    } else {
      const updatedList = savedVideoList.filter(
        eachItem => eachItem.id !== itemsData.id,
      )
      this.setState({savedVideoList: updatedList})
    }
  }

  changeMode = () => {
    const {mode} = this.state
    if (mode === 'light') {
      this.setState({mode: 'dark'})
    } else {
      this.setState({mode: 'light'})
    }
  }

  render() {
    const {savedVideoList, mode} = this.state
    return (
      <SavedVideoContext.Provider
        value={{
          mode,
          savedVideoList,
          addVideoItem: this.addVideoItem,
          changeMode: this.changeMode,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={ItemDetailedView}
          />
          <Route component={NotFound} />
        </Switch>
      </SavedVideoContext.Provider>
    )
  }
}

export default App
