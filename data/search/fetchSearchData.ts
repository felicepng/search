import axios, { AxiosResponse, AxiosError } from "axios";

interface DataType {
    ResultItems: any[];
}

const fetchSearchData = (setSearchData: (setSearchData: DataType) => void) => {
    axios.get("https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/44deafab00fc808ed7fa0e59a8bc959d255b9785/queryResult.json")
        .then((response: AxiosResponse) => {
            const mySearchData: DataType = response.data;
            setSearchData(mySearchData);
        })
        .catch((e: AxiosError) => {
            if (e.response) {
                // request was made, server responded with a status code outside of 2xx
                console.log(e.response.data);
                console.log(e.response.status);
                console.log(e.response.headers);
            } else if (e.request) {
                // request was made but no response received
                console.log(e.request);
            } else {
                // something happened in setting up the request that triggered an error
                console.log("Error in fetchSearchData: " + e.message)
            }
            console.log(e.config);
        });
};

export default fetchSearchData;