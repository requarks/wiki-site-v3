---
title: The Switch to RDBMS Explained
description: I got a few questions as to why Wiki.js 2.0 would be switching from MongoDB to a RDBMS backed system. Here’s the reasoning behind the move…
date: 2018-08-23
tags:
  - architecture
  - v2
---

I got a few questions as to why Wiki.js 2.0 would be switching from MongoDB to a RDBMS backed system. Here's the reasoning behind the move:

## Difficulties encountered with MongoDB
### Limited Search Capabilities
While MongoDB offers some text search functionality, it's very basic and limited compared to what's available in a more mature system like PostgreSQL. Because of this, Wiki.js 1.x was relying on an in-memory solution instead (the search-index npm module). But again, this solution was limited and didn't scale well.

### Lack of hosting options
In order to get MongoDB running, most users had to install it locally or rely on the very small selection of cloud providers that offer it (basically MongoDB Atlas or mLab). This severely limited installation options when using AWS, Azure, etc. where you basically had to provision a VM running MongoDB instead of using the first-party DB solutions offered by these providers.

### No "lite" solution
You'd be surprised how many people are installing Wiki.js on Raspberry Pi or similar low power systems. When RAM and CPU is limited, having to install MongoDB is often not an option or greatly affect performance.

### No real NoSQL benefit to Wiki.js data structure
NoSQL databases can bring benefits to various applications by not having a schema and being JSON first. This was simply not really an issue with Wiki.js in the first place, so using MongoDB didn't bring any performance improvements or reduced complexity versus using a traditional RDBMS system.

## The Pros of using an RDBMS ORM for 2.x
### Choice, choice and more choice
By using Objection.js + Knex.js behind the scene, users are free to choose any of the following database systems for Wiki.js 2.x:

- MariaDB
- MySQL
- MS SQL Server
- PostgreSQL
- SQLite3

Enterprise users will appreciate the ability to use their existing MS SQL Server / PostgreSQL architecture for Wiki.js. At the other end of the spectrum, users with very limited systems (e.g. Raspberry Pi) will be able to use SQLite3 which is perfect for these scenarios.

Having such a wide selection means you can use cloud services like Azure Databases, AWS RDS or even the free Heroku PostgreSQL option.

### Proper Search Capabilities
While Wiki.js 2.x will introduce support for dedicated search engines such as ElasticSearch, Algolia and more, it will now be possible to use the database built-in search capabilities. Engines like PostgreSQL have very powerful search capabilities. Just be aware of the limitations if you're planning to use SQLite3 to power your installation.

### Better Data Consistency
By using a strict schema with typed fields, this ensure proper data consistency and forces developers looking to write modules for Wiki.js to properly store their data. It's also much easier for companies looking to bind the data with their existing systems directly from the database.