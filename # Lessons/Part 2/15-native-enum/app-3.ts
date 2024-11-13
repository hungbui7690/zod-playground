/*
  Native enums
  - Const enums
    -> The .nativeEnum() function works for as const objects as well. ⚠️ as const requires TypeScript 3.4+!


*/

import { z } from 'zod'

const Fruits = {
  Apple: 'apple',
  Banana: 'banana',
  Cantaloupe: 3,
} as const

const FruitEnum = z.nativeEnum(Fruits)
type FruitEnum = z.infer<typeof FruitEnum> // "apple" | "banana" | 3

FruitEnum.parse('apple') // passes
FruitEnum.parse('banana') // passes
FruitEnum.parse(3) // passes
FruitEnum.parse('Cantaloupe') // fails
