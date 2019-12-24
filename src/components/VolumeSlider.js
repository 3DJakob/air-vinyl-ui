import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeDown, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

const containerStyle = {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center'
}

const iconStyle = {
  margin: 20
}

const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)'

const IOSSlider = withStyles({
  root: {
    color: '#FF8A68',
    height: 2,
    padding: '15px 0'
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus,&:hover,&$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow
      }
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 11px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000'
    }
  },
  track: {
    height: 2
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf'
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor'
  }
})(Slider)

function VolumeSlider ({ onVolume, volume }) {
  const [value, setValue] = React.useState(volume)

  const handleChange = (event, newValue) => {
    onVolume(newValue)
  }

  return (
    <div style={containerStyle}>
      <FontAwesomeIcon style={iconStyle} icon={faVolumeDown} color='#999' />
      <IOSSlider value={value} onChange={handleChange} aria-labelledby='continuous-slider' />
      <FontAwesomeIcon style={iconStyle} icon={faVolumeUp} color='#999' />
    </div>
  )
}

export default VolumeSlider