/**
 * This class is an abstraction of a result from a remote pricing engine
 */
class Price {
    #buy;
    #sell;
    #tradePair;

    /**
     * @constructor
     * @param {number} buy Buy price
     * @param {number} sell Sell price
     * @param {string} pair Trade pair for prices
     */
    constructor(buy, sell, pair) {
        this.#buy = buy;
        this.#sell = sell;
        this.#tradePair = pair;
    }

    /**
     * @returns {string} The trade pair for this set of pricing
     */
    get pair() { return this.#tradePair; }

    /**
     * @returns {number} Mid point between {@link Price.#buy} and {@link Price.#sell}
     */
    mid() { return this.#sell + (this.#buy - this.#sell); }

    /**
     * @returns {string} Quote currency (counter currency) of {@link Price.#tradePair}
     */
    quote() { return this.#tradePair.substring(3); }
}

class Datasource {
    /**
     * Retrieves a set of prices from a remote pricing engine.
     * 
     * @returns {Promise<Array<Price>>} A Promise that resolves to an array of prices
     */
    getPrices() {
        return fetch("https://static.ngnrs.io/test/prices")
            .then((response) => response.json())
            .then((data) => data.data.prices.map((price) => new Price(price.buy, price.sell, price.pair)));
    }
}

const ds = new Datasource();

ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`);
        });
    }).catch(error => {
        console.err(error);
    });
