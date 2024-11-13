/*
  .catchall
  - You can pass a "catchall" schema into an object schema. All unknown keys will be validated against it.



*/

import { z } from 'zod'

const person = z
  .object({
    name: z.string(),
  })
  .catchall(z.number())

person.parse({
  name: 'bob dylan',
  validExtraKey: 61, // works fine
})

person.parse({
  name: 'bob dylan',
  validExtraKey: false, // fails
})
// => throws ZodError

// 🌲 Using .catchall() obviates .passthrough() , .strip() , or .strict(). All keys are now considered "known".
