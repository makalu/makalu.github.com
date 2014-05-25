---
layout: post
published: true
title: Managing customer relations on the Mac with Daylite and Direct Mail
author: Matt Henderson
twitter_username: mhenders
teaser: How we use two Mac apps to more effectively communicate with our contacts.
excerpt: We use two Mac OS X applications—Daylite, a customer relationship management (CRM) tool and Direct Mail, an emailing tool—which together allow us to communicate more effectively.
---

To help spread the word about the recent launch of [Rego](http://www.regoapp.com)—an iPhone app for bookmarking locations—we wanted to send an email announcement to our contacts. We use two Mac OS X applications—[Daylite](http://marketcircle.com), a customer relationship management (CRM) tool and [Direct Mail](http://directmailmac.com), an emailing tool—which together allow us to segment and execute such announcements more effectively.

![](http://makalufiles.s3.amazonaws.com/2013-03-12-coverimage.png)

This article introduces these tools and describes how we use them.

## Daylite

Daylite is a powerful, multi-user CRM for the Mac, and one that we've been using for close to 15 years. It provides integrated management of people, companies, opportunities, projects, and tasks.

In [Makalu](http://makaluinc.com), we primarily use Daylite to keep track of people and companies, and their relationships to opportunities and projects. (For project management itself, we use [Basecamp](http://basecamp.com) from 37signals.) Since this article describes how *we* use Daylite, it only scratches the surface of everything the tool can do.

### Daylite architecture

Daylite runs as a server/client system. I have the server running on a home iMac and serving clients running on a MacBook Air, an iPhone 5 and an iPad mini.

![](http://makalufiles.s3.amazonaws.com/2013-03-12-daylite-architecture.png)

The Daylite clients are smart enough to detect whether they need to connect to the server over the local network, or over the internet. Connecting over the internet obviously requires a fixed hostname, and we use a dynamic DNS provider for that. The Daylite server will automatically configure modern routers to provide the necessary external access.

The Daylite clients maintain a local copy of the server database and periodically sync themselves. So everything works very fast—online or offline.

An important component of the Daylite architecture is the **Daylite Mail Assistant** (DMA)—a plug-in for Apple Mail that integrates with the Daylite client—allowing you to create new contacts, companies, opportunities, projects and tasks directly from within Mail. In addition, DMA allows you to link important messages directly to those objects in Daylite.

In this screenshot, you can see I've linked this email to my contact Alex Bendiken, as well as our MLK Maintenance project.

![](http://makalufiles.s3.amazonaws.com/2013-03-12-email-from-alex.png)

(If I wanted to, I could also create a delegated task for Alex, and set a reminder for myself to follow up later—but again, we mostly use Basecamp, rather than Daylite, for project management.)

## Classifying contacts by keyword

Daylite allows you to add any number of keywords to your contacts. These are like tags, and you're free to define and use them as you like.

In Makalu, we've decided to classify our contacts primarily by three different groups of keywords — Context, Role and Relationship.

![](http://makalufiles.s3.amazonaws.com/2013-03-12-daylite-keywords.png)

Let's take a look at these:

* **Context**. Our company does client work, and we also sell products like [RaceSplitter](http://racesplitter.com), [Rego](http://regoapp.com) and my [Money for Something](http://moneyforsomethingbook.com) book. We've created a set of keywords to help us associate our contacts with each of these business contexts. (And, as you can imagine, some of our contacts are associated to several contexts.)

* **Role**. We also need to distinguish in what role a contact exists. Is the person a customer, an applicant, or perhaps a partner.

* **Relationship**. Perhaps most important, we need to know what kind of relationship we have with the person, and for that we've defined five.

Relationships are important, so let's look at those in more detail.

* **Family** is obvious.

* **Friend** is probably obvious as well. Among the thousands of contacts I have, only about 120 are classified as friends.

* **Personal** might need some explanation. A personal relationship isn't quite a friend, but if you asked them, "Do you know Matt Henderson?" they would immediately say yes.

* **Acquaintance** is someone with whom we've had a conversation in the past.

* **Unknown** means we (for whatever reason) have them as a contact, but have never had a conversation with them (perhaps they were copied on some client communication to us).

Why is relationship so important? Mostly for segmenting our announcements, since you don't want to send a close friend an email that says, "Hi there, my name is Matt Henderson..."

## Filtering and segmenting

Daylite allows you to segment or filter your contacts through smart filters. If I need to quickly identify the RaceSplitter customers with whom we have an acquaintance relationship, it's as simple as this:

![](http://makalufiles.s3.amazonaws.com/2013-03-12-daylite-smartfilter.png)

And we can get much more complex! Say I want to identify all my contacts, excluding friends, family, personal and those I've tagged "A-List" and "Influential". And say I want to exclude our competitors, my Dydra contacts, those people I came into contact with during the Catalog Choice project, and those people who commented on my Telefonica and Vodafone blog articles.

All that would look something like this:

![](http://makalufiles.s3.amazonaws.com/2013-03-12-daylite-segmenting.png)

Daylite's ability to include sub-groups of filter criteria in the construction of smart filters basically removes all limits to the scope of possible segmentation.

Once I've filtered my contacts, I'll add those people to Daylite **Group** objects, like these I created for our Rego announcement campaign.

![](http://makalufiles.s3.amazonaws.com/2013-03-12-daylite-groups.png)

Why use Groups? Because as we'll see in the next section, Groups are the link between Daylite and our emailing tool—Direct Mail. Also in the next section, we'll see why I prefixed the Group names with numbers.

## Direct Mail

Direct Mail is a bulk-emailing tool for the Mac that integrates with Daylite. Like Daylite, Direct Mail is an established product that's been on the market for many years.

And as with Daylite, this article will hardly scratch the surface of everything Direct Mail can do. It provides extensive capabilities for importing and validating addresses, and extensive support for message creation, allowing both text and HTML, and even the import of templates from popular online services like MailChimp and Campaign Monitor. It provides token substitution in messages (with fallback), and will even tell you how likely your message is to get caught in spam filters.

Although it can send outgoing emails through your own server, Direct Mail really shines when you send mail through their own hosted service, as that provides you with scheduled delivery, reporting and subscription management. You buy credits through the app, at about $0.01 per email.

So here's how we use Direct Mail.

## Serial, segmented mailing

In announcing Rego, I wanted to send different emails to different types of contacts. For people I know well and have a close relationship, I don't mind asking for a favor to help us promote the app. For people I don't know so well, I might just want to tell them about product and leave it at that.

So being able to segment is important, and we've seen how to do that with Daylite. Now we'll look at the Direct Mail side of the  setup.

![](http://makalufiles.s3.amazonaws.com/2013-03-12-directmail-groups.png)

From this screenshot, you can see that I've created a Direct Mail project document, called "Rego Announcement".

In that document, I've created one address list corresponding to each of the Rego "Groups" I created in Daylite. Direct Mail maintains a link from its group to the Daylite group—allowing me to re-sync at any time, and allowing Direct Mail to link sent emails back to those corresponding contacts in Daylite.

## Avoiding multiple mailings

It's quite likely that some of my contacts will be found in multiple Rego Groups within Daylite. For example, some of our beta testers also signed up on the Rego website to be notified about the launch.

I want to ensure that we only announce Rego *once* per contact, and that's the reason for adding a numeric prefix to my Group names.

In the above example, we first announced Rego to our beta testers, and then converted that Group to a *Blacklisted* group, to ensure that when emailing our Signups, none of our beta testers would additionally receive *that* email.

Then we announced to the people invited to the beta, but who didn't ultimately participate. To do that, we emailed the "Beta Invites" group, while blacklisting the "Signups" and "Beta Testers".

And so on through all our groups, ultimately emailing the largest group, our "Acquaintances".

Make sense? It's pretty cool!

## Reporting

Direct Mail provides extensive delivery and interaction reporting and statistics through a Mac app, as well as through iOS reporting apps running on the iPhone and iPad.

![](http://makalufiles.s3.amazonaws.com/2013-03-12-directmail-reports.png)


## Hope you enjoyed the article!

And there you have it. That's how we use the powerful combination of Daylite and Direct Mail to manage our contacts and communications in Makalu Interactive. If you have any questions, don't hesitate to contact us!
