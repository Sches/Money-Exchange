// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var count = new Object();
    var H = 0, Q = 0, D = 0, N = 0, P = 0;
    if(currency <= 0)
    {
        return count;
    }
    if(currency > 10000)
    {
        count = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return count;
    }
    var dif = 50;
    while(currency-dif >= 0)
    {
        currency-=dif;
        H++;
    }
    dif = 25;
    while(currency-dif >= 0)
    {
        currency -= dif;
        Q++;
    }
    dif = 10;
    while(currency-dif >= 0)
    {
        currency -= dif;
        D++;
    }
    dif = 5;
    while(currency-dif >= 0)
    {
        currency -= dif;
        N++;
    }
    dif = 1;
    while(currency-dif >= 0)
    {
        currency -= dif;
        P++;
    }
    if( H >0)
    {
        count.H = H;
    }
    if( Q >0)
    {
        count.Q = Q;
    }
    if( D >0)
    {
        count.D = D;
    }
    if( N >0)
    {
        count.N = N;
    }
    if( P >0)
    {
        count.P = P;
    }
    return count;
}
