import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./cart.scss"

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://media.geeksforgeeks.org/wp-content/uploads/20240323181121/jar_8517434.png",
            title: "Embellished Jar",
            desc: "Adorned with delicate embellishments and hand-painted designs, this jar exudes timeless elegance, making it a perfect addition to your home decor or a cherished gift for a loved one",
            isNew: true,
            price: 1100,
        },
        {
            id: 2,
            img: "https://media.geeksforgeeks.org/wp-content/uploads/20240323175534/bracelets_6439096.png",
            title: "Ethnic Bangles",
            desc: "These exquisite pieces of handcrafted jewelry capture the essence of Indian culture and craftsmanship, adding a touch of elegance to any ensemble.",
            isNew: true,
            price: 500,
        },
    ]

  return (
    <div className='cart'>
        <h1>Products in Your Cart</h1>
        {
            data.map(item=> (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0, 100)}...</p>
                        <div className="price">1 x ₹{item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete'/>
                </div>
            ))
        }
        <div className="total">
            <span>SUBTOTAL</span>
            <span>:</span>
            <span>₹1050</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart