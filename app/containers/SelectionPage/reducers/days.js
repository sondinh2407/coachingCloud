import {fromJS} from 'immutable'
const daysInitial = fromJS(
  [
    {
      id: 1,
      day: '3 July, 2017',
      am: false,
      pm: true
    },
    {
      id: 2,
      day: '4 July, 2017',
      am: true,
      pm: true
    },
    {
      id: 3,
      day: '5 July, 2017',
      am: false,
      pm: false
    },
    {
      id: 4,
      day: '6 July, 2017',
      am: true,
      pm: true
    },
    {
      id: 5,
      day: '7 July, 2017',
      am: true,
      pm: true
    },
    {
      id: 6,
      day: '8 July, 2017',
      am: true,
      pm: true
    },
    {
      id: 7,
      day: '9 July, 2017',
      am: true,
      pm: true
    }
  ]
)

export default function days(state = daysInitial, action) {
  switch (action.type) {
    default:
      return state
  }
}