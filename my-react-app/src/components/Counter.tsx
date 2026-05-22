import { useCounterStore } from "../store/counterStore";

function Counter() {
    // ストアから必要なstateとactionを取得
    const { count, increment, decrement } = useCounterStore();

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
