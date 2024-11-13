/*
  Date



*/

import { z } from 'zod'

z.date().safeParse(new Date()) // success: true
z.date().safeParse('2022-01-12T00:00:00.000Z') // success: false

const myDateSchema = z.date({
  required_error: 'Please select a date and time',
  invalid_type_error: "That's not a date!",
})

z.date().min(new Date('1900-01-01'), { message: 'Too old' })
z.date().max(new Date(), { message: 'Too young!' })
