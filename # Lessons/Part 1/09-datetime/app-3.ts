/*
  Datetimes



*/

import { z } from 'zod'

// @ You can additionally constrain the allowable precision. By default, arbitrary sub-second precision is supported (but optional).
const datetime = z.string().datetime({ precision: 3 })

datetime.parse('2020-01-01T00:00:00.123Z') // pass
datetime.parse('2020-01-01T00:00:00Z') // fail
datetime.parse('2020-01-01T00:00:00.123456Z') // fail
