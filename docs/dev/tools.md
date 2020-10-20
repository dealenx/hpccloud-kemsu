# Инструменты

Все инструменты являются внешними и независимо разрабатываются. Они подключаются к странице `simulation/view` с помощью следующего кода:

```js
const ChildComponent = tools[viewName]
  ? tools[viewName].view
  : wfModule.components.ViewSimulation;
```

Tools are bundled in `src/tools/index.js` each tool has a `view` which is the primary view container for the tool and `providesToolbar` a boolean which prevents displaying a double toolbar. Feel free to add other properties to make your tool more accessible, such properties could include `requiresFullscreen` or `openInNewWindow`

## View container

While the tool itself does not need to be integrated with the Redux store, the container does. To pass the necessary information to your tool you'll want to include the important information in the step metadata. We do this with the [`sessionId`](https://github.com/Kitware/HPCCloud/blob/master/src/workflows/pyfr/common/steps/Visualization/Start/index.js#L74-L86) for steps that use the Paraview Web Visualizer.

## Redux

Вашему инструменту не обязательно использовать Redux. Однако, если вы используете, то вам необходимо предоставить описание данных глобального состояния, см. [Репозиторий Paraview Visualizer](https://github.com/Kitware/visualizer), чтобы узнать, как это сделать. Вам также необходимо объединить редьюсеры HPCCloud и Paraview Visualizer.
