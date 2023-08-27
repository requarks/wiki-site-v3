---
title: Wiki.js 3.0 - Going Full PostgreSQL
description: Learn the reasons behind the move to use exclusively PostgreSQL going forward...
date: 2021-02-06
tags:
  - v3
---

tl;dr: The upcoming Wiki.js release 3.0 will only support the **PostgreSQL** database engine. Other engines (MySQL, MariaDB, MS SQL Server and SQLite) are being deprecated.

In order to offer a better experience and reduce development overhead, we'll be focusing on a single database engine going forward.

## Current Landscape

Even though 5 different DB engines are supported in v2, the current database engine type distribution shows major support for PostgreSQL. 

This is mainly thanks to it's inclusion by default in DigitalOcean and AWS Marketplace images, as well as it's requirement for distributed deployments on Kubernetes. There's also the fact that PostgreSQL was highly recommended in the documentation for best experience and future compatibility.

![Markdown Editor](/img/blog-2021-wikijs-db-chart.png){.rounded-md.mx-auto}

## But why?

Even though the underlying database driver used by Wiki.js (Knex.js) supports all 5 engines without having to write 5 different code implementations, the fact is that each engine have very different capabilities and quirks that introduces a whole set of issues.

The biggest pain point is **search**. PostgreSQL offers advanced search capabilities that can rival dedicated search products like Elasticsearch in many scenarios. However, these features are simply not present in other engines (and probably never will). This led to having 2 different search modules (DB - Basic and DB - PostgreSQL) in Wiki.js, with the basic one being the default since it works on all engines. As the name implies, the basic module is very limited and not so great at actually finding what you're looking for.

The **search UI** is also limited by what the engine can offer. For example, while displaying the matched text in the search results could easily be added using PostgreSQL, this is either impossible or impractical with other engines.

**Multi-pods installations** (Kubernetes) currently require PostgreSQL because of the dependency on its pub/sub capabilities, which again is native to PostgreSQL. This means certain logic must be hidden behind a flag because it must only run when the proper DB engine is present. While all instances are pointing to the same database, each have a local cache to improve performance and reduce the number of requests made to the database. Without a way to notify other instances when content is modified, nodes quickly become out of sync with each other resulting in users seeing out of date content.

**DB Migrations** are another area where custom code specific to each DB engine is often required. When installing a new version of Wiki.js, changes must be made to the database to account for new fields or modifications. Because each engine react a bit different to these changes, it requires a lot of testing. Because of all the possible states a database can be in, it also increases the risk of a failed migration.

Some **logic runs much slower** on non-postgreSQL installations because they lack the advanced functions required by Wiki.js. For example, when reconnecting links after a page update, something that can be done in a single query with PostgreSQL must be done in multiple slower queries in other engines. Another example would be regarding tags. When adding a relation between a page and tag, each tag must be associated separately in other engines while it can all be done in a single query using PostgreSQL.

Finally, there's the **added development overhead** associated with supporting multiple DB engines. Because development is done with PostgreSQL, some issues specific to other engines are only discovered much later during the beta stage or even after release. This in turn requires either a rewrite of the logic to account for these quirks or to write additional code just to handle that specific database engine.

## New Possibilities

By focusing solely on PostgreSQL, it not only simplifies development but allows for further optimization and more advanced features that are not held back by the DB engine.

As mentionned earlier, search is one area which is expected to greatly improved in 3.0 and beyond. Better performance, more accurate results and a much needed uplift in search result features.

Logic will be optimized for PostgreSQL in mind instead of writing less-optimized code that is more "compatible". This should also result in more stable releases by having only a single engine to test against.

Finally, by leveraging capabilities specific to PostgreSQL, some features can now be written from the beginning with multi-instances deployments in mind instead of being patched in afterwards.

## PostgreSQL is great

PostgreSQL is not only open-source (which aligns perfectly with our project), it has over 30 years of active development. It's incredibly robust and has unmatched performance.

All major cloud providers offer PostgreSQL as a service (AWS, Azure, GCP, DigitalOcean, etc.) making it a viable option for any cloud deployment. If you host it yourself, it works on virtually any platform and on Docker as well.

## Migration

For 2.x installations **already using PostgreSQL**, the upgrade to 3.0 will be completely seamless and in-place, just like upgrading from 2.4 to 2.5.

For 2.x installations **using other DB engines**, an export / import tool will be provided at or shortly after release, allowing you to move all existing content, users, comments, etc. into a new 3.0 installation.