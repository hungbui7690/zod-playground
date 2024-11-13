/*
  Arrays


*/

import { z } from 'zod'

// .nonempty -> ensure array has a value
const arrSchema = z.string().array().nonempty()
type arr = z.infer<typeof arrSchema> // [string, ...string[]]

arrSchema.parse([]) // throws: "Array cannot be empty"
arrSchema.parse(['a']) // passes
