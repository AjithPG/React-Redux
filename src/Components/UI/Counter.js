import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { increase_count, decrease_count } from "../../Redux/count/countSlice";
function Counter() {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(increase_count());
  };

  const decrement = () => {
    dispatch(decrease_count());
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is - {count}</h3>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default Counter;
