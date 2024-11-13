/*
  .element


*/

import { z } from 'zod'

const stringArray = z.array(z.string())

// @ .element -> access the schema for an element of the array
stringArray.element // => string schema
