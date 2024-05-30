import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
`

export const ContentContainer = styled.div`
  background-color: ${props =>
    props.mode === 'light' ? '#f9f9f9' : '#0f0f0f'};
  overflow: auto;
  max-height: 90vh;
  padding: 0px;
`

export const TrendingHeaderIconContainer = styled.div`
  background-color: ${props =>
    props.mode === 'light' ? '#e2e8f0' : ' #000000'};
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin-right: 5px;
  margin-left: 20px;
`

export const TrendingHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props =>
    props.mode === 'light' ? '#f1f1f1' : ' #212121'};
  width: 100%;
  padding: 20px;
`

export const TrendingHeaderHeading = styled.h1`
  font-size: 23px;
  font-family: roboto;

  color: ${props => (props.mode === 'light' ? '#181818' : ' #ffffff')};
`

export const ThumbnailUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 82vw;
  flex-wrap: wrap;
  list-style-type: none;
`

export const ThumbnailListItem = styled.div`
  width: 100%;
  list-style-type: none;
  display: flex;
  margin: 4px;
`

export const ThumbnailImage = styled.img`
  height: 130px;
`

export const ThumbnailMainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 5px;
`

export const ThumbnailContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ThumbnailTitle = styled.p`
  font-size: 16px;
  font-family: roboto;
  font-weight: 600;
  color: ${props => (props.mode === 'light' ? '#181818' : ' #ffffff')};
  margin: 4px;
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
  color: black;
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
