import { useState, useCallback } from 'react';

export default function useClicksWithinTimePeriod(timeoutPeriodMilliseconds = 1000) {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = useCallback(() => {
        setClickCount(currentCount => currentCount + 1);
        setTimeout(() => {
            setClickCount(currentCount => currentCount - 1);
        }, timeoutPeriodMilliseconds);
    }, [setClickCount, timeoutPeriodMilliseconds]);

    return [clickCount, handleClick];
}
