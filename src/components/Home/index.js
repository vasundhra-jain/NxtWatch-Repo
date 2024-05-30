/* eslint-disable jsx-a11y/control-has-associated-label */
import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoIosClose, IoMdSearch} from 'react-icons/io'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import './index.css'
import {
  HomeContainer,
  PremiumContainer,
  Logo,
  PremiumPara,
  PremiumButton,
  PremiumLogoContainer,
  CloseButton,
  ContentContainer,
  SearchInput,
  SearchContainer,
  SearchButton,
  ThumbnailImage,
  ChannelProfile,
  ThumbnailTitle,
  ThumbnailContentContainer,
  ThumbnailListItem,
  ThumbnailUnorderedList,
  ThumbnailPara,
  NoVideoImage,
  ItemsContainer,
  NoVideoPara,
  NoVideoHeading,
  NoVideoContainer,
  NoVideoButton,
} from './styledComponent'
import SavedVideoContext from '../../Context/SavedVideoContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const HomeVideoItem = props => {
  const {detail, mode} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = detail

  return (
    <ThumbnailListItem>
      <Link to={`/videos/${id}`} className="link-item">
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <ThumbnailContentContainer>
          <ChannelProfile src={channel.profile_image_url} alt="channel logo" />
          <div>
            <ThumbnailTitle mode={mode}>{title}</ThumbnailTitle>
            <ThumbnailPara>{channel.name}</ThumbnailPara>
            <ThumbnailContentContainer>
              <ThumbnailPara>{viewCount} views</ThumbnailPara>
              <ThumbnailPara>
                {formatDistanceToNow(new Date(publishedAt))}
              </ThumbnailPara>
            </ThumbnailContentContainer>
          </div>
        </ThumbnailContentContainer>
      </Link>
    </ThumbnailListItem>
  )
}

class Home extends Component {
  state = {
    showPremiumContainer: true,
    itemsData: [],
    apiStatus: apiStatusConstants.initial,
    search: '',
  }

  componentDidMount() {
    this.getItemData()
  }

  getItemData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {search} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
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
        channel: each.channel,
        viewCount: each.view_count,
        publishedAt: each.published_at,
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

  changeSearchInput = event => {
    this.setState({search: event.target.value})
  }

  renderSearchInput = () => {
    this.getItemData()
  }

  closeContainer = () => {
    this.setState({showPremiumContainer: false})
  }

  renderItemView = mode => {
    const {itemsData} = this.state
    const isEmpty = itemsData.length === 0

    return (
      <ItemsContainer>
        {isEmpty ? (
          <NoVideoContainer>
            <NoVideoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideoHeading mode={mode}>No Search results found</NoVideoHeading>
            <NoVideoPara>
              Try different key words or remove search filter
            </NoVideoPara>
            <NoVideoButton type="button" onClick={this.renderSearchInput}>
              Retry
            </NoVideoButton>
          </NoVideoContainer>
        ) : (
          <ThumbnailUnorderedList>
            {itemsData.map(each => (
              <HomeVideoItem detail={each} key={each.id} mode={mode} />
            ))}
          </ThumbnailUnorderedList>
        )}
      </ItemsContainer>
    )
  }

  renderLoadingView = () => (
    <NoVideoContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </NoVideoContainer>
  )

  renderFailureView = mode => (
    <NoVideoContainer>
      <NoVideoImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <NoVideoHeading mode={mode}>Oops! Something Went Wrong</NoVideoHeading>
      <NoVideoPara>
        We are having some trouble processing your request. Please try again.
      </NoVideoPara>
      <NoVideoButton type="button" onClick={this.renderSearchInput}>
        Retry
      </NoVideoButton>
    </NoVideoContainer>
  )

  renderItems = mode => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderItemView(mode)
      case apiStatusConstants.failure:
        return this.renderFailureView(mode)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderBeforeItems = () => (
    <SavedVideoContext.Consumer>
      {value => {
        const {search} = this.state
        const {mode} = value
        return (
          <ContentContainer mode={mode} data-testid="home">
            <SearchContainer mode={mode}>
              <SearchInput
                type="search"
                onChange={this.changeSearchInput}
                value={search}
                mode={mode}
              />
              <SearchButton
                data-testid="searchButton"
                type="button"
                mode={mode}
                onClick={this.renderSearchInput}
              >
                <IoMdSearch className={mode === 'light' ? '' : 'dark-mode'} />
              </SearchButton>
            </SearchContainer>
            {this.renderItems(mode)}
          </ContentContainer>
        )
      }}
    </SavedVideoContext.Consumer>
  )

  render() {
    const {showPremiumContainer} = this.state
    return (
      <>
        <Navbar />
        <HomeContainer>
          <SideBar />
          <div>
            {showPremiumContainer ? (
              <PremiumContainer data-testid="banner">
                <PremiumLogoContainer>
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                  <CloseButton
                    type="button"
                    data-testid="close"
                    onClick={this.closeContainer}
                  >
                    <IoIosClose />
                  </CloseButton>
                </PremiumLogoContainer>
                <PremiumPara>
                  Buy Nxt Watch Premium prepaid plans with <br />
                  UPI
                </PremiumPara>
                <PremiumButton type="button">GET IT NOW</PremiumButton>
              </PremiumContainer>
            ) : null}

            {this.renderBeforeItems()}
          </div>
        </HomeContainer>
      </>
    )
  }
}

export default Home
