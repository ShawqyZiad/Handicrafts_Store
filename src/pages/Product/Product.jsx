import React from 'react'
import { useState } from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./product.scss"

const Product = () => {

    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1);

    const images = [
      "https://media.geeksforgeeks.org/wp-content/uploads/20240324074650/hand-drawn-engraving-antique-vase_23-2149597241.jpg",
      "https://media.geeksforgeeks.org/wp-content/uploads/20240324074650/hand-drawn-engraving-antique-vase_23-2149597250.jpg",
      "https://media.geeksforgeeks.org/wp-content/uploads/20240324074649/hand-drawn-engraving-antique-vase_23-2149597232.jpg"
    ]

    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt=""
                        onClick={e => setSelectedImg(0)} />
                    <img src={images[1]} alt=""
                        onClick={e => setSelectedImg(1)} />
                    <img src={images[2]} alt=''
                        onClick={e => setSelectedImg(2)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Embellished Jar</h1>
                <span className='price'>₹250</span>
                <p>Adorned with delicate embellishments
                    and hand-painted designs, this jar
                    exudes timeless elegance, making it
                    a perfect addition to your home decor
                    or a cherished gift for a loved one
                </p>
                <div className="quantity">
                    <button onClick={() => setQuantity((prev) =>
                        (prev === 1 ? 1 : prev - 1))}>-</button>
                    {quantity}
                    <button onClick={() =>
                        setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button className='add'>
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>

                <div className="details">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div >
    )
}

export default Product