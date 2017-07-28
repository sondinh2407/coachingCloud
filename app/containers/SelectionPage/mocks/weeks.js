import startOfWeek from 'date-fns/start_of_week'
import addWeeks from 'date-fns/add_weeks'
import addDays from 'date-fns/add_days'
import isBefore from 'date-fns/is_before'
import isToday from 'date-fns/is_today'

const generateWeeks = (numWeek) => {
  let result = []
  const startDay = startOfWeek(new Date(), {weekStartsOn: 1})
  for (let i = 0; i < numWeek; i += 1) {
    const startDayOfWeek = addWeeks(startDay, i)
    result = result.concat(generateDaysOfWeek(startDayOfWeek))
  }
  return result
}

function generateDaysOfWeek(startDayOfWeek) {
  const data = []
  for (let j = 0; j < 7; j += 1) {
    const value = addDays(startDayOfWeek, j)
    let am = Math.random() > 0.5
    let pm = Math.random() < 0.5
    if (isBefore(value, new Date() && !isToday(value))) {
      am = false
      pm = false
    }
    data.push({
      value,
      am,
      pm
    })
  }
  return data
}

export default generateWeeks(5)
