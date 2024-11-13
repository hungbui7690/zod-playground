/*
  .strict


*/

import { z } from 'zod'

const person = z
  .object({
    name: z.string(),
  })
  .strict() // .strict - Fail for non-defined fields

person.parse({
  name: 'bob dylan',
  extraKey: 61,
})
// => throws ZodError
