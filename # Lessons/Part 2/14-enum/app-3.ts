/*
  Zod enums



*/

import { z } from 'zod'

const FishEnum = z.enum(['Salmon', 'Tuna', 'Trout'])

const SalmonAndTrout = FishEnum.extract(['Salmon', 'Trout']) // .extract
const TunaOnly = FishEnum.exclude(['Salmon', 'Trout']) // .exclude
