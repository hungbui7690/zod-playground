/*
  Coercion for primitives


*/

import { z } from 'zod'

const schema = z.coerce.string()
schema.parse('tuna') // => "tuna"
schema.parse(12) // => "12" -> coerced to string
schema.parse(true) // => "true"
schema.parse(undefined) // => "undefined"
schema.parse(null) // => "null"

// The returned schema is a normal ZodString instance so you can use all string methods.
z.coerce.string().email().min(5)
