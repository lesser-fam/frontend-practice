import { useState } from "react";

interface UseCounterReturn {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const useCounter = (initialValue: number = 0): UseCounterReturn => {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);
    const reset = () => setCount(initialValue);

    return { count, increment, decrement, reset };
};

export default useCounter;
