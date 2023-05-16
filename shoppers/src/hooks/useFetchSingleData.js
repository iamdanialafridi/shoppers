import { useQuery } from "@tanstack/react-query"



function useFetchSingleData(id) {
    const delay = (ms = 2000) => new Promise(r=>setTimeout(r,ms));

    const fetchSingleData = async()=>{
        await delay();
        const res = await fetch(`http://localhost:1337/api/products/${id}?populate=*`,{
            method: "GET",
            mode:"cors",
            headers: {
                'content-type': 'application/json'
             }
        });
        if (res.ok && res.status === 200) {
            const data = await res.json();

            return data;
        }
    }

const {isLoading,error,data} = useQuery(['singleProduct'],fetchSingleData)


  return {isLoading,error,data}
}

export default useFetchSingleData