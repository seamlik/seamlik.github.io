---
date: 2017-09-10T16:42:09+08:00
title: How to Contribute to Android SDK in Debian
---

**A bit of background**: This article was written to provide freshman guide for students who was applying for the ["Android SDK Tools in Debian" project](https://wiki.debian.org/Outreachy/Round15/Projects#Outreachy.2FRound15.2FProjects.2FAndroidSDKToolsInDebian.Android_SDK_Tools_in_Debian) in [Outreachy](https://outreachy.org).

Android SDK is available [in Debian](https://packages.debian.org/source/sid/android-sdk-meta). With these tools, Android developers are able to build their apps with pure open source software that has neither limitation on usage nor probable scary backdoors. However the packages are usually out-of-date and do not cover all components of the SDK due to the huge size of AOSP and a lack manpower. If you are interested in help us, you may find this article helpful.

This isn't a detailed tutorial. Instead, it's a guide for you to know about the overall workflow and where to start.

## Where to Find Us

You can find some information about the team [here](https://wiki.debian.org/Teams/AndroidTools). IRC and mailing list are how we communicate mostly.

### IRC

IRC is a kind of anonymous group chat technology invented a great many years ago. It is the preferred way of meeting for surprisingly most of the open source projects in the world. In order to join an IRC channel, use any IRC client (e.g. [Polaris](https://wiki.gnome.org/Apps/Polari) and [IRCCloud](https://irccloud.com)) to login an IRC server, choose a nickname, then you can enter a channel you find interested.

Debian has an official IRC server (which is actually [OFTC](https://oftc.net)): `irc.debian.org`. You can find us in the `#debian-mobile` and `#debian-android-tools` channels. We usually talk in the first one and check out Git repository notifications in the second one. My nickname is `seamlik`, and `_hc` is the team founder.

### Mailing list

In case you don't already know what an mailing list is, imagine it's also a group chat platform but for emails. Any email address that subscribe to the list address will receive all emails sent to the list address. Our team also has a mailing list where we make announcements and discussions that we prefer to be publicly recorded. Visit the [mailing list webpage](https://lists.alioth.debian.org/cgi-bin/mailman/listinfo/android-tools-devel) to subscribe to it.

### Git Repositories

We host all our code on Debian's infrastructure ([Alioth](https://anonscm.debian.org/cgit/android-tools), though it is [being replaced](https://wiki.debian.org/Alioth/GitNext) at the time). There are also [mirrors](https://github.com/debian-pkg-android-tools) on GitHub, though we do not accept pull request there because that would be beyond Debian's workflow.

## Learn to Maintain Debian Packages

The `android-tools` team (our team 😉) is a packaging team in Debian, which means we maintain packages of a specific topic (in this case, Android). In order to contribute to the effort, you first need to learn to maintain Debian packages. There are already a number of tutorials out there, e.g. "[Debian New Maintainers' Guide](https://www.debian.org/doc/manuals/maint-guide)", "[Guide for Debian Maintainers](https://www.debian.org/doc/manuals/debmake-doc/index.html)" and "[Ubuntu Packaging Guide](http://packaging.ubuntu.com/html)".

Once you know how to write build scripts for Debian packages, you may try updating existing packages or make new ones and then look for a Debian member to sponsor it (upload it for you). For packages without a team, you need to file a "sponsorship request" [here](https://mentors.debian.net). But since Android SDK packages are maintained by our team, you should directly ask us to do the sponsoring.

## An Overview of Our Packages

The entire source code of the SDK is part of AOSP and we basically fetch the source code from it and build the toolset using handwritten `Makefiles`. Since AOSP is a gigantic project with the size of 200+ GiB, it is improper and maybe impossible to make it as a single source package in Debian. We therefore consider a single Git repository of AOSP as the basic unit of one source package in Debian and clarify the relationship to the AOSP repository in the source package name. Take [`android-platform-system-core`](https://packages.debian.org/source/unstable/android-platform-system-core) for example, its source code corresponds to [`platform/system/core`](https://android.googlesource.com/platform/system/core).

The work needed to be done includes updating all packages to the latest Android release, packaging missing parts of the SDK and improve the [helper tools](https://packages.debian.org/sid/android-sdk-helper) that build Android apps on Debian. These are the top priorities.

You can find more thorough information at the [wiki page](https://wiki.debian.org/AndroidTools).

## Spread the Word!

If you find Android SDK in Debian useful to your projects or your company, please provide us feedback. But it would be awesome if you start to help us with the packages! Do share the project with your friends and colleagues, so that we get more users and help!