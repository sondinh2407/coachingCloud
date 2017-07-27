import startOfWeek from 'date-fns/start_of_week'
import addWeeks from 'date-fns/add_weeks'
import addDays from 'date-fns/add_days'
import format from 'date-fns/format'
const generateWeeks = (numWeeksBefore, numWeekAfter) => {
  const startDay = startOfWeek(new Date(), {weekStartsOn: 1})
  const result = {}
  const start = numWeeksBefore * (-1)
  const end = numWeekAfter + 1
  let i = start
  while (i < end) {
    let priv = format(addWeeks(startDay, i - 1), 'x')
    let next = format(addWeeks(startDay, i + 1), 'x')
    if (i === start) {
      priv = null
    }
    if (i === numWeekAfter) {
      next = null
    }
    const data = generateWeek(startDay, priv, next, i)
    result[data.key] = data.value
    i += 1
  }
  return result
}

function generateWeek(startDay, priv, next, offset) {
  
  const startDayOfWeek = addWeeks(startDay, offset)
  const days = generateDaysOfWeek(startDayOfWeek)
  return {
    key: format(startDayOfWeek, 'x'),
    value: {
      priv,
      next,
      days
    }
  }
}
export default generateWeeks
function generateDaysOfWeek(startDayOfWeek) {
  
  const data = []
  for (let j = 0; j < 7; j += 1) {
    const value = format(addDays(startDayOfWeek, j), 'x')
    data.push({
      value,
      id: value,
      am: Math.random() % 2 === 0,
      pm: Math.random() % 2 === 0,
    })
  }
  return data
}

