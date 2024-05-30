import {formatDistanceToNow} from 'date-fns'
import {BiListPlus} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import './index.css'
import {
  SavedContainer,
  ThumbnailImage,
  ThumbnailTitle,
  ThumbnailContentContainer,
  ThumbnailListItem,
  ThumbnailUnorderedList,
  ThumbnailPara,
  ThumbnailMainContentContainer,
  SavedHeaderContainer,
  ContentContainer,
  SavedHeaderHeading,
  SavedHeaderIconContainer,
  NoVideoContainer,
  NoVideoHeading,
  NoVideoPara,
  NoVideoImage,
} from './styledComponents'
import SavedVideoContext from '../../Context/SavedVideoContext'

const SavedVideoItem = props => {
  const {detail, mode} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = detail
  return (
    <li>
      <Link to={`/videos/${id}`} className="link-item">
        <ThumbnailListItem>
          <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
          <ThumbnailMainContentContainer>
            <ThumbnailTitle mode={mode}>{title}</ThumbnailTitle>
            <ThumbnailPara>{channel.name}</ThumbnailPara>
            <ThumbnailContentContainer>
              <ThumbnailPara>{viewCount} views</ThumbnailPara>
              <ThumbnailPara>
                {formatDistanceToNow(new Date(publishedAt))}
              </ThumbnailPara>
            </ThumbnailContentContainer>
          </ThumbnailMainContentContainer>
        </ThumbnailListItem>
      </Link>
    </li>
  )
}

const SavedVideos = () => (
  <SavedVideoContext.Consumer>
    {value => {
      const {savedVideoList, mode} = value
      const isEmpty = savedVideoList.length === 0

      return (
        <>
          <Navbar />
          <SavedContainer>
            <SideBar />
            <ContentContainer mode={mode} data-testid="savedVideos">
              {isEmpty ? (
                <NoVideoContainer>
                  <NoVideoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoVideoHeading mode={mode}>
                    No saved Videos found
                  </NoVideoHeading>
                  <NoVideoPara mode={mode}>
                    You can save your videos while watching them
                  </NoVideoPara>
                </NoVideoContainer>
              ) : (
                <div>
                  <SavedHeaderContainer mode={mode}>
                    <SavedHeaderIconContainer mode={mode}>
                      <BiListPlus className="saved-header-icon" />
                    </SavedHeaderIconContainer>
                    <SavedHeaderHeading mode={mode}>
                      Saved Videos
                    </SavedHeaderHeading>
                  </SavedHeaderContainer>
                  <ThumbnailUnorderedList>
                    {savedVideoList.map(each => (
                      <SavedVideoItem detail={each} key={each.id} mode={mode} />
                    ))}
                  </ThumbnailUnorderedList>
                </div>
              )}
            </ContentContainer>
          </SavedContainer>
        </>
      )
    }}
  </SavedVideoContext.Consumer>
)

export default SavedVideos
