# Введение

## Технологии

Клиентская часть (front-end) платформы является довольно-таки важной частью в управлении многих процессов. Имеется в виду то, что серверная часть хоть ответственна за большинство операций: хранение данных, делегирование разных асинхронных задач, работа с кластером и т.п.; Предоставляет внешний API для клиентской части, в которой реализованы принципы работы с этим серверным приложением. То есть около 40-60% кодовой базы платформы уделяется клиентской части. На рисунке показана архитектура клиентского приложения.

Клиентская часть HPCCloud зависит в основном от следующих технологий:

- [React](https://facebook.github.io/react/) - это JavaScript-библиотека для разработки пользовательских интерфейсов
- [Redux](http://redux.js.org/) - Глобальное состояние приложения
- [React-Router](https://github.com/reactjs/react-router) - маршрутизация страниц
- [PostCSS](http://postcss.org/) - автоматизирует рутинные операции с CSS с помощью расширений
- [Axios](https://github.com/mzabriskie/axios) - это JavaScript-библиотека, представляет собой HTTP-клиент, основанный на промисах и предназначенный для браузеров и для Node.js.
- [FontAwesome](http://fontawesome.io/) - библиотека иконок

## Структура

Директория `/src` имеет следующую структуру:

- `config`: react-router конфигурация
- `network`: методы, отвечающие за клиент-серверное взаимодействие
- `pages`: компоненты страниц, связанные с маршрутизацией react-router, каждая папка сопоставлена с маршрутом в [`config/routes.js`](../src/config/routes.js). Например. `/pages/Simulation/View` сопоставляется с `[hostname]/view/simulation/[some simulation id]`
- `panels`: переиспользуемые компоненты, импортируемые во все разделы клиентского приложения
- `redux`: код глобального состояния
- `tools`: подключенные сторонние инструменты
- `utils`: вспомогательные функции
- `widgets`: переиспользуемые виджеты
- `workflows`: Рабочие процессы (Workflows)

<br />

![Alt](/hpccloud-kemsu/research__images/Mtqjcb.png?style=centerme)

<center style="margin: 0px 0px 25px;"><i>Архитектура клиентского приложения</i></center>

Чтобы начать разработку, выполните следующие команды:

```
cd hpccloud-kemsu
nvm use 10
npm install
npm run build:watch
```

После запуска `build:watch` обновленный билд будет доступен в папке `dist` и Docker-контейнер монтирует эту папку, предоставляя доступ на `localhost:8888`

<br />
<a style="background: #3eaf7c; padding: 12px; color: white;" href="/general/getting-started.html#развертывание" >Подробнее про настройку</a>
<br /><br />

## Инструменты

Клиентская часть HPCCloud разработано на ES6, но транспилируется в ES5 с помощью Babel.

- [Webpack](https://webpack.github.io/) - статический модульный сборщик для приложений на JavaScript.
- [Babel](https://babeljs.io/) - транспилятор, который переводит код современного стандарта Javascript (ES2015) на более поздний
- [ESLint](http://eslint.org/) - проверка синтаксиса

### Стиль кода

ESLint обеспечивает соблюдение стиля кода на основе [правил Airbnb](https://github.com/airbnb/javascript). Webpack отобразит сообщения, если что-то не так.

Основные правила:

- Табуляция с двумя пробелами.
- Без отступов строки в начале или в конце функции.
- `var` должен быть объявлен выше области видимости, или иначе используйте `const` или `let`.
- Spaces surround properties in objects, also one space before the value e.g. `{ foo: bar }`;
- Comma after the final property in objects which are declared over multiple lines.
- Открытая скобка находятся в той же строке, где и объявление, например: `function qux() { \n`
- Анонимные функции должны быть [стрелочными](https://babeljs.io/docs/learn-es2015/#arrows-and-lexical-this).
- Соединение строк через [шаблонные строки](https://babeljs.io/docs/learn-es2015/#template-strings).

## Тестирование

Подробнее расписано в [/test/README.md](https://github.com/dealenx/hpccloud-kemsu/test/README.md).

- [Karma](https://karma-runner.github.io/0.13/index.html): with [karma-webpack](https://github.com/webpack/karma-webpack) and [istanbul-instrumenter](https://github.com/deepsweet/istanbul-instrumenter-loader) - test runner, transpiles tests with a webpack extension.
- [Jasmine](http://jasmine.github.io/2.4/introduction.html) - test framework
- [expect](https://github.com/mjackson/expect) - assertion library
- [PhantomJS](http://phantomjs.org/) - headless webkit environment for testing in
- [babel-polyfill](https://github.com/babel/babel/tree/master/packages/babel-polyfill) - PhantomJS has no Promise object, so we supplement it with this.
- [redux-actions-assertions](https://github.com/dmitry-zaets/redux-actions-assertions) - Redux tests only, but can be used for component tests which use redux.
- [React Test Utils](https://facebook.github.io/react/docs/test-utils.html) - For tests involving React components
