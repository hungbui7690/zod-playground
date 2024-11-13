/*
  Date



*/

import { z } from 'zod'

// @ The z.string().date() method validates strings in the format YYYY-MM-DD.
const date = z.string().date()

date.parse('2020-01-01') // pass
date.parse('2020-1-1') // fail
date.parse('2020-01-32') // fail
