import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props =>
    props.mode === 'light' ? '#f9f9f9' : '#0f0f0f'};
`

export const FormContainer = styled.form`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 16px 4px rgba(7, 7, 7, 0.08);
  padding: 20px;
  height: 300px;
  width: 300px;
  background-color: ${props =>
    props.mode === 'light' ? '#f9f9f9' : '#000000'};
`
export const Logo = styled.img`
  height: 25px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 10px;
  line-height: 16px;
  color: ${props => (props.mode === 'light' ? '#64748b' : ' #ffffff')};
`
export const InputField = styled.input`
  font-size: 10px;
  height: 30px;
  border: 1px solid #64748b;
  background-color: transparent;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
  width: 260px;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 10px;
  color: #ffffff;
  height: 30px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  outline: none;
`
export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  font-size: 10px;
  margin-top: 4px;
  color: ${props => (props.mode === 'light' ? '7e858e' : ' #ffffff')};
`
export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
