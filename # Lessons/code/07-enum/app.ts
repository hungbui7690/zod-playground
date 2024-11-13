/*
  Enum



*/

import { z } from 'zod'

// @ Zod Enum
const FishEnum = z.enum(['Salmon', 'Tuna', 'Trout'])

type FishEnum = z.infer<typeof FishEnum>
// 'Salmon' | 'Tuna' | 'Trout'

// Doesn't work without `as const` since it has to be read only
const VALUES = ['Salmon', 'Tuna', 'Trout'] as const
const fishEnum = z.enum(VALUES)

fishEnum.enum.Salmon // => autocompletes

// @ TS Enum
enum Fruits {
  Apple,
  Banana,
}
const FruitEnum = z.nativeEnum(Fruits)
