/*
  Tuples
  - Unlike arrays, tuples have a fixed number of elements and each element can have a different type.


*/

import { z } from 'zod'

const athleteSchema = z.tuple([
  z.string(),
  z.number(),
  z.object({
    pointsScored: z.number(),
  }),
])

type Athlete = z.infer<typeof athleteSchema> // type Athlete = [string, number, { pointsScored: number }]
