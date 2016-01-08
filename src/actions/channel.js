import { OPEN_CHANNEL } from '../constants/action-types'

export function openChannel(id) {
  return {
    type: OPEN_CHANNEL,
    id
  }
}
