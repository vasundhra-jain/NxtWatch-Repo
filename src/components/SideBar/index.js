import {Link} from 'react-router-dom'
import {MdHome} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {
  SidebarContainer,
  UnorderedList,
  ListItem,
  ListPara,
  ContactHeading,
  ContactImage,
  ContactUnorderedList,
  ContactContainer,
  ContactPara,
} from './styledComponent'
import './index.css'
import SavedVideoContext from '../../Context/SavedVideoContext'

const SideBar = () => (
  <SavedVideoContext.Consumer>
    {value => {
      const {mode} = value
      return (
        <SidebarContainer mode={mode}>
          <UnorderedList>
            <Link to="/" className="link-item">
              <ListItem>
                <MdHome className="sidebar-icon" />
                <ListPara mode={mode}>Home</ListPara>
              </ListItem>
            </Link>
            <Link to="/trending" className="link-item">
              <ListItem>
                <HiFire className="sidebar-icon" />
                <ListPara mode={mode}>Trending</ListPara>
              </ListItem>
            </Link>
            <Link to="/gaming" className="link-item">
              <ListItem>
                <SiYoutubegaming className="sidebar-icon" />
                <ListPara mode={mode}>Gaming</ListPara>
              </ListItem>
            </Link>
            <Link to="/saved-videos" className="link-item">
              <ListItem>
                <BiListPlus className="sidebar-icon" />
                <ListPara mode={mode}>Saved videos</ListPara>
              </ListItem>
            </Link>
          </UnorderedList>
          <ContactContainer>
            <ContactHeading mode={mode}>CONTACT US</ContactHeading>
            <ContactUnorderedList>
              <li>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </li>
              <li>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                  alt="twitter logo"
                />
              </li>
              <li>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                  alt="linked in logo"
                />
              </li>
            </ContactUnorderedList>
            <ContactPara mode={mode}>
              Enjoy! Now to see your channels and recommendations!
            </ContactPara>
          </ContactContainer>
        </SidebarContainer>
      )
    }}
  </SavedVideoContext.Consumer>
)

export default SideBar
