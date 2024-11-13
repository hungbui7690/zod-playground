/*
  Nullables


*/

import { z } from 'zod'

const nullableString = z.nullable(z.string())
const E = z.string().nullable() // @ alternative

nullableString.parse('asdf') // => "asdf"
nullableString.parse(null) // => null
