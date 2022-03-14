exports.bruteForce = () => {
    let cesar = "DW EGL VW HSKKW HGMJ NSDAVWJ WKL LGML KAEHDWEWFL";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i <= 25; i++) {
        for(let j = 0; j <= cesar.length; j++) {
            let currentChar = cesar.charAt(j);
            let offset = i + alphabet.indexOf(currentChar) % 26;
            console.log(offset)
        }
    }

}