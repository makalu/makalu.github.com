---
layout: post
title: The Story of RaceSplitter
author: Matt Henderson
excerpt: In 2011, after a decade of successful client engagements, we at Makalu realized our dream of creating our own product — RaceSplitter, an iPhone application for the timing of sporting events. This is the story of how it happened.
---

This article was first featured on the [37signals Blog](http://37signals.com/svn/posts/2808-how-makalu-interactive-created-the-international-iphone-hit-racesplitter)(a company which has long been a role model for us).

### Makalu — history of a service provider

Since 2001, our small team at Makalu Interactive has provided web design and development services for clients around the world. We've been fortunate to work on some high-profile projects, including the [original](http://www.makalumedia.com/skitch/cc-original-20100913-180735.html) CatalogChoice.org site, which gained over one million users in its first year, and the interactive game anchoring the Google & Virgin America cross-marketing campaign, [Day in the Cloud](http://dayinthecloud.com). (And as a side note, [Sortfolio](http://sortfolio.com/company/6420-makalu-interactive) has proven to be an amazing source of high-quality leads for us.)

### The itch to create for ourselves

Despite success in client work, we've always imagined that creating our own products would bring deeper satisfaction, and provide the opportunity to succeed beyond the linear function of available manpower. As a team of people passionate about great user experience — and having studied the companies that make them (like Apple) and the processes through which they are made — we've always been curious as to just what kind of product *we* would be capable of making.

We've always identified with 37signals. It was inspiring to watch a team of people that seemed so much like ourselves transition from a web design company (like ourselves) to a highly successful products company. We also enjoyed both Getting Real and REWORK, as they articulated a refreshing view and simple approach to many of the issues we struggled with. (It was no small satisfaction to later learn that a former employee of Makalu, Mike Rohde, would end up being the designer of the REWORK illustrations.)

Not only did we try to apply the ideas from Getting Real & REWORK to our client services business, we later found them particularly valuable when making our first steps in the direction of becoming products company.

### Hello RaceSplitter

Last year, we were approached by a group of people associated with NENSA.net, FasterSkier.com and FlyingPointRoad.com, interested in having a timing app developed, for recording split times and providing relative racer position during nordic ski events. With European timing devices costing $500 and up, and the previously popular Palm app going the way of the PalmOS, it seemed natural that something should be built for the iPhone.

In certain nordic ski races, similar to cycling time trials, racers start individually or in waves, separated by a start time interval — say, 30 seconds. If you're a coach on the course, timing racers as they pass by, it's difficult to know who's in the lead. Although it does other things, that's the essential problem that app solves.

We accepted the project, and got to work. The app would be called RaceSplitter.

[http://racesplitter.com](http://racesplitter.com)

It soon became apparent that the app had the potential to be an ideal first product for Makalu. It passed both the "scratch your own itch" and "focus on what doesn't change" tests. As both participants and observers in similar sports, we were deeply familiar with the application domain, and needed such an app ourselves. And unlike an app for, say, telling the world you've checked in at Starbucks, a sports timing device is something that should be as relevant in five years as it is today.

We put together a proposal, in which Makalu would acquire ownership of the app, with the client keeping a minority stake. Seeing our interest, not only in the app itself, but also in building a business around the product, they accepted our offer and RaceSplitter became Makalu's first product.

As a client provider, one always hopes to give 100% to the client, but we’d be lying if we didn’t admit that becoming the app’s owner didn’t provoke a psychological change. This was the chance we’d been waiting for; to discover what we were truly capable of.

### The complete user experience — attention to detail

We poured our hearts and abilities into the product. As believers that user experience extends to every way in which a product interfaces its users, we worked as hard on things like the pre-launch sign-up site, announcement emails, even the app icon, as we did on the app itself.

![](http://makalu-assets.s3.amazonaws.com/images/racesplitter/37signals/screenshot-signup.png)
<center><em>The RaceSplitter signup screen</em></center>

![](http://makalu-assets.s3.amazonaws.com/images/racesplitter/37signals/screenshot-racesplitter.png)
<center><em>The RaceSplitter website</em></center>

As emphasized in REWORK, even though our 1.0 would be minimal in terms of features, it wouldn't be half-assed; it'd be "at-home good".

### Launch — an international hit

The application launched, at $24.99, and within its second day on the market became the [4th top grossing app](http://skitch.maka.lu/RaceSplitter_Top_Grossing_Sports-20110127-163117.html) in the US App Store (Sports), number one in Norway, and was selling well around the world.

![](http://makalu-assets.s3.amazonaws.com/images/racesplitter/37signals/sales-geography.png)

Feedback started coming in from customers, and they absolutely loved it. Many said it was the perfect product. We began collecting comments at:

[http://racesplitter.com/testimonials](http://racesplitter.com/testimonials)

### RaceBuilder — building on our momentum

We quickly shifted focus to [RaceBuilder](http://racesplitter.com/racebuilder), a companion web-app to create, share and discovered races for import into RaceSplitter. This proved equally popular, and within two weeks more than 110 nordic ski races were published, containing 5,500 unique racers — including the World Championships in Oslo, Norway. More importantly, we established the beginnings of a central hub and community, on which we’ll be able to build and market services in the future.

![](http://makalu-assets.s3.amazonaws.com/images/racesplitter/37signals/screenshot-racebuilder.png)
<center><em>The RaceBuilder website</em></center>

![](http://makalu-assets.s3.amazonaws.com/images/racesplitter/37signals/screenshot-race.png)
<center><em>Creating a race in RaceBuilder</em></center>

### Great products are discovered, not specified

One of the most important things revealed through the process of building RaceSplitter is that we could have never specified at the beginning of the project precisely how the final product would look and behave. (This observation has important implications for the client-services business!) The "functional requirements" were satisfied during the first one-third of the effort ultimately spent. The final two-thirds were spent in iterations — transforming a *functionally-complete* product, into a *great* product.

As proposed in Getting Real, the user interface design led the process, and ultimately went through four revisions, with two of those resulting in the elimination of an entire level of interface hierarchy. Here's a sequence of revisions in a couple of areas:

*The active race screen*

The active race screen shows the current race standings, as well as provides access to the timing function. In the original wireframes, we separated lap standings on individual screens, navigated through swiping. We also had the "stop race" button in the lower right corner. To access the timing interface, we used the "Record" terminology.

In subsequent revisions, leading to the final, we decided to display all laps on a single (scrollable) screen, and moved the "Stop" button to the bottom left, where it was less likely to be inadvertently tapped by the thumb of a right-handed user. We also used more explicit "Time Racers" terminology to access the timing interface.

![](http://makalu-assets.s3.amazonaws.com/images/racesplitter/37signals/appui-activerace.png)

*The timing interface*

The timing interface, from a UI perspective, was challenging. We created a [live wireframe prototype](http://www.makalumedia.com/skitch/nensa-2010-09-20-13-06-19.html) of our initial idea for the interface, in which the racer's bib identification and timing button are integrated into the same UI control.

Later, however, we realized that this interface would only allow for timing one racer at a time. In nordic races, *groups* of racers often pass together, and need to have the same split time applied to everyone in the group.

Taking inspiration from Apple's Mail app on the iPhone, we created a "timing bar" interface, where multiple bib numbers can be added, and timed at once.

![](http://makalu-assets.s3.amazonaws.com/images/racesplitter/37signals/appui-timinginterface.png)

The timing interface can be seen in action in this [video screencast.](http://racesplitter.com/videos/RaceSplitter)

We spent a lot of effort focusing on the details of the UI. For example, we created aesthetically pleasing blank slate screens, and we created a custom, efficient UI control for numerical fields whose modification tends to happen incrementally — such as the assignment of lap number to a timing entry.

![](http://makalu-assets.s3.amazonaws.com/images/racesplitter/37signals/appui-details.png)

### Features — wolves in sheep's clothing

We’ve always been aware of the importance of focusing on a product’s essential functions, and taking great care when adding features. This was probably one of the strongest messages from Getting Real — learning to say no to features.

That said, we still couldn’t help but add some nonessential, and seemingly innocent, features during development. Some of those features later turned out to be surprisingly complicated, and costly.
 
For example, we added the ability to record a timing entry for a racer that wasn’t in the start list. Later, we realized we'd also need to design the UI to assign that blank entry to a racer. In designing *that* UI, it occurred to us that we'd also need to offer the ability to create a completely new racer (not existing in the database of racers), and then when creating a new racer, offer the possibility to create a new team. It didn't stop there. We then had to make sure the app behaved sensibly in other areas, such as exporting of data, if the user chose not to assign that blank entry to anybody. 

And on it went. We learned the hard way the unintended consequences of seemingly simple features.

### A different view of “minimum viable product”

As users of several 1.0 products ourselves, we've gotten the impression that for many, the concept of "minimum viable products" extends beyond the essential features, to the entire user experience. We believe that although a 1.0 may be slim on features, its UI and overall user experience should be polished, and as frictionless as possible. 

In RaceSplitter, after 200 hours, we had a working app. But then we spent another 450 hours perfecting the execution of that core application. The UI went through four revisions, focusing on the smallest details. 

The results speak for themselves. Customers of RaceSplitter, rather than saying, “Good idea, let’s see where this is in six months.” (and then never come back, nor tell anyone about the product), are shouting praise from the rooftops. Not a day goes by that we don’t receive an email from somebody saying, “This app is perfect!”

Of course, we get a lot of feature requests, and it’s a bit of irony that many of those requests would work against the simplicity and frictionless interface that the customers value so much. Perhaps that's why the designers of successful products are sometimes unpopular and under-appreciated; they're the ones always saying, "No."

### Don’t be afraid to price an app beyond $0.99

To determine our pricing we surveyed coaches, who said they’d pay $50 for such an app. Then we spoke to some parents to understand what would be the impulse buy threshold, and we came to believe that was around $25. We settled on $24.99, hoping the app would then be popular among coaches, parents and enthusiasts.

We will experiment with pricing in the future, but so far we’ve not had any complaints about the product’s price. We’ve been told by several customers that although they initially tried the cheaper alternatives, they ultimately settled on our app, and feel it represents a good value to them.

### Learning from the old advertising industry

There are generations of advertising industry history and experience available to us, from which we in the modern web/mobile world can benefit. Through a study of this industry, and particularly David Ogilvy, we gained insights on the things that deserve focus, and learned several effective techniques. 

For example, we learned about the related influence and importance of headlines, subheads, image captions, and, above all, good copy. As emphasized in Getting Real, it's all part of "design."

We also learned that measuring performance is what matters, as the data often contradicts your intuition. We did a lot of A/B testing on our website, and found that by just adjusting the headline, we could double our conversions. As opposed to headlines about "ease of use" and "affordability," we found that a headline that quickly established who the product is for ("coaches, parents & enthusiasts"), was the clear winner. (The worst was a title which labeled the product as a “professional” tool.)

### Spreading the word

Our marketing of the application focused on three things:

1. Online ads
2. Direct email
3. Promote word-of-mouth

*Online ads — the winner is Google*

For online ads, we ran both Google and Facebook ad campaigns (multiple ads in each network), as well as a direct banner ad campaign at a site where coaches hang out. After a month, we calculated our cost per conversion (where conversion is clicking the buy button, leading to iTunes). The costs were unacceptably high for the dedicated banner ad, as well as Facebook, but acceptable at Google.

Given how Facebook allows you to precisely target your audience (age, interests, geography, etc.) we were a little surprised how poorly the ads did there. But when you step back and think that people go to Facebook to socialize, and to Google to look for stuff, the results start to make sense.

*Direct email*

Through a couple of month's research, we compiled a list of coaches and associations in a variety of sports. We needed to directly email these people, and to avoid coming across as spammers, we crafted the emails such that we both informed the reader of the product, as well as solicited feedback from them in terms of the application's current applicability to their sport. We asked in which areas it might need to be modified or enhanced to more specifically address their needs. So that they could experience the app without having to purchase it, we created a couple of video screencasts of the application in action.

This approach worked really well. There was a clear correlation of sales to emails sent, and at the same time, we received an absolute wealth of expert domain insight, and developed some healthy relationships with key people in a variety of sports.

*Promote word-of-mouth*

This was the easiest part, and involved three important lessons from REWORK.

* First, everything is marketing. 

From the app, to the website, to our customer support emails, we want every aspect of interfacing with RaceSplitter to result in our customers thinking, "I've got to tell people about this!"

* Second, nobody likes plastic flowers.

We decided to produce our own screencasts for the site, in order to quickly have some instructional videos available. When we later thought about commissioning a professional voice-over artist to make them sound better, we were surprised to discover how well our customers responded to hearing the voice of the person who was also responding to their support emails. Despite the imperfections and obviously non-professional voice, the reinforcement of the personal relationship seems valuable.

* Finally, speed changes everything.

So far, we've been able to respond to support enquiries typically within a couple of hours; and often immediately. Customers absolutely *love* that, and seem to directly equate that to "caring."

### Niche market, beyond the design & development industry

As we've watched others transition from providing client services to becoming product companies, we've seen a tendency to create products targeted to the design & development communities. 

One aspect of RaceSplitter that appealed to us was the fact that it’s a niche market, under-represented by companies with deep design & development capabilities, but one in which, on a global scale, presents a good business opportunity. We believe there's a tremendous number of similar niches out there, and that design companies looking to make the jump to products should seek them out, as they represent markets full of people just waiting for a usable solution to their needs to come along.

### Product creation is uniquely satisfying

Before I got into Brazilian Jiu-Jitsu, I used to work out regularly at the gym. The motivation for going was, "I need to go, because I need to get the exercise." Later, after getting hooked on BJJ, I didn't go for the exercise; I went out of passion. And a positive consequence is that in training BJJ, I'm able to push myself far more than I ever could in the gym, and gain a much higher level of fitness.

Something similar happened in the development of RaceSplitter. We become more deeply engaged than any project we've been involved with in the past. There wasn't any question of finding motivation; on the contrary, it took discipline to *stop working* in the evenings. *That* is how we want to spend out time!

### Concluding thoughts

The experience of designing, developing and selling RaceSplitter has, for us, been priceless. We've gained the confidence that we have the ability to succeed as a product company. We've experienced the joy of hearing from customers thrilled in using a product we've created. We've learned things that simply weren't possible being on the service-provider side of the table. We've created a product that is already successful, and has lots of potential for growth. And, in the process, we've had more fun and become more engaged than we have since our company's beginning.

The experience also served, for us, as a real-world validation of the ideas in Getting Real and REWORK. In a world of both increasing complexity and human interaction with software, success is going to be found in the perfect execution of simple, focused products, delivered by companies that find a way to connect personally with their customers. That's easier said than done. The processes of the past simply don't get us there, and these books propose an alternative.
