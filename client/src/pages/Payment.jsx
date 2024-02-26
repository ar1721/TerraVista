import React, { useState } from 'react';
import './Payment.css'; // Importing CSS file for styling

const Payment = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulating payment processing (can be replaced with actual API call)
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2000);
  };

  return (
    <div className="payment-form">
        <div className='heading-pay'>Payment Form</div>
      {paymentSuccess ? (
        <div>
          <h2>Payment Successful!</h2>
          <p>Thank you for your payment.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" className="input-field" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Billing Address:
            <input type="text" className="input-field" value={address} onChange={(e) => setAddress(e.target.value)} />
          </label>
          <br />
          <button type="submit" className="pay-pay-button bg-green-500 text-white px-8 py-5 my-2 rounded-md cursor-pointer w-full opacity-90">Pay Now</button>
        </form>
      )}
    </div>
  );
};

export default Payment;
