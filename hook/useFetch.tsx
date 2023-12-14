import axios from 'axios';
import { useState, useEffect } from 'react';

function useFetch() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<any>(null);

  async function fetchData() {
    setIsLoading(true)
    setError(null);

    try {
      const response = await axios.get('http://192.168.0.191:3000/api/products');
      setData(response.data);
    } catch (err) {
      setError(err);
    }
    
    setIsLoading(false)
  }

  function refetch() {
    fetchData();
  }
  
  useEffect(() => {
    fetchData();
  }, [])
  
  return {data, isLoading, error, refetch}
}

export default useFetch;