import {Component} from 'react'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import './index.css'
import {
  GamingContainer,
  ThumbnailImage,
  ThumbnailTitle,
  ThumbnailListItem,
  ThumbnailUnorderedList,
  ThumbnailPara,
  NoVideoImage,
  NoVideoPara,
  NoVideoHeading,
  NoVideoContainer,
  NoVideoButton,
  ThumbnailMainContentContainer,
  GamingHeaderContainer,
  ContentContainer,
  GamingHeaderHeading,
  GamingHeaderIconContainer,
} from './styledComponent'
import SavedVideoContext from '../../Context/SavedVideoContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const GamingVideoItem = props => {
  const {detail, mode} = props
  const {id, title, thumbnailUrl, viewCount} = detail
  return (
    <li>
      <Link to={`/videos/${id}`} className="link-item">
        <ThumbnailListItem>
          <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
          <ThumbnailMainContentContainer>
            <ThumbnailTitle mode={mode}>{title}</ThumbnailTitle>
            <ThumbnailPara>{viewCount} Watching Worldwide</ThumbnailPara>
          </ThumbnailMainContentContainer>
        </ThumbnailListItem>
      </Link>
    </li>
  )
}

class Gaming extends Component {
  state = {
    itemsData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getItemData()
  }

  getItemData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
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

  renderItemView = mode => {
    const {itemsData} = this.state

    return (
      <ContentContainer mode={mode} data-testid="gaming">
        <div>
          <GamingHeaderContainer mode={mode}>
            <GamingHeaderIconContainer mode={mode}>
              <SiYoutubegaming className="gaming-header-icon" />
            </GamingHeaderIconContainer>
            <GamingHeaderHeading>Gaming</GamingHeaderHeading>
          </GamingHeaderContainer>
          <ThumbnailUnorderedList>
            {itemsData.map(each => (
              <GamingVideoItem detail={each} key={each.id} mode={mode} />
            ))}
          </ThumbnailUnorderedList>
        </div>
      </ContentContainer>
    )
  }

  renderLoadingView = mode => (
    <ContentContainer mode={mode} data-testid="gaming">
      <NoVideoContainer data-testid="loader">
        <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
      </NoVideoContainer>
    </ContentContainer>
  )

  retry = () => {
    this.getItemData()
  }

  renderFailureView = mode => (
    <ContentContainer mode={mode} data-testid="gaming">
      <NoVideoContainer>
        <NoVideoImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure view"
        />
        <NoVideoHeading mode={mode}>Oops! Something Went Wrong</NoVideoHeading>
        <NoVideoPara>
          We are having some trouble processing your request. Please try again.
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
        <GamingContainer>
          <SideBar />
          {this.renderItems()}
        </GamingContainer>
      </>
    )
  }
}

export default Gaming
