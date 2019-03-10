export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';

export function toggleVisibility(visibility) {
  return {
    type: TOGGLE_VISIBILITY,
    visibility
  }
}