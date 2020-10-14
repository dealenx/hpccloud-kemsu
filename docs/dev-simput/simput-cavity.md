# Simput разработка кейса для задачи о течении в каверне

## Подготовка

Настройка Simput

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

## Подготовка кейса openfoam_cavity

#### Добавление кейса в список Simput:

```
cd types/openfoam_cavity
Simput -c src/ -o versions/ -t openfoam_cavity
Simput -a versions/openfoam_cavity.js
```

#### Разработка формы кейса:

```
Simput -t openfoam_cavity -o ~/simput_models/openfoam_cavity -p 9999
```

Открываем в браузере `localhost:9999`

#### Создание dist-файлов

Переходим в корневую папку Simput и выполняем следующую команду:

```
Simput -mc types/openfoam_cavity/src/ -t openfoam_cavity -o dist/types
```

Потом перейти в директорию hpccloud-kemsu

```
$ cd ../hpccloud-kemsu
$ npm run install:simput
#or npm run install:openfoam_cavity
```

#### Добавление поддержки типа в HPCCloud

dist/index.html

Находим:

```
...
        <script src="simput-openfoam-tutorials.js" type="text/javascript"></script>
        <script src="simput-openfoam-windtunnel.js" type="text/javascript"></script>
        <script src="HPCCloud.js" type="text/javascript"></script>
        <script type="text/javascript">
            HPCCloud.configure();
        </script>
```

Добавляем следующее после скрипта `simput-openfoam-windtunnel.js` и добавляем скрипт с `simput-openfoam_cavity.js`

```

...
        <script src="simput-openfoam-tutorials.js" type="text/javascript"></script>
        <script src="simput-openfoam-windtunnel.js" type="text/javascript"></script>
        <script src="simput-openfoam_cavity.js" type="text/javascript"></script> <!--- Подключили скрипт --->

        <script src="HPCCloud.js" type="text/javascript"></script>
        <script type="text/javascript">
            HPCCloud.configure();
        </script>
```

Так как мы пока отталкиваемся от кейса openfoam-tutorials, то копируем этот кейс для каверны:

```
cp -R src/workflows/openfoam/tutorials src/workflows/openfoam/cavity
```

В `src/workflows/openfoam/cavity/index.js` меняем описание кейса:

```
...
export default {
  name: 'OpenFoam - Cavity example',
  logo,
  requiredAttachments: {
    project: [],
    simulation: [],
  },
...
```

А так же в этом же файле ниже переименовываем в значение с `tutorial ` на `cavity` поля Simulation :

```
...
taskFlows: {
    Simulation: 'hpccloud.taskflow.openfoam.cavity.OpenFOAMTaskFlow',
    Visualization: 'hpccloud.taskflow.paraview.visualizer.ParaViewTaskFlow',
  },
...
```

Стоит отметить, что позже мы добавим на серверной части taskflow на серверной части, а пока изменяем значения в клиентской части.

В файле `src/workflows/openfoam/tutorials/components/steps/Input/index.js` меняем `tutorials` на `cavity`:

```
...
export default (props) => (
  <SimputReact
    {...props}
    simputType="openfoam_cavity"
    inputFileKeys={[{ key: 'sh', name: 'run.sh', parse: false }]}
    initialDataModel={{
      data: {},
      type: 'openfoam_cavity',
      hideViews: [],
    }}
  />
);

```

Импортируем настроенный workflow-компонент в файле `src/workflows/index.js`:

```

import NWChem from './nwchem/nwchem-simput';
import NWChemExec from './nwchem/nwchem-exec';
import NWChemNeb from './nwchem/nwchem-neb';
import OpenFOAMTutorial from './openfoam/tutorials';
import OpenFOAMWindTunnel from './openfoam/windtunnel';
import OpenFOAMCavity from './openfoam/cavity';
import PyFr from './pyfr';
import Visualizer from './visualizer';

const Workflows = {
  NWChem,
  NWChemExec,
  NWChemNeb,
  OpenFOAMTutorial,
  OpenFOAMWindTunnel,
  OpenFOAMCavity,
  PyFr,
  Visualizer,
};
...

```

После того, как подключили, компилируем клиентскую часть:

```
nvm use 10
npm run build
```

Проверяем добавленный кейс:
![img](https://snipboard.io/IOlfVJ.jpg)

Создаем проект:
![img](https://snipboard.io/uTfoSy.jpg)

После создаем в этом проекте моделирование, проверяем, что форма кейса подгружается:
![img](https://snipboard.io/JZGbLE.jpg)

Но запускать моделирование нет смысла, так как еще не подготовлена серверная часть, поэтому следующим шагом займемся добавлением необходимых файлов.

## Поддержка на серверной стороне

Копируем taskflow:

```
cp -R server/taskflows/hpccloud/taskflow/openfoam/tutorial.py server/taskflows/hpccloud/taskflow/openfoam/cavity.py
```

Пересобираем docker-контейнеры:

```
docker-compose build girder command monitor
```

## Разработка формы кейса

Пример уже реализованного кейса каверны можно посмотреть [здесь](https://github.com/dealenx/simput-kemsu/tree/706b1fb1bf751cf5eaca3a6c4cc26a37b4d75ca7/types/openfoam_cavity)

Необходима следующая структура файлов:

- `/src`
  - `/lang`
    - `/[language]` например. "en", "fr"
      - `label.json`, метки атрибутов и свойств.
      - `/help`, сообщения полей , _recommended, not required_
        - `/[folders for each attribute]`
          - `[file for each property, contents are html]`
  - `/templates`
    - [файлы шаблонов]
  - `model.js`, модель с массивом полей кейса.
  - `convert.js`, конвертирует модель в выходные файлы .
- `/samples`, пустые или заполненные примеры файлов; _recommended, not required_.
- `/versions`, выходная папка для скомпилированного типа; _recommended, not required_.
- `README.md`, Описание кейса; _recommended, not required_.
