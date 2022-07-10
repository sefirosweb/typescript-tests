import { Weather } from './enum'

export interface DiaryEntry {
  id: number
  name: string
  date: string
  weather: Weather
}

// Selecciona los datos a devolver
export type PickData = Pick<DiaryEntry, 'id', 'date', 'weather'>

// Omite datos
export type NonSensistiveDataDiaryEntry = Omit<DiaryEntry, 'name'>

// Extender la interfaz
export interface SpecialDiaryEntry extends DiaryEntry {
  flightNumber: number
}

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
