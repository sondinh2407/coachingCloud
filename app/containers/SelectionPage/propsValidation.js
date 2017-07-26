import {PropTypes} from 'react'

export const session = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  price: PropTypes.string
}

export const day = {}

export const selection = {
  sessionId: PropTypes.number,
  day: PropTypes.number,
  time: PropTypes.number,
  timezone: PropTypes.string,
  selectedStep: PropTypes.number.isRequired
}
