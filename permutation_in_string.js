/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const freqBuilder = (str) => {
        let hash = {}
        for(let i=0;i<str.length;i++){
            hash[str[i]] = (hash[str[i]] ?? 0) + 1;
        } return hash;
    };
    const compareFreq = (hash1, hash2) => {
        for(const a in hash1) {
            if (hash1[a] !== hash2[a]) return false;
        }; return true;
    };
    const hash = freqBuilder(s1);

    let p1 = 0;
    const winLen = s1.length;
    while (p1+winLen<=s2.length){
        let winFre = freqBuilder(s2.slice(p1,winLen+p1));
        const isMatch = compareFreq(hash, winFre);
        if (isMatch) return isMatch;
        p1++;
    };
    return false;
};
console.log(checkInclusion("ab", "eidbaooo")); // Output: true