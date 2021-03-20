import React from 'react'

import Scrollbars from 'react-custom-scrollbars'

export const CustomScrollbars = ({ style, children, ...rest }) => {
  const trackStyle = {
    backgroundColor: '#E7E7E7',
    height: '100%',
    width: '2px',
    borderRadius: '2px',
    right: 0,
  }
  const thumbStyle = {
    backgroundColor: '#41522E',
    width: '2px',
    borderRadius: '2px',
    right: 0,
  }
  return (
    <Scrollbars
      hideTracksWhenNotNeeded
      style={style}
      {...rest}
      renderTrackVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            ...trackStyle,
          }}
        />
      )}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            ...thumbStyle,
          }}
        />
      )}
    >
      {children}
    </Scrollbars>
  )
}
