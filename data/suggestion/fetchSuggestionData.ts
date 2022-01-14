import axios, { AxiosError, AxiosResponse } from 'axios';
import { server } from '../../config';
import { SuggestionDataType } from '../types';

const fetchSuggestionData = (setSuggestionData: (suggestionData: SuggestionDataType) => void) => {
  axios.get(`${server}/api/suggestion`)
    .then((response: AxiosResponse) => {
      const mySuggestionData: SuggestionDataType = response.data;
      setSuggestionData(mySuggestionData);
    })
    .catch((e: AxiosError) => {
      console.log('Error in fetchSuggestionData: ', e);
    });
};

export default fetchSuggestionData;