/*
  .strict
  - By default Zod object schemas strip out unrecognized keys during parsing. 
  - You can disallow unknown keys with .strict()
  - If there are any unknown keys in the input, Zod will throw an error.


-------------------

  .strip
  - You can use the .strip method to reset an object schema to the default behavior (stripping unrecognized keys).


*/

import { z } from 'zod'

const person = z
  .object({
    name: z.string(),
  })
  .strict()

person.parse({
  name: 'bob dylan',
  extraKey: 61,
}) // => throws ZodError
