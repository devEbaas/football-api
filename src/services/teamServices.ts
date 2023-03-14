import teamsData from './teams.json'
import { Team } from '../types'

const teams: Team[] = teamsData as Team[]

export const getEntries = (): Team[] => teams

export const addEntry = (): undefined => undefined
