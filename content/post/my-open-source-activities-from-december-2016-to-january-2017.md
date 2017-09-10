---
date: 2017-02-26T16:22:35+08:00
title: My Open-Source Activities from December 2016 to January 2017
---

I am such a lazy person that this post should have shown up a year ago... 🤧

Debian
======

As my [previous post](/post/my-open-source-activities-in-september-2016) suggested, The Android SDK for Nougat is coming to Debian, and we did it. As of today, all SDK packages except for the target framework (`android.jar`) are updated to 7.0.0_r1, all of which have X86, ARM & MIPS builds. There is no plan to update them to 7.1.1 yet, though an `android-sdk-platform-25` will someday be done.

Other notable activities include:

  * Uploaded a new package [`android-platform-tools-analytics-library`](https://tracker.debian.org/pkg/android-platform-tools-analytics-library).
  * Updated [`android-platform-tools-base`](https://tracker.debian.org/pkg/android-platform-tools-base) to 2.2.2. This package provides the ofiicial Gradle plugin for building Android apps.

Honestly, updating the Gradle plugin was a messy task because it introduces several big dependencies including the core library of IntelliJ IDEA! Since at that time Debian has entered soft freeze, which means no new packages will be accepted automatically into Stretch, we had to bundle those third party sources into this package. Someday I'm gonna split them into separated packages, otherwise it will be very ugly.

Maybe I'll be the first warrior to package IntelliJ IDEA? 🤔 Hmm it's getting more and more scary. 🤧

Other Projects
==============

In January, I started a [small project called "pom2classpath"](https://github.com/seamlik/pom2classpath) which generates a Class-Path list for a given Maven POM by scanning given Maven repositories. This may not sound attractive by typical Java software dstributor, but it greatly benefit Debian's Java packaging. Once you get the Class-Path, you can scan for the dependencies of a Debian package which largely automates the work of packaging a large Java package. So far, you need to manually summarize what package should be put in `d/control` when you are packaging a Gradle project, which is error-prone and a waste of time and energy.

Additionally, you can even simply write an extremelt minimalist launcher script when packaging a Java executable program without storing the Class-Path in the JARs. There has to be just one line in this launcher script: `pom2classpath /usr/share/maven-repo/com/foo/1.0/foo-1.0.pom`. Cool! 😎

After some testings I'll put it in Debian and start hacking maven-repo-helper so that it generates dependencies to `substvars` files.