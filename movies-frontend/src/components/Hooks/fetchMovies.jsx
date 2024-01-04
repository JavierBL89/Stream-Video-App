import { useState, useEffect } from "react";

const useFetchMovies = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url);
                const result = await response.json();
                if (response.ok) {
                    console.log(response);
                }
                else {
                    throw new Error(`HTTP error! status: ${result}`);
                }
                if (result) {
                    setData(result);// Assuming the result is the array of movies
                    console.log(result);

                }
                else {
                    setError("No data returned");
                }
            } catch (err) {
                setError(err);
            };
            setLoading(false);
        };
        fetchData();
    }, [url]); // Only re-run the effect if url changes
    console.log(url);

    console.log(data);
    return { data, loading, error }
}

export { useFetchMovies };