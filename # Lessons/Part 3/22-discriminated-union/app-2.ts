/*
  Discriminated unions



*/

import { z } from 'zod'

// same property -> status
const myUnion = z.discriminatedUnion('status', [
  z.object({ status: z.literal('success'), data: z.string() }),
  z.object({ status: z.literal('failed'), error: z.instanceof(Error) }),
])

myUnion.parse({ status: 'success', data: 'yippie ki yay' })
// myUnion.options // 🌲 You can extract a reference to the array of schemas with the .options property.
