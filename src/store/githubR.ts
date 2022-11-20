import { FETCH_GITHUB_DATA, Actions } from './action'

export default function githubReducer(
  state = [],
  action: { type: keyof Actions; data: string }
) {
  switch (action.type) {
    case FETCH_GITHUB_DATA:
      return action.data
    default:
      return state
  }
}
