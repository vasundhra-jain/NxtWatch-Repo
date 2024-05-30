import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {BiListPlus} from 'react-icons/bi'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import SavedVideoContext from '../../Context/SavedVideoContext'
import './index.css'
import {
  SavedContainer,
  ThumbnailImage,
  ThumbnailTitle,
  ThumbnailContentContainer,
  ThumbnailPara,
  NoVideoImage,
  NoVideoPara,
  NoVideoHeading,
  NoVideoContainer,
  NoVideoButton,
  ContentContainer,
  DetailedViewContainer,
  ThumbnailButton,
  SavePara,
  LikePara,
  UnLikePara,
  ThumbnailButtonContainer,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    itemsData: [],
    apiStatus: apiStatusConstants.initial,
    isSaved: false,
    isLiked: '',
  }

  componentDidMount() {
    this.getItemData()
  }

  getItemData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const video = fetchedData.video_details
      const updatedData = {
        id: video.id,
        title: video.title,
        videoUrl: video.video_url,
        thumbnailUrl: video.thumbnail_url,
        channel: video.channel,
        viewCount: video.view_count,
        publishedAt: video.published_at,
        description: video.description,
      }
      this.setState({
        itemsData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderItemView = () => (
    <SavedVideoContext.Consumer>
      {value => {
        const {itemsData, isSaved, isLiked} = this.state
        const {
          title,
          videoUrl,
          channel,
          viewCount,
          publishedAt,
          description,
        } = itemsData
        const {addVideoItem, mode} = value
        const saveVideo = () => {
          addVideoItem(itemsData)
          this.setState({isSaved: !isSaved})
        }
        const like = () => {
          this.setState({isLiked: true})
        }
        const unlike = () => {
          this.setState({isLiked: false})
        }
        const text = isSaved ? 'Saved' : 'Save'

        return (
          <ContentContainer mode={mode} data-testid="videoItemDetails">
            <DetailedViewContainer>
              <ReactPlayer
                url={videoUrl}
                controls
                width="100%"
                height="500px"
              />
              <ThumbnailTitle mode={mode}>{title}</ThumbnailTitle>
              <ThumbnailContentContainer>
                <ThumbnailContentContainer>
                  <ThumbnailPara>{viewCount} views</ThumbnailPara>
                  <ThumbnailPara>
                    {formatDistanceToNow(new Date(publishedAt))}
                  </ThumbnailPara>
                </ThumbnailContentContainer>
                <ThumbnailButtonContainer>
                  <ThumbnailButton type="button" onClick={like}>
                    <AiOutlineLike className={mode === like ? '' : 'dark '} />
                    <LikePara isLiked={isLiked}>Like</LikePara>
                  </ThumbnailButton>
                  <ThumbnailButton type="button" onClick={unlike}>
                    <AiOutlineDislike
                      className={mode === like ? '' : 'dark '}
                    />
                    <UnLikePara isLiked={isLiked}>Dislike</UnLikePara>
                  </ThumbnailButton>
                  <ThumbnailButton type="button" onClick={saveVideo}>
                    <BiListPlus className={mode === like ? '' : 'dark '} />
                    <SavePara isSaved={isSaved}>{text}</SavePara>
                  </ThumbnailButton>
                </ThumbnailButtonContainer>
              </ThumbnailContentContainer>
              <hr />
              <ThumbnailContentContainer>
                <ThumbnailImage
                  src={channel.profile_image_url}
                  alt="channel logo"
                />
                <div>
                  <ThumbnailTitle>{channel.name}</ThumbnailTitle>
                  <ThumbnailPara>
                    {channel.subscriber_count} subscribers
                  </ThumbnailPara>
                  <ThumbnailPara>{description}</ThumbnailPara>
                </div>
              </ThumbnailContentContainer>
            </DetailedViewContainer>
          </ContentContainer>
        )
      }}
    </SavedVideoContext.Consumer>
  )

  renderLoadingView = mode => (
    <ContentContainer mode={mode} data-testid="videoItemDetails">
      <NoVideoContainer data-testid="loader">
        <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
      </NoVideoContainer>
    </ContentContainer>
  )

  retry = () => {
    this.getItemData()
  }

  renderFailureView = mode => (
    <ContentContainer mode={mode} data-testid="videoItemDetails">
      <NoVideoContainer>
        <NoVideoImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure view"
        />
        <NoVideoHeading mode={mode}>Oops! Something Went Wrong</NoVideoHeading>
        <NoVideoPara>
          We are having some trouble to complete your request. Please try again.
        </NoVideoPara>
        <NoVideoButton type="button" onClick={this.retry}>
          Retry
        </NoVideoButton>
      </NoVideoContainer>
    </ContentContainer>
  )

  renderItems = () => (
    <SavedVideoContext.Consumer>
      {value => {
        const {apiStatus} = this.state
        const {mode} = value

        switch (apiStatus) {
          case apiStatusConstants.success:
            return this.renderItemView(mode)
          case apiStatusConstants.failure:
            return this.renderFailureView(mode)
          case apiStatusConstants.inProgress:
            return this.renderLoadingView(mode)
          default:
            return null
        }
      }}
    </SavedVideoContext.Consumer>
  )

  render() {
    return (
      <>
        <Navbar />
        <SavedContainer>
          <SideBar />
          {this.renderItems()}
        </SavedContainer>
      </>
    )
  }
}

export default Trending
