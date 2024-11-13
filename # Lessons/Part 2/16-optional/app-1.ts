/*
  Optionals
  - You can make any schema optional with z.optional(). This wraps the schema in a ZodOptional instance and returns the result.


*/

import { z } from 'zod'

const schema1 = z.optional(z.string())
const schema2 = z.string().optional() // # alternative

schema1.parse(undefined) // => returns undefined
schema2.parse(undefined) // => returns undefined
type A = z.infer<typeof schema1> // string | undefined
