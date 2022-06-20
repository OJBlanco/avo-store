/* eslint-disable @typescript-eslint/naming-convention */
import { NextApiResponse, NextApiRequest } from 'next'

import enablePublicAccess from '@cors'

/**
 * @param req NextApiRequest
 * @param res NextApiResponse
 */
const allAvos = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  // Generally, you would not want this in your apps.
  // See more in 'cors.js'
  await enablePublicAccess(req, res)

  const answer = Math.round(Math.random()) ? 'yes' : 'no'

  res.status(200).json({
    data: answer,
    error: null,
  })
}

export default allAvos
