import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import RegistrationContext from './context/RegistrationContext'
import HomeRoute from './components/HomeRoute'
import RegisterRoute from './components/RegisterRoute'
import NotFoundRoute from './components/NotFoundRoute'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    homeTitle: 'Welcome to Meetup',
    homeDescription: 'Please register for the topic',
    isRegistered: false,
    userName: '',
    userTopic: topicsList[0].id,
    showError: false,
  }

  updateName = name => {
    this.setState({userName: name})
  }

  updateTopic = id => {
    this.setState({userTopic: id})
  }

  updateErrorStatus = () => {
    this.setState({showError: true})
  }

  updateRegistrationStatus = (name, topic) => {
    this.setState({
      showError: false,
      isRegistered: true,
      homeTitle: `Hello ${name}`,
      homeDescription: `Welcome to ${topic}`,
    })
  }

  render() {
    const {
      homeTitle,
      homeDescription,
      isRegistered,
      userName,
      userTopic,
      showError,
    } = this.state

    return (
      <RegistrationContext.Provider
        value={{
          homeTitle,
          homeDescription,
          isRegistered,
          userName,
          userTopic,
          showError,
          updateName: this.updateName,
          updateTopic: this.updateTopic,
          updateErrorStatus: this.updateErrorStatus,
          updateRegistrationStatus: this.updateRegistrationStatus,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/register" component={RegisterRoute} />
          <Route component={NotFoundRoute} />
        </Switch>
      </RegistrationContext.Provider>
    )
  }
}

export default App
