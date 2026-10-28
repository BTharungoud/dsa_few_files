function merge (nums1, m, nums2, n) {
    let j = 0;
    for(let i= j; i<m+n; i++) {
        if (nums1[i] >= nums2[j] && j<=n) {
            nums1.splice(i,0,nums2[j]);
            j++;
        };
        if (nums1[i] == 0) {
            if(j<n) {
                nums1.splice(i,0,...nums2.slice(j,n));
                i += n-j;
            };
            nums1.splice(i,n);
            break;
        }
    };
    return nums1;
};

console.log(merge([2,0], 2, [1], 1));