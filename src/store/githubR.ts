import { FETCH_GITHUB_DATA } from './action'

export default function githubReducer(state = [], action: any) {
  switch (action.type) {
    case FETCH_GITHUB_DATA:
      return action.data
    default:
      return state
  }
}
