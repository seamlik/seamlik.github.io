+++
date = "2016-10-02T10:42+08:00"
title = "My Open Source Activities in September 2016"

+++

Finally I decided to mark down my activities in open source communities every several months.

I've been maintaining a blog of my own but actually I just put it at the corner and let it get dusty, which was not my intention in the first place. I always felt that there's not much to write down, well, which was also not right. Writing articles about my work may not interest most random people, but at least it can be considered being responsible of my actions in open source communities.

The following is the brief notes of my open source activities in September 2016:

## Applied for Debian Maintainer

I've spent about a year in contributing to Debian, all began in Google Summer of Code 2015 when I was working on [packaging Android SDK in Debian](https://wiki.debian.org/SummerOfCode2015/StudentApplications/KaichungYan). After that I kept working on the project, but most of the time I need to file a Request for Sponsor (RFS) for asking a Debian Developer for reviewing on my packages. [Hans-Christoph Steiner](https://wiki.debian.org/HansChristophSteiner), Markus Koschany and Emmanuel Bourg did most of the review for me. Now that I am familiar with packaging, I should be qualified to apply for a DM identity. Being a DM, I can gain upload permissions to my own packages, which will ease the maintenance. According the [application](https://nm.debian.org/process/83), I have been approved (🎉🎊) but not officially a DM. Thanks to Debian Developer nthykier who told me on IRC that my key is waiting for being synced to the official keyring, which will probably happen in October.

Thanks for the advocations from Hans-Christoph Steiner, Markus Koschany and Emmanuel Bourg!

## Started Updating Android Packages to Nougat

With the exciting release of Android 7 Nougat comes the beginning of the CyanogenMod developers' busy period, as well as Debian's android-tools team's. One of our teammates Chirayu Desai notified us someday that the source code of Android N is released, after which I summarized some of my [ideas and plan](https://lists.alioth.debian.org/pipermail/android-tools-devel/2016q3/001740.html) on the mailing list. There will be several changes for the Nougat update:

  * **ARM & MIPS builds are brought back.** Actually they were there before I rid them out. 😓 We decided to maintain x86 binaries only because Google only supports and releases Android SDK in x86. Now I know how to setup an environment of other architectures as well as how to build packages for these architectures, it would be great to support them again. Plus the Debian Lava team seemed to care about ADB on ARM64 by complaining on the [removal bug](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=817). Good news is that Chirayu Desai is also willing to help me in these architectures since he does not use any x86 machines. 😂
  * **`AndroidConfig.h` are 🔥.** [These header files](https://android.googlesource.com/platform/build/+/android-6.0.1_r68/core/combo/include/arch) contains macros dealing with architecture details and must be included in all C/C++ binaries in AOSP. Since Nougat, the AOSP team removed the header files and we are able remove the use of [build profiles](https://wiki.debian.org/BuildProfileSpec) in [`android-platform-build`](https://tracker.debian.org/pkg/android-platform-build).
  * **[`aidl`](https://tracker.debian.org/pkg/android-platform-system-tools-aidl) is now a separated package.** It was previously a package in [`android-platform-frameworks-base`](https://android.googlesource.com/platform/frameworks/base/+/android-6.0.1_r68/tools/aidl). I really don't like the AOSP team moving stuff around. They have a gigantic project tree to play with but we don't!

In this month I have prepared updates for the following packages:

  * [`android-platform-external-doclava`](https://tracker.debian.org/pkg/android-platform-external-doclava) (not yet uploaded)
  * [`android-platform-external-libselinux`](https://lists.alioth.debian.org/pipermail/android-tools-devel/2016q3/001873.html)
  * [`android-platform-external-libunwind`](https://lists.alioth.debian.org/pipermail/android-tools-devel/2016q3/001883.html)
  * [`android-platform-frameworks-native`](https://tracker.debian.org/news/799608)
  * [`android-platform-libcore`](https://lists.alioth.debian.org/pipermail/android-tools-devel/2016q3/001889.html)
  * [`android-platform-system-core`](https://lists.alioth.debian.org/pipermail/android-tools-devel/2016q3/001896.html)
  * [`android-platform-system-extras`](https://lists.alioth.debian.org/pipermail/android-tools-devel/2016q3/001914.html)
  * [`android-platform-system-tools-aidl`](https://lists.alioth.debian.org/pipermail/android-tools-devel/2016q3/001929.html)

For the moment they are being uploaded to the experimental distribution. After all of the existing packages are updated to 7.0.0+r1, we will upload all of them to Unstable.

## Hacking `gradle-debian-helper` So That It Auto-generates Maven POMs

Every Debian packages providing Java libraries should install Maven POMs into `/usr/share/maven-repo` which serve as the metadata. Without these metadata, these libraries would be uneasy to be used by other Java packages. Gradle projects do not have Maven POMs, so the package maintainers need to write custom rules to generate them.

Most of the Android packages are built with Gradle and `gradle-debian-helper`, and I need to provide the same scripts for them in order to generate the Maven POMs. Weeks ago I noticed that almost all Android packages containing Java libraries are unreproducible because the order of the dependencies in the Maven POMs are unsorted and random, and I had to modify every one of those packages to sort the dependencies. If the Maven POM generation was done by `gradle-debian-helper`, my life could have been better.

The feature is being developed at [GitHub](https://github.com/seamlik/gradle-debian-helper/tree/debian-pom-generation). The obstacle I met so far is that it is tricky when you are writing Gradle plugins in Java and you need to access the third-party classes used by Gradle classes. The compiler complained that I must not convert `org.apache.maven.model.Dependency` to `org.apache.maven.model.Dependency`, which sounded nonsense. My first guess was that the build script (`pom.xml`) of gradle-debian-helper links to the JARs in `/usr/share/java` instead of POMs in `/usr/share/maven-repo`. I modified the build script so that it links to POMs in `/usr/share/maven-repo` but it just failed to load `pmaven-debian.pom`. I've reported this [bug](https://bugs.debian.org/837882).

## Other Activities

  * **Fix Gradle's failure to launch.** Previously, Gradle still harcoded the JAR versions in its classpath, and a new upstream release of JSch [broke Gradle entirely](https://bugs.debian.org/836391). I modified the build scripts of Gradle so that it used a versionless classpath without manually removing the dependency declarations. The tricky part is that Gradle builds using itself, so even now we've fixed the Gradle in Debian, the new release of Gradle in Ubuntu still [FTBFS](https://bugs.launchpad.net/ubuntu/+source/gradle/+bug/1622550). I asked on the IRC and was told that I need to contact the Ubuntu archive managers and ask them to rebootstrap the package, which I did afterwards and [Colin Watson](https://launchpad.net/~cjwatson) helped. Thank you!
  * **Polished the packaging of Gradle.** This includes dropping the generation of classpaths in the JAR manifest (otherwise JVM loads 2 sets of the same JARs) and making the generated Maven POMs reproducible.
  * **Prepared updates for several packages** including [android-platform-frameworks-native/6.0.1+r55-1](https://lists.alioth.debian.org/pipermail/android-tools-devel/2016q3/001749.html).
  * **Reported a [wishlist bug](https://bugs.debian.org/837873)** that `src:p7zip` should provide developemnt packages for `lib7z.so`.
  * **Reported bugs about [`src:closure-compiler`](https://bugs.debian.org/838033) and [`src:zabbix`](https://bugs.debian.org/838034) who should switch to [`libandroid-json-java`](https://packages.debian.org/libandroid-json-java) from dusty [`libandroid-json-org-java`](https://packages.debian.org/libandroid-json-java).** Turns out that the JSON library in AOSP is used by external projects, although I wonder why somebody would reply on a library without any API stability or version information. Anyway, it is used by packages in Debian, which was why I built this library in [`src:android-platform-libcore`](https://tracker.debian.org/pkg/android-platform-libcore) in the first place.
  * **Reported a bug about `qemubuilder`** failing on creating images for [`arm64`](https://bugs.debian.org/838753)
  * **Manually closed [the bug](https://bugs.debian.org/816083)** about an auto-transition of `android-platform-build` which is long ended.

## Plans for the Next Months

  * Update [Gradle](https://tracker.debian.org/pkg/gradle) to 3.1.
  * Finish the update of all Android packages to Nougat.
  * Fix and upload [android-framework-23](https://anonscm.debian.org/cgit/android-tools/android-framework-23.git), the last missing piece of a usable SDK.

Hope I can also manage to pass my exams after all these. 🙄
