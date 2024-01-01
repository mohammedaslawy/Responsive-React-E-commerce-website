import React from 'react'
import PageHeader from '../components/PageHeader'
import { useState } from 'react'
const showResults = "Showing 01 - 12 of 139 Results"
import Data from '../products.json'
import ProductsCards from './ProductsCards'
import Pagination from './Pagination'
import Search from './Search'
import ShopCategory from './ShopCategory'
import PobularPost from './PobularPost'
import Tags from './Tags'


const Shopping = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOffFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOffFirstProduct, indexOfLastProduct);

  // function of chane the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  // filter category based on category
  let set = new Set();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    })
    setSelectedCategory(curcat);
    setProducts(newItem);
  }
  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="shop" />
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              {/* left side */}
              <article>
                {/* layout and title */}
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults}</p>
                  <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                    <a className="grid" onClick={() => setGridList(!GridList)}>
                      <i className='icofont-ghost'></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className='icofont-listine-dots'></i>
                    </a>
                  </div>
                </div>
                {/* products card */}
                <div>
                  <ProductsCards GridList={GridList} products={currentProducts} />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
                
              </article>
            </div>
            {/* right side */}
            <div className="col-lg-4 col-12">

              <aside>
                <Search products={products} GridList={GridList} />
                <ShopCategory
                  filterItem={filterItem}
                  setItem={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectedCategory={selectedCategory}
                />
                <PobularPost/>
                <Tags/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shopping
