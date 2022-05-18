---
title: Substack is out, ActivityPub is up
category: notes
tags: substack jekyll activitypub
---

[My last post](substack-better-than-jekyll) was considering whether it would be better to make the move back to a hosted blogging solution, specifically Substack, or stick in the DIY, self-hosted/self-managed space.  After a lot of deep introspection about what the best course of action should be, I finally concluded to stick with DIY.  A lot of recent development around Twitter, Mastodon, the Fediverse, etc. made me come to the conclusion that this really is the best route forward to retain a high degree of confidence that my content and internet presence remains under my control.

So now I've established I want to run the platform myself; great.  Next, what's the best way to do it?  Jekyll has been pretty good to me.  It's fairly straight forward to make content updates.  It's portable.  All the things that I would normally look for have checked the boxes.  But it's not necessarily easy if you're not at a computer--at least, not as easy as cranking out a Tweet on your cell phone.

I started exploring Mastodon, thinking there may be something there.  Mastodon is great, but unless you host your own Mastodon server, you're back to depending on someone else's infrastructure.  So I spun up my own server for a day.  While it seemed like it would be perfect, I found that it's not as easy as one would believe to pull in federated content.  I got little fragments of stuff here and there, and certainly anything I posted went out without problem, but it wasn't the great experience I expected.

Then I did some research about ActivityPub and how people have used it to flow content to and from a static website.  This may end up being the direction I take.  Long-form writing that is done on a computer can still be done in Jekyll and uploaded to my hosting provider (Cloudflare Pages), but the short snippets of thoughts I want to share could be posted on Mastodon and then an ActivityPub worker could pull that content into Jekyll.  It's definitely a realistic option that should be reasonably attainable without an extreme amount of development.