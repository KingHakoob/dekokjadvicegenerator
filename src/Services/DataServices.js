async function GetAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    return data;
}

export { GetAdvice }