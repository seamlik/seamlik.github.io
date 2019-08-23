---
title: My Open-Source Activities from November to December 2018
date: 2019-01-21T07:27:43
---

Welcome, reader! This is a infrequently updated post series that logs my activities within open-source communities. I want my work to be as transparent as possible in order to promote open governance, a policy feared even by some “mighty” nations.

I do not work on open-source full-time, although I sincerely would love to. Therefore the posts may cover a ridiculously long period (even a whole year).

## Debian

Debian is a general-purpose Linux distribution that is widely used on the planet. I am a Debian Developer who works on packages related to Android SDK and the Java ecosystem.

After a month of hardwork, I finally finished the packaging of [`android-platform-art`](https://tracker.debian.org/pkg/android-platform-art). The tricky part was that this package is the first of our Android SDK packages that fails to build using GCC, which was realized only after I had patched an awful lot of code.

Other activities include:

* Many changes to `android-platform-system-core` ([1:8.1.0+r23-2](https://tracker.debian.org/news/1001030/accepted-android-platform-system-core-1810r23-2-source-amd64-all-into-unstable-unstable/) [1:8.1.0+r23-3](https://tracker.debian.org/news/1003371/accepted-android-platform-system-core-1810r23-3-source-into-unstable/) [1:8.1.0+r23-4](https://tracker.debian.org/news/1008061/accepted-android-platform-system-core-1810r23-4-source-into-unstable/)) and now it builds on kFreeBSD!
* Finally got my Debian account.

## Voidbuilder Release 0.3.0

[Voidbuilder](https://www.npmjs.com/package/voidbuilder) is a simple program that mimics [`pbuilder`](https://packages.debian.org/sid/pbuilder) but uses [Docker](https://docker.com) as the container engine. I have been using it privately and am quite satisfied.

I released [0.3.0](https://salsa.debian.org/seamlik/voidbuilder/blob/master/CHANGELOG.md#030-2018-12-15) in December. A notable change is that it now prints the build result in details, just like `sbuild` does.

## Other Activities

Pushed a [patch](https://android-review.googlesource.com/c/platform/tools/base/+/852369) to AOSP that removes a SUN API usage for Base64. Now let's see if it will get accepted in 10 years... 😪