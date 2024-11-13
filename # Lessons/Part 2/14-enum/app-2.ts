/*
  Zod enums



*/

import { z } from 'zod'

const FishEnum = z.enum(['Salmon', 'Tuna', 'Trout'])
type FishEnum = z.infer<typeof FishEnum>

// .enum -> To get autocompletion with a Zod enum, use the .enum property of your schema
FishEnum.enum // { Salmon: 'Salmon', Tuna: 'Tuna', Trout: 'Trout' }
FishEnum.enum.Salmon // => autocompletes

// .options
FishEnum.options // ["Salmon", "Tuna", "Trout"]
