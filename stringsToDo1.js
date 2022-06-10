function removeBlanks(str) {
    let a = "";
    for (i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            a += str[i];
        }
    }
    return a;
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));

function getDigits(str) {
    let b = "";
    for (i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            b += str[i];
        }
    }
    return b;
}

console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

function acronym(str) {
    let c = "";
    let words = str.split(" ");
    for (i = 0; i < words.length; i++) {
        let letters = words[i].split("");
        c += letters[0].toUpperCase();
    }
    return c;
}

console.log(acronym("there's no free lunch - gotta pay yer way."));
console.log(acronym("Live from New York, it's Saturday Night!"));

function countNonSpaces(str) {
    let count = 0;
    for (let char in str) {
        if (str[char] != " ") {
            count++;
        }
    }
    return count;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));

function removeShorterStrings(arr, num) {
    let d = [];
    let index = 0;
    for (let value in arr) {
        if (arr[value].length >= num) {
            d[index] = arr[value];
            index++;
        }
    }
    return d;
}

console.log(
    removeShorterStrings(
        ["Good morning", "sunshine", "the", "Earth", "says", "hello"],
        4
    )
);

console.log(
    removeShorterStrings(["There", "is", "a", "bug", "in", "the", "system"], 3)
);
