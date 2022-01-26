import useClicksWithinTimePeriod from './useClicksWithinTimePeriod';

export default function useClickCrashSimulator(clickCountThreshold = 10, timeoutPeriodMilliseconds = 1000) {
    const [clickCount, handleClick] = useClicksWithinTimePeriod(timeoutPeriodMilliseconds);

    if (clickCount >= clickCountThreshold) {
        throw new Error('This is a test javascript crash!');
    }

    return handleClick;
}
