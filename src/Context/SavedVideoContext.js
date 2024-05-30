import React from 'react'

const SavedVideoContext = React.createContext({
  mode: 'light',
  savedVideoList: [],
  addVideoItem: () => {},
  changeMode: () => {},
})

export default SavedVideoContext
