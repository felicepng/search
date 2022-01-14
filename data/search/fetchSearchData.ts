import axios, { AxiosError, AxiosResponse } from 'axios';
import { server } from '../../config';
import { SearchDataType } from '../types';

const fetchSearchData = (setSearchData: (searchData: SearchDataType) => void) => {
  axios.get(`${server}/api/search`)
    .then((response: AxiosResponse) => {
      const mySearchData: SearchDataType = response.data;
      setSearchData(mySearchData);
    })
    .catch((e: AxiosError) => {
      console.log('Error in fetchSearchData: ', e);
    });
};

export default fetchSearchData;