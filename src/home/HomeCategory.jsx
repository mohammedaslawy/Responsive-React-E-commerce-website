import React from 'react'
import { Link } from 'react-router-dom';

const subTitle = "Select Your Favorites from a Diverse Array of Premium Products!";
const title = " Shop Everything You Need with Us";
const btnText = "Start Exploring Now!";


const categoryList = [
  {
    imgUrl: 'src/assets/images/category/ipad.webp',
    imgAlt: 'category iPad image',
    iconName: 'icofont-brand-apple',
    title: 'Electronics',
  },
  {
    imgUrl: 'src/assets/images/category/ph.jpg',
    imgAlt: 'category photography',
    iconName: 'icofont-brand-amazon',
    title: 'Photography',
  },
  {
    imgUrl: 'src/assets/images/category/sh.webp',
    imgAlt: 'category shoes',
    iconName: 'icofont-brand-adidas',
    title: 'Shoes',
  },
  {
    imgUrl: 'src/assets/images/category/cm2.png',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-att',
    title: 'DSLR Camera',
  },


  {
    imgUrl: 'src/assets/images/category/bag.jpg',
    imgAlt: 'category bag image',
    iconName: 'icofont-brand-amazon',
    title: 'Colorful Bags',
  },
  {
    imgUrl: 'src/assets/images/category/decor.jpeg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-citibank',
    title: 'Home Decor',
  },
  
];

const HomeCategory = () => {
  return (
    <div className='category-section style-4 padding-tb'>
      <div className="container">
        {/* section header */}
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        {/* section card */}
        <div className="section-wrapper">
          <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
            {
              categoryList.map((val, i) => (<div key={i} className='col'>
                <Link to="/shop" className="category-item">
                  <div className="category-inner">
                    {/* images thumbnails */}
                    <div className='category-thumb'>
                      <img src={val.imgUrl} alt="" />
                    </div>
                    {/* icons content */}
                    <div className="category-content">
                      <div className="cate-icon">
                        <i className={val.iconName}></i>
                      </div>
                      <Link to='/shop'><h6>{val.title}</h6></Link>
                    </div>
                  </div>
                </Link>
              </div>))
            }
          </div>
            <div className='text-center mt-5'>
              {/* button get started */}
              <Link to="/shop" className='lab-btn'><span>{btnText}</span></Link>
            </div>
        </div>

      </div>
    </div>
  )
}

export default HomeCategory
