import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginContainer,
  FormContainer,
  Logo,
  InputLabel,
  InputField,
  InputContainer,
  LoginButton,
  CheckboxContainer,
  ErrorMessage,
} from './styledComponent'
import SavedVideoContext from '../../Context/SavedVideoContext'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    show: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  showPassword = () => {
    const {show} = this.state
    this.setState({show: !show})
  }

  renderPasswordField = mode => {
    const {password, show} = this.state
    const type = show ? 'text' : 'password'

    return (
      <>
        <InputLabel htmlFor="password" mode={mode}>
          PASSWORD
        </InputLabel>
        <InputField
          type={type}
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = mode => {
    const {username} = this.state

    return (
      <>
        <InputLabel htmlFor="username" mode={mode}>
          USERNAME
        </InputLabel>
        <InputField
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  renderForm = () => (
    <SavedVideoContext.Consumer>
      {value => {
        const {showSubmitError, errorMsg} = this.state
        const {mode} = value
        const logo =
          mode === 'light'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        return (
          <LoginContainer mode={mode}>
            <FormContainer onSubmit={this.submitForm} mode={mode}>
              <Logo
                mode={mode}
                src={logo}
                className="login-website-logo-desktop-img"
                alt="website logo"
              />
              <InputContainer>{this.renderUsernameField(mode)}</InputContainer>
              <InputContainer>{this.renderPasswordField(mode)}</InputContainer>
              <CheckboxContainer mode={mode}>
                <input
                  id="checkbox"
                  type="checkbox"
                  onChange={this.showPassword}
                />
                <label htmlFor="checkbox" mode={mode}>
                  Show Password
                </label>
              </CheckboxContainer>
              <LoginButton type="submit" className="login-button">
                Login
              </LoginButton>
              {showSubmitError && (
                <ErrorMessage className="error-message">
                  *{errorMsg}
                </ErrorMessage>
              )}
            </FormContainer>
          </LoginContainer>
        )
      }}
    </SavedVideoContext.Consumer>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return <>{this.renderForm()}</>
  }
}

export default LoginForm
