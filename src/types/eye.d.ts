/**
 * Eye type for OD (right eye) and OS (left eye)
 */
export type Eye = 'OD' | 'OS';

/**
 * Generic type for values that have OD and OS keys
 */
export type EyeValues = Record<Eye, string>;