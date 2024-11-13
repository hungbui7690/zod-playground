/*
  Datetimes



*/

import { z } from 'zod'

// @ Timezone offsets can be allowed by setting the offset option to true.
const datetime = z.string().datetime({ offset: true })

datetime.parse('2020-01-01T00:00:00+02:00') // pass
datetime.parse('2020-01-01T00:00:00.123+02:00') // pass (millis optional)
datetime.parse('2020-01-01T00:00:00.123+0200') // pass (millis optional)
datetime.parse('2020-01-01T00:00:00.123+02') // pass (only offset hours)
datetime.parse('2020-01-01T00:00:00Z') // pass (Z still supported)
