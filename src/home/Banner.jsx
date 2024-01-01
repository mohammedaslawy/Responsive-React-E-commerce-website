import React from 'react'
import { useState } from 'react';
import productData from '../products.json'
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';


const title =(
    <h2>Discover <span>Limitless Choices</span> in Our Vast Collection </h2>
);
const desc = "Find Your Perfect Match!"

const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];


const Banner = () => {
    const [searchInput, SetsearchInput] = useState("");
    const [filterProducts, setFilterProducts] = useState(productData);


    // search functionality
    const handleSearch = e =>{
        const serachTerm = e.target.value;
        SetsearchInput(serachTerm);

        // filter broducts by search
        const filtered = productData.filter((product) => product.name.toLocaleLowerCase().includes(serachTerm.
            toLowerCase()));
                setFilterProducts(filtered)

    }

    // console.log(productData);
  return (
    <div className='banner-section style-4'>
      <div className="container">
        <div className="banner-content">
            {title}
            <form>
                <SelectedCategory select={"all"}/>
                <input type="text" name='search' id='search' placeholder='Search your Products' 
                value={searchInput} onChange={handleSearch}/>
                <button type='submit'>
                <i className="icofont-ui-search"></i>
                </button>
            </form>
            <p>{desc}</p>
            <ul className="lab-ul">
                {
                    searchInput && filterProducts.map((product,i) => <li key={i}>
                        <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </li>)
                }
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Banner
