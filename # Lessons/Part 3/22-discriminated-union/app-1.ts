/*
  Discriminated unions
  - Such unions can be represented with the z.discriminatedUnion method. This enables faster evaluation, because Zod can check the discriminator key (status in the example above) to determine which schema should be used to parse the input. This makes parsing more efficient and lets Zod report friendlier errors.

  - With the basic union method, the input is tested against each of the provided "options", and in the case of invalidity, issues for all the "options" are shown in the zod error. On the other hand, the discriminated union allows for selecting just one of the "options", testing against it, and showing only the issues related to this "option".



*/

import { z } from 'zod'

// A discriminated union is a union of object schemas that all share a particular key.
type MyUnion =
  | { status: 'success'; data: string }
  | { status: 'failed'; error: Error }
