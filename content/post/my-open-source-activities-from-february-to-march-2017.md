---
date: 2017-04-17T23:48:00+08:00
title: My Open-Source Activities from February to March 2017
---

After I started focusing my energy on my [capstone project](https://viska.chat), fewer and fewer contents will be present in the subsequent posts.

Android SDK in Debian
=====================

Now that a large portion of the Android SDK are already settled down inside Debian, we need to help Debian users make use of our them without breaking too many things. Hence, I hacked the Gradle Android Plugin in Debian a bit so that when it detects that Debian's Android SDK is being used, it does the following:

  * Auto-select the latest [`buildToolsVersion`](https://google.github.io/android-gradle-dsl/current/com.android.build.gradle.BaseExtension.html#com.android.build.gradle.BaseExtension:buildToolsVersion) installed in the system instead of downloading the specified version from internet.
  * Auto-select the best [`compileSdkVersion`](https://google.github.io/android-gradle-dsl/current/com.android.build.gradle.BaseExtension.html#com.android.build.gradle.BaseExtension:compileSdkVersion) installed in the system. If `23` was specified, it searches for `android-23`. If `android-23` is not installed, it searches for the oldest API level that is later than 23. If it misses again, an error is thrown.

Right now this approach would make the compiled APKs unreproducible because AAPT carves `compileSdkVersion` into the `AndroidManifest.xml` in an APK. This is tricky because we only have packaged [`android-23`](https://packages.debian.org/unstable/android-sdk-platform-23) and it is quite difficult to package any older `android.jar` due to that [Doclava](https://packages.debian.org/unstable/doclava-aosp) is [highly unstable and bugful](https://lists.alioth.debian.org/pipermail/android-tools-devel/2017q1/002519.html).

Besides the Gradle plugin we also wrote a Gradle init script that forces the build script of an Android application project to use the Gradle Android Plugin in Debian. The script is provided by [`android-sdk-helper`](https://packages.debian.org/unstable/android-sdk-helper).

You can find more information in a [mailing list post](https://lists.alioth.debian.org/pipermail/android-tools-devel/2017q1/002570.html) and [a post of Bits from Debian](https://bits.debian.org/2017/03/build-android-apps-with-debian.html).

Other Debian Activities
=======================

  * Packaged [`libscout`](https://tracker.debian.org/pkg/libscout), a command line tool for scanning third party libraries used by an APK. Used already by F-Droid.
  * Packaged [`libsmali-1-java`](https://tracker.debian.org/pkg/libsmali-1-java) for `libscout`.
  * Packaged [`wala`](https://tracker.debian.org/pkg/wala) which would be used by Jack. But following the [deprecation of Jack](https://android-developers.googleblog.com/2017/03/future-of-java-8-language-feature.html), I can stop chasing it now.

Viska
=====

My capstone project Viska is an Android XMPP client with VoIP, and WebRTC became my first choice because of its ever trend. Turns out the reference implementation (by Google) has built-in support for Android and the codebase is huge and not fast to compile (just like Google's other products), I opened up a [repository on GitLab](https://gitlab.com/seamlik/prebuilts-webrtc-android) providing prebuilt binaries including Javadoc of the WebRTC SDK for Android.