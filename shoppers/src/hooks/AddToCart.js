import { useMutation } from "@tanstack/react-query"


export default function AddToCart(product) {
    const addCart = async ()=>{
        const res = await fetch(`http://localhost:1337/api/carts`,{
            method : "POST",
            mode : "cors",
            headers: {
                'content-type': 'application/json'
             },
             body : JSON.stringify(product)
        })
       if (res.ok && res.status === 200) {
        const response = await res.json();
        return response;
       }
    }

    const {mutate , isLoading} = useMutation({ mutationFn:addCart})
  return  {mutate,isLoading};
  
}
