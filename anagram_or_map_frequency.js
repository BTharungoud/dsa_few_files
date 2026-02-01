s = "anagram", t = "nagara"

const method1 = (str1, str2) => {
    let hash = {};
    let isAnagram = true;
    for (let i = 0; i < str1.length; i++) {
        if (hash[str1[i]]) hash[str1[i]] += 1;
        else hash[str1[i]] = 1;
    };
    for (let i = 0; i < str2.length; i++) {
        if (hash[str2[i]]) hash[str2[i]] -= 1;
        else hash[str2[i]] = 1;
    };
    Object.values(hash).forEach((ele) => {
        if (ele != 0) return isAnagram = false
    });
    return isAnagram;
};

console.log("Is Valid Anagram", method1(s, t));