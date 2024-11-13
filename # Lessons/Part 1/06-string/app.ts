/*
  Strings
  - Zod includes a handful of string-specific validations.



*/

import { z } from 'zod'

// @ validations
z.string().min(5, { message: 'Must be 5 or more characters long' }) // custom message
z.string().max(5, { message: 'Must be 5 or fewer characters long' })
z.string().length(5)
z.string().email()
z.string().url()
z.string().emoji()
z.string().uuid()
z.string().nanoid()
z.string().cuid()
z.string().cuid2()
z.string().ulid()
z.string().regex(/test/g)
z.string().includes('string')
z.string().startsWith('string')
z.string().endsWith('string')
z.string().datetime() // ISO 8601; by default only `Z` timezone allowed
z.string().ip() // defaults to allow both IPv4 and IPv6

// transforms
z.string().trim() // trim whitespace
z.string().toLowerCase() // toLowerCase
z.string().toUpperCase() // toUpperCase

// added in Zod 3.23
z.string().date() // ISO date format (YYYY-MM-DD)
z.string().time() // ISO time format (HH:mm:ss[.SSSSSS])
z.string().duration() // ISO 8601 duration
z.string().base64()

// @ custom error messages
const name = z.string({
  required_error: 'Name is required',
  invalid_type_error: 'Name must be a string',
})

type Name = z.infer<typeof name>

name.parse(12)
