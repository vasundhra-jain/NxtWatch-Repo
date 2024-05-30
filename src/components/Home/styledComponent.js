import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
`

export const PremiumContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 30vh;
  width: 82vw;
  margin-top: 35px;
  padding: 10px;
`

export const PremiumLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CloseButton = styled.div`
  background-color: transparent;
  border: 0px;
`

export const Logo = styled.img`
  height: 30px;
`
export const PremiumPara = styled.p`
  font-family: roboto;
  font-size: 15px;
  line-height: 1.5;
`

export const PremiumButton = styled.button`
  background-color: transparent;
  padding: 6px;
  margin-top: 10px;
`
export const ContentContainer = styled.div`
  background-color: ${props =>
    props.mode === 'light' ? '#f9f9f9' : '#181818'};
  padding: 20px;
  overflow: auto;
  max-height: 90vh;
`

export const SearchContainer = styled.div`
  border: 1px solid #616e7c;
  background-color: ${props =>
    props.mode === 'light' ? '#ffffff' : '#0f0f0f'};
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SearchInput = styled.input`
  border: 0px;
  width: 280px;
  padding: 3px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.mode === 'light' ? 'black' : '#ffffff')};
`
export const SearchButton = styled.button`
  background-color: ${props =>
    props.mode === 'light' ? '#f9f9f9' : '#606060'};
  width: 70px;
  padding: 3px;
  border: 0px;
  border-left: 1px solid #616e7c;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ThumbnailUnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
`

export const ThumbnailListItem = styled.li`
  width: 250px;
  list-style-type: none;
  margin: 4px;
`

export const ThumbnailImage = styled.img`
  height: 130px;
  width: 100%;
`

export const ThumbnailContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ChannelProfile = styled.img`
  height: 40px;
  margin: 5px;
`

export const ThumbnailTitle = styled.p`
  font-size: 10px;
  font-family: roboto;
  color: ${props => (props.mode === 'light' ? 'black' : '#ffffff')};
`
export const ThumbnailPara = styled.p`
  color: #616e7c;
  font-family: roboto;
  font-size: 10px;
  padding: 0px;
  margin: 4px;
`
export const NoVideoContainer = styled.div`
  height: 90vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoVideoHeading = styled.h1`
  font-size: 20px;
  color: ${props => (props.mode === 'light' ? 'black' : '#ffffff')};
  font-family: roboto;
`

export const NoVideoPara = styled.p`
  font-size: 12px;
  color: #616e7c;
  font-family: roboto;
`

export const NoVideoImage = styled.img`
  height: 200px;
`
export const NoVideoButton = styled.button`
  background-color: #4f46e5;
  font-family: roboto;
  color: #ffffff;
  padding: 8px;
  width: 100px;
  border: 0px;
  border-radius: 5px;
`
