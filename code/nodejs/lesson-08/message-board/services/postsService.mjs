async function createClient() {
  const config = await import(`../config/${process.env.MESSAGE_BOARD_ENV}.env.mjs`)
  
}

let clientPromise

async function getClientPromise() {
  if (!clientPromise) {
    clientPromise = createClient()
  }
  return clientPromise
}

export const postsService = {
}
