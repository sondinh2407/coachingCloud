import {PropTypes} from 'react'

export const session = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  price: PropTypes.string
}

export const week = {
  priv: PropTypes.string,
  next: PropTypes.string,
  days: PropTypes.arrayOf(PropTypes.shape(day)).isRequired
}

export const day = {
  id: PropTypes.string,
  value: PropTypes.string,
  am: PropTypes.bool,
  pm: PropTypes.bool,
}

export const selection = {
  sessionId: PropTypes.number,
  day: PropTypes.number,
  time: PropTypes.number,
  timezone: PropTypes.string,
  selectedStep: PropTypes.number.isRequired
}
