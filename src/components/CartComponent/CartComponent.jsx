import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, delCart } from '../../redux/reducer/cartReducer';
import { Link} from 'react-router-dom';
import { FaArrowLeft, FaMinus, FaPlus } from 'react-icons/fa';
import './CartComponent.css'

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const addItem = (product) => {
    dispatch(addCart(product));
  };

  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const EmptyCart = () => (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 py-5 bg-light text-center'>
          <h4 className='p-3 display-5'>Your Cart is Empty</h4>
          <Link to='/Products' className='btn  btn-outline-dark mx-4'>
            <FaArrowLeft className='fa fa-arrow-left' /> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 5.00;
    let totalItems = 0;

    cart.forEach(item => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <section className="h-100 h-custom" style={{ backgroundColor: '#ffffff' }}>
        <div className="container py-5 h-100 check-container">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0">Item List</h1>
                          <h6 className="mb-0 text-muted">{totalItems} items</h6>
                        </div>
                        <hr className="my-4" />

                        {cart.map(item => (
                          <div key={item.id} className="row mb-4 d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img src={item.image} className="img-fluid rounded-3" alt={item.title} />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-muted">Shirt</h6>
                              <h6 className="mb-0">{item.title}</h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button className="btn btn-link px-2" onClick={() => removeItem(item)}>
                                <FaMinus />
                              </button>
                              <input min="0" name="quantity" value={item.qty} type="number" className="form-control form-control-sm" readOnly />
                              <button className="btn btn-link px-2" onClick={() => addItem(item)}>
                                <FaPlus />
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0">$ {item.price}</h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                            </div>
                          </div>
                        ))}

                        <hr className="my-4" />

                        <div className="pt-5">
                          <h6 className="mb-0">
                            <Link to="/Products" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-body-tertiary">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">items {totalItems}</h5>
                          <h5>$ {Math.round(subtotal)}</h5>
                        </div>

                        <h5 className="text-uppercase mb-3">Shipping</h5>

                        <div className="mb-4 pb-2">
                          <select data-mdb-select-init>
                            <option value="1">Standard-Delivery- $5.00</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                          </select>
                        </div>

                        <h5 className="text-uppercase mb-3">Give code</h5>

                        <div className="mb-5">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>$ {Math.round(subtotal + shipping)}</h5>
                        </div>

                        <Link to='/Checkout'>
                          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">
                              BUY NOW 
                          </button>
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className='container my-3 py-3'>
      <h1 className='text-center'>Cart</h1>
      <hr />
      {cart.length === 0 ? <EmptyCart /> : <ShowCart />}
    </div>
  );
}

export default ShoppingCart;
