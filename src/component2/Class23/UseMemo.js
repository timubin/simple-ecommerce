import React, { useState } from "react";
import { useMemo } from "react/cjs/react.development";

function UseMemo() {
  const [amount, setAmount] = useState(0);

  const calculationBigFormula = (amount) => {
    return amount + rendomNumber(1, 4);
  };
  const calculatedAmount = useMemo(() => calculationBigFormula(amount));

  const clickCalculateAmount = () => {
    setAmount(rendomNumber(1, 4));
  };

  function rendomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  return (
    <div>
      <h2>UseMemo Hook React</h2>
      <hr />
      <p>Amount {amount}</p>
      <button onClick={clickCalculateAmount}>Update Amount</button>
      <p>Calc Amount - {calculatedAmount}</p>
    </div>
  );
}

export default UseMemo;
