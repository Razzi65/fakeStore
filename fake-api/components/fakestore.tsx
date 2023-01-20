import axios from "axios"
import { useState } from "react";
import { SimpleGrid, Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'


const Fakestore = () => {

    const [productsList, setProductList] = useState([])

    const fakeApi = async () => {

        const api = await axios.get("https://fakestoreapi.com/products")
        setProductList(api.data)

    }


    return (
        <div>
            <Box position={"fixed"} height={"50px"} width={"100%"} display={"flex"} bg={"teal"} justifyContent={"center"}>
            <Box >
            <Input variant='filled' placeholder='Search product' width={"250px"} mt={1} />
            </Box>
            </Box>
        <SimpleGrid p={2} columns={4} paddingTop={100} >

            {
                productsList.map((item) => {
                    return (
                        
                        
                            
                        <Box border={"1px"} width={"350px"} justifyContent={"center"}>
                        <Image src={item.image} width={"200px"}  /><br/>
                        {item.title}
                      </Box>
                                
                           
                            
                        


                    )
                })
            }
               
            
                </SimpleGrid>  
                <Box m={"auto"} display={"flex"} width={"max-content"}> <Button onClick={() => fakeApi()} colorScheme='teal'>Get Products</Button> </Box>
                </div>
                
    )

}

export default Fakestore