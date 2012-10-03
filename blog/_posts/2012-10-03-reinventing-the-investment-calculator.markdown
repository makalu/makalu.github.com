---
layout: post
published: true
title: Reinventing the investment calculator
author: Alex Bendiken
teaser: How we reinvented the investment calculator.
excerpt: Matt's recently published book, Money for Something, is a simple and straightforward guide to investing. To help readers put the theory into practice, we built a tool that lets you experiment and create your unique investment plan. We took a boring financial calculator and turned it into something you'd actually want to use. Read on to see how it all came together.
---

<p style="font-size:24px;font-style:italic;line-height:1.5">
  Matt's recently published book, <a href="http://www.moneyforsomethingbook.com/">Money for Something</a>, is a simple and straightforward guide to investing. To help readers put the theory into practice, we built a tool that lets you experiment and create your unique investment plan. We took a boring financial calculator and turned it into something you'd actually want to use. Read on to see how it all came together.
</p>

## The Challenge
  Make an online investment calculator that helps readers of Money for Something answer questions like:
* How much do I need to save each month to have a certain amount of money at a certain time in the future?
* If I'm saving this much per month, and earning that rate of return, how long will it take to accumulate one million dollars?
* If I increase my monthly savings, how will that affect my savings in the future, and the amount of income it'll provide?
* How sensitive is the final amount to the savings rate? or to the amount of time?

## The Strategy
We began by looking at some existing calculators:

<figure style="margin: 0 -20px">
  <img src="/uploads/blog/2012-10-02/research.png">
</figure>

While these might be adequate for their target audiences, it was obvious they didn't meet our goals. Want to change a value? Well, simply click into the field, switch to using the keyboard, clear the old value, type the new value, and submit. Want to compare two calculations? Better write down the previous result before you make a change.

One of them even tries to be extra helpful by offering options to save more by giving up daily expenses, like coffee, restaurants, pizza, etc. But who really does that? There's no need to give up coffee and pizza for the next 25 years in order to achieve financial independence.

We knew our calculator needed to be friendlier and much more interactive than anything else we'd seen. You ought to be able to just jump in and start using it right away. Your very first interaction should have an immediate effect on the final result, which hopefully piques your curiosity and leads you to try out more "what ifs".

To achieve that, there should be no forms to fill in, it should be easy to adjust the values, and most importantly, it would need to update live.

## The Interaction Design
Our first design challenge was deciding what the focus should be. The calculation is based on a number of variables: rate of return, initial balance, monthly savings, inflation, estimated annual savings increase, etc. Obviously we can't just ask people to fill in all of those. Even having read Matt's book, I wouldn't have any idea where to start. So we needed to narrow down the options.

<figure class="full">
  <img src="/uploads/blog/2012-10-02/wireframes-1.png" alt="Early design sketches">
  <figcaption>Early design explorations</figcaption>
</figure>

After some back and forth we decided to focus on just three variables:
- **Starting balance.** How much do you have saved right now?
- **Monthly savings.** How much can you afford to save per month?
- **Years to invest.** When do you want to retire?

What these variables have in common is that they're all unique to your circumstances. Do you already have some savings? Adjust the starting balance accordingly. You're making $5k per month? You probably want to be saving at least $500. You're 25 years old? Maybe you want to retire when you're 50 years old.

It's not that the rest of the variables, like rate of return and commissions, are any less important, but you just have much less influence over them. Our guess is that most people will be fine with the default values. That being said, it *is* useful to see how a higher or lower rate of return influences the calculations, so these values should still be editable.

When you add up all of those variables, and run them through some formulas, what you end up with is a final balance in dollars. However, the dollar amount by itself is not terribly useful. One million dollars is a nice round number—and who doesn't want to be a millionaire—but is it enough to retire on? It's difficult to put into perspective without some more context.

Thankfully, Matt's book introduces a rule of thumb known as the "4% rule", which states that you can annually withdraw 4% of your savings for the rest of your life, without risking to run out of money. That makes it easy to compare the final balance to your current income and see if it's even in the ballpark.

Another thing we wanted to emphasize was the power of compounding interest. Given sufficient time, the amount you make from interest will far outgrow the money you've put in. Just a couple years can make a surprisingly big difference. We chose to use a stacked area graph to illustrate how this proportion changes over time. It nicely contrasts the linear growth of the savings with the hockey stick curve of the earnings.

<figure class="full">
  <img src="/uploads/blog/2012-10-02/wireframes-2.png" alt="More design sketches">
  <figcaption>More design explorations</figcaption>
</figure>

At this point we had the basic building blocks: a chart, basic variables, advanced variables, and a summary showing both the final balance and 4% rule. Our next challenge was figuring out the easiest way to edit the variables.

The obvious solution is to use standard text fields—just like every other calculator on the web. While easy to implement and flexible, they're also cumbersome to edit. Not to mention we'd have to deal with formatting differences, validations, and whatnot. Not ideal.

How about sliders? They're easier to adjust, that's for sure, but they also implicitly suggest a range of values. The amount I can invest per month is in no way related to what the slider's maximum value is configured to, and we don't want to suggest any relationship between the two.

We need something that's unconstrained, as if you were typing the values directly, but that's easy to change, just like dragging a slider.

[Bret Victor](http://www.worrydream.com/) to the rescue. His [Tangle](http://worrydream.com/Tangle/) Javascript library allows you to change values by dragging them directly. It gives us the convenience of sliders, with the flexibility of input fields (minus the hassle). Perfect.

Well, aside from the fact that people in general are not accustomed to dragging text, so we need to somehow communicate that they can do that. Once you get a hang of it, though, it's by far the most convenient way to adjust the values. In this case we were willing to sacrifice a bit of discoverability for increased usability. (It did end up biting us though. Keep reading…)

## The UI & Visual Design
If you look at the design explorations above, you'll notice that we had actually gotten ahead of ourselves by adding styling to what was supposed to be wireframes. So we took a couple steps back, stripped all the styling and made an inventory of the content.

Here's an abridged version of the thought process that followed:

![](/uploads/blog/2012-10-02/ui-1.png)

From here, it's easy to focus on what matters and start grouping things together. Try to resist the temptation to make things symmetrical, or to align them perfectly, or to add something new, and instead look for connections and opportunities inherent to the content.

Let's start by grouping the main variables together. They should probably be at the top, since they're the first thing you'll want to tweak. The chart, final balance, and 4% rule are all part of the result, so let's bunch those together as well. And for now, let's just put the "advanced options" at the bottom.

![](/uploads/blog/2012-10-02/ui-2.png)

That's a start. But the result column blends in with the adjustable values at the top. Let's try differentiating them through contrast.

![](/uploads/blog/2012-10-02/ui-3.png)

Better. Except that now the whole thing looks top-heavy. It also lacks a clear flow—you can adjust the middle part from the top *and* the bottom. Let's group the adjustable variables together at the bottom, which should hopefully solve both issues.

![](/uploads/blog/2012-10-02/ui-4.png)

OK, things are starting to look better. That right column with the final balance just doesn't sit right, though. It's taking up way too much space to show so little information. Space that could be used for a bigger chart.

See that big empty space in the upper-left corner of the chart? Doesn't it look like the results block would fit perfectly there? Let's give it a shot…

![](/uploads/blog/2012-10-02/ui-5.png)

That's it. We're left with two distinct units: one for displaying the results, and another one for adjusting the values. Now it's just a matter of cleaning up the visuals, amping up the contrast, and adding some color.

[![](/uploads/blog/2012-10-02/ui-6.png)](http://www.moneyforsomethingbook.com/investment-calculator)

Apart from the visuals, quite a few other things were also refined in this final iteration:
* We added arrows to indicate that the values are draggable.
* We turned the chart legend into supporting content, which not only better integrates it with the rest of the design, but also increases its usefulness.
* We turned the 4% rule into a self-explanatory sentence, therefore avoiding having to add a separate help link for it.
* We de-emphasized the advanced variables by turning it into a footnote.

**And we're done!**

Or so we thought. Here are some things we changed shortly after launching the calculator:

* The arrows on the adjustable values misled people to think you could click on them. We changed them to a more explicit textual help. Not quite as elegant, but infinitely clearer.
* From the start we had wanted to add the ability to make comparisons, but were unable to make it clear and easy to use. Then, right after launch, we had an epiphany. What if we just displayed the change from the previous balance whenever you make an adjustment? Turns out that was sufficient for the majority of cases we wanted to support.
* We also added some example scenarios, to give people ideas for using the calculator.

## The Takeaway
The calculator was designed and built almost entirely by Marcus Andersson, our new intern from Sweden, with a little guidance from yours truly. Marcus is studying mobile development at Hyper Island, but wants to learn more about design and front-end development, so this was the perfect bite-size project for him to get started.

In the process he improved his Javascript skills and learned CoffeeScript, SCSS, and HAML (yes, we like abstractions). He also got a crash course to how we approach design at Makalu. Here are some of his lessons learned:
* **Start with the content first.** Be sure to understand what you're designing and always use real content. Before adding anything extra, look for connections and opportunities inherent to what you already have.
* **Iterate and test.** Test your designs frequently against the defined goals and keep experimenting with alternative solutions. When you think you have the perfect design, push further, try other approaches and be open to change.
* **Re-evaluate your assumptions.** If you feel stuck with the design, take a step back and try questioning the constraints and assumptions that led to where you are.

We think the end result is by far the easiest-to-use investment calculator anywhere. [Give it a go](http://www.moneyforsomethingbook.com/investment-calculator) and let us know what you think.