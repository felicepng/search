import type { NextApiRequest, NextApiResponse } from 'next';
import Suggestion from '../../data/suggestion/suggestion.json';
import { SuggestionDataType } from '../../data/types';

export default (req: NextApiRequest, res: NextApiResponse<SuggestionDataType>) => {
  res.status(200).json(Suggestion);
}