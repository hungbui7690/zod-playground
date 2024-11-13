/*
  Tuples
  - A variadic ("rest") argument can be added with the .rest method.


*/

import { z } from 'zod'

const variadicTuple = z.tuple([z.string()]).rest(z.number())

const result = variadicTuple.parse(['hello', 1, 2, 3]) // => [string, ...number[]];
