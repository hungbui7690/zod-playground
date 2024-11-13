/*
  Others


*/

import { z } from 'zod'

// nan
const isNaN = z.nan({
  required_error: 'isNaN is required',
  invalid_type_error: "isNaN must be 'not a number'",
})

// boolean
const isActive = z.boolean({
  required_error: 'isActive is required',
  invalid_type_error: 'isActive must be a boolean',
})
