import {fromJS} from 'immutable'
const sessionsInitial = fromJS(
  [
    {
      id: 1,
      title: 'Check in Call',
      description: '15 minute Zoom Call',
      price: '$250'
    },
    {
      id: 2,
      title: 'Chemistry Session',
      description: '1 hour Zoom Call'
    },
    {
      id: 3,
      title: 'Coaching Session',
      description: '2 hour Zoom Call',
      price: '$180'
    },
    {
      id: 4,
      title: 'Contracting Session',
      description: '30 minute Face to Face Meeting'
    },
    {
      id: 5,
      title: 'Vision Session',
      description: '2 hour Face to Face Meeting',
      price: '$220'
    },
    {
      id: 6,
      title: 'Incubator Phase 1',
      description: '15 minute Zoom Call'
    },
    {
      id: 7,
      title: 'Incubator Phase 2',
      description: '2 hour Zoom Call',
      price: '$120'
    },
    {
      id: 8,
      title: 'Incubator Phase 3',
      description: '15 minute Zoom Call'
    },
    {
      id: 9,
      title: 'Incubator Phase 4',
      description: '15 minute Zoom Call',
      price: '$300'
    },
    {
      id: 10,
      title: 'Incubator Phase 5',
      description: '30 minute Face to Face Meeting'
    }
  ]
)

export default function sessions(state = sessionsInitial, action) {
  switch (action.type) {
    default:
      return state
  }
}
