import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15vw;
  height: 90vh;
  background-color: ${props =>
    props.mode === 'light' ? '#ffffff' : '#181818'};
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 10px;
`
export const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const ListPara = styled.p`
  margin-left: 10px;
  color: ${props => (props.mode === 'light' ? '#313131' : '#ffffff')};
  font-size: 13px;
  font-family: roboto;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 12px;
  font-family: roboto;
  width: 15vw;
`

export const ContactHeading = styled.p`
  font-size: 12px;
  color: ${props => (props.mode === 'light' ? 'black' : '#ffffff')};
`
export const ContactImage = styled.img`
  height: 20px;
  margin: 5px;
`

export const ContactUnorderedList = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  list-style-type: none;
`
export const ContactPara = styled.p`
  font-size: 12px;
  color: ${props => (props.mode === 'light' ? 'black' : '#ffffff')};
`
