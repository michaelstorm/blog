import React from 'react';

const entry = {
  slug: 'domain-name-double-auctions',
  title: "What if domain name auctions went both ways?",
  hero: "src/images/domain_auction.png",
  content: (
    <div>
      <p>Buying a domain name is a strange process. It's a piece of digital property, yet it's afflicted by the most physical of problems:</p>

      <ul>
        <li>Sellers are difficult to contact and are frequently only available through middlemen, if at all.</li>
        <li>Price discovery is difficult: a domain name has almost no utility in itself; its expected utility is a function of a lot of variables, many of which are dependent on the identity and purpose of the buyer. Participants can compare a domain name to "similar" ones that have previously sold at known prices -- if they can find that data. But what is "similar" with respect to domains? And the more in-demand a domain name is, the less likely it is to trade, which means that expensive domains will have less price history.</li>
        <li>Knowledge of a buyer's name or intentions can dramatically affect the price. If Google wants your domain, you know that the difference between $5,000 and $50,000 is nothing to them, so why not play hardball? By the same token, naive sellers will also be offered worse deals.</li>
      </ul>

      <p>
        These problems are not unique to domain names. Real estate has similar characteristics: opaque pricing, low
        trading volume, and a plethora of middlemen. But real estate has operated like that for centuries, or even
        millennia, and therefore has mountains of red tape preventing a better solution; what's our excuse?
      </p>

      <p>
        Some auction sites for domains exist, of course, but the ones I looked at seem to leak information about buyers
        and sellers. For example, Sedo informs buyers of the seller's "minimum offer", which tells them how the seller
        values their domain before they've even made an offer. GoDaddy Auctions, on the other hand, informs sellers and
        other buyers of every bid amount, and even shows the number of views particular domains get.
      </p>

      <p>
        A blind auction -- in which bids are submitted simultaneously and are undisclosed unless they meet the seller's
        reserve price -- would eliminate one-sided information disparities, but would exacerbate the problem of price
        discovery. Consider the scenario of a single buyer and seller. The seller's reserve price is $10,000, and the
        buyer bids $50,000. The buyer is clearly the loser in this scenario; if we consider both participants' opinions
        of the domain's value to have equal weight, the "real" price would be $30,000, and the buyer overpaid by $20,000.
        In a liquid market, this price would be discovered through trial and error. But the market for domain names is
        not liquid, and as stated above, aggregating market data to get equivalent information isn't easy or effective.
      </p>

      <p>
        So why not do exactly that? Allow both buyer and seller to "bid" on the value of the domain: if the buyer's
        value is higher than the seller's, the sale price is the average of the two. If the buyer's bid is lower than the
        seller's, no sale occurs. It turns out that this has a name, and is a well-understood concept in economics: a
        double auction. It seems to have desirable theoretical properties, although I am in no way an actual economist.
        It also has a certain curb appeal: a seller can list their domain for sale and be guaranteed to receive at least
        their reserve price (they'll likely get more!), and a buyer can make an offer on a domain and be guaranteed to pay
        no greater than their offer price (they'll likely pay less!). Both of them can be winners in the same
        transaction! Capitalism is fun when it's done on the back of an envelope.
      </p>
    </div>
  )
};

export default entry;
