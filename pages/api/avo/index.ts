import { IncomingMessage, ServerResponse } from 'http'

import DB from '@database'

/**
 * @param req IncomingMessage
 * @param res ServerResponse
 */
const AllAvos = async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> => {
  try {
    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length

    res.statusCode = 200
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify({ data: allEntries, length }))
  } catch (error) {
    res.statusCode = 500
    res.end(JSON.stringify({ error }))
  }
}

export default AllAvos
