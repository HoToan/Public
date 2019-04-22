import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Allproducts from '../Home/Allproducts';
import Header1 from '../Home/Header1';
class productdetail extends Component {
    render() {
        return (
            <div>
                <Header1/>
                <br/>
                <br/>
                <br/>
                {/* Cart */}
                <div className="wrap-header-cart js-panel-cart">
                    <div className="s-full js-hide-cart" />
                    <div className="header-cart flex-col-l p-l-65 p-r-25">
                        <div className="header-cart-title flex-w flex-sb-m p-b-8">
                            <span className="mtext-103 cl2">
                                Your Cart
              </span>
                            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                                <i className="zmdi zmdi-close" />
                            </div>
                        </div>
                        <div className="header-cart-content flex-w js-pscroll">
                            <ul className="header-cart-wrapitem w-full">
                                <li className="header-cart-item flex-w flex-t m-b-12">
                                    <div className="header-cart-item-img">
                                        <img src="images/item-cart-01.jpg" alt="IMG" />
                                    </div>
                                    <div className="header-cart-item-txt p-t-8">
                                        <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                            White Shirt Pleat
                    </a>
                                        <span className="header-cart-item-info">
                                            1 x $19.00
                    </span>
                                    </div>
                                </li>
                                <li className="header-cart-item flex-w flex-t m-b-12">
                                    <div className="header-cart-item-img">
                                        <img src="images/item-cart-02.jpg" alt="IMG" />
                                    </div>
                                    <div className="header-cart-item-txt p-t-8">
                                        <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                            Converse All Star
                    </a>
                                        <span className="header-cart-item-info">
                                            1 x $39.00
                    </span>
                                    </div>
                                </li>
                                <li className="header-cart-item flex-w flex-t m-b-12">
                                    <div className="header-cart-item-img">
                                        <img src="images/item-cart-03.jpg" alt="IMG" />
                                    </div>
                                    <div className="header-cart-item-txt p-t-8">
                                        <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                            Nixon Porter Leather
                    </a>
                                        <span className="header-cart-item-info">
                                            1 x $17.00
                    </span>
                                    </div>
                                </li>
                            </ul>
                            <div className="w-full">
                                <div className="header-cart-total w-full p-tb-40">
                                    Total: $75.00
                </div>
                                <div className="header-cart-buttons flex-w w-full">
                                    <a href="shoping-cart" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                        View Cart
                  </a>
                                    <a href="shoping-cart" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                                        Check Out
                  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* breadcrumb */}
                <div className="container">
                    <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                        <a href="index" className="stext-109 cl8 hov-cl1 trans-04">
                            Home
              <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
                        </a>
                        <a href="product" className="stext-109 cl8 hov-cl1 trans-04">
                            Men
              <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
                        </a>
                        <span className="stext-109 cl4">
                            Lightweight Jacket
            </span>
                    </div>
                </div>
                {/* Product Detail */}
                <section className="sec-product-detail bg0 p-t-65 p-b-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-7 p-b-30">
                                <div className="p-l-25 p-r-30 p-lr-0-lg">
                                    <div className="wrap-slick3 flex-sb flex-w">
                                        <div className="wrap-slick3-dots" />
                                        <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                                        <div className="slick3 gallery-lb">
                                            <div className="item-slick3" data-thumb="images/product-detail-01.jpg">
                                                <div className="wrap-pic-w pos-relative">
                                                    <img src="images/product-detail-01.jpg" alt="IMG-PRODUCT" />
                                                    <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-01.jpg">
                                                        <i className="fa fa-expand" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="item-slick3" data-thumb="images/product-detail-02.jpg">
                                                <div className="wrap-pic-w pos-relative">
                                                    <img src="images/product-detail-02.jpg" alt="IMG-PRODUCT" />
                                                    <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-02.jpg">
                                                        <i className="fa fa-expand" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="item-slick3" data-thumb="images/product-detail-03.jpg">
                                                <div className="wrap-pic-w pos-relative">
                                                    <img src="images/product-detail-03.jpg" alt="IMG-PRODUCT" />
                                                    <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-03.jpg">
                                                        <i className="fa fa-expand" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5 p-b-30">
                                <div className="p-r-50 p-t-5 p-lr-0-lg">
                                    <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                        Lightweight Jacket
                  </h4>
                                    <span className="mtext-106 cl2">
                                        $58.79
                  </span>
                                    <p className="stext-102 cl3 p-t-23">
                                        Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
                  </p>
                                    {/*  */}
                                    <div className="p-t-33">
                                        <div className="flex-w flex-r-m p-b-10">
                                            <div className="size-203 flex-c-m respon6">
                                                Size
                      </div>
                                            <div className="size-204 respon6-next">
                                                <div className="rs1-select2 bor8 bg0">
                                                    <select className="js-select2" name="time">
                                                        <option>Choose an option</option>
                                                        <option>Size S</option>
                                                        <option>Size M</option>
                                                        <option>Size L</option>
                                                        <option>Size XL</option>
                                                    </select>
                                                    <div className="dropDownSelect2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-w flex-r-m p-b-10">
                                            <div className="size-203 flex-c-m respon6">
                                                Color
                      </div>
                                            <div className="size-204 respon6-next">
                                                <div className="rs1-select2 bor8 bg0">
                                                    <select className="js-select2" name="time">
                                                        <option>Choose an option</option>
                                                        <option>Red</option>
                                                        <option>Blue</option>
                                                        <option>White</option>
                                                        <option>Grey</option>
                                                    </select>
                                                    <div className="dropDownSelect2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-w flex-r-m p-b-10">
                                            <div className="size-204 flex-w flex-m respon6-next">
                                                <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                    <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                        <i className="fs-16 zmdi zmdi-minus" />
                                                    </div>
                                                    <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" defaultValue={1} />
                                                    <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                        <i className="fs-16 zmdi zmdi-plus" />
                                                    </div>
                                                </div>
                                                <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                    Add to cart
                        </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                                        <div className="flex-m bor9 p-r-10 m-r-11">
                                            <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
                                                <i className="zmdi zmdi-favorite" />
                                            </a>
                                        </div>
                                        <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
                                            <i className="fa fa-facebook" />
                                        </a>
                                        <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bor10 m-t-50 p-t-43 p-b-40">
                            {/* Tab01 */}
                            <div className="tab01">
                                {/* Nav tabs */}
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item p-b-10">
                                        <a className="nav-link active" data-toggle="tab" href="#description" role="tab">Description</a>
                                    </li>
                                    <li className="nav-item p-b-10">
                                        <a className="nav-link" data-toggle="tab" href="#information" role="tab">Additional information</a>
                                    </li>
                                    <li className="nav-item p-b-10">
                                        <a className="nav-link" data-toggle="tab" href="#reviews" role="tab">Reviews (1)</a>
                                    </li>
                                </ul>
                                {/* Tab panes */}
                                <div className="tab-content p-t-43">
                                    {/* - */}
                                    <div className="tab-pane fade show active" id="description" role="tabpanel">
                                        <div className="how-pos2 p-lr-15-md">
                                            <p className="stext-102 cl6">
                                                Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc fringilla sit amet. Ut in blandit ipsum. Quisque luctus dui at ante aliquet, in hendrerit lectus interdum. Morbi elementum sapien rhoncus pretium maximus. Nulla lectus enim, cursus et elementum sed, sodales vitae eros. Ut ex quam, porta consequat interdum in, faucibus eu velit. Quisque rhoncus ex ac libero varius molestie. Aenean tempor sit amet orci nec iaculis. Cras sit amet nulla libero. Curabitur dignissim, nunc nec laoreet consequat, purus nunc porta lacus, vel efficitur tellus augue in ipsum. Cras in arcu sed metus rutrum iaculis. Nulla non tempor erat. Duis in egestas nunc.
                      </p>
                                        </div>
                                    </div>
                                    {/* - */}
                                    <div className="tab-pane fade" id="information" role="tabpanel">
                                        <div className="row">
                                            <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                                <ul className="p-lr-28 p-lr-15-sm">
                                                    <li className="flex-w flex-t p-b-7">
                                                        <span className="stext-102 cl3 size-205">
                                                            Weight
                            </span>
                                                        <span className="stext-102 cl6 size-206">
                                                            0.79 kg
                            </span>
                                                    </li>
                                                    <li className="flex-w flex-t p-b-7">
                                                        <span className="stext-102 cl3 size-205">
                                                            Dimensions
                            </span>
                                                        <span className="stext-102 cl6 size-206">
                                                            110 x 33 x 100 cm
                            </span>
                                                    </li>
                                                    <li className="flex-w flex-t p-b-7">
                                                        <span className="stext-102 cl3 size-205">
                                                            Materials
                            </span>
                                                        <span className="stext-102 cl6 size-206">
                                                            60% cotton
                            </span>
                                                    </li>
                                                    <li className="flex-w flex-t p-b-7">
                                                        <span className="stext-102 cl3 size-205">
                                                            Color
                            </span>
                                                        <span className="stext-102 cl6 size-206">
                                                            Black, Blue, Grey, Green, Red, White
                            </span>
                                                    </li>
                                                    <li className="flex-w flex-t p-b-7">
                                                        <span className="stext-102 cl3 size-205">
                                                            Size
                            </span>
                                                        <span className="stext-102 cl6 size-206">
                                                            XL, L, M, S
                            </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* - */}
                                    <div className="tab-pane fade" id="reviews" role="tabpanel">
                                        <div className="row">
                                            <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                                <div className="p-b-30 m-lr-15-sm">
                                                    {/* Review */}
                                                    <div className="flex-w flex-t p-b-68">
                                                        <div className="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                                                            <img src="images/avatar-01.jpg" alt="AVATAR" />
                                                        </div>
                                                        <div className="size-207">
                                                            <div className="flex-w flex-sb-m p-b-17">
                                                                <span className="mtext-107 cl2 p-r-20">
                                                                    Ariana Grande
                                </span>
                                                                <span className="fs-18 cl11">
                                                                    <i className="zmdi zmdi-star" />
                                                                    <i className="zmdi zmdi-star" />
                                                                    <i className="zmdi zmdi-star" />
                                                                    <i className="zmdi zmdi-star" />
                                                                    <i className="zmdi zmdi-star-half" />
                                                                </span>
                                                            </div>
                                                            <p className="stext-102 cl6">
                                                                Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos
                              </p>
                                                        </div>
                                                    </div>
                                                    {/* Add review */}
                                                    <form className="w-full">
                                                        <h5 className="mtext-108 cl2 p-b-7">
                                                            Add a review
                            </h5>
                                                        <p className="stext-102 cl6">
                                                            Your email address will not be published. Required fields are marked *
                            </p>
                                                        <div className="flex-w flex-m p-t-50 p-b-23">
                                                            <span className="stext-102 cl3 m-r-16">
                                                                Your Rating
                              </span>
                                                            <span className="wrap-rating fs-18 cl11 pointer">
                                                                <i className="item-rating pointer zmdi zmdi-star-outline" />
                                                                <i className="item-rating pointer zmdi zmdi-star-outline" />
                                                                <i className="item-rating pointer zmdi zmdi-star-outline" />
                                                                <i className="item-rating pointer zmdi zmdi-star-outline" />
                                                                <i className="item-rating pointer zmdi zmdi-star-outline" />
                                                                <input className="dis-none" type="number" name="rating" />
                                                            </span>
                                                        </div>
                                                        <div className="row p-b-25">
                                                            <div className="col-12 p-b-5">
                                                                <label className="stext-102 cl3" htmlFor="review">Your review</label>
                                                                <textarea className="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10" id="review" name="review" defaultValue={""} />
                                                            </div>
                                                            <div className="col-sm-6 p-b-5">
                                                                <label className="stext-102 cl3" htmlFor="name">Name</label>
                                                                <input className="size-111 bor8 stext-102 cl2 p-lr-20" id="name" type="text" name="name" />
                                                            </div>
                                                            <div className="col-sm-6 p-b-5">
                                                                <label className="stext-102 cl3" htmlFor="email">Email</label>
                                                                <input className="size-111 bor8 stext-102 cl2 p-lr-20" id="email" type="text" name="email" />
                                                            </div>
                                                        </div>
                                                        <button className="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
                                                            Submit
                            </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
                        <span className="stext-107 cl6 p-lr-25">
                            SKU: JAK-01
            </span>
                        <span className="stext-107 cl6 p-lr-25">
                            Categories: Jacket, Men
            </span>
                    </div>
                </section>
                {/* Related Products */}
                <section className="sec-relate-product bg0 p-t-45 p-b-105">
                    <div className="container">
                        <div className="p-b-45">
                            <h3 className="ltext-106 cl5 txt-center">
                                Related Products
              </h3>
                        </div>
                        {/* Slide2 */}
                        <div className="wrap-slick2">
                            <Allproducts/>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer className="bg3 p-t-75 p-b-32">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 p-b-50">
                                <h4 className="stext-301 cl0 p-b-30">
                                    Categories
                </h4>
                                <ul>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Women
                    </a>
                                    </li>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Men
                    </a>
                                    </li>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Shoes
                    </a>
                                    </li>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Watches
                    </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-lg-3 p-b-50">
                                <h4 className="stext-301 cl0 p-b-30">
                                    Help
                </h4>
                                <ul>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Track Order
                    </a>
                                    </li>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Returns
                    </a>
                                    </li>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Shipping
                    </a>
                                    </li>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            FAQs
                    </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-lg-3 p-b-50">
                                <h4 className="stext-301 cl0 p-b-30">
                                    GET IN TOUCH
                </h4>
                                <p className="stext-107 cl7 size-201">
                                    Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                </p>
                                <div className="p-t-27">
                                    <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                        <i className="fa fa-instagram" />
                                    </a>
                                    <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                        <i className="fa fa-pinterest-p" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 p-b-50">
                                <h4 className="stext-301 cl0 p-b-30">
                                    Newsletter
                </h4>
                                <form>
                                    <div className="wrap-input1 w-full p-b-4">
                                        <input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email" placeholder="email@example.com" />
                                        <div className="focus-input1 trans-04" />
                                    </div>
                                    <div className="p-t-18">
                                        <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                            Subscribe
                    </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="p-t-40">
                            <div className="flex-c-m flex-w p-b-18">
                                <a href="#" className="m-all-1">
                                    <img src="images/icons/icon-pay-01.png" alt="ICON-PAY" />
                                </a>
                                <a href="#" className="m-all-1">
                                    <img src="images/icons/icon-pay-02.png" alt="ICON-PAY" />
                                </a>
                                <a href="#" className="m-all-1">
                                    <img src="images/icons/icon-pay-03.png" alt="ICON-PAY" />
                                </a>
                                <a href="#" className="m-all-1">
                                    <img src="images/icons/icon-pay-04.png" alt="ICON-PAY" />
                                </a>
                                <a href="#" className="m-all-1">
                                    <img src="images/icons/icon-pay-05.png" alt="ICON-PAY" />
                                </a>
                            </div>
                            <p className="stext-107 cl6 txt-center">
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </p>
                        </div>
                    </div>
                </footer>
                {/* Back to top */}
                <div className="btn-back-to-top" id="myBtn">
                    <span className="symbol-btn-back-to-top">
                        <i className="zmdi zmdi-chevron-up" />
                    </span>
                </div>
                {/* Modal1 */}
                <div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
                    <div className="overlay-modal1 js-hide-modal1" />
                    <div className="container">
                        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                            <button className="how-pos3 hov3 trans-04 js-hide-modal1">
                                <img src="images/icons/icon-close.png" alt="CLOSE" />
                            </button>
                            <div className="row">
                                <div className="col-md-6 col-lg-7 p-b-30">
                                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                                        <div className="wrap-slick3 flex-sb flex-w">
                                            <div className="wrap-slick3-dots" />
                                            <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                                            <div className="slick3 gallery-lb">
                                                <div className="item-slick3" data-thumb="images/product-detail-01.jpg">
                                                    <div className="wrap-pic-w pos-relative">
                                                        <img src="images/product-detail-01.jpg" alt="IMG-PRODUCT" />
                                                        <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-01.jpg">
                                                            <i className="fa fa-expand" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="item-slick3" data-thumb="images/product-detail-02.jpg">
                                                    <div className="wrap-pic-w pos-relative">
                                                        <img src="images/product-detail-02.jpg" alt="IMG-PRODUCT" />
                                                        <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-02.jpg">
                                                            <i className="fa fa-expand" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="item-slick3" data-thumb="images/product-detail-03.jpg">
                                                    <div className="wrap-pic-w pos-relative">
                                                        <img src="images/product-detail-03.jpg" alt="IMG-PRODUCT" />
                                                        <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-03.jpg">
                                                            <i className="fa fa-expand" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5 p-b-30">
                                    <div className="p-r-50 p-t-5 p-lr-0-lg">
                                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                            Lightweight Jacket
                    </h4>
                                        <span className="mtext-106 cl2">
                                            $58.79
                    </span>
                                        <p className="stext-102 cl3 p-t-23">
                                            Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
                    </p>
                                        {/*  */}
                                        <div className="p-t-33">
                                            <div className="flex-w flex-r-m p-b-10">
                                                <div className="size-203 flex-c-m respon6">
                                                    Size
                        </div>
                                                <div className="size-204 respon6-next">
                                                    <div className="rs1-select2 bor8 bg0">
                                                        <select className="js-select2" name="time">
                                                            <option>Choose an option</option>
                                                            <option>Size S</option>
                                                            <option>Size M</option>
                                                            <option>Size L</option>
                                                            <option>Size XL</option>
                                                        </select>
                                                        <div className="dropDownSelect2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-w flex-r-m p-b-10">
                                                <div className="size-203 flex-c-m respon6">
                                                    Color
                        </div>
                                                <div className="size-204 respon6-next">
                                                    <div className="rs1-select2 bor8 bg0">
                                                        <select className="js-select2" name="time">
                                                            <option>Choose an option</option>
                                                            <option>Red</option>
                                                            <option>Blue</option>
                                                            <option>White</option>
                                                            <option>Grey</option>
                                                        </select>
                                                        <div className="dropDownSelect2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-w flex-r-m p-b-10">
                                                <div className="size-204 flex-w flex-m respon6-next">
                                                    <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                        <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                            <i className="fs-16 zmdi zmdi-minus" />
                                                        </div>
                                                        <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" defaultValue={1} />
                                                        <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                            <i className="fs-16 zmdi zmdi-plus" />
                                                        </div>
                                                    </div>
                                                    <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                        Add to cart
                          </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  */}
                                        <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                                            <div className="flex-m bor9 p-r-10 m-r-11">
                                                <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
                                                    <i className="zmdi zmdi-favorite" />
                                                </a>
                                            </div>
                                            <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
                                                <i className="fa fa-facebook" />
                                            </a>
                                            <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
                                                <i className="fa fa-twitter" />
                                            </a>
                                            <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
                                                <i className="fa fa-google-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default productdetail;
