/*
  Datetimes
  - As you may have noticed, Zod string includes a few date/time related validations. These validations are regular expression based, so they are not as strict as a full date/time library. However, they are very convenient for validating user input.



*/

import { z } from 'zod'

// @ The z.string().datetime() method enforces ISO 8601 -> default is no timezone offsets and arbitrary sub-second decimal precision.
const datetime = z.string().datetime()

datetime.parse('2020-01-01T00:00:00Z') // pass
datetime.parse('2020-01-01T00:00:00.123Z') // pass
datetime.parse('2020-01-01T00:00:00.123456Z') // pass (arbitrary precision)
datetime.parse('2020-01-01T00:00:00+02:00') // fail (no offsets allowed)
