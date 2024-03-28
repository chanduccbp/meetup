import RegistrationContext from '../../context/RegistrationContext'

import {
  HomeCont,
  Header,
  WebsiteLogo,
  DesCont,
  Heading,
  Paragraph,
  LinkItem,
  Button,
  MeetupImg,
} from './styledComponents'

const HomeRoute = () => (
  <RegistrationContext.Consumer>
    {value => {
      const {homeTitle, homeDescription, isRegistered} = value

      return (
        <HomeCont>
          <Header>
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </Header>
          <DesCont>
            <Heading isRegistered={isRegistered}>{homeTitle}</Heading>
            <Paragraph isRegistered={isRegistered}>{homeDescription}</Paragraph>
            {isRegistered === false && (
              <LinkItem to="/register">
                <Button type="button">Register</Button>
              </LinkItem>
            )}
            <MeetupImg
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </DesCont>
        </HomeCont>
      )
    }}
  </RegistrationContext.Consumer>
)

export default HomeRoute
