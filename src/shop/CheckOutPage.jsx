import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap'
import "../components/modal.css"

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

 
  

  

  // handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  }


  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
   // direct to home page
   const location = useLocation();
   const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleOrderConfirm = () => {
    alert("your order is placed compoletely");
    localStorage.removeItem("cart");
    navigate(from, { replace: true })
  }

  return (
    <div className='modalCard'>
      <Button className='py-2' onClick={handleShow}
        variant="primary">
        {" "}
        Proceed to Checkout
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className='modal fade'
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                  <li className='nav-item' role='presentation'>
                    <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                      id='visa-tab'
                      data-toggle="tab"
                      role='tab'
                      aria-controls='visa'
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleTabChange("visa")}
                      href="#visa">
                      <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/1aMastercard.jpg/800px-1aMastercard.jpg?20161031200552' alt='master card img' width="80" /></a></li>
                  <li className='nav-item' role='presentation'>
                    <a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                      id='paypal-tab'
                      data-toggle="tab"
                      role='tab'
                      aria-controls='paypal'
                      aria-selected={activeTab === "paypal"}
                      onClick={() => handleTabChange("paypal")}
                      href="#paypal">
                      <img src='https://storage.needpix.com/rsynced_images/paypal-784404_1280.png' alt='paypal' width="80" /></a></li>
                </ul>

                {/* content */}
                <div className='tab-content' id='myTabcontent'>
                  {/* visa content */}
                  <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                    id='visa'
                    role='tabpanel'
                    aria-labelledby='visa-tab'>
                    {/* visa tab content */}
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit card</h5>
                      </div>
                      <div className='form mt-3'>
                        <div className='input-box'>
                          <span>Card holder Name</span>
                          <input type="text" name='name' id='name' className='form-control'
                            required />

                        </div>
                        <div className='input-box'>
                          <span>Card Number</span>
                          <input type="text" name='number' id='number'
                            className='form-control'
                            min="1"
                            max="999"
                            required />


                        </div>
                        <div className="d-flex flex-row">
                          <div className='input-box'>
                            <span>Expiration Date</span>
                            <input type="text" name='name' id='name' className='form-control'
                              required />

                          </div>
                          <div className='input-box'>
                            <span>CVV</span>
                            <input type="text" name='name' id='name' className='form-control'
                              required />

                          </div>
                        </div>
                      </div>
                      <div className="px-5 pay">
                        <button className='btn btn-success btn-block mt-3' onClick={handleOrderConfirm}>Order Now</button>
                      </div>
                    </div>
                  </div>
                  {/* paypal content */}
                  <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                    id='paypal'
                    role='tabpanel'
                    aria-labelledby='paypal-tab'>
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Paypal Account Info</h5>
                      </div>
                      <div className='form mt-3'>
                        <div className='input-box'>
                          <span>Enter Your Email</span>
                          <input type="text" name='name' id='name' className='form-control'
                            required />

                        </div>
                        <div className='input-box'>
                          <span>Your Name</span>
                          <input type="text" name='number' id='number'
                            className='form-control'
                            min="1"
                            max="999"
                            required />
                        </div>
                        <div className='d-flex flex-row'>
                          <div className='input-box'>
                            <span>Extra info</span>
                            <input type="text" name='name' id='name' className='form-control'
                              required />
                          </div>
                        </div>
                      </div>
                      <div className="px-5 pay">
                        <button className='btn btn-success btn-block mt-3' onClick={handleOrderConfirm}>Add Paypal</button>
                      </div>
                    </div>

                  </div>

                </div>
                {/* disclamer payment */}
                <p className='mt-3 px-4 p-disclaimer'><em>Payment Disclaimer</em> : In no event shall payment or partial by Owner for any
                  material or services</p>

              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default CheckOutPage
