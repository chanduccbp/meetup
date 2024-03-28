import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeCont = styled.div`
  height: 100vh;
`
export const Header = styled.nav`
  height: 10vh;
  padding: 20px;
`
export const WebsiteLogo = styled.img`
  width: 10%;
`
export const DesCont = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'roboto';
`
export const Heading = styled.h1`
  color: ${props => (props.isRegistered ? ' #2563eb' : '#334155')};
`
export const Paragraph = styled.p`
  font-weight: ${props => (props.isRegistered ? 'bold' : 'normal')};
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const Button = styled.button`
  border-radius: 5px;
  color: #ffffff;
  background-color: #3b82f6;
  padding: 10px;
  height: 35px;
  border-style: none;
`
export const MeetupImg = styled.img`
  width: 40%;
`
