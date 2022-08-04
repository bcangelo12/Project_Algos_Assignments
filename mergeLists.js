var mergeTwoLists = function (list1, list2) {
    // let mergedList = list1.concat(list2);
    // console.log(mergedList);
    // for (let i = 0; i < mergedList.length; i++) {
    //     if (mergedList[i] > mergedList[i + 1]) {
    //         [mergedList[i], mergedList[i + 1]] = [
    //             mergedList[i + 1],
    //             mergedList[i],
    //         ];
    //     }
    // }
    // for (let i = 0; i < mergedList.length; i++) {
    //     if (mergedList[i] > mergedList[i + 1]) {
    //         [mergedList[i], mergedList[i + 1]] = [
    //             mergedList[i + 1],
    //             mergedList[i],
    //         ];
    //     }
    // }
    // return mergedList;
    if (list1 == null) {
        return list2;
    }
    if (list2 == null) {
        return list1;
    }
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

mergeTwoLists([1, 2, 4], [1, 3, 4]);
