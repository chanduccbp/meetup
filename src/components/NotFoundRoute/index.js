import {NfCont, NfImg, Heading, Paragraph} from './styledComponents'

const NotFoundRoute = () => (
  <NfCont>
    <NfImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Paragraph>
      We are sorry, the page you requested could not be found.
    </Paragraph>
  </NfCont>
)

export default NotFoundRoute
