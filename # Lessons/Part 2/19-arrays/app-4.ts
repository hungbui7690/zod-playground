/*
  .min/.max/.length


*/

import { z } from 'zod'

z.string().array().min(5) // must contain 5 or more items
z.string().array().max(5) // must contain 5 or fewer items
z.string().array().length(5) // must contain 5 items exactly
