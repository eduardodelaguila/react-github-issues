import { useState, useEffect } from 'react';

/*
    Instead of handle the problems that useffect and debounced functions, such as
    working with teh states and updates, I decided to debounce the change of the value.
    This returns a debounced value that useffect will listen, making it easier to handle
    and providing the same functionality as a debounced function.
*/
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;
