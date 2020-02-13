export const CURRENT_DATE = new Date().toISOString().split("T")[0];

export const CURRENT_YEAR = new Date().getFullYear();

export const MIN_AGE_PATIENT = new Date(new Date().setFullYear(new Date().getFullYear() - 150)).toISOString().split("T")[0];