---
date: 2015-06-29T05:41:00+08:00
title: Introducing Gradle 1.12 in Debian
---

![](http://gradle.wpengine.netdna-cdn.com/wp-content/uploads/2015/06/gradlephant-291x300.png)

After 5 weeks of work, my colleague Komal Sukhani and I succeeded in bringing Gradle 1.12 with other packages into Debian. Here is a brief note of what we've done:

* Gradle updated to [gradle_1.12-1](https://packages.debian.org/source/experimental/gradle)
* Groovy updated to [groovy2_2.4.3+dfsg-1](https://packages.debian.org/source/experimental/groovy2)
* native-platform updated to [libnative-platform-java_0.10+dfsg-1](https://packages.debian.org/source/sid/libnative-platform-java)
* New package: [bintray-client-java_0.8.1-1](https://packages.debian.org/source/sid/bintray-client-java)

Note that both Gradle and Groovy are in experimental distribution because Groovy build-depends on Gradle, and Gradle build-depends on bnd 2.1.0, which is in experimental as well.

Updating these packages takes us an entire month because my summer vacation had not come yet until the day we uploaded Gradle and Groovy, which means we were doing the job in our spare time (Sukhani finished her semester at the beginning though).

Next step is to update Gradle to 2.4 as soon as possible because Sukhani has started her work on the Java part of Android SDK, which requires Gradle 2.2 or above. Before updating Gradle I need to package the Java SDK for AWS, which enables Gradle to access S3 resources. I also need to make gradle-1.12 as a separate package and use it to build gradle_2.4-1.

After that, I will start my work on the C/C++ part of Android SDK, which is far more complicated and messy than I had expected. Yet I enjoy the summer coding. Happy coding, all open source developers!

Finally, feel free to check out my weekly report in Debian's mailing list:

* Week 1: http://lists.alioth.debian.org/pipermail/soc-coordination/2015-May/002462.html
* Week 2: http://lists.alioth.debian.org/pipermail/soc-coordination/2015-June/002482.html
* Week 3: http://lists.alioth.debian.org/pipermail/soc-coordination/2015-June/002509.html
* Week 4: http://lists.alioth.debian.org/pipermail/soc-coordination/2015-June/002524.html
* Week 5: http://lists.alioth.debian.org/pipermail/soc-coordination/2015-June/002553.html