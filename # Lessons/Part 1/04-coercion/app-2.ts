/*
  How coercion works
  - All primitive types support coercion. 
  - Zod coerces all inputs using the built-in constructors: String(input), Number(input), new Date(input), etc.



*/

import { z } from 'zod'

z.coerce.string() // String(input)
z.coerce.number() // Number(input)
z.coerce.boolean() // Boolean(input)
z.coerce.bigint() // BigInt(input)
z.coerce.date() // new Date(input)

// @ Note — Boolean coercion with z.coerce.boolean() may not work how you expect. Any truthy value is coerced to true, and any falsy value is coerced to false.
const schema = z.coerce.boolean() // Boolean(input)

schema.parse('tuna') // => true
schema.parse('true') // => true
schema.parse('false') // => true
schema.parse(1) // => true
schema.parse([]) // => true

schema.parse(0) // => false
schema.parse('') // => false
schema.parse(undefined) // => false
schema.parse(null) // => false
