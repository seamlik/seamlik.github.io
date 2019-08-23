---
title: My Open-Source Activities from April to August 2018
date: 2018-09-23T20:27:52
---

Welcome readers, this is a infrequently updated post series that logs my activities within open-source communities. I want my work to be as transparent as possible in order to promote open governance, a policy feared even by some "mighty" nations.

I do not work on open-source full-time, although I sincerely would love to. Therefore the posts may cover a ridiculously long period (even a whole year).

## A Revamped Blog Site

This website is now using a new theme called [Minima](https://github.com/jekyll/minima) from the [Jekyll](https://jekyllrb.com) developers. It's a elegant and simplistic one featured in [various](https://this-week-in-rust.org) [blogs](https://rustwasm.github.io) involved in the Rust community. I am myself a huge fan of Rust, so I immediately had a crush on the theme. Although this idea already came out probably a year ago, the transition took so long because I didn't have the time to focus on learning front-end technologies.

At first I thought I must implement the theme on my own as I would be using Hexo but it was for Jekyll, but turns out it was quite easy to forcibly apply it under a different static site generator. Now I'm pretty satisfied the outcome, though I am just clueless on how to make a good homepage, hence the one it has now.

## Debian

Debian is a general-purpose Linux distribution that is widely used on the planet. I am currently a Debian Maintainer who works on packages related to Android SDK and the Java ecosystem.

* Uploaded [Gradle 4.4](https://tracker.debian.org/news/958426/accepted-gradle-44-1-source-into-experimental) to `experimental`. I didn't investigate how to make `gradle-debian-helper` compatible with the new release until Emmanuel Bourg did it. It's now [in `unstable`](https://tracker.debian.org/news/987997/accepted-gradle-44-2-source-into-unstable).
* Introduced new package [`dd-plist`](https://packages.debian.org/sid/libdd-plist-java) which is needed by Gradle 4.4.
* We've started updating the Android SDK to Oreo
  * Uploaded [`android-platform-external-boringssl`](https://tracker.debian.org/news/979030/accepted-android-platform-external-boringssl-810r23-1-source-amd64-into-unstable-unstable)
  * Uploaded [`android-platform-external-libselinux`](https://tracker.debian.org/news/969349/accepted-android-platform-external-libselinux-810r23-1-source-amd64-into-experimental-experimental)
  * Uploaded [`android-platform-external-libunwind`](https://tracker.debian.org/news/959286/accepted-android-platform-external-libunwind-810r23-1-source-into-experimental)
  * Uploaded [`android-platform-frameworks-native`](https://tracker.debian.org/news/959450/accepted-android-platform-frameworks-native-1810r23-1-source-into-experimental)
  * Uploaded [`android-platform-libcore`](https://tracker.debian.org/news/964503/accepted-android-platform-libcore-810r23-1-source-into-experimental)

## Voidbuilder: A New Builder for Debian

I have been writing a simple Node.js application called "Voidbuilder" which serves as an alternative to tools like [`pbuilder`](https://packages.debian.org/unstable/pbuilder) or [`sbuild`](https://wiki.debian.org/sbuild). The main difference is that is replaces the `chroot` part of those tools with [Docker](https://docker.com). It also comes with goodies like zero-configuration and the ability to start a container with all build-dependencies installed so you don't need to contaminate your machine with tons of development packages just for working on a package.

Writing such admin/devel tools in JavaScript is an odd choice which few people would agree, I assume. My rationale includes that it's much more powerful than shell scripts and has a richer ecosystem than Python. While I am satisfied with the coding experience, I am still annoyed that JavaScript lacks so many features that modern OOP languages have (e.g. enumerations, interfaces). Luckily, it only took me a few weeks to get the prototype running.

The code is hosted on [Salsa](https://salsa.debian.org/seamlik-guest/voidbuilder) and it will get a release on NPM soon after I implement the second feature I mentioned above.