+++
date = "2016-12-01T14:39+08:00"
title = "My Open Source Activities in October to November 2016"

+++

I did not finish too many significant jobs in the last 2 months, so I am combining them into one post. So far I still only work in Debian, but my (would-be) personal open source project [Viska](https://github.com/seamlik/viska-android) has started its conceptional stage, although there is not much effort spent in it yet.

# Debian

* Updated [`android-platform-external-libunwind`](https://tracker.debian.org/news/802302) so that `android-platform-frameworks-base` can build against it.
* Uploaded [`android-platform-tools-swt`](https://tracker.debian.org/news/814300) which provides various graphical tools in Android SDK using SWT.
* Uploaded [`android-framework-23`](https://tracker.debian.org/news/814301) which provides the Android SDK Platform for API Level 23.
* Released [`gradle-debian-helper` 1.4](https://tracker.debian.org/news/808921) with new features:
  * A task of genetating Maven POMs for being used by `maven-repo-helper`
  * Let `javadoc` link to the local Javadoc of `default-jdk`
* Updated `libnative-platform-java` to [0.11](https://tracker.debian.org/news/812120)
* Updated `gradle` to [3.1](https://tracker.debian.org/news/814966). Also updated the following packages in order to be compatible with Gradle 3.x:
  * [`android-platform-tools-base`](https://tracker.debian.org/news/820417) 
  * [`bnd`](https://tracker.debian.org/news/814980)
  * [`gant`](https://tracker.debian.org/news/814978)
  * [`groovy`](https://tracker.debian.org/news/815030)
  * [`libgpars-groovy-java`](https://tracker.debian.org/news/815035)
* Uploaded a new package `uncommons-watchmaker`
* Updated [`android-sdk-meta`](https://tracker.debian.org/news/820274) which now no longer installs symlinks to any shared libraries.

# Plans for the Next Months

Debian Stretch is coming soon as the transition freeze has passed and the soft freeze is coming in January. Therefore, I don't think there is enough time for the Nougat SDK getting into Stretch, since there's [one package](https://ftp-master.debian.org/new/android-platform-libcore_7.0.0+r1-3.html) being waiting in the NEW queue for over a month! Without it being accepted we can't step forward, so let's hope the SDK is better shaped in Debian Buster. Sorry about that, we can't do anything to accelerate the NEW queue. 😓

Anyway, forget about the techs, let's listen to some music! This December, I will be playing cello in [a small concert](https://www.facebook.com/events/1903887319840873) held in Taichung featuring Star Wars and some songs arranged by [Mr. Alan MacDonald](http://www.alanensemble.com/pages/ResumeAlan.html). If you live in Taichung, a nice city in Taiwan, please come!
