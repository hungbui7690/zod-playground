/*
  Unions
  - Zod includes a built-in z.union method for composing "OR" types.



*/

import { z } from 'zod'

const stringOrNumber = z.union([z.string(), z.number()])

stringOrNumber.parse('foo') // passes
stringOrNumber.parse(14) // passes

const stringOrNumberX = z.string().or(z.number())
