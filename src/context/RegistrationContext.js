import React from 'react'

const RegistrationContext = React.createContext({
  homeTitle: '',
  homeDescription: '',
  isRegistered: '',
  userName: '',
  userTopic: '',
  showError: '',
  updateName: () => {},
  updateTopic: () => {},
  updateErrorStatus: () => {},
  updateRegistrationStatus: () => {},
})

export default RegistrationContext
