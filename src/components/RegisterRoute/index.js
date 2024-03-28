import RegistrationContext from '../../context/RegistrationContext'

import {
  RegisterCont,
  Header,
  WebsiteLogo,
  DesCont,
  FormCont,
  RegisterImg,
  Form,
  Heading,
  InputCont,
  Label,
  InputEl,
  SelectEl,
  OptionEl,
  Button,
  Paragraph,
} from './styledComponents'

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

const RegisterRoute = props => (
  <RegistrationContext.Consumer>
    {value => {
      const {
        userName,
        userTopic,
        updateName,
        updateTopic,
        showError,
        updateErrorStatus,
        updateRegistrationStatus,
      } = value

      const onChangeInput = event => {
        updateName(event.target.value)
      }

      const onChangeTopic = event => {
        updateTopic(event.target.value)
      }

      const onSubmitForm = event => {
        event.preventDefault()
        const {history} = props

        if (userName === '') {
          updateErrorStatus()
        } else {
          const topic = topicsList.find(eachObj => userTopic === eachObj.id)
          updateRegistrationStatus(userName, topic.displayText)
          history.replace('/')
        }
      }

      return (
        <RegisterCont>
          <Header>
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </Header>
          <DesCont>
            <FormCont>
              <RegisterImg
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <Form onSubmit={onSubmitForm}>
                <Heading>Let us join</Heading>
                <InputCont>
                  <Label htmlFor="name">NAME</Label>
                  <InputEl
                    placeholder="Your name"
                    id="name"
                    type="input"
                    onChange={onChangeInput}
                    value={userName}
                  />
                </InputCont>
                <InputCont>
                  <Label htmlFor="topic">TOPICS</Label>
                  <SelectEl value={userTopic} onChange={onChangeTopic}>
                    {topicsList.map(eachObj => (
                      <OptionEl key={eachObj.id} value={eachObj.id}>
                        {eachObj.displayText}
                      </OptionEl>
                    ))}
                  </SelectEl>
                </InputCont>
                <Button type="submit">Register Now</Button>
                {showError && <Paragraph>Please enter your name</Paragraph>}
              </Form>
            </FormCont>
          </DesCont>
        </RegisterCont>
      )
    }}
  </RegistrationContext.Consumer>
)

export default RegisterRoute
