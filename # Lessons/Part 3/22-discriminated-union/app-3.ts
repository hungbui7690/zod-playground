/*
  Discriminated unions



*/

import { z } from 'zod'

const A = z.discriminatedUnion('status', [
  z.object({ status: z.literal('active') }),
  z.object({ status: z.literal('inactive') }),
])
const B = z.discriminatedUnion('status', [
  z.object({ status: z.literal('active') }),
])

// To merge two or more discriminated unions, use .options with destructuring.
const AB = z.discriminatedUnion('status', [...A.options, ...B.options])
