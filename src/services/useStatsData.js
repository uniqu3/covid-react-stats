import { useState, useEffect } from 'react';
import axios from 'axios';

const useDataApi = url => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingDone, setIsLoadingDone] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios(url);
                setData(result.data);
                setIsLoadingDone(true);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setIsError(error.toString());
            }
        };
        fetchData();
    }, [url]);
    return { data, isLoading, isError, isLoadingDone };
};

export default useDataApi;
