import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const desc = "Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris"

const ProductDisplay = ({item}) => {
    // console.log(item)
    const {id,name,price,seller,ratingsCount,quantity, img} = item;

    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    const handleDescrease =() => {
        if(prequantity > 1){
            setQuantity(prequantity -1 )
        }
    }
    const handleIncrease = () => {
        setQuantity(prequantity + 1)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id:id,
            img:img,
            name:name,
            price:price,
            quantity: prequantity,
            size:size,
            color:color,
            coupon:coupon
        }
        // console.log(product)
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

        if(existingProductIndex !== -1){
            existingCart[existingProductIndex].quantity += prequantity;
        }else{
            existingCart.push(product)
        }

        //  Update local storage
        localStorage.setItem("cart", JSON.stringify(existingCart));

        //reset form field
        setQuantity(1);
        setSize("Select Size");
        setColor("Select Color");
        setCoupon("");
    }

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <span>{ratingsCount} review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>
      {/* cart component */}
      <div>
        <form onSubmit={handleSubmit}>
            {/* select size */}
            <div className="select-product size">
                <select value={size} onChange={handleSizeChange}>
                    <option>Select Size</option>
                    <option>SM</option>
                    <option>MD</option>
                    <option>LG</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
                <i className='icofont-rounded-down'></i>
            </div>
            {/* select color */}
            <div className="select-product color">
                <select value={color} onChange={handleColorChange}>
                    <option>Select Color</option>
                    <option>White</option>
                    <option>Red</option>
                    <option>Pink</option>
                    <option>Blue</option>
                    <option>Black</option>
                </select>
                <i className='icofont-rounded-down'></i>
            </div>
            {/* cart counter */}
            <div className="cart-plus-minus">
                <div className='dec qtybutton' onClick={handleDescrease}>-</div>
                <input type="text" className='cart-plus-minus-box' name='qtybutton' value=
                {prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))}/>
                <div className='inc qtybutton' onClick={handleIncrease}>+</div>
            </div>
            {/* discount */}
            <div className='discount-code mb-2'>
                <input type="text" placeholder='Enter Discount Code' onChange={(e) => setCoupon(e.target.value)} />
            </div>

            {/* btn section */}
            <button type='submit' className='lab-btn'>
                <span>Add to Cart</span>
            </button>
            <Link to="/cart-page" className='lab-btn bg-primary'>
                <span>Check Out</span>
            </Link>
        </form>
      </div>
    </div>
  )
}

export default ProductDisplay
