var longestPalindrome = function (s) {
    const count = Array(128).fill(0);
    for (const c of s) {
        count[c.charCodeAt(0)]++;
    }
    let res = 0;
    for (const n of count) {
        res += n % 2 == 0 ? n : n - 1;
    }
    return res == s.length ? res : res + 1;
};
