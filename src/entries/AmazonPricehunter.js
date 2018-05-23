import React from 'react';

const entry = {
  slug: 'amazon-pricehunter',
  title: "Amazon Pricehunter",
  hero: "src/images/trading.jpg",
  content: (
    <div>
      <h3>What is it?</h3>

      <p>
        <a href="https://github.com/michaelstorm/amazon-pricehunter" className="entry--github-link">
          <img src="src/images/GitHub-Mark-32px.png" /> <span>Amazon Pricehunter</span>
        </a> is a "trading engine" that finds price differences between Amazon products and offers for those same products
        elsewere on the Internet. You can use it as the backend for a comparison shopping assistant, a dropshipping operation,
        market research, or whatever's in your heart.
      </p>

      <p className="entry--note">
        Spoiler: if you can quickly and safely receive, store, and ship a lot of TVs, you might have a viable dropshipping
        business model. I live in a three-story walkup in the Mission in San Francisco, so it's all yours.
      </p>

      <h3>The idea</h3>

      <p>
        A few months ago, I noticed that shopping on Amazon was <i>convenient</i>, but not always
        the <i>cheapest</i> option for high-ticket items. For example:
      </p>

      <div className="side-by-side">
        <div className="side-by-side--choice">
          <div className="side-by-side--image-container">
            <img className="side-by-side--image" src="src/images/ps4_amazon.png" />
          </div>
          <span className="side-by-side--caption">
            Amazon
          </span>
        </div><div className="side-by-side--choice">
          <div className="side-by-side--image-container">
            <img className="side-by-side--image" src="src/images/ps4_google_shopping.png" />
          </div>
          <span className="side-by-side--caption">
            Google Shopping
          </span>
        </div>
      </div>


      <p>
        Then I Googled around and found it wasn't always the cheapest option for low-ticket items either. That
        makes all of the items. And that piqued my curiosity.
      </p>

      <h3>Two star-crossed product aggregators</h3>

      <p>
        The Amazon market is remarkably similar to an electronic stock or commodities exchange. There are sellers making a range of offers
        for standardized products, but those offers are aggregated in order to show buyers the "current" price.
        That makes it easy for a buyer who clicks "Buy It Now" not to care where it's coming from; they just care that they're
        getting the best price. As long as it's delivered within the timeframe allowed by the exchange, you could get it off the
        back of a truck.
      </p>

      <p>
        Some people do the next-best thing by running down to their local Target and buying all the soap dispensers, flipping them on Amazon,
        and making a quick buck. I.e., "drop shipping". Or, to put it another way, "how a commodities market works". If your local cows
        are less expensive than the ones at the market, congratulations: you're about to sell a lot of cows.
      </p>

      <p>
        But arbitrage&mdash;if you want to call it arbitrage&mdash;is much better when it's automated. So let's take a cue from the
        big guns in electronic markets, hook two <i>exchanges</i> together, and arbitrage across them. That is:

        <ol>
          <li>Find Amazon products listed elsewhere for less.</li>
          <li>Offer those products on Amazon at a slight discount to the prevailing price, without buying them ahead of time.</li>
          <li>Buy them from the third-party merchant whenever an Amazon order comes in.</li>
          <li>Ship them to myself and remove third-party markings.</li>
          <li>Re-ship them to the customer such that they arrive in an acceptable time window.</li>
          <li>Pocket the difference in price.</li>
        </ol>

        No inventory to buy or hold, no demand to predict. Just pure arbitrage, minus shipping and labor
        costs. Eventually, it could be automated: there are remailing services that
        will receive packages and re-ship them to an address of your choosing. Or TaskRabbits could handle it.
      </p>

      <p>
        But would the math work? Would there be enough products like this, and demand for them? Would the discount from the best
        prevailing offer on Amazon, Amazon's cut, and shipping costs leave me with chump change? I needed data
        to find out. There was work to be done, and I was going to use this to avoid it.
      </p>

      <h3>Getting that sweet Amazon data</h3>

      <p>
        Amazon provides a "Product Advertising API", which is intended for affiliate marketers. Marketer writes blog post,
        drops in Amazon widget with keywords from blog, widget shows relevant items, reader clicks and buys items,
        marketer gets commission. You can search by keyword, department, etc., and get back item titles, descriptions, prices,
        conditions, sizes, product codes, etc. Funnily enough, Amazon <i>really</i> doesn't like people who crawl their product
        listings, even though they provide an API to do... basically just that. So they rate-limit you to one request per second.
      </p>

      <p>
        Which is adorable, because you can just make a dozen Amazon Seller accounts and use them all in parallel from one IP address.
      </p>

      <h3>Getting that sweet everyone-else data</h3>

      <p>
        For the second exchange, we could pick another single merchant, like Best Buy, Home Depot, etc. But crawling even an individual
        merchant is hard, and I didn't want to build a dozen adapters for the largest merchants just to find out eleven of them gave
        bad results. Another option is to be a little more opportunistic, and instead pick an aggregator of many
        merchants: <a href="https://datafeedr.github.io/datafeedr-api-docs/">Datafeedr</a>.
        Amusingly, using Datafeedr is a bit like the bond market. With
        bonds, traders literally call one another and ask what they'd sell a particular bond for. With Datafeedr, you get a price, other
        data, and a URL, and you have to go and find out whether that info is even remotely accurate. Maybe not so much like bonds, but
        the market is indeed less... liquid.
      </p>

      <p>
        In any case, most Amazon products have a UPC/EIN/ISBN, and Datafeedr's API supports searching by that! (Datafeedr's API
        is weirdly fantastic. One of the best search APIs I've used. And AFAIK it mostly just supports their Wordpress plugin.)
        So we can use the product code to match prices.
      </p>

      <h3>Building an Amazon crawler</h3>

      <p>
        The most interesting question of all is: how do you even find <i>all</i> of the products on Amazon? The API doesn't support a
        "give me everything" query and then you just paginate through millions of products; you have to specify
        keywords, IDs, categories, etc. As a thought exercise: starting with knowledge of exactly one
        Amazon product, describe a strategy for enumerating all Amazon products in the minimum number of queries. It's important to
        keep query count low because prices become
        stale quickly, and you only have so many queries you can make before Amazon catches on. And the API has a hard limit of 100
        results per query.
      </p>

      <p className="entry--note">
        For context: Amazon
        lists <a href="https://www.scrapehero.com/many-products-amazon-sell-january-2018/">~562 million products</a>. Getting the sales
        rankings of those products would take at least 56 million queries. (Actually more, since products can be listed in more than
        one category.) Getting the details of those products would be an additional 562 million &times; 2 = 1.1 billion queries. Assuming we
        had a perfect crawling strategy, it would take ~1,300 crawlers to refresh every product every 24 hours. Which, honestly, may
        still be a blip on Amazon's radar. But in this case, it's still easier to have a smarter strategy than manage over a thousand bots.
      </p>

      <p>
        I originally thought I'd have to pick keywords out of product listings, but it turns out that browse nodes are
        incredibly convenient for this purpose. They're Amazon's name for product categories, and they form a directed acyclic
        graph. This gives us a way to discover products: start with a broad
        category like "Electronics", list the top 100 items under it, get the browse nodes of those items, rinse, repeat. And we can
        use the number of levels down a browse node is as a proxy for importance. That is, the top sellers of Electronics are likely
        to beat the top sellers of Electronics -> Video Game Systems.
      </p>

      <h3>And crawling Datafeedr</h3>

      <p>
        Next, we filter those items. Anything below $15 is out; there just isn't enough room for profit. Anything over $500 is
        also out, because I don't want to sink too much capital into single items. We only consider items in new condition. Those
        items must have UPCs, EINs, or ISBNs. The price for those items from Datafeedr must be at least $15 less than the best
        Amazon price, and the Datafeedr merchant must be on the "non-skeezy" list that I created by hand. The Datafeedr price must
        also be no cheaper than 60% of the Amazon price, as a sanity check.
      </p>

      <p>
        Unfortunately, a significant portion of Datafeedr product listings show a different price when I manually retrieve them.
        This could be for two reasons: Datafeedr's internal crawler doesn't update very frequently, which makes Datafeedr much less
        useful, or the offers are gone by the time I investigate. To determine which case it is, we need... a crawler. To crawl the
        crawled results from Datafeedr's crawler.  (I never did calculate good numbers on this, but the secondary crawler exists.)
      </p>

      <h3>Putting it all together</h3>

      <p>
        After quite a bit of number crunching on the SQLite data, here's a selection of the results:
      </p>

      <p className="entry--content--pre">
        <pre>+------------+-------+------------+------------------------------------------------+----------------------------------------------------+---------+-----------+-----------+-------------+---------------+--------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------+<br/>
| ASIN       | Layer | Sales Rank | Browse nodes                                   | Title                                              | Amazon  | Condition | Datafeedr | Cond        | Diff          | Webpage                                                                              | URL                                                                                                                        |<br/>
+------------+-------+------------+------------------------------------------------+----------------------------------------------------+---------+-----------+-----------+-------------+---------------+--------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------+<br/>
| B019VM3CPW | 0     | 0          | 7141123011 "Clothing, Shoes & Jewelry"         | Fitbit Blaze Smart Fitness Watch, Black, Silver, L | 187.10  | New       | 135.86    | new         | 51.24 (27%)   | file:///home/michael/ebooks/prices/2017-11-12/B019VM3CPW/www.very.co.uk/222530.html  | http://www.very.co.uk/fitbit-alta-fitness-tracker/1600068913.prd                                                           |<br/>
|            |       |            |                                                |                                                    |         |           | 135.86    | new         | 51.24 (27%)   | file:///home/michael/ebooks/prices/2017-11-12/B019VM3CPW/www.very.co.uk/222532.html  | http://www.very.co.uk/fitbit-alta-fitness-tracker/1600068913.prd?sku=sku20127404                                           |<br/>
| B00FLYWNYQ | 0     | 0          | 2619525011 "Appliances"                        | Instant Pot DUO60 6 Qt 7-in-1 Multi-Use Programmab | 67.99   | Used      | 14.99     | new         | 53.00 (78%)   | file:///home/michael/ebooks/prices/2017-11-12/B00FLYWNYQ/www.bonanza.com/221162.html | https://www.bonanza.com/listings/AC-Power-Cord-for-Instant-Pot-IP-DUO60-IP-DUO50-Smart-and-Ultra-Pressure-Cooker/465982322 |<br/>
|            |       |            | 1055398 "Home & Kitchen"                       |                                                    |         |           |           |             |               |                                                                                      |                                                                                                                            |<br/>
| B01019T6O0 | 0     | 1          | 229534 "Software"                              | Microsoft Windows 10 Home USB Flash Drive          | 105.00  | New       | 19.39     | new         | 85.61 (82%)   | file:///home/michael/ebooks/prices/2017-11-12/B01019T6O0/www.bonanza.com/217568.html | https://www.bonanza.com/listings/Windows-10-Home-32-64-Bit-Full-Retail-Edition-Full-Edition-Lifetime/500982763             |<br/>
|            |       |            |                                                |                                                    |         |           | 19.39     | new         | 85.61 (82%)   | file:///home/michael/ebooks/prices/2017-11-12/B01019T6O0/www.bonanza.com/217575.html | https://www.bonanza.com/listings/Windows-10-Home-32-64-Bit-Fast-Download-Lifetime-Official/503201958                       |<br/>
|            |       |            |                                                |                                                    |         |           | 20.27     | new         | 84.73 (81%)   | file:///home/michael/ebooks/prices/2017-11-12/B01019T6O0/www.bonanza.com/217572.html | https://www.bonanza.com/listings/Windows-10-Enterprise-32-64-Bit-Full-Retail-Edition/508724013                             |<br/>
|            |       |            |                                                |                                                    |         |           | 20.27     | new         | 84.73 (81%)   | file:///home/michael/ebooks/prices/2017-11-12/B01019T6O0/www.bonanza.com/217573.html | https://www.bonanza.com/listings/Genuine-Product-Windows-10-Enterprise-32-64-Bit-Full-Retail-Edition/512674412             |<br/>
| B075N7RDTM | 0     | 5          | 172282 "Electronics"                           | Nintendo Switch - Super Mario Odyssey Edition      | 459.99  | New       | 379.99    |             | 80.00 (17%)   | file:///home/michael/ebooks/prices/2017-11-12/B075N7RDTM/www.walmart.com/215372.html | http://www.walmart.com/ip/Nintendo-Switch-Super-Mario-Odyssey-Edition/56205102                                             |<br/>
|            |       |            | 468642 "Video Games"                           |                                                    |         |           |           |             |               |                                                                                      |                                                                                                                            |<br/>
.            .       .            .                                                .                                                    .         .           .           .             .               .                                                                                      .                                                                                                                            .<br/>
.            .       .            .                                                .                                                    .         .           .           .             .               .                                                                                      .                                                                                                                            .<br/>
.            .       .            .                                                .                                                    .         .           .           .             .               .                                                                                      .                                                                                                                            .<br/>
| B006QMGSDO | 3     | 88         | 3563987011 "Plant Covers"                      | Nuvue Winter Shrub Cover Hunter Green Fiberglass   | 114.25  | BuyButton | 18.11     | new         | 96.14 (84%)   |                                                                                      | http://www.homedepot.ca/en/home/p.1000709901.html                                                                          |<br/>
|            |       |            |     3610851 "Gardening & Lawn Care"            |                                                    |         |           |           |             |               |                                                                                      |                                                                                                                            |<br/>
|            |       |            |     3238155011 "Categories"                    |                                                    |         |           |           |             |               |                                                                                      |                                                                                                                            |<br/>
|            |       |            |     2972638011 "Patio, Lawn & Garden"          |                                                    |         |           |           |             |               |                                                                                      |                                                                                                                            |<br/>
+------------+-------+------------+------------------------------------------------+----------------------------------------------------+---------+-----------+-----------+-------------+---------------+--------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------+</pre>
      </p>

      <p>
        According to the above (and some other) rules, these are some of the most "interesting" products for sale when
        I last ran this a few months ago. Not shown are the most common product categories: TVs and high-end cameras. The TVs I
        have no means to receive and re-ship, while the offers for cameras turned out to be ghosts. Therein lies the rub: you end
        up spending a lot of time verifying that Datafeedr listings are accurate. Even for well-known merchants, like Best Buy.
      </p>

      <p>
        Every once in a while, though, you stumble across a product that's <i>really</i> enticing. Like the Nintendo Switch above.
        I suspect that, with more effort and more start-up capital than I'm willing to commit, there's a side gig for someone in
        here. If you're that someone, drop me a line. I'm excited to know that someone found a use for this.
      </p>
    </div>
  )
};

export default entry;
