/*
  Zod enums



*/

import { z } from 'zod'

// @ Method 1
const FishEnum = z.enum(['Salmon', 'Tuna', 'Trout'])
type FishEnum = z.infer<typeof FishEnum> // 'Salmon' | 'Tuna' | 'Trout'

// @ Method 2
const VALUES = ['Salmon', 'Tuna', 'Trout'] as const
const fishEnum = z.enum(VALUES)

// ❌ NOT ALLOWED
const fish = ['Salmon', 'Tuna', 'Trout']
// const Enum = z.enum(fish)
