import type { NextApiRequest, NextApiResponse } from 'next';
import Search from '../../data/search/queryResult.json';
import { SearchDataType } from '../../data/types';

export default (req: NextApiRequest, res: NextApiResponse<SearchDataType>) => {
  res.status(200).json(Search);
}