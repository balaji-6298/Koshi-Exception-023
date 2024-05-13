import React, { useState } from 'react';
import './coupon.css'; // Import CSS file

const Coupon = () => {
  const [generated, setGenerated] = useState([]);
  const [length, setLength] = useState(5); // State for coupon length
  const [count, setCount] = useState(5); // State for number of codes
  const [possible, setPossible] = useState("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");

  const generateCodes = () => {
    const codes = [];
    for (let i = 0; i < count; i++) {
      codes.push(generateCode());
    }
    setGenerated(codes);
  };

  const generateCode = () => {
    let text = "";
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    generateCodes();
  };

  const scratchCoupon = (index) => {
    const newGenerated = [...generated];
    newGenerated[index] = "You get extra 20% discount";
    setGenerated(newGenerated);
  };

  return (
    <div className="coupon-generator">
      <form className="coupon-form" onSubmit={handleGenerate}>
        <h1 className="coupon-heading">Coupon Generator</h1>
        <input className="coupon-length" type="number" min="2" placeholder="How long your codes will be?" value={length} onChange={(e) => setLength(e.target.value)} />
        <input className="coupon-count" type="number" min="1" placeholder="How many code you want?" value={count} onChange={(e) => setCount(e.target.value)} />
        <input className="coupon-possible" type="text" placeholder="Possible characters" defaultValue="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" onChange={(e) => setPossible(e.target.value)} />
        <button className="coupon-generate" type="submit">Generate</button>
      </form>
      <div className="coupon-list">
        {generated.map((coupon, index) => (
          <div className="coupon-item" key={index}>
            <span className="coupon-text">{coupon}</span>
            <button className="coupon-scratch" onClick={() => scratchCoupon(index)}>Scratch</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupon;
