// /**
//  * @param {character[]} chars
//  * @return {number}
//  */
// var compress = function(chars) {
//     // let hash = {};
//     // for(let char of chars) {
//     //     hash[char] = (hash[char] ?? 0) + 1;
//     // };
//     // let compression = [];
//     // for(let char in hash) {
//     //     compression.push(char);
//     //     if (hash[char] > 1) compression.push(...String(hash[char]).split(''))
//     // };
//     // return compression;
//     let s = ''; let count = 0;
//     for(let i=0;i<chars.length;i++) {
//         if (s.length > 0 ) {
//             if (chars[i] != s[s.length-1]) {
//                 if (count > 1) s+=String(count);
//                 s+=chars[i];
//                 count = 1
//             } else if(i == chars.length-1){
//                 if (count > 1) s+=String(count);
//             } else {
//                 count ++;
//             };
//         } else {
//             s+=chars[i];
//             count = 1;
//         }
//     };
//     chars = s.split('');
//     return chars;
// };



/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let count = 1;
    for(let i = 0;i<chars.length;i++) {
        if (i < chars.length-1 && chars[i] == chars[i+1]) count++;
        else if ((i == chars.length-1 || chars[i] != chars[i+1]) && count > 1 ) {
            let init = (i-(count-1))+1;
            let len = String(count).length;
            for (let j = 0;j<len;j++) {
                chars[init+j] = String(count)[j]
            };
            init += len;
            chars.splice(init,count-(len+1));
            i -= count-(len+1);
            count = 1;
        };
    };
    return chars.length;
};

console.log(compress(["a","a","a","b","b","a","a"]));