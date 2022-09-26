function isPalindrome (str) {
    let lowerstr = str.toLowerCase();
    let len = lowerstr.length;
    let mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (lowerstr[i] !== lowerstr[len - 1 - i]) {
            return false;
        }
    }

    return true;
}


module.exports = {
    isPalindrome
}
