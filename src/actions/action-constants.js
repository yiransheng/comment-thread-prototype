// file named action-constants.js instead of constants.js
// because there's a node native module called constants
// in some cases import "constants" may confuse jest (if used as top-level module)

export const SUBMIT_COMMENT = "SUBMIT_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const CANCEL_COMMENT = "CANCEL_COMMENT";
