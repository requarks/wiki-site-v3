---
title: How to install Wiki.js 1.x on Ubuntu 16.04 LTS
description: At the end of this tutorial, you'll have a fully working installation of Wiki.js on Ubuntu 16.04 LTS. Let's get started!
date: 2018-03-01
tags:
  - tutorials
  - v1
---

Wiki.js is a powerful, modern and open-source wiki application. It includes all the features you'd expect in an elegant and modern user interface.

At the end of this tutorial, you'll have a fully working installation of Wiki.js on Ubuntu 16.04 LTS. Let's get started!

## Requirements

While this tutorial focuses on Ubuntu, Wiki.js works on virtually any platform where Node.js is supported. These are the minimum requirements:

### Hardware

* 1 CPU core
* 1 GB of RAM
* 10 GB of disk space


### Software

* Node.js `6` or later
* MongoDB `3.4` or later
* Git `2.7.4` or later


## Install Node.js 8.x

From the terminal, **execute** the following command to install the LTS version of Node.js:

    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    sudo apt-get install -y nodejs

You can **verify** that Node.js was correctly installed by running: `node -v`

## Install MongoDB 3.6

MongoDB can be installed either on the same server or a remote server. As long as it can be accessed from the server where Wiki.js will be installed.

Let's add the MongoDB apt repository key:

    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5

And the apt repository source:

    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list

We can now **install** MongoDB:

    sudo apt-get update && apt-get install -y mongodb-org

MongoDB is now installed! Let's **start the MongoDB service**:

    sudo service mongod start

## Install Git

Fortunately, Ubuntu 16.04 already comes with a supported version of Git. You can verify the version by running: `git --version`

## Install Wiki.js

We are now ready to install Wiki.js. Let's first **create a folder** where the files will be downloaded and installed:

    mkdir -p /var/wiki
    cd /var/wiki

The following command will automatically fetch compiled files and extract them into the folder you just created:

    curl -sSo- https://wiki.js.org/install.sh | bash

**Wait** for the installation process to complete. Upon completion, you should see an "_Installation Complete_" message.

The next step is to run the **configuration wizard**. This is where you'll input basic site settings and database info for your wiki. Start the configuration wizard:

    node wiki configure

After a few seconds, you should see an invitation to browse to `http://localhost:3000`. Open a web browser and navigate to this URL. Note that if you are installing Wiki.js on a remote server, you need to replace `localhost` with the IP or hostname of the server. For example, if your server IP is `12.34.56.78`, then you should navigate to `http://12.34.56.78:3000`.

In the event you cannot use port 3000 (e.g. already used by another application or blocked by a firewall), you can specify the port by appending it to the command. e.g.: `node wiki configure 3456`

You should be welcomed by the following page:

![Setup Wizard Screen](/img/blog-2018-wikijs-wizard-1.png){.rounded-md.mx-auto}

1. Click **Start** to begin.
1. On the next step, the wizard will check for system compatibility. Since we already installed all the necessary dependencies, everything should be checked green. Click **Continue** to proceed to the next step.
1. Enter the required info, taking particular attention to the `host` and `port` settings. The host must reflect the URL visitors will use to access your wiki. So even though your wiki might be installed on `12.34.56.78`, if your server is behind a proxy, you should instead enter the proxy URL. If you are using a port different from 80 or 443, you should also append the port to the end of the host. In summary, the `host` should reflect exactly what the client will type to access your site! On the other hand, the `port` parameter will be the port Wiki.js will listen on. This can be different than the port entered in the host parameter, for example if using a reverse proxy. Click **Continue** when ready.
1. The next step presents a few helpful tips that may concern you. Click **Continue**.
1. It's now time to connect to the MongoDB database we installed earlier. If you installed MongoDB on the same server, then you can leave the default value of `mongodb://localhost:27017/wiki`. Otherwise, replace `localhost` with the IP or hostname of the remote server where MongoDB is installed. Click **Continue**.
1. Wiki.js will now attempt to connect to the database. Click **Continue** to proceed to the final step.
1. Finally, enter the **email** and **password** for the root administrator. This is the user login you'll use to gain access to the administration area of your Wiki. Make sure to choose a strong password.
1. Wiki.js now has all the info needed to finalize the installation. **Wait** for the installation to complete. Upon completion, the wizard will automatically restart Wiki.js in normal mode. This usually takes 30 seconds. Click **Start** to access your freshly installed wiki!

You'll first need to login in order to create the home page. Use the email and password you just entered.

You now have a fully working Wiki.js installation!