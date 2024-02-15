import { Col, Row } from 'react-bootstrap'
import { useEffect } from 'react'

import axios from 'axios'
import { Product } from '../redux/cartSlice';
import { StoreItem } from './StoreItem';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { APIProductModel, addAllProducts } from '../redux/productSlice';

export function Store() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(store=>store.product);
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
            dispatch(addAllProducts(storeItemsList));
        }
        fetchData()
    },[])
    return (<>
        <Row md={2} xs={1} lg={3} className="g-3">
            {state.products?.map(item=>{
                return <Col key={item.id}><StoreItem {...item}></StoreItem></Col>
            })}
        </Row>
    </>)
}