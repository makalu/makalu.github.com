---
layout: post
published: true
title: The Design of Xapo
author: Matt Henderson
twitter_username: mhenders
excerpt: Bitcoin is a digital currency that may represent the most important technology to appear since the birth of the internet. To achieve widespread adoption, bitcoin products must translate the unfamiliar realities of the mathematical currency into concepts and usability models that are easily understood by consumers and organizations. This article examines, from a product design perspective, a leading bitcoin product, Xapo.
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


## The challenge

Through generations of experience, we comfortably relate to the concepts surrounding traditional stores of value and transactional currencies. As a commodity that we can touch and hold, we have an intuitive understanding of gold. We understand that we can put it in a safe or entrust it to a custodian like Brinks. When we transact in gold, we understand that we’re passing ownership of a physical object from one to another. 

We also tend to relate to fiat currencies like Dollars, Euros and Pesos as physical objects, although their realities are more abstract. Like gold, we intuitively understand that we can secure and transact ourselves in physical cash, or we can entrust its security and access to the vaults, credit cards and transfer services of banks.

Bitcoin represents an entirely new paradigm. There’s nothing physical about bitcoin. The “owning” of a bitcoin means the “controlling” of a complex number known as a private key. If we try to relate that private key to something with which we have familiarity, it would be a “wallet”, or a bank account. But whereas most people have one wallet and one checking account, with bitcoin it can be advantageous to create a new private key for every transaction we make!

For products offering the storage, security, and access to one’s bitcoins, translating such foreign notions into concepts that are approachable and understandable by consumers and organizations represents a considerable design challenge—and one that is of critical importance if we’re to achieve widespread adoption of this promising technology.

## A personal interest in Xapo

While evaluating bitcoin storage options, I created an account at [Xapo][16], but soon afterwards switched to another product. I didn’t give much thought to why I switched; something just didn’t feel quite “right” about the Xapo product.

Then I happened to read the book, “Digital Gold”, by Nathaniel Popper. In his telling of the history of bitcoin, we’re introduced to Wences Casares, an Argentinean entrepreneur and the founder of Xapo. I so related to the life experiences, frugal disposition and passions of Wences, that I finished the book thinking that if I could choose to work with anyone in the bitcoin industry, it would be with him.

And that led me to think deeper about why his product Xapo didn’t stick with me, and what I’d do to fix it.

In the rest of this article, I’ll retrace my onboarding experience with Xapo, highlighting the frictions and confusions I felt along the way, and I’ll conclude with thoughts on the approach I’d take to addressing those problems. 

The reader will notice that the article grows harsh in tone, and my fear is that it might come across as offensive. But just before editing all that out, I realized that the growing harshness is a direct reflection of the growing frustration I felt trying to get to know the product. And since that ultimately led me to leave Xapo, I decided it was an important ingredient to keep in the article.

## So you’ve landed at Xapo

When you first land at Xapo, you’re greeted with the following message:

![][3]

My very first thought was that the word “most” must be missing, i.e. that this message was supposed to have read, “The world’s *most* secure bitcoin wallet”. That’s a minor detail, but important in the sense that my *very first* cognitive experience with the product is a tiny bit of confusion.

Moving on, this first screen immediately refers to “cold storage” and “multi-signature” technologies. These are concepts that are unlikely to be commonly understood, and as such represents the first potential point of friction in terms of converting a new customer. If I were a new bitcoin user, still grappling with the concept of a “bitcoin wallet”, I think I’d feel unsure whether this product is or isn’t relevant to me.

Still feeling unsure about this product, I’m far more likely to click “Start tour”, than to directly create an account.

![][4]

Starting the tour, I’m dropped _straight_ into the the topic of “offline encrypted servers”, that are “never connected to the internet”. Remember, this is the *second screen* I see as a potential new Xapo customer, and possibly even a new bitcoin user. I still don't really know what the product is, but I'm launched into a presentation of how its security is implemented.

In that context, some immediate questions that come to mind:

- If my bitcoins are offline, does that mean I can’t use them?
- Why are the servers “never connected to the internet”?

Clicking next…

![][5]

I’m on screen number three, and I’m looking at “Wave-blocking Faraday cages”. I’m guessing a lot of people might return to their Google search at this point.

But for those who continue…

![][14]

Screen number four talks about storing my bitcoins in Switzerland. Is that even legal? I vaguely remember some recent stories about Americans getting in trouble for having money there. And is the length of the access column _really_ relevant to my decision to use this product?

We continue, just to finish the tour…

![][15]

Now we’re on a page that gives the visual impression that we’re floating in space—complete with moving stars in the background—and boasting that Xapo has raised $40 million. This is the last screen in the product tour, and it’s the screen least related to the product.

At this point, I’ve finished the “product tour”, but I feel I know even less about the product than I did at the beginning. I certainly am left with the impression that Xapo take security seriously, but I still don’t know exactly what Xapo _is_ or whether it’s relevant to _me_.

## The tour didn’t work. Let’s try navigating around.

Let’s look at the Xapo navigation options. We find six items that are treated equally from a visual design point of view:

![][7]

1. An “about” area, where I hope I can learn more about what this product actually is.
2. Two “product” areas, for the wallet and the vault.
3. One “contextual” area, Institutions. I’m an individual, so I guess I should skip that one.
4. A functional area, “login”. I’ll also skip that for the moment.
5. And a hamburger menu, which, although it can have its place, is known to be the junk drawer of navigation controls, as you have no idea what to expect there.

So here’s the About page:

![][8]

Reading this, I’m now thinking that the product is somehow a _combination_ of a bitcoin wallet and a vault, perhaps not exposed to the risks I’ve read about with other online wallets. That sounds pretty good, and I find myself wanting to learn more about how that works.

But to learn more, it looks like I’ll need to tap the pulsating “down arrow”, because the designers felt that before understanding more about the product, I’m more likely to want to read—again—about the company’s investors.

So I click the down arrow, expecting to be taken somewhere where I can learn more about the product, but instead, all that happens is that I _jump straight to that same message about the investors_.

## Let’s just create an account

If I can’t understand the product from the marketing site, maybe it’ll all make sense once I create an account. After doing that and logging in, I see three equal navigation items—xapo, wallet and vault. (And I find myself wondering why they’re all displayed in lower case, since at least Xapo has until now been consistently capitalized.) 

So I click to access the “wallet”.

![][9]

In the WALLET (now all capitalized), and I see a credit-card shaped block with a gear and a large “X” in the middle. I have no idea how to interpret the meaning of the big “X”? Is there something missing? Did I do something wrong?

Conceptually, “My Address” is information, while “Transfer” and “Send” are actions, and so they shouldn’t be treated identically in the visual UI. Here I find myself wondering what the difference is between “transferring” and “sending”.

Let’s try clicking on the gear icon:

![][10]

This feels a bit overwhelming, and now I’m even more confused:

- I still don’t know why I’m looking at an “X”. Should I email support about that?
- Apparently this is the wallet I’ll use to send “micropayments” through “Twitter and third-party apps”. What if I want to send payments that are not “micro”? And what’s a “third party app”?
- There’s no contextual help information around the concepts of “Who can access this wallet?” What does it even mean to “invite someone to my wallet”? Why should anyone other than me have access?

At this point I’m thinking, “OK, I was just looking for a place to store my bitcoins, but this thing looks *waaaaaay* too complicated for my needs.”

Let’s try the “vault”:

![][11]

Instead of a black card used in the wallet, the vault is represented by a green card with a “V”. What does “V” mean—“Vault”? But if that were the case, shouldn’t the wallet have displayed a “W” instead of an “X”. And what are those three vertical white bars supposed to mean?

Say I want to transfer bitcoins into or out of the vault. Here’s what that looks like:

![][12]

This UI gives the impression I’m transfering from my black "X" (different typeface now) to my green “V” (with three vertical lines). And it looks like the black wallet’s balance is in bitcoin (BTC), while the vault’s balance is in US Dollars (USD)?

And for some reason, whereas everywhere else in the site the submit buttons span the width of the window, _here_ it’s shorter.

I believe it was around now, when I decided to just switch to another product. All of these conceptual and UI friction points caused me to feel insecure in using the product, and I also had a lingering suspicion that the product wasn’t really even intended for _me_.

## Miscellaneous issues

I observered a number of other, minor design and copy quibbles at the website, none of which were show-stoppers, but all of which compound in terms of experience and impression.

![][1]

I think the website needs some tightening and editing of the copy. For example, when you say, “Secure bitcoin storage is what we do best,” the first thing that comes to my mind is, “Everything else we do, we do worse.” Something like, “We’re the industry leader in secure bitcoin storage” might be better.

![][2]

Here’s a layout issue, in which you can’t read the white text against the white background.

![][13]

And here’s some poor attention to detail. Margin spacing is off. Font size doesn’t make sense with respect to the rest of the site.

## Redesigning the product

The design of a product like Xapo has to both bridge the conceptual gap between people’s existing mental models of currency storage, security and use, and the realities associated with a complex system like bitcoin. And it has to do that within the context of a product that’s engaging, confidence-inspiring and easy to use. 

But to design Xapo, specifically, would require an understanding of the business priorities of the company, which we don’t currently have. For example, we don’t know the relative importance of providing services to individuals vs institutions. (Xapo was recently announced to be the custodian for a new Bitcoin ETF traded on the stock market.)

So while a Xapo redesign is beyond the scope of this article, we can at least identify some likely objectives.

- Let’s communciate what the product is, why you need it, and why you should choose Xapo _long_ before getting into the implementation details of encrypted servers and 100 meter bunkers.

- A considerable conceptual challenge is helping the user to understand _why_ they would need both hot and cold wallets. Savings vs checking accounts comes to mind as an analogy, but falls short.

- In the UI, let’s consider presenting the wallet and vault more like components of a single product, instead of two separate things.

- Let’s ensure that the process of signing up, creating a wallet, getting bitcoins into the wallet, and then understanding that we might want _some_ of those bitcoins put into cold storage, is friction-free in concept and workflow.

- Let’s introduce the secondary concepts around the product—multi-signatures, buying bitcoins, etc.—only after we’re sure users understand the core product.

- Let’s push the heavy stuff on the institutions—e.g. our $40 million dollar funding, our A-level advisors, our bunkers in Switzerland. It’s those who will have the time and interest in all that before making a decision.

- Let’s make sure individuals know that using Xapo is free.

- Let’s make the user experience engaging and reassuring. The dark theme of the current product feels somehow omninous.

Finally, let’s keep in mind that as early adopters, we’re participating in a historic process of transitioning people into an exciting but unfamiliar new world. Ultimately, after using the product, we want the user to feel better about entering the bitcoin economy than before they joined.

It’s a big challenge, indeed, but an exciting and worthwhile one to take on, as we all want bitcoin to succeed.