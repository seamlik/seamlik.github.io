---
date: 2015-12-10T11:40:00+08:00
title: What If XcodeGhost Hit Android...
---

![](http://www.lo4d.com/i/award/Android%20SDK.png)

XcodeGhost broke out some time ago, but I didn't know about this because I don't use any Apple products until an email by one of my colleagues from Debian drew my attention.

Let me briefly describe the event of XcodeGhost outbreak. Because of China Communist Party's Great Firewall, iOS developers in China are not easily to or even not able to download Xcode from official locations, they therefore find other ways like downloading it from messed up places like Baidu cloud drive, which unfortunately contained XcodeGhost virus and could build affected Apps. As a result, most affected Apps are from China.

I can't stop thinking of such security event will happen to Android. Everything of Google is banned in China nowadays, Android developers in China also obviously can't download Android SDK from official locations, and I don't believe all of them are willing to pay for a stable VPN, not to mention the government claims to disable all VPNs. So it's imaginable that some day there will be a similar virus outbreak caused by affected Android SDK.

I think I will have to share the responsibility if this day has come. I'm a member of Debian Android Tools team, working on getting Android SDK into Debian. Although we are currently still in a initial stage, once we finish our work Android developers using Debian or Ubuntu will be able to safely and conveniently get official Android SDK from official software repositories which are not censored in China. However since I usually lack of spare time, we are still stuck at the discussion with f2fs-tools developers, thus we can't even finish adb and fastboot yet. If XcodeGhost-like virus happens to Android, it's my laziness that prevent us from stopping it.

We've submitted patches to f2fs-tools team, and one of our core members discussed in the email mentioned at the beginning about letting our nonfree packages download Android SDK files from China's mirror if it can't access Google. I hope we can finish our job as soon as possible.