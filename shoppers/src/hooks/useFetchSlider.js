import { useQuery } from '@tanstack/react-query'

export default function useFetchSlider() {
    const delay = (ms = 2000) => new Promise(r=>setTimeout(r,ms));

    const fetchSlider = async ()=>{
        await delay();
        const res = await  fetch("http://localhost:1337/api/slider?populate=*",
        {"method": "GET","mode": "cors"});
        if (res.ok && res.status === 200) {
            const response = await res.json();
            return response;
        }  
    }
const {isLoading,error,data}=   useQuery(['sliderKey'], fetchSlider);
return {isLoading,error,data}

}
