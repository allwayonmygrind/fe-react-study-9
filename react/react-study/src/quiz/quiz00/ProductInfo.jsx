import totalPrice from "./productData";
import { shopName, shopAddress, shopPhone } from "./shopData";
import {product1, product2, product3} from "./productData";
import { price1, price2, price3 } from "./productData";

function Product() {
    return (
        <div>
            <p>상품명 : {product1} ,  가격 : {price1}</p>
            <p>상품명 : {product2} ,  가격 : {price2}</p>
            <p>상품명 : {product3} ,  가격 : {price3}</p>
            <p>총 금액 : {totalPrice}</p>
            <p>쇼핑몰 이름 : {shopName}, 주소 : {shopAddress} 전화번호 : {shopPhone}</p>
        </div>
    )
}

export default Product;