import styled from 'styled-components'

export const SavedContainer = styled.div`
  display: flex;
`

export const ContentContainer = styled.div`
  background-color: ${props =>
    props.mode === 'light' ? '#f9f9f9' : '#0f0f0f'};
  overflow: auto;
  width: 100%;
  max-height: 90vh;
  padding: 0px;
`

export const DetailedViewContainer = styled.div`
  padding: 20px;
`

export const ThumbnailImage = styled.img`
  height: 50px;
`

export const ThumbnailContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ThumbnailTitle = styled.p`
  font-size: 13px;
  font-family: roboto;
  font-weight: 600;
  color: ${props => (props.mode === 'light' ? '#181818' : ' #ffffff')};
  margin-top: 10px;
`
export const ThumbnailPara = styled.p`
  color: #475569;
  font-family: roboto;
  font-size: 10px;
  padding: 0px;
  margin: 4px;
`
export const ThumbnailButtonContainer = styled.div`
  width: 200px;
  display: flex;
`

export const ThumbnailButton = styled.button`
  background-color: transparent;
  border: 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const LikePara = styled.p`
  color: ${props => (props.isLiked === true ? '#2563eb' : '#64748b')};
`
export const UnLikePara = styled.p`
  color: ${props => (props.isLiked === false ? '#2563eb' : '#64748b')};
`

export const SavePara = styled.p`
  color: ${props => (props.isSaved === true ? '#2563eb' : '#64748b')};
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
  font-size: 15px;
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
