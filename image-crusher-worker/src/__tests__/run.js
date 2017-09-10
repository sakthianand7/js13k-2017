import { run } from '../index'
import type { Param } from '../type'

const PARAM = {
    CONVERGED_WHEN_UNCHANGED_SINCE: 1,
    N_BATCH: 1,
}

it(
    'should run without crashing',
    async () => await run({ PARAM }),
    // set timeout
    120 * 1000
)