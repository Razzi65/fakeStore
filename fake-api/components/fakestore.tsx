import axios from "axios"
import { useState } from "react";

     const Fakestore = () => {

        const [productsList, setProductList] = useState([])

        const fakeApi =async () => {
            
            const api = await axios.get ("https://fakestoreapi.com/products")
            setProductList(api.data)
            
        }


        return (
            <>

                {
                    productsList.map((item)=> {
                        return (
                            <>
                            <li> {item.title} - <img width={"150px"} src={item.image} alt="" /> </li>
                            </>
                        )
                    })
                }
            
                <button onClick={()=>fakeApi() }>Click to get</button>


            </>
        )
    
}

export default Fakestore