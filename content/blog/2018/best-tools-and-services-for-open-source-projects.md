---
title: Best Tools and Services for Open Source Projects
description: While developing Wiki.js, I've been looking all over the internet for the best tools / services I could use to help with development, deployment, project management, etc. You'd be surprised to learn that many companies offer free access to their tools / services if you're developing an open source project.
date: 2018-07-14
tags:
  - tips
---

So you're starting an open source or personal project, and soon enough, you start looking for some good tools and online services you could use for your project. You're not a big company with unlimited funds so these tools must be free or very cheap.

While developing [Wiki.js](https://wiki.js.org), I've been looking all over the internet for the best tools / services I could use to help with development, deployment, project management, etc. You'd be surprised to learn that many companies offer free access to their tools / services if you're developing an open source project.

Here's a list of tools / services I recommend for your projects:

- [Source Code Version Control](#sourcecodeversioncontrol)
- [Continuous Integration / Deployment](#continuousintegrationdeployment)
- [Project Management](#projectmanagement)
- [Authentication](#authentication)
- [Browser Testing](#browsertesting)
- [Code Analysis](#codeanalysis)
- [Code Editors / IDE](#codeeditorside)
- [Financing](#financing)
- [Infrastructure](#infrastructure)
- [Localization](#localization)
- [Mail](#mail)
- [Monitoring](#monitoring)
- [Search](#search)

## Source Code Version Control
[GitHub](https://www.github.com) is pretty much a given if you're doing anything open source. It's the one and only place for your open source projects, period. It offers free unlimited public repositories to host your code.

If you need private repositories however, I recommend [Visual Studio Team Services](https://visualstudio.microsoft.com/team-services/). It offers free unlimited private repositories for up to 5 users. It has some of the best UI and features for Git.

**Honorable Mention**<br>
[GitLab](https://about.gitlab.com/pricing/#gitlab-com) offers both free public + private code repositories and works similarly to GitHub.

## Continuous Integration / Deployment
[Visual Studio Team Services](https://visualstudio.microsoft.com/team-services/) offers the most robust build and release system. It offers both UI and code-based build/release definitions and integrates with pretty much every other service you can think of. Builds can run on either Windows, Linux or MacOS machines. Just like their git repository feature, it's free for up to 5 users and has 1 concurrent build with 240 minutes/month included.

Another good solution is [Wercker](http://www.wercker.com). It's completely docker-based and is free to use for up to 2 concurrent builds. Even though it was bought by Oracle (disclaimer: I'm not a fan of Oracle), so far they have kept their promise of keeping the free plan.

**Honorable Mention**<br>
[Travis CI](https://travis-ci.org/) is a popular choice for open source projects. However, they tend to have reliability issues and their environments are very opiniated in the sense that their images are configured in some non-standard ways.

## Project Management
[Waffle.io](https://waffle.io/) offers a nice kanban style board of your GitHub issues. It's completely free and stays in sync with your GitHub issues. It uses GitHub Issue labels to organize your tasks. It doesn't have all the bells and whistle as more advanced paid solutions, but it's ease of use makes up for it.

If you're looking for more advanced tool, [JIRA](https://www.atlassian.com/software/views/open-source-license-request) is free for open source projects and is a standard in the industry. However, you're limited to 10 users and there's no syncing of issues with GitHub. It also has steep learning curve if you've never used JIRA before.

While GitHub Issues is good for reporting bugs, [Canny.io](https://canny.io) is perfect for collecting feedback for new ideas / features. Users can vote on ideas and leave comments. Project maintainers can then mark the idea as *Planned* or *In Progress* which is great for keeping users in the loop.

Sometimes you just want to be able to quick chat with your users and offer them a faster way to ask questions. [Gitter](https://gitter.im/) provides a free Slack-style service with great integration with GitHub.

**Honorable Mention**<br>
[Trello](https://trello.com) is all about boards and has been around for quite some time. It offers unlimited boards for free but you're limited to a single integration, which can become quite limiting.

## Authentication
[Auth0](https://auth0.com/) is an authentication and authorization platform for any type of application. They make integrating Google, Facebook, etc. authentication a breeze. They offer a free plan of 7000 active users and unlimited logins.

## Browser Testing
[BrowserStack](https://www.browserstack.com/open-source) has the most comprehensive solution to test your web app on any desktop, mobile, browser and OS you can think of. Open source projects get free access to their tools.

## Code Analysis
[Codacy](https://www.codacy.com/) offers free code quality and coverage analysis for your open source projects.

[Snyk](https://snyk.io/) checks your dependencies for vulnerabilities and informs you when a new version is available. The service is free for open source projects.

## Code Editors / IDE
[Visual Studio Code](https://code.visualstudio.com/) has taken the top spot in recent years among developers. It's light, it's fast and it has the great intellisense feature (code completion) from it's Visual Studio big brother.

**Honorable Mention**<br>
[JetBrains](https://www.jetbrains.com/) offers their complete suite of IDEs completely free for open source projects. It includes IntelliJ based editors such as WebStorm, PHPStorm, PyCharm and more. Even if you're not interested in their code IDEs, I strongly suggest taking a look at their database IDE [DataGrip](https://www.jetbrains.com/datagrip/).

## Financing
[OpenCollective](https://opencollective.com/) provides a platform for open source developers to get donations from users. All contributions and spendings are public. It also provides an easy way for contributors to post expenses as well.

[CodeFund](https://codefund.io/) is an ad-platform for developers. Unlike other platforms, it only serves ethical advertising (no tracking, no cookies, etc.).

## Infrastructure
[DigitalOcean](https://m.do.co/c/5f7445bfa4d0) offers free credits for open source projects. Their droplets solution is among the cheapest and easiest to use. Unlike big cloud providers which charge by usage, DigitalOcean has no non-sense flat price structure which makes it the ideal solution for developers.

[Cloudflare](https://www.cloudflare.com) offers free DNS, SSL, reverse-proxy and firewall for your web apps. Their powerful global infrastructure makes it a no brainer for open source projects where speed and reachability across the globe is a necessity. Open source projects can get the Pro plan for free.

## Localization
[Lokalise](https://lokalise.co) is a must-have when it comes to offering your app in multiple locales. They offer their enterprise plan for free to open source projects. They have some of the most innovative features to facilate development such as live editing and mobile in-app live preview.

## Mail
[Mailgun](https://www.mailgun.com/) is an email service specifically for developers. It's easy to integrate with your application to offer transaction or marketing email capabilities, thanks to their APIs and client libraries. They offer a generous free plan.

**Honorable Mention**<br>
[SendGrid](https://www.sendgrid.com) is another big player with similar capabilities as Mailgun. They also have a free plan.

## Monitoring
[Bugsnag](https://www.bugsnag.com/open-source/) captures error and diagnostic data for faster resolution of bugs in your app. They have client libraries in many programming languages. Their solution is free for open source projects.

[StatusPage.io](https://www.statuspage.io/powered-by) provides a status page to keep your users informed during an outage. It's a must have for online services and it's free for open source projects.

## Search
[Algolia](https://www.algolia.com/) is a search-as-a-service platform with great integration solutions. They already power many open source projects and they offer their Essential plan free to these projects.