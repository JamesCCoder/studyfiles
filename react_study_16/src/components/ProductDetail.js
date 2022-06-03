import React from "react";
import "./ProductDetail.css";

import {useParams} from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    return (
        <>
            <p>product detail</p>
            <p>{
                params.productId
            }</p>
        </>
    );
}

export default ProductDetail;
