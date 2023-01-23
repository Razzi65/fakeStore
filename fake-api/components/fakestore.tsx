import axios from "axios"
import { useState, useEffect } from "react";
import { SimpleGrid, Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Input, Select, Radio, RadioGroup, Stack } from '@chakra-ui/react'



const Fakestore = () => {


    const [productsList, setProductList] = useState<any>([])
    const [searching, setSearching] = useState<any>([])
    const [numbers, setNumbers] = useState<any>([])
    const [order, setOrder] = useState<any>([])
    const [catagory, setCatagory] = useState()



    const fakeApi = async () => {

        const api = await axios.get("https://fakestoreapi.com/products")
        setProductList(api.data)
        console.log(api.data);

    }

    const searchProduct = async () => {
        let a = []
        const product = await axios.get(`https://fakestoreapi.com/products/${searching}`)
        a.push(product.data)
        setProductList(a)
        console.log(product.data);

    }

    const onSelectHandler = async () => {

        const getNumbers = await axios.get(`https://fakestoreapi.com/products?limit=${numbers}`)
        console.log(getNumbers.data);
        setProductList(getNumbers.data)

    }



    const onOrderHandler = async () => {
        const ascOrder = await axios.get(`https://fakestoreapi.com/products?sort=${order}`)
        setProductList(ascOrder.data)

    }

    const catagoryHandle = async () => {

        const getCatagory = await axios.get(`https://fakestoreapi.com/products/category/${catagory}`)
        console.log(getCatagory.data);

        setProductList(getCatagory.data)
    }



    const addProduct = async () => {

        const product = {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
           
        }
       
        const add = await axios.post(`https://fakestoreapi.com/products`,{product})
        console.log(add.data);


    }

   

    return (
        <div>
            <Box position={"fixed"} height={"50px"} width={"100%"} display={"flex"} bg={"teal"} justifyContent={"center"}>
                <Box>
                    <Input onChange={(e) => setSearching(e.target.value)} variant='filled' placeholder='Search product by ID' width={"250px"} mt={1} />
                    <Button onClick={() => searchProduct()} colorScheme='teal'>Search</Button>
                </Box>
            </Box>
            <Box paddingTop={16} display={"flex"}>

                <Select onChange={(e) => setNumbers(e.target.value)} placeholder='Products per page' width={"200px"}>

                    <option value='1'> 1</option>
                    <option value='2'> 2</option>
                    <option value='3'> 3</option>
                    <option value='4'> 4</option>
                    <option value='5'> 5</option>
                    <option value='10'> 10</option>
                    <option value='15'> 15</option>
                    <option value='20'> 20</option>



                </Select> <Button onClick={() => onSelectHandler()} colorScheme='teal'>Go</Button>


                <Select onChange={(e) => setOrder(e.target.value)} placeholder='Select Order' width={"200px"}>

                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending </option>



                </Select> <Button onClick={() => onOrderHandler()} colorScheme='teal'>Go</Button>


                <Select onChange={(e) => setCatagory(e.target.value)} placeholder='Catagories' width={"200px"}>


                    <option value='electronics'>Electronics </option>
                    <option value='jewelery'>Jewelery </option>
                    <option value="Mens's clothing ">Men's Cothing </option>
                    <option value="womens's clothing ">Women's Cothing </option>



                </Select> <Button onClick={() => catagoryHandle()} colorScheme='teal'>Go</Button>
                <Button onClick={() => addProduct()} colorScheme='teal'>Add Product</Button>


                {/* <RadioGroup   paddingTop={2} paddingStart={2}>

                    <Stack direction='row'>
                        <Radio onChange={(e)=>setOrder(e.target.value)} value='asc'>Ascending</Radio>
                        <Radio onChange={(e)=>setOrder(e.target.value)} value='desc'>Descending</Radio>
                        
                    </Stack>
                </RadioGroup> */}

            </Box>
            <SimpleGrid p={2} columns={4} paddingTop={10} minChildWidth={"350px"}>


                {
                    productsList.map((item: any) => {
                        return (



                            <Box boxShadow={"md"} margin={2} width={"350px"} justifyContent={"center"}>

                                <Image src={item.image} width={"200px"} />  <br />

                                {item.title}

                            </Box>






                        )
                    })
                }


            </SimpleGrid>
            <Box m={"auto"} display={"flex"} width={"max-content"}>
                <Button onClick={() => fakeApi()} colorScheme='teal'>Get all products</Button> </Box>
        </div>

    )

}

export default Fakestore