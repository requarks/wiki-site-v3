# Local Desktop

This guide is a quick and simple guide to run Wiki.js on your local **macOS** or **Windows** machine.

## 1. Install Docker Desktop

Install Docker Desktop which includes both Docker and Docker Compose:

- [macOS *(Apple Silicon)*](https://desktop.docker.com/mac/main/arm64/Docker.dmg)
- [macOS *(Intel)*](https://desktop.docker.com/mac/main/amd64/Docker.dmg)
- [Windows](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe)

## 2. Create the Installation Folder

Create a new folder named `wiki` at the location of your choice.

Inside this folder, create a new file named `docker-compose.yaml` and paste the following contents inside, replacing the `REPLACE_ME` values with the desired email and password for the root admin account: 

```yaml
version: "3"
services:

  db:
    image: postgres:16
    environment:
      POSTGRES_DB: wiki
      POSTGRES_PASSWORD: wikijsrocks
      POSTGRES_USER: wikijs
    logging:
      driver: "none"
    restart: unless-stopped
    volumes:
      - db-data:/var/lib/postgresql/data

  wiki:
    image: ghcr.io/requarks/wiki:3.0.0-alpha
    depends_on:
      - db
    environment:
      ADMIN_EMAIL: REPLACE_ME
      ADMIN_PASS: REPLACE_ME
      DB_HOST: db
      DB_USER: wikijs
      DB_PASS: wikijsrocks
      DB_NAME: wiki
    restart: unless-stopped
    ports:
      - "80:3000"

volumes:
  db-data:
```

This file simply defines a PostgreSQL container *(the database)* and the Wiki.js container.

## 3. Open Terminal / Command Prompt

On **macOS**, launch **Terminal** and navigate to the `wiki` folder your created earlier.

On **Windows**, open the folder `wiki` you created earlier in **File Explorer**.  
In the address bar, type `cmd` and press <kbd>ENTER</kbd> to launch a **Command Prompt** at that location.

## 4. Launch Wiki.js

Type the following command in the **Terminal** / **Command Prompt** to start Wiki.js:

```sh
docker compose up -d
```

## 5. Browse to Wiki.js

Open your browser, navigate to http://localhost and login using the email and password you provided above!