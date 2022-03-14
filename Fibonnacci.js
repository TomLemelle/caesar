exports.listFibonacci = (n) => {
    let fibonacci = [0, 1];
    for (let i = 1; i < n; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    };
    return fibonacci;
}