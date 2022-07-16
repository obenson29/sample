import { useState,useEffect } from "react";
const useFetch = (fetchresourse) => {
    var [data,setData]=useState(null);
    var [pending,setPending]=useState(true);
    var [error,setError]=useState(null);

    useEffect(()=>{
        setTimeout(()=>{
        fetch(fetchresourse) //fetch will be resolved and returns response obj
        // .then((fetchresponse)=>{return fetchresponse.json()})// accepts response from resolve method and returns json data through json()

        .then((fetchresponse)=>{
            if(fetchresponse.ok===false)
            {
            throw Error("Data not found");
            }
            return fetchresponse.json();

        }
        )
        .then((output_of_fetchresponse)=>{setData(output_of_fetchresponse)})
            .catch((error)=>{setError(error.message);}) //when you kill the terminal
             setPending(false);},2000)//accept data returned from json() and set it to movies
        
         
    },[])
    return ( {data,pending,error});

}
 
export default useFetch;