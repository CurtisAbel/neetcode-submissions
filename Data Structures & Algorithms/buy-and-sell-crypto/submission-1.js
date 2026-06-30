class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let profit = 0;
        let lowestBuyPrice = Infinity;

        
        for(let i = 0; i < prices.length; i++){

           if(prices[i] < lowestBuyPrice) lowestBuyPrice = prices[i];
          
          if(prices[i]-lowestBuyPrice > profit){
            profit = prices[i]-lowestBuyPrice;
          };
        }
        
        return profit;

    }
}
