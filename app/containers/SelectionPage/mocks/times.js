import addMinutes from 'date-fns/add_minutes'

const generateTimes = () => {
  const startMorningTime = new Date(2012, 1, 29, 8, 0)
  const startNoonTime = new Date(2012, 1, 29, 13, 0)
  const morning = []
  const noon = []
  for (let i = 0; i < 9; i += 1) {
    morning.push(addMinutes(startMorningTime, i * 15).getTime())
  }
  for (let i = 0; i < 20; i += 1) {
    noon.push(addMinutes(startNoonTime, i * 15).getTime())
  }
  return {
    morning,
    noon
  }
}

export default generateTimes()
