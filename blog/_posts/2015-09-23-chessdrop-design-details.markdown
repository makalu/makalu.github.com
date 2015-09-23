---
layout: post
published: true
title: ChessDrop Design Details
author: Matt Henderson
twitter_username: mhenders
excerpt: In this article, we share some interesting design details from our latest product, ChessDrop.
---

[1]: http://chessdrop.com
[2]: http://files.dafacto.com/uploads/2015-09-23-devices-collage.png
[3]: http://files.dafacto.com/uploads/2015-09-23-background.gif
[4]: http://files.dafacto.com/uploads/2015-09-23-hiarcs.png
[5]: http://files.dafacto.com/uploads/2015-09-23-comments.gif
[6]: http://files.dafacto.com/uploads/2015-09-23-end-of-game.gif

The Makalu team recently launched its third product, [ChessDrop][1], a cloud-based personal chess games database. From the technology stack we chose—React, Meteor & Heroku—to the design process, there’s much I plan to tell you about in the coming weeks. But for now, in this brief post, I’d like to whet your appetite with a few of the key design details you’ll find in the product.

(And please pardon some of the UI artifacts from the process of creating animated GIF demos!)

## Mobile first

Our aim is for ChessDrop users to enter their games directly while at the tournaments, and so clearly mobile-first was a priority. From the positioning of the player names, to interacting with the game moves, to lower thumb-targeting placement of the forward/backward controls, visual and interaction designs taking into account smartphone, tablet and desktop environments, in portrait and landscape orientation, was a considerable challenge.

![][2]

## Communicating positional evaluation

Like many chess products, ChessDrop includes an “engine” that can be used to evaluate the current position on the board. Engines return their evaluations as a positive or negative number. Anything between +1 and -1 would be considered equal. An evaluation like +3 or -3, on the other hand, would communicate a winning advantage for white or black, respectively.

In addition to displaying the numerical evaluation, as most products do, we wanted to additionally communicate the positional evaluation in a visual way, and arrived at a solution which involves the vertical background color weighting, dynamically adjusted from move-to-move.

![][3]

At each move in the game, we also display the game continuation (series of moves) that the chess engine calculates as optimal at this point in the game. The ChessDrop user can, if desired, tap or click into that continuation to explore it, and can return to the recorded game moves at any time.

## Annotating the game with comments

Chess players (and their trainers) depend on the ability to annotate their recorded games with comments. Most chess products display those comments in the textual representation of the game:

![][4]

In ChessDrop, we wanted to find an alternative approach, that would allow comment editing and viewing, directly in the context of the visual board game. I think we found an elegant solution.

![][5]

## Game sharing

Finally, we were interested in designing a concluding experience that clearly indicated that the game was over, what the result was, and encouraged you to share. As an incentive to share, we allow players who have entered their game in ChessDrop to send their opponent an invitation to add a copy of the game into their own account. In addition to saving the opponent time, we open the door to social interaction within the platform, and help to organically spread the word about the product.

![][6]


## More to come

Designing and building ChessDrop was a tremendously enjoyable process for us, in which we discovered some new design and interation platform, and had the opportunity to gain experience with the exciting React+Meteor technology stack. We’ll be publishing more articles about the experience in the coming weeks, so be sure to [follow us on Twitter](http://twitter.com/makalu) to be notified when those posts appear.

