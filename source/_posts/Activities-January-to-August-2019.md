---
date: 2019-08-23T06:41:00
title: My Open-Source Activities from January to August 2019
---

Welcome, reader! This is a infrequently updated post series that logs my activities within open-source communities. I do not work on open-source full-time, although I sincerely would love to. Therefore the posts may cover a ridiculously long period (even a whole year).

## Debian & Google Summer of Code

Debian is a general-purpose Linux distribution that is widely used on the planet. I am a Debian Developer who works on packages related to Android SDK and the Java ecosystem.

I started a new package in an attempt to build the Android framework `android.jar` using the upstream build systems involving [Ninja](https://ninja-build.org), [Soong](https://android.googlesource.com/platform/build/soong) and others. Since the beginning we have been writing our own (very simple) makefiles to build the binaries in AOSP because their build logic tends to be simple and straightforward, until we worked on `android.jar`. Building it requires digging in so much code that it became incredibly hard to maintain, which is why we still haven't brought in any newer version since [`android-framework-23`](https://tracker.debian.org/pkg/android-framework-23). This is problematic as developers can't build any apps that target Android 7+.

After a month of work, [this package](https://salsa.debian.org/android-tools-team/android-sdk-platform-latest) is finally done. After all its dependencies are packaged in the future, it will be good to upload. This is where the students of Google Summer of Code (GSoC) come in!

This year's GSoC projects related to Android SDK are:

* [Packaging Kotlin](https://wiki.debian.org/SummerOfCode2019/ProjectProposals/Kotlin) by [@m36](https://salsa.debian.org/m36-guest)
* [Packaging dependencies of `android.jar`](https://wiki.debian.org/SummerOfCode2019/ApprovedProjects/Android%20SDK%20Tools%20in%20Debian) by [@kt](https://salsa.debian.org/kt-guest).

Thanks to their hard work, we managed to upload these packages to Debian:

* [android-platform-build-kati](https://salsa.debian.org/android-tools-team/android-platform-build-kati)
* [android-platform-external-doclava](https://tracker.debian.org/news/1048095/accepted-android-platform-external-doclava-900r42-1-source-into-experimental/l)
* [android-platform-external-nist-sip](https://salsa.debian.org/android-tools-team/android-platform-external-nist-sip)
* [android-platform-external-rappor](https://salsa.debian.org/android-tools-team/android-platform-external-rappor)
* [android-platform-system-tools-hidl](https://salsa.debian.org/android-tools-team/android-platform-system-tools-hidl)
* [jengleman-shadow](https://salsa.debian.org/java-team/jengelman-shadow)
* [makeparallel](https://tracker.debian.org/news/1050485/accepted-android-platform-build-1810r23-3-source-all-amd64-into-unstable-unstable)

## Voidbuilder

[Voidbuilder](https://www.npmjs.com/package/voidbuilder) is a simple program that mimics [`pbuilder`](https://packages.debian.org/sid/pbuilder) but uses [Docker](https://docker.com) and requires zero configuration. I have been using it privately and am quite satisfied.

I made some bugfixes and adopted Node.js 12 so that it can make use the [latest experimental ES Modules support](https://medium.com/@nodejs/announcing-a-new-experimental-modules-1be8d2d6c2ff). Version [1.0.0](https://salsa.debian.org/seamlik/voidbuilder/commit/be4a62e316f8c03e31c870831ab3fc33a2fd3178) and [1.0.1](https://salsa.debian.org/seamlik/voidbuilder/commit/8459b54c3afa5ee76118073cd3026b1c5be7259a) have been released.
