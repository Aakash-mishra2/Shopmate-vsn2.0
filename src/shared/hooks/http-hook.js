import { useState, useRef, useCallback, useEffect } from "react";

export const useHttpProcess = () => {

    const { isLoading, setIsLoading } = useState(false);
    const { error, setError } = useState();

    const clearError = () => { setError(null); }
    const activeHTTPrequests = useRef([]);

    const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setIsLoading(true);
        const httpAbortController = new AbortController();
        activeHTTPrequests.current.push(httpAbortController);

        try {
            const response = await fetch(url, {
                body,
                method,
                headers
            });

            const responseData = await response.json();
            activeHTTPrequests.current = activeHTTPrequests.filter(
                requests => requests !== httpAbortController
            );

            if (!response.ok) {
                throw new Error(responseData.message);
            }
            setIsLoading(false);
            return responseData;
        }
        catch (error) {
            setIsLoading(false);
            setError(error.message);
            throw error;
        }
    }, [setIsLoading, setError]);
    //cleanup function
    useEffect(() => {
        return () => {
            activeHTTPrequests.current.forEach(ABC => ABC.abort());
        }
    }, [activeHTTPrequests]);
    return { isLoading, sendRequest, error, clearError };
}