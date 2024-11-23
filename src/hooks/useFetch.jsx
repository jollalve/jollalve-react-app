import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=>{
    setLoading(true)
    fetch(url)
    .then((res)=> res.json())
    .then((result)=> setData(result))
    .catch((error)=> setError(error))
    .finally(()=> setLoading(false))
  },[])

return {data, loading, error}

}

export default useFetch