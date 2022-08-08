var maxProfit = function (prices) {
    let buyDay = 0;
    let sellDay = 1;
    let totalProfit = 0;
    while (sellDay < prices.length) {
        if (prices[buyDay] < prices[sellDay]) {
            let profit = prices[sellDay] - prices[buyDay];
            totalProfit = Math.max(totalProfit, profit);
        } else {
            buyDay = sellDay;
        }
        sellDay++;
    }
    console.log(totalProfit);
};

maxProfit([7, 1, 5, 3, 6, 4]);
