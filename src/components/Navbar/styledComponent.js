import styled from 'styled-components'

export const NavbarContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props =>
    props.mode === 'light' ? '#ffffff' : '#181818'};
  height: 10vh;
`
export const ItemContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const Logo = styled.img`
  height: 25px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => (props.mode === 'light' ? '#313131' : '#ffffff')};
  border: 1px solid ${props => (props.mode === 'light' ? '#313131' : '#ffffff')};
  font-family: roboto;
  padding: 5px;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: 1px solid #3b82f6;
  font-family: roboto;
  padding: 5px;
  margin-left: 5px;
`
export const ModalContainer = styled.div`
  padding: 20px;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.mode === 'light' ? '#f9f9f9' : '#0f0f0f'};
`

export const ModalPara = styled.p`
  color: ${props => (props.mode === 'light' ? '#00306e' : '#ffffff')};
  font-weight: 450;
`
export const ModeButton = styled.button`
  background-color: transparent;
  border: 0px;
`
