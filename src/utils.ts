import { Weather } from './enum'
import { NewDiaryEntry } from './types'

const parseName = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Nombre no correcto')
  }
  return commentFromRequest
}

const isString = (text: any): boolean => {
  if (typeof text === 'string' || text instanceof String) {
    return true
  }
  return false
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Fecha no correcta')
  }
  return dateFromRequest
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !Object.values(Weather).includes(weatherFromRequest)) {
    throw new Error('No es un weather correcto')
  }

  return weatherFromRequest
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    name: parseName(object.name),
    date: parseDate(object.date),
    weather: parseWeather(object.weather)
  }

  return newEntry
}

export default toNewDiaryEntry
