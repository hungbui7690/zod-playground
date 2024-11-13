/*
  Date



*/

import { z } from 'zod'

const dateSchema = z.coerce.date()
type DateSchema = z.infer<typeof dateSchema> // Date

/* valid dates */
console.log(dateSchema.safeParse('2023-01-10T00:00:00.000Z').success) // true
console.log(dateSchema.safeParse('2023-01-10').success) // true
console.log(dateSchema.safeParse('1/10/23').success) // true
console.log(dateSchema.safeParse(new Date('1/10/23')).success) // true

/* invalid dates */
console.log(dateSchema.safeParse('2023-13-10').success) // false - month 13 doesn't exist
console.log(dateSchema.safeParse('0000-00-00').success) // false
