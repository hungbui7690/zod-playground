/*
  Times



*/

import { z } from 'zod'

// @ You can set the precision option to constrain the allowable decimal precision.
const time = z.string().time({ precision: 3 })

time.parse('00:00:00.123') // pass
time.parse('00:00:00.123456') // fail
time.parse('00:00:00') // fail
