export const N_CIRCLE = 40
export const GENE_BATCH = 8

export const HORIZONTAL_TRIAL = 3
export const CONVERGED_WHEN_UNCHANGED_SINCE = 1000
export const N_FORK = 100
export const N_BATCH = 800
export const LIMIT = 800

export const getLimit = (adn_length: number) =>
    (adn_length === N_CIRCLE && [60000, 60000]) || [8000, 8000]
