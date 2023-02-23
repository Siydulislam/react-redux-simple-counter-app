import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

export default function HooksCounter() {
    const count = useSelector(state => state.value);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(increment());
    }

    const decrementHandler = () => {
        dispatch(decrement());
    }

    return (
        <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div class="text-2xl font-semibold">{count}</div>
            <div class="flex space-x-3">
                <button class="bg-indigo-400 text-white px-3 py-2 rounded shadow" onClick={incrementHandler}>
                    Increment
                </button>
                <button class="bg-red-400 text-white px-3 py-2 rounded shadow" onClick={decrementHandler}>
                    Decrement
                </button>
            </div>
        </div>
    )
}