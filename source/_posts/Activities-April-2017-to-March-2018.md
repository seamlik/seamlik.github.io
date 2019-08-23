---
title: My Open-Source Activities from April 2017 to March 2018
date: 2018-04-14T05:00:38
---

Because of all the nonsense coming from my current school, I hadn't been able to spend too much time on open source projects. As a result, this post sums up an entire year of activities after the previous one... Surprised me a bit too. 😰

## Personal Projects

Created a [repository in GitLab](https://gitlab.com/seamlik/utils) to store some useful scripts and config files that makes up my development environment. It mostly focuses on Debian development, but will add more stuff in other area when the time has come.

The repository contains files that sets up [`cowbuilder`](https://wiki.debian.org/cowbuilder) for all officially supported architectures in Debian, and some scripts to update the images, to build a package in all those architectures, and to build a long list of packages, all in parallel using a process pool. Very useful when you are testing reverse-build-dependencies.

## Introducing [`maven-repo-helper-extras`](https://salsa.debian.org/seamlik-guest/maven-repo-helper-extras)

I spent several weeks writing some additional tools for the existing [`maven-repo-helper`](https://tracker.debian.org/pkg/maven-repo-helper). The package now contains 2 tools:

* `mh_shlibdeps`: Like `dh_shlibdeps` but for Maven artifacts, successor to `mh_resolve_dependencies`
* `mh_genlauncher`: Generate simple launcher scripts for Java programs distributed as Maven artifacts.

The package name is likely to be changed, and `mh_genlauncher` is likely to be replaced by something neater. Still waiting for other core devs in `pkg-java` team to review it.

## Other Activities

* Updated BND to [3.5.0](https://tracker.debian.org/news/940380/accepted-bnd-350-1-source-into-unstable).
  * Updated Maven Bundle Plugin to [3.5.0](https://tracker.debian.org/news/942832/accepted-maven-bundle-plugin-350-1-source-into-unstable).
  * Updated OSGi Compendium to [6.0.0](https://tracker.debian.org/news/939135/accepted-osgi-compendium-600-1-source-into-unstable).
  * Introduced [Felix Resolver](https://tracker.debian.org/pkg/felix-resolver)

## Google Summer of Code 2018

I am now a mentor under Debian organization in GSoC 2018, guiding students to contribute to our Android SDK packages.