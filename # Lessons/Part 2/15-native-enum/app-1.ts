/*
  Native enums
  - Zod enums are the recommended approach to defining and validating enums. 
  - But if you need to validate against an enum from a third-party library (or you don't want to rewrite your existing enums) you can use z.nativeEnum().



*/

import { z } from 'zod'

// Numeric enums
enum Fruits {
  Apple, // 0
  Banana, // 1
}

const FruitEnum = z.nativeEnum(Fruits)
type FruitEnum = z.infer<typeof FruitEnum> // Fruits

FruitEnum.parse(Fruits.Apple) // passes
FruitEnum.parse(Fruits.Banana) // passes
FruitEnum.parse(0) // passes
FruitEnum.parse(1) // passes
FruitEnum.parse(3) // fails
