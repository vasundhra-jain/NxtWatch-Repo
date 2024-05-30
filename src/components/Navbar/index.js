/* eslint-disable jsx-a11y/control-has-associated-label */
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import 'reactjs-popup/dist/index.css'
import {FiSun} from 'react-icons/fi'
import './index.css'
import {
  LogoutButton,
  NavbarContainer,
  Logo,
  ItemContainer,
  ConfirmButton,
  ModalContainer,
  ModalPara,
  ModeButton,
} from './styledComponent'
import SavedVideoContext from '../../Context/SavedVideoContext'

const Navbar = props => (
  <SavedVideoContext.Consumer>
    {value => {
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      const {changeMode, mode} = value
      const logo =
        mode === 'light'
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      console.log(mode)
      return (
        <NavbarContainer mode={mode}>
          <Link to="/">
            <Logo src={logo} alt="website logo" />
          </Link>
          <ItemContainer>
            <ModeButton type="button" onClick={changeMode} data-testid="theme">
              {mode === 'light' ? <FaMoon /> : <FiSun className="sun" />}
            </ModeButton>

            <Logo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutButton type="button" mode={mode}>
                  Logout
                </LogoutButton>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer mode={mode}>
                  <ModalPara mode={mode}>
                    Are you sure, you want to logout?
                  </ModalPara>
                  <div>
                    <LogoutButton
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                      mode={mode}
                    >
                      Cancel
                    </LogoutButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </div>
                </ModalContainer>
              )}
            </Popup>
          </ItemContainer>
        </NavbarContainer>
      )
    }}
  </SavedVideoContext.Consumer>
)

export default withRouter(Navbar)
