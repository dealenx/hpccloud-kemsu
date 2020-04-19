# HPCCloud-KemSU

## Introduction

This project is a fork of Kitware's repositories. The infrastruture of the repository for development. A word 'kemsu' in the title means that the development is directed for research at Kemerovo State University

## The main Goal of HPCCloud

Web interface to the HPCCloud infrastructure that abstract simulation environment and resources on which you can run those simulations.

## Our Goal

HPCCloud web-based interface that can run OpenFoam simulation

## Official Kitware's repositories

- Source: https://github.com/Kitware/hpccloud
- Docker compose infrastructure for HPCCloud: https://github.com/Kitware/hpccloud-services

### Running it

```
git clone https://github.com/dealenx/hpccloud-kemsu.git
cd hpccloud-kemsu
```

If you have run the system before, you may need to re-pull the stack of images:

```
docker-compose pull
```

And then you can bring the system up with:

```
docker-compose up -d
```

Once done, make sure ansible is done configuring the various bits by looking at the following log

```
docker logs -f hpccloud-services_ansible_1
```

At that point you should be able to connect to http://localhost:8888 and login as demo/letmein <br/>
or hpccloud/letmein

If you want to stop the services you can run the command

```
docker-compose down
```

### Development

While in Russian, soon i will translate

Начнем с создания общей папки `hpccloud-workflow`:

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

<pip install>

## Simput

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

### Documentation

The documantation is not ready yet, but you can open [here](https://dealenx.github.io/hpccloud-kemsu/)
Also you can read official Kitware's docs [here](https://kitware.github.io/HPCCloud/)
