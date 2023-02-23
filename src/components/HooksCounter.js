import { useSelector } from "react-redux";

export default function HooksCounter() {
    const count = useSelector(state => state.value);

    return (
        <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div class="text-2xl font-semibold">{count}</div>
            {/* <div class="flex space-x-3">
                <button class="bg-indigo-400 text-white px-3 py-2 rounded shadow">
                    Increment
                </button>
                <button class="bg-red-400 text-white px-3 py-2 rounded shadow">
                    Decrement
                </button>
            </div> */}
        </div>
    )
}