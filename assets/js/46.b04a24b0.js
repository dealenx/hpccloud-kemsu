(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{365:function(e,t,a){"use strict";a.r(t);var r=a(33),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"запуск-модеnирования"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#запуск-модеnирования"}},[e._v("#")]),e._v(" Запуск моделирования")]),e._v(" "),a("p",[e._v("В этом примере запустим пример моделирования пакета PyFR. В репозитории PyFR есть образцы файлов для этой симуляции. "),a("a",{attrs:{href:"https://raw.githubusercontent.com/vincentlab/PyFR/develop/examples/euler_vortex_2d/euler_vortex_2d.ini",target:"_blank",rel:"noopener noreferrer"}},[e._v("the input"),a("OutboundLink")],1),e._v(" и "),a("a",{attrs:{href:"https://raw.githubusercontent.com/vincentlab/PyFR/develop/examples/euler_vortex_2d/euler_vortex_2d.msh",target:"_blank",rel:"noopener noreferrer"}},[e._v("the mesh"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"running"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running"}},[e._v("#")]),e._v(" Running")]),e._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[a("p",[e._v("Создайте традиционный кластер, который вы можете использовать. Если у вас нет доступа ни к кластеру, то с запускаемыми docker-сервисами подготовлена виртуальная машина "),a("code",[e._v("compute")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Создайте проект и выберите тип «pyfr», указав наименование проекта.")])]),e._v(" "),a("li",[a("p",[e._v("Добавьте файлы (ссылки на них указаны выше) "),a("code",[e._v("euler_vortex_2d.msh")]),e._v(" и "),a("code",[e._v("euler_vortex_2d.ini")]),e._v(" в поля Mesh и Ini соответственно.")])]),e._v(" "),a("li",[a("p",[e._v("Создайте моделирование внутри созданного проекта, укажите наименование моделированию, оставьте поле Ini пустым, оно будет унаследовано от проекта.\n"),a("img",{attrs:{src:"hpccloud-kemsu/usage__images/simulation-create.png",alt:"create simulation page"}})])]),e._v(" "),a("li",[a("p",[e._v('Перейдите в созданное моделирование и нажмите на шаг "Simulation" на левой боковой панели.')])]),e._v(" "),a("li",[a("p",[e._v("Здесь вы можете выбрать свой кластер.")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/hpccloud-kemsu/usage__images/pyfr-simulation-step.png",alt:"simulation step"}})]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[e._v('Нажмите "Run Simulation", и вы попадете на мониторинг моделирования. Здесь вы можете просматривать логи и статусы выполнения заданий.\n'),a("img",{attrs:{src:"/hpccloud-kemsu/usage__images/simulation-run.png",alt:"a running simulation"}})]),e._v(" "),a("p",[e._v("Когда все они достигнут статуса «Complete», то моделирование завершено! Появится кнопка «Visualize». Нажав на эту кнопку, появятся параметры запуска визуализации")])]),e._v(" "),a("li",[a("p",[e._v("На этапе визуализации, вы запустите ParaviewWeb и просмотрите результатs моделирования. Чтобы Paraview имел доступ к выходным данным моделирования, он должен запускаться на том же компьютере, что и моделирование. Выберите сервер и нажмите «Start Visualization». Вы попадете на страницу монитора заданий, аналогичную той, что была на шаге 5.")])]),e._v(" "),a("li",[a("p",[e._v("Подождите, пока задачи будут завершены и основное задание (ParaViewWeb) будет запущено. Появится кнопка с надписью «Visuzalize». Щелкнув по ней, вы перейдете к ParaViewWeb в своем браузере, где вы сможете просматривать и управлять результатами моделирования.")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/hpccloud-kemsu/usage__images/simulation-viz.png",alt:"visualizer"}})]),e._v(" "),a("h2",{attrs:{id:"terminating-and-rerunning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terminating-and-rerunning"}},[e._v("#")]),e._v(" Terminating and Rerunning")]),e._v(" "),a("p",[e._v("В любой момент во время шагов 5 и 6 выше есть кнопка с надписью «Завершить». Нажатие на нее приведет к попытке завершить основные задания шага и их задач. После этого у вас будет кнопка «Rerun». Нажав эту кнопку, вы вернетесь на начальную страницу, где вы сможете запустить задание в том же кластере или подготовить новое моделирование.")])])}),[],!1,null,null,null);t.default=n.exports}}]);