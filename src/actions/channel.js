const OPEN_CHANNEL = "OPEN_CHANNEL"

export function openChannel(id) {
  return {
    type: OPEN_CHANNEL,
    id
  }
}
