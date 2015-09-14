---
layout: post
published: false
title: The Design of Xapo
author: Matt Henderson
twitter_username: mhenders
excerpt: Bitcoin is a digital currency that some have declared to be the most important technology to appear since the birth of the internet. One of its most promising uses is a store of value, conceptually similar to, but far superior than, gold. Whether one’s bitcoin holdings represent an asset class in a personal portfolio or the reserves of a corporation participating in the bitcoin economy, storage and security are of critical importance.
---

[1]: http://d.pr/i/108Tj+
[2]: http://d.pr/i/1bNCT+
[3]: http://d.pr/i/1kd55+
[4]: http://d.pr/i/bwiq+
[5]: http://d.pr/i/1bEr+
[6]: http://d.pr/i/19Tr0+
[7]: http://d.pr/i/hgOO+
[8]: http://d.pr/i/12AxH+
[9]: http://d.pr/i/1bmdv+
[10]: http://d.pr/i/18weO+
[11]: http://d.pr/i/1ftAx+
[12]: http://d.pr/i/1kpb4+
[13]: http://d.pr/i/I3hp+
[14]: http://d.pr/i/1hnPi+
[15]: http://d.pr/i/XnP8+
[16]: http://xapo.com

Since gold is a physical object, its security and storage is easily understood, as we imagine vaults manned by security guards. While cash is also a physical object, the reality of fiat currency is more abstract. Even so, most people comfortably related to the concept of a “bank” as the entity which stores, protects and provides access to our currency. We can imagine cash stored in vaults and intuitively understandy why you’d want a savings account separate from a checking account.

Bitcoin isn’t physical; it’s mathematical. “Owning” of a bitcoin means controlling a complex number known as a “private key”. Bitcoin transactions are irreversable.

For products offering storage and security of one’s bitcoins, the translation of such foreign concepts to terms and mental models that are understandable by consumers represents a considerable design challenge, and an important one in contributing to the widespread adoption of this promising technology.

## Xapo and Wences Casares

When considering bitcoin storage options, I signed up for an account at [Xapo][16]. After a few weeks, however, I stopped using Xapo in favor of another option. Without giving it much thought, something just didn’t feel quite “right” about the product.

A while later, however, I picked up a copy of the wonderful book, “Digital Gold”, by Nathaniel Popper. In his telling of the bitcoin history, we’re introduced to Wences Casares, a successful Argentine entrepreneur and founder of Xapo. I so related to the life experiences, frugal disposition, worldview and passions of Wences, that I finished the book thinking, “If I could work with anyone in the bitcoin industry, it would be with him.”

And that led me to think deeper about why Xapo didn’t stick with me as a product, and what I’d do to fix it.

In the next section of the article, I’ll attempt to retrace my onboarding experience with the Xapo product, highlighting any friction, confusion or inconsistencies I felt along the way. Afterwards, I’ll reflect on the approach I’d take to designing the product.

Re-reading my review, I notice that it grows “harsher” in tone. My hope is that doesn’t come across as offensive, because I realize that growing harshness is a direct reflection of the growing frustration I felt in my introduction to the product.

## So you’ve landed on Xapo

When you land at Xapo, you’re greeted with large message:

![][3]

My very first impression is that the word “most” must be missing, i.e. that it was supposed to have read, “The world’s *most* secure bitcoin wallet”. But that’s a minor detail.

This first screen makes reference to “cold storage” and “multi-signature” technologies—concepts that are unlikely to be commonly understood, and this represents the first potential point of friction in terms of converting a new customer. If I were a new bitcoin user, still grappling with the concept of a “bitcoin wallet”, I think I’d feel unsure whether this product is or isn’t relevant to me.

Feeling unsure, I’m far more likely to click “Start tour”, than to directly create an account.

![][4]

Starting the tour, I’m dropped _straight_ into the the topic of “offline encrypted servers”, that are “never connected to the internet”. Again, this is the very second screen I see as a potential new Xapo customer, and possibly even a new bitcoin user.

Immediate questions that come to mind:

- If my bitcoins are offline, does that mean I can’t use them?
- Why are the servers “never connected to the internet”?

Clicking next…

![][5]

I’m on screen number three, and I’m looking at “Wave-blocking Faraday cages”. I’m guessing a lot of people leave at this point.

But for those willing to continue…

![][14]

Screen number four talks about storing my bitcoins in Switzerland. Is that even legal? I vaguely remember some recent stories about Americans getting in trouble for having money there. And is the length of the access column _really_ relevant to my decision to use this product?

We continue, just to finish the tour…

![][15]

Now we’re on a page which makes us feel we’re floating in space (with moving stars in the background), and boasting that Xapo has raised $40 million. This is the last screen in the product tour, and it’s the screen least related to the product. At this point, it doesn’t even feel like a product any more.

At this point, I’ve finished the “product tour”, but I feel I know even less about the product than I did at the beginning. I certainly am left with the impression that Xapo take security seriously, but I still don’t know exactly what Xapo _is_ or whether it’s relevant to _me_.

## The tour didn’t work. Let’s try navigating around.

Let’s look at the Xapo navigation.

![][7]

Six navigational items are equated visually:

- An “about” area, in which I hope I can learn more about what this product actually is.
- Two “product” areas, for the wallet and the vault.
- One “context” area, Institutions. (I’m an individual, so is there nothing for me?)
- A functional area, “login”
- And a hamburger menu, which, although it can have its place, is known to be a bad navigational concept, as you have no idea what you’re going to find there. There’s no cues and affordances.

Here’s the About page:

![][8]

OK, reading this, I’m now thinking that the product is somehow a _combination_ of a bitcoin wallet, but not exposed to the risks I’ve read about with other online wallets. In fact, this is not true—Xapo offer two separate products—a hot wallet that can be used immediately, and a cold wallet that requires 48 hours before retrieved funds are due.

Unfortunately, to learn more, I’ll need to tap the pulsating “arrow”, because the designers felt that before understanding the product, I’m more likely to want to read about the company’s investors.

When I click the down arrow, though, all that happens is that I _jump straight to the investors_.

## Let’s just create an account

I’ve created an account, I login, and I click to access the “Wallet”.

![][9]

In the wallet, and I see a credit-card shaped thing with a gear and a large “X” in the middle. I have no idea how to interpret the meaning of the big “X”? (Did I do something wrong?)

Conceptually, “My Address” is information, while “Transfer” and “Retrieve” are actions. They shouldn’t be treated identically in the visual UI.

Clicking on the gear brings me to here:

![][10]

Now I’m even more confused:

- I still don’t know why I’m looking at an “X”
- There’s a bit of contextual help information around the concept of “naming” my wallet, but there is zero contextual help information around the concepts of “Who can access this wallet?” (Why should anyone other than me have access?)

At this point I’m thinking, “OK, I was looking for a place to store my bitcoins, but this thing looks WAAY to complicated for my needs.”

Let’s click on the “vault”:

![][11]

Instead of the black used in the wallet, the vault is represented by a green card with a “V”. What does “V” mean—“Vault”? But if that were the case, the wallet would display a “W” instead of an “X”. And what are those three vertical white bars supposed to mean?

Say I want to transfer bitcoins into or out of the vault. Here’s what that looks like:

![][12]

This UI gives the impression I’m transfering from my black X (different typeface now) to my green “V” (with three vertical lines). And it looks like the black wallet’s balance is in bitcoin (BTC) but the vault’s balance is in US Dollars (USD).

And for some reason, whereas everywhere else in the site, the submit buttons span the width of the window, _here_ it’s shorter.


## Miscellaneous issues

I observered a number of other, minor, design and copy quibbles at the website, none of which are show-stoppers, but all these details compound in terms of experience and impression.

![][1]

When you say, “Secure bitcoin storage is what we do best,” the first thing that comes to my mind is, “Everything else we do, we do worse.”

![][2]

Here’s a layout issue, in which you can’t read the white text against the white background.

![][13]

Poor attention to detail. Margin spacing is off. Font size doesn’t make sense with respect to the rest of the site.

## Redesigning the product

The design of a product like Xapo is a big challenge, as it has to both bridge the conceptual gap between people’s existing mental models of currency storage, security and use, and the realities associated a complex system like Bitcoin.

And the design of a product specificly for Xapo requires an understanding into the business priorities of the company, that I don’t currently have. For example, I don’t know the relative importance of providing services to individuals vs institutions. (Xapo, for example, happens to be the custodian for a new Bitcoin ETF traded on the stock market.)

Without a doubt, designing Xapo is a project in and of itself, and beyond the scope of this article. But if I took on the challenge of designing a product like Xapo, here’s some of things that I’d take into account:

- Let’s communciate what the product is, why you need it, and why you should choose Xapo _long_ before getting into the implementation details of encrypted servers and 100 meter bunkers.

- A considerable conceptual challenge is helping the user to understand _why_ they would need both hot and cold wallets. Savings vs checking accounts comes to mind as an analogy, but falls short.

- In the UI, that might translate to presenting the wallet and vault to be more like components of a single product, instead of two separate things.

- Let’s make sure individuals know its free, can create a wallet quickly, and get bitcoins into it.

- Let’s make the user experience comfortable and engaging. The dark theme of the current product feels somehow omninous.

- Let’s introduce the secondary concepts around the product—multi-signatures, buying bitcoins, etc.—only after we’re sure they understand the core product.

- Let’s push the heavy stuff on the institutions—e.g. our $40 million dollar funding, our A-level advisors, our bunkers in Switzerland. It’s those who will have the time and interest in all that before making a decision.