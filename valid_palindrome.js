/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = '';
    for(const char of s){
        if (/[a-zA-Z]/.test(char)) str += char;
    };
    str = str.toLowerCase();
    console.log(str);
    return str === str.split('').reverse().join('');
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[\W_]/g,'');
    let l = 0;
    let r = s.length-1;
    while (l<r){
        if (s[l] != s[r]) return false;
        l++;
        r--;
    };
    return true;
};