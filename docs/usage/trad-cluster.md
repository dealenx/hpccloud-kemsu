---
title: Традиционные кластеры
---

# Традиционные кластеры

Традиционные кластеры или просто «кластер» обычно включают физическое оборудование, предназначенное для выполнения моделирования в операционной системе сервера. Чтобы перейти на страницу кластеров, то зайдите на страницу настроек, щелкнув имя пользователя в правом верхнем углу, и нажмите "Cluster".

## Создание «кластера»

Щелкните значок «+» на панели инструментов. Вам будет представлена пустая форма, в которой вы можете заполнить детали вашего кластера. Требуется имя кластера, имя пользователя и имя хоста машины. Когда все необходимые поля будут заполнены, нажмите "Save.". Скоро появятся кнопка "Test" и textarea-поле, содержащей ssh-ключ.

![traditional cluster page](/hpccloud-kemsu/usage__images/prefs-trad.png)

### Тест подключения к кластеру

Скопируйте команду оболочки из поля формы и вставьте ее в терминал. Это позволяет серверной части HPC-Cloud (Cumulus) подключаться к вашему кластеру и запускать моделирование. Нажмите кнопку "Test", когда команда будет запущена и ключ будет сохранен на вашем кластере. Если тест прошел успешно, кластер готов к использованию.

![traditional cluster page](/hpccloud-kemsu/usage__images/public-ssh-key.png)

## Редактирование

Вы можете редактировать только имя кластера. Если вам нужно изменить другую деталь, удалите и заново создайте кластер.

## Удаление

Для удаление добавленного кластера нажмите "Delete cluster.".

Вы не можете удалить кластеры, в которых выполняется моделирование, вы получите уведомление об этом. Вы всегда можете повторно добавить удаленный кластер, однако файлы, созданные в результате моделирования, не будут доступны через HPCCloud.
