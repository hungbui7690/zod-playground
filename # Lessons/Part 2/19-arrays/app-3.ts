/*
  .nonempty


*/

import { z } from 'zod'

// @ .nonempty -> ensure array has a value
const nonEmptyStrings = z.string().array().nonempty({
  message: "Can't be empty!",
}) // [string, ...string[]]

nonEmptyStrings.parse([]) // Error: "Array must contain at least 1 element(s)"
nonEmptyStrings.parse(['Ariana Grande']) // passes
