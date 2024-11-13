/*
  Numbers



*/

import { z } from 'zod'

// @ You can customize certain error messages when creating a number schema.
const age = z.number({
  required_error: 'Age is required',
  invalid_type_error: 'Age must be a number',
})

z.number().gt(5)
z.number().gte(5) // alias .min(5)
z.number().lt(5)
z.number().lte(5) // alias .max(5)

z.number().int() // value must be an integer

z.number().positive() //     > 0
z.number().nonnegative() //  >= 0
z.number().negative() //     < 0
z.number().nonpositive() //  <= 0

z.number().multipleOf(5) // Evenly divisible by 5. Alias .step(5)

z.number().finite() // value must be finite, not Infinity or -Infinity
z.number().safe() // value must be between Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER

z.number().lte(5, { message: 'this👏is👏too👏big' })
