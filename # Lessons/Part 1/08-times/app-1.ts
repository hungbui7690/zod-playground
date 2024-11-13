/*
  Times



*/

import { z } from 'zod'

// @ The z.string().time() method validates strings in the format HH:MM:SS[.s+]. The second can include arbitrary decimal precision. It does not allow timezone offsets of any kind.
const time = z.string().time()

time.parse('00:00:00') // pass
time.parse('09:52:31') // pass
time.parse('23:59:59.9999999') // pass (arbitrary precision)

time.parse('00:00:00.123Z') // fail (no `Z` allowed)
time.parse('00:00:00.123+02:00') // fail (no offsets allowed)
