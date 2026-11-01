/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    while(s.length > 0 && s.indexOf(part) != '-1') {
       s = s.replace(part, '');
    };
    return s;
};

console.log(removeOccurrences("aabababa", "aba")); // Output: "dab"