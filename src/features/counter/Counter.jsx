import { useSelector, useDispatch } from "react-redux";
import { 
    increment, 
    decrement, 
    reset, 
    incrementByAmount 
} from "./counterSlice";
import { useState } from "react";
//we're going to need useState for the incrementByAmount bit. 

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  //because we're using a text imput for incrementAmount, we want to make sure the value is a number, and if it's not a number, we want to return 0. this avoids a returned value of NaN.
  const addValue = Number(incrementAmount) || 0

  //function to reset all. we want to reset the state, but also the useState value of the incrementAmount.
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset()); //this resets the global state in out store
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>

      <label htmlFor="addAmount"></label>
      <input
        type="text"
        name="addAmount"
        id="addAmount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      >
      </input>

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add amount</button>
        <button onClick={resetAll}>Reset</button>

      </div>
    </section>
  );
};

export default Counter;
