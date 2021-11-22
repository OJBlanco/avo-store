import { NextApiRequest, NextApiResponse } from 'next'

import DB from '@database'

/**
 * @param req NextApiRequest
 * @param res NextApiResponse
 */
const GetAvo = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const db = new DB()
    const id = req.query?.id

    const entry = await db.getById(id as string)

    res.status(200).json(entry)
  } catch (error) {
    res.status(400).json({ error })
  }
}

export default GetAvo
