# Начало работы

## Подготовка

Если репозиторий еще не склонирован, то посмотреть в разделе <a href="general/getting-started.html#развертывание">Основы >> Начало работы >> Development</a>, как это сделать.

Если коротко, инструкция выглядит следующим образом:

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

## Настройка Simput

Переходим в `simput-kemsu`

```
$ cd simput-kemsu
```

Производит начальную настройку, выполнив следующие команды:

```
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

## Кейсы

### Подготовка кейса openfoam_tutorials

#### Добавление кейса в список Simput:

```
cd types/openfoam_tutorials
Simput -c src/ -o versions/ -t openfoam_tutorials
Simput -a versions/openfoam_tutorials.js
```

#### Разработка формы кейса:

```
Simput -t openfoam_tutorials -o ~/simput_models/openfoam_tutorials -p 9999
```

Открываем в браузере `localhost:9999`

#### Создание dist-файлов

Переходим в корневую папку Simput и выполняем следующую команду:

```
Simput -mc types/openfoam_tutorials/src/ -t openfoam_tutorials -o dist/types
```

Потом перейти в директорию hpccloud-kemsu

```
$ cd ../hpccloud-kemsu
$ npm run install:openfoam
#or npm run install:simput
```
