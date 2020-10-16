---
title: Начало работы
---

# Начало работы

Платформа HPCCloud включает в себя множество различных компонентов. Качественный запуск всей платформы «вручную» - задача нетривиальная, так как каждый компонент зависит один от другого, поэтому развёртывание осуществляется через программное обеспечение Docker, которое синхронно запускает по конфигурации каждый компонент в отдельно взятых виртуальных контейнерах.

Репозиторий содержит конфигурацию для развертывания. Это самый быстрый способ начать работу с HPCCloud. Развертывание подходит для тестирования и разработки, однако не рекомендуется для продакшена, поскольку все развертывается на одной машине.

Требуемые характеристики:

- [docker-compose >= 1.17.0](https://docs.docker.com/compose/)
- [docker >= 19.03.12](https://docs.docker.com/get-docker/)

::: tip Стоит заметить
Что развертывание проверялось на Ubuntu 18.04 и Linux Mint 19
:::
<br />
<a style="background: #3eaf7c; padding: 12px; color: white;" href="installation.html#docker" >Установка Docker</a>

## Развертывание

### Быстрый запуск

```
git clone https://github.com/dealenx/hpccloud-kemsu.git
cd hpccloud-kemsu
```

Необходимо обновить образы и произвести `build` контейнеров:

```
docker-compose pull
docker-compose build
```

И запустить контейнеры:

```
docker-compose up -d
```

Необходимо проверить, что ansible завершил начальную конфигурацию платформы:

```
docker logs -f hpccloudkemsu_ansible_1
```

После запуска контейнеров вы можете подключиться к http://localhost:8888 и авторизоваться под `demo/letmein` <br/>
или `hpccloud/letmein`

Если вам необходимо остановить контейнеры, то выполните:

```
docker-compose down
```

### Development

::: warning Внимание
Перед началом разработки необходимо установить необходимое ПО. Помимо Node.js крайне рекомендуемо установить nvm и yarn.

<a style="background: #3eaf7c; padding: 12px; color: white;" href="installation.html#node-js" >Установка Node.js, nvm и yarn</a>

:::

<br/>

И так, начнем с создания общей папки `hpccloud-workflow`:

```
mkdir hpccloud-workflow
cd hpccloud-workflow
```

Необходимо будет настроить такую структуру папок:

```
├── hpccloud-workflow
│	├── hpccloud-kemsu
│	├── simput-kemsu

```

Поэтому клонируем репозитории в папке `hpccloud-workflow`:

```
git clone https://github.com/dealenx/hpccloud-kemsu.git
git clone https://github.com/dealenx/simput-kemsu.git
```

После того, как запустились Docker-контейнеры, можно приступать к разработке.

Хочу заметить, что фронтенд HPCCloud стабильно запускается только на Node.js v10. Поэтому, если у вас, например, установлена Node.js версии 12, то важно иметь настроенный `nvm`, который удобно может сменить версию Nodejs на необходимую.

Команды для разработки фронтенда:

```
cd hpccloud-kemsu
nvm use 10
npm install
npm run build:watch
```

После запуска `build:watch` обновленный билд будет доступен в папке `dist` и Docker-контейнер монтирует эту папку, предоставляя доступ на `localhost:8888`

Что касается бекенда, то внутри контейнера монтируются все исходные файлы, а также запуск Girder происходит в режиме разработчика `girder serve --mode development`.

Поэтому измененные плагины в папке `./server` будут автоматически обновляться.

Пример просматриваемых логов в контейнере girder после запуска и обновление исходных файлов:

```
Running in mode: development
Connecting to MongoDB: mongodb://mongodb:27017/girder
Loaded plugin "cumulus_plugin"
Loaded plugin "sftp"
Loaded plugin "taskflow"
Loaded plugin "hpccloud_plugin"
Loaded plugin "pvwproxy_plugin"
[19/Apr/2020:13:26:15] ENGINE Bus STARTING
Started asynchronous event manager thread.
[19/Apr/2020:13:26:15] ENGINE Started monitor thread 'Autoreloader'.
[19/Apr/2020:13:26:15] ENGINE Serving on http://0.0.0.0:8080
[19/Apr/2020:13:26:15] ENGINE Bus STARTED
```

## Simput

Руководство по подготовке Simput-кейсов не доделано, здесь приведены необходимые команды, но без пояснения.

```
$ cd simput-kemsu
$ nvm use 10
$ npm install
$ npm run build
$ npm link
$ Simput

  Usage: Simput [options]

  Options:

    -h, --help                    output usage information
    -V, --version                 output the version number

    -i, --input [file|directory]  Input file or directory
    -o, --output [directory]      Output directory to output to
    -t, --type [type]             Type of input

    --no-gui                      Just generate output
    -s, --silent                  Do not open the browser

    -c, --compile [directory]     Directory to compile files
    -m, --minify                  Minify compiled file
    -a, --add [file]              Add model to list of available inputs
    -l, --list                    List model types of available as inputs
    -r, --remove [type]           Remove model to list of available inputs
```

```
cd types/openfoam_tutorials
Simput -c src/ -o versions/ -t openfoam_tutorials
Simput -a versions/openfoam_tutorials.js
cd ../../
Simput -mc types/openfoam_tutorials/src/ -t openfoam_tutorials -o dist/types
```

Перейти в hpccloud-kemsu

```
$ cd ../hpccloud-kemsu
$ npm run install:simput
#or npm run install:openfoam
```
