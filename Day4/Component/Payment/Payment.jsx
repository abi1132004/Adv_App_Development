import React from "react";
import './Payment.css'
import { Link } from "react-router-dom";
function Payment() {
return (
<div className="wrapper">
        <h2>Payment Form</h2>
        <form method="POST">
            <h4>Account</h4>
            <div className="input-group3">
                <div className="input-box4">
                    <input type="text" placeholder="Full Name" required className="name"/>
                    <i className="fa fa-user icon"></i>
                </div>
                <div className="input-box4">
                    <input type="text" placeholder="Nick Name" required className="name"/>
                    <i className="fa fa-user icon"></i>
                </div>
            </div>
            <div className="input-group3">
                <div className="input-box4">
                    <input type="email" placeholder="Email Adress" required className="name"/>
                    <i className="fa fa-envelope icon"></i>
                </div>
            </div>
            <div className="input-group3">
                <div className="input-box4">
                    <h4> Date of Birth</h4>
                    <input type="text" placeholder="DD" className="dob"/>
                    <input type="text" placeholder="MM" className="dob"/>
                    <input type="text" placeholder="YYYY" className="dob"/>
                </div>
                <div className="input-box4">
                    <h4> Gender</h4>
                    <input type="radio" id="b1" name="gendar" checked className="radio"/>
                    <label>Male</label>
                    <input type="radio" id="b2" name="gendar" className="radio"/>
                    <label>Female</label>
                </div>
            </div>
            <div className="input-group3">
                <div className="input-box4">
                    <h4>Payment Details</h4>
                    <input type="radio" name="pay" id="bc1" checked className="radio"/>
                    <label><span><i className="fa fa-cc-visa"></i> Credit Card/Debit Card</span></label>
                    <input type="radio" name="pay" id="bc2" className="radio"/>
                    <label><span><i className="fa fa-cc-paypal"></i> UPI</span></label>
                </div>
            </div>
            <div className="input-group3">
                <div className="input-box4">
                    <input type="tel" placeholder="Card Number" required className="name"/>
                    <i className="fa fa-credit-card icon"></i>
                </div>
            </div>
            <div className="input-group3">
                <div className="input-box4">
                    <input type="tel" placeholder="Card CVC" required class="name"/>
                    <i className="fa fa-user icon"></i>
                </div>
                <div className="input-box4">
                    <select>
                        <option>01 jul</option>
                        <option>02 jul</option>
                        <option>03 jul</option>
                    </select>
                    <select>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                    </select>
                </div>
            </div>
            <div className="input-group3">
                <div className="input-box4">
                    <Link to="/Main">
                      <button className="paybtn" type="submit">PAY NOW</button>
                      </Link>
                </div>
            </div>
        </form>
    </div>
);
}
export default Payment;