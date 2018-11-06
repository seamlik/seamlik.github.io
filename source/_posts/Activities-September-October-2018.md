---
title: My Open-Source Activities from September to October 2018
date: 2018-11-06T19:49:37+08:00
---

Welcome readers, this is a infrequently updated post series that logs my activities within open-source communities. I want my work to be as transparent as possible in order to promote open governance, a policy feared even by some “mighty” nations.

I do not work on open-source full-time, although I sincerely would love to. Therefore the posts may cover a ridiculously long period (even a whole year).

Unfortunately this blog site does not support commenting. So if anyone has anything to discuss regarding the posts, feel free to reach me via the social links at the footer of the page.

## Debian

Debian is a general-purpose Linux distribution that is widely used on the planet. I am currently a Debian Maintainer who works on packages related to Android SDK and the Java ecosystem.

* Continued the updating of Android SDK family to Oreo
  * Uploaded [`android-platform-build`](https://tracker.debian.org/news/997858)
  * Uploaded [`android-platform-dalvik`](https://tracker.debian.org/news/997840)
  * Uploaded [`android-platform-development `](https://tracker.debian.org/news/995608)
  * Uploaded [`android-platform-frameworks-base`](https://tracker.debian.org/news/994109)
  * Uploaded [`android-platform-libcore`](https://tracker.debian.org/news/964503)
  * Uploaded [`android-platform-libnativehelper`](https://tracker.debian.org/news/999760)
  * Uploaded `android-platform-system-core` providing [ADB](https://tracker.debian.org/news/987521) and [`fastboot`](https://tracker.debian.org/news/997309)
  * Uploaded [`android-platform-system-extras`](https://tracker.debian.org/news/995237)
  * Uploaded [`android-platform-system-tools-aidl`](https://tracker.debian.org/news/994805)
* All Android SDK packages of Oreo release are now in Unstable

### Some Android SDK Packages Now Available on Every Architecture

For a long time our packages are only available on x86, ARM and MIPS architectures. This is due to the fact that AOSP is only designed to support those 3 major instruction sets in the market. Another physical limitation is that [`libunwind`](https://android.googlesource.com/platform/external/libunwind), a common dependency by most Android SDK components, can only be built on said architectures after being patched by AOSP. ADB and `fastboot` now even removed the support on MIPS because we now build them against [BoringSSL](https://boringssl.googlesource.com/boringssl) which does not support MIPS at all. In light of the [removal of MIPS support in NDK](https://github.com/android-ndk/ndk/wiki/Changelog-r17) as well, I can assume that the entire AOSP will say goodbye to MIPS at some point.

But not all components rely on `libunwind`. With some minor efforts and investigations, we can now enable some of them to build on every architecture that Debian supports. For now they include:

* [`android-sdk-libsparse-utils`](https://packages.debian.org/unstable/android-sdk-libsparse-utils)
* [`hprof-conv`](https://packages.debian.org/unstable/hprof-conv)

There will surely be more on the road, stay tuned.

### DD Application Approved

For those who aren’t familiar with the term, DD means Debian Developer who are official member of the Debian Project and usually have access and permissions to most parts of Debian’s infrastructure.

As a Debian Maintainer (DM), I can ask for upload permission on any packages and upload them without needing a sponsor. But in case of introducing new binary packages or hijacking ones from another source package I will need a sponsor. I believe with a DD account working in Debian will become smoother and easier.

So I [applied](https://nm.debian.org/process/479) for DD about... 6 months ago! After a marathon of Q&A sessions I finally got approved by my AM Joerg Jaspert. Now I still have to wait for further review by the system, perhaps I can get the account in November.

Big thanks to Hans-Christoph Steiner, Markus Koschany and Emmanuel Bourg who advocated me, and my AM Joerg Jaspert.

## Voidbuilder Release 0.2.0

[Voidbuilder](https://www.npmjs.com/package/voidbuilder) is a simple program that mimics [`pbuilder`](https://packages.debian.org/sid/pbuilder) but uses [Docker](https://docker.com) as the isolation engine. I have been using it privately and am quite satisfied.

Last month I released a 0.2.0 version with the following changes:

* The `login` sub-command no longer builds the source-only bundle and this task must be done by the user.
* One failed hook no longer fail the entire job, instead a message will pop up.