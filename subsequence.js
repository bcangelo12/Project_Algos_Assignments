var isSubsequence = function (s, t) {
    // let arrS = s.split("");
    // let arrT = t.split("");
    // let temp = "";

    // for (i = 0; i < arrS.length; i++) {
    //     for (j = 0; j < arrT.length; j++) {
    //         if (arrS[i] == arrT[j]) {
    //             temp += arrT[j];
    //         }
    //     }
    // }
    // console.log(temp)
    // if(s === temp) {
    //     console.log(true);
    // } else {
    //     console.log(false);

    let sCount = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[sCount] === t[i]) {
            sCount += 1;
        }
    }
    return s.length === sCount;
};

isSubsequence("acb", "ahbgdc");
