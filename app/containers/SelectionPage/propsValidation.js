import {PropTypes} from 'react'

export const session = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  price: PropTypes.string
}

export const day = {
  value: PropTypes.instanceOf(Date).isRequired,
  am: PropTypes.bool.isRequired,
  pm: PropTypes.bool.isRequired,
}

export const selection = {
  sessionId: PropTypes.number,
  day: PropTypes.shape(day),
  time: PropTypes.number,
  timezone: PropTypes.string,
  selectedStep: PropTypes.number.isRequired
}
