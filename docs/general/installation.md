---
title: Установка ПО
---

# Установка ПО

Перед разработкой и развертыванием платформы необходимо установить Docker и Node.js.

## Docker

> Руководство по установке Docker переведено со статьи [Install Docker and Docker Compose on Linux Mint 19](https://computingforgeeks.com/install-docker-and-docker-compose-on-linux-mint-19/)

Данное руководство представлено в пошаговой установке Docker и Docker Compose на Linux Mint 19 (Так же подходит для Ubuntu 18.04).

### Шаг 1: Установка зависимостей

Начните установку, убедившись, что установлены все пакеты, используемые докером в качестве зависимостей.

```
sudo apt-get update
sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
```

### Шаг 2: Добавление официального GPG-ключа Докера

Импортируйте GPG-ключ Docker

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

### Шаг 3: Добавьте репозиторий Docker

Добавьте репозиторий Docker в Linux Mint 19, чтобы вы могли установить последнюю стабильную версию Docker.

```
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(. /etc/os-release; echo "$UBUNTU_CODENAME") stable"
The command above will add a new line to additional repositories file.
```

```
$ cat /etc/apt/sources.list.d/additional-repositories.list
deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable
```

### Шаг 4: Install Docker Engine and Docker Compose in Linux Mint 19

Обновите индекс apt-пакета.

```
$ sudo apt-get update
Hit:1 http://ppa.launchpad.net/ondrej/php/ubuntu bionic InRelease
Hit:2 http://archive.ubuntu.com/ubuntu bionic InRelease
Hit:3 http://archive.canonical.com/ubuntu bionic InRelease
Hit:4 http://security.ubuntu.com/ubuntu bionic-security InRelease
Ign:5 http://packages.linuxmint.com tessa InRelease
Hit:6 http://archive.ubuntu.com/ubuntu bionic-updates InRelease
Get:7 https://download.docker.com/linux/ubuntu bionic InRelease [64.4 kB]
Hit:8 http://archive.ubuntu.com/ubuntu bionic-backports InRelease
Hit:9 http://packages.linuxmint.com tessa Release
Get:11 https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages [3,695 B]
Fetched 68.1 kB in 2s (33.9 kB/s)
Reading package lists… Done
```

Затем установите Docker CE и Docker Compose.

```
sudo apt-get -y install docker-ce docker-compose
```

Группа докеров создана, но пользователи не добавлены. Добавьте своего обычного пользователя в группу, чтобы запускать команды докеров от имени непривилегированного пользователя.

Имеется в виду, чтобы в дальнейшем не использовать вводить команды без `sudo`.

```
sudo usermod -aG docker \$USER
```

Перезайдите в терминал, чтобы настройки обновились.

Наконец, проверьте запуск тестового контейнера:

```
$ docker run --rm -it --name test alpine:latest /bin/sh
Unable to find image 'alpine:latest' locally
latest: Pulling from library/alpine
cd784148e348: Pull complete
Digest: sha256:46e71df1e5191ab8b8034c5189e325258ec44ea739bba1e5645cff83c9048ff1
Status: Downloaded newer image for alpine:latest


/ # cat /etc/os-release
NAME="Alpine Linux"
ID=alpine
VERSION_ID=3.8.2
PRETTY_NAME="Alpine Linux v3.8"
HOME_URL="http://alpinelinux.org"
BUG_REPORT_URL="http://bugs.alpinelinux.org"
/ # exit
```

Теперь Docker Engine и Docker Compose установлены.

## Node.js

> Руководства по установке взяты со статьи [Как установить Node.js в Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/node-js-ubuntu-18-04-ru) и c документации [по установке yarn](https://classic.yarnpkg.com/ru/docs/install/#debian-stable)

### Установка при помощи NVM

Альтернативой установке Node.js через apt является использование специального инструмента nvm, что расшифровывается как “Node.js version manager” (менеджер версий Node.js). Вместо того, чтобы работать на уровне операционной системы, nvm работает на уровне независимой директории в вашей домашней директории. Это означает, что вы можете устанавливать несколько самостоятельных версий Node.js, которые не будут влиять друг на друга.

Контроль вашей среды разработки посредством nvm позволяет вам получить доступ к последним версиям Node.js, сохраняя при этом предыдущие версии. Эта утилита, тем не менее, отличается от apt, и версии Node.js, которыми вы управляете с её помощью, отличаются от стабильных версий из стандартных репозиториев Ubuntu.

Для загрузки установочного скрипта nvm со страницы проекта на GitHub можно использовать curl. Обратите внимание на то, что номер версии может отличаться от указанного в этом примере:

```
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.35.3/install.sh -o install_nvm.sh
```

Просмотреть установочный скрипт можно используя nano:

```
nano install_nvm.sh
```

Запустите скрипт в bash:

```
bash install_nvm.sh
```

Эта команда установит ПО в поддиректорию ~/.nvm вашей домашней директории. Также в файл ~/.profile будут добавлены некоторые необходимые для работы настройки.

Для получения доступа к функционалу nvm, вам необходимо перелогиниться в системе, либо вы можете использовать команду source для того, чтобы применить изменения не прерывая текущую сессию:

```
source ~/.profile
```

Теперь, когда nvm установлен, вы можете устанавливать изолированные версии Node.js. Чтобы узнать, какие версии Node.js доступны для установки, наберите:

```
nvm ls-remote
```

```
Вывод
...
v8.11.1 (Latest LTS: Carbon)
v9.0.0
v9.1.0
v9.2.0
v9.2.1
v9.3.0
v9.4.0
v9.5.0
v9.6.0
v9.6.1
v9.7.0
v9.7.1
v9.8.0
v9.9.0
v9.10.0
v9.10.1
v9.11.0
v9.11.1
v10.0.0
```

Как вы можете видеть, новейшей версией на момент написания руководства является v12.18.3. Но для HPCCloud важно использовать v10.0 Установить ее можно при помощи следующей команды:

```
nvm install 10
```

Обычно nvm переключается на использование последней установленной версии. Вы можете указать nvm использовать только что загруженную версию в явном виде следующим образом:

```
nvm use 10
```

Если вы устанавливаете Node.js через nvm, исполняемый файл будет иметь имя node. Посмотреть, какую версию в данный момент использует shell, можно при помощи команды:

```
node -v
```

```

Вывод
v10.22.0
```

Если у вас установлено несколько версий Node.js, посмотреть их список можно с помощью команды:

```
nvm ls
```

Если вы хотите настроить одну из версий как версию по умолчанию, введите:

```
nvm alias default 10
```

Эта версия будет автоматически выбираться при начале новой сессии. Вы также можете ссылаться на нее по псевдониму (алиасу) следующим образом:

```
nvm use default
```

### Установка yarn

На Debian или Ubuntu Linux вы можете установить Yarn через репозиторий пакетов Debian. Сначала вам нужно настроить репозиторий:

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

Обновим репозитории:

```
sudo apt-get update
```

Так как мы используем `nvm`, то для этого необходимо выполнить команду:

```
sudo apt-get install --no-install-recommends yarn
```

::: warning Примечание
из-за использования nodejs вместо имени node в некоторых дистрибутивах, Yarn может жаловаться на то что node не установлен, избежать этого можно с помощью добавления псевдонима в ваш файл .bashrc, вот так: alias nodejs=node. Это будет указывать Yarn на любую версию node, которую вы решите использовать.
:::

Проверьте, что Yarn установлен, запустив:

```
yarn --version
```
