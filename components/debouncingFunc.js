let timeout;

export const debouncingFunc = (funcToExecute = () => { }, time) => {
    if (timeout) {
        clearTimeout(timeout)
        timeout = null;
    }
    timeout = setTimeout(funcToExecute, time)
}