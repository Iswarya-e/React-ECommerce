import { Col, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'

import axios from 'axios'
import { Product } from '../redux/cartSlice';
import { StoreItem } from './StoreItem';
type APIProductModel ={
    productId: number,
    productName: string,
    productPrice: number,
    productDetails: string,
    productImage: string
}
export function Store() {
    const [storeData, setStoreData] = useState<Product[]>();

    useEffect(()=>{
        async function fetchData() {
            const data = await axios<APIProductModel[]>('http://localhost:5058/api/Products');
            let storeItemsList : Product[]=[];

            data.data.map(item=> {
                let product: Product = {
                    id: item.productId,
                    name: item.productName,
                    price: item.productPrice,
                    description: item.productDetails,
                    image: item.productImage
                }
                storeItemsList.push(product);
            });
            setStoreData(storeItemsList);
        }
        fetchData()
    },[])
    return (<>
       
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeData?.map(item=>{
                return <Col key={item.id}><StoreItem {...item}></StoreItem></Col>
            })}
        </Row>
    </>)
}