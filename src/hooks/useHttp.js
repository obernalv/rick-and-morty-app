import axios from "axios"
import { useState } from "react"


const useHttp = (url) => {
  
    const [rpta, setRpta] = useState()
    const [hasError, setHasError] = useState(false)
    
    const getAPI = () => {

        axios.get(url)
            .then(res => {
                setRpta(res.data)
                setHasError(false)
            })
            .catch(err =>{
                console.log(err)
                setHasError(true)
            })

    }

    return [rpta, getAPI, hasError]
}

export default useHttp