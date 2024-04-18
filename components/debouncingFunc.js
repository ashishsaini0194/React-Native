let timeout;

export const debouncingFunc = (funcToExecute, time) => {
    if (time) {
        clearTimeout(timeout)
        timeout = null;
    }
    timeout = setTimeout(() => {
        funcToExecute()
    }, [time])
}