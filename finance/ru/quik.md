---
# /* yaspeller ignore:start */
home: true
heroText: Оптимальное хранение.
heroText: биржевых данных.
tagline: Интеграция с терминалом QUIK®
actionText: Установка →
actionLink: ./install-quik.md
features:
- title: Долгосрочное хранение сделок
  details: Поточное и ежедневное сохранение сделок из терминала QUIK®.
- title: Высокая скорость чтения
  details: Параллельный движок экспорта сделок с различными критериями поиска.
- title: Удобство SQL
  details: Расширенный <a href="sql.html">SQL</a>](./sql.md) синтаксис с ускоренными вычислениями.
footer: Copyright © 2021 Axibase. Терминал QUIK© 2000-2021 ARQA Technologies 
# /* yaspeller ignore:end */
---
<!-- markdownlint-disable MD002 MD041 MD012 -->
<article class="feature-highlight">

## Для чего нужна история всех сделок

- Повышение качества обратного тестирования за счет проверки на сделках вместо OHLCV агрегатов
- Разработка новых стратегий на альтернативных агрегатах (volume bars) и преобразованных рядах
- Расчет собственных индикаторов, отсутствующих у торговых платформ, с сохранением в единую базу
- Проверка качества собственных торговых операций по сравнению с рыночной ценой
- Поиск редких аномалий, в том числе календарных

</article>
<article class="feature-highlight">

## Интеграция с QUIK

Терминал QUIK позволяет получать обезличенные сделки по всем подключенным рынкам и режимам торгов. Записи в таблице `all_trades` накапливаются в течение торгового дня и очищаются при повторном подключении терминала на следующий торговый день.

ATSD позволяет сохранять ежедневные данные таблицы обезличенных сделок в структурированном виде для целей долгосрочного хранения и статистического анализа.

</article>
<article class="feature-highlight">

## Отличие от файлов

- Поиск по индексу быстрее чем последовательное чтение файла для выборки строк в середине или конце файла
- Параллельное чтение для нескольких инструментов одновременно
- Отсутствие блокировок - чтение и запись одновременно
- Ускорение при помощи кэширования
- Мгновенная видимость сделки для чтения до записи в файл (чтение из памяти и диска одновременно)
- Все преимущества синтаксиса SQL с учетом особенностей биржевых данных

</article>
<article class="feature-highlight">

## Отличие от стандартных баз данных

- СУБД ATSD построена на нереляционных принципах
- Устранены накладные расходы, которые существенны именно в реляционной схеме
- Параллельное чтение из различных сегментов таблицы позволяет достичь высокой производительности несмотря на большие массивы данных
- Сжатое храние в оптимальном кодировке сокращает потребности в дисковом пространстве на 80% и сокращает расходы на I/O при чтении и записи
- Реализованные функции подсчета агрегатов OHLCV и VWAP учитывают специфику данных и схемы хранения
- При этом в АТСД реализованы все ключевые компоненты SQL DML для гибкой фильтрации и обработки результатов

</article>
<article class="feature-highlight">

## Ежедневное копирование

- Производится в интервале с момента окончания торгов до подключения терминала Quik в последующий торговый день
- В данном интервале таблица обезличенных сделок содержит все сделки с учетом применных фильтров
- Выгрузка и таблицы `all_trades` производится скриптом Lua, который постоянно запущен, и активируется в определенный момент 
- Скрипт lua сохраняет данные в файл на локальной файловой системе, производит архивацию файла в формат zip и отправляет архив в ATSD
- Обработка на стороне ATSD производится асинхронно с создание отчета по результатам обработки файла
- Ежедневный файл может достигать нескольких гигабайтов при количестве сделок до 100 млн.
- После загрузки исходный файл удаляется и на файловой системе остается zip архив и текстовый файл за указанную дату для предотвращения повторной отправки

</article>
<article class="feature-highlight">

## Поточное копирование

- Производится путем установки [ODBC](https://github.com/axibase/atsd-quik/releases/tag/v1.0.0) драйвера, и включения режима экспорта для таблицы обезличенных сделок
- Отправка данных производится через websocket по протоколу https
- Данные доступны для чтения в ATSD без задержки
- В случае сетевых проблем производится повторная отправка с последней отправленной сделки
- Повторная отправка сделок не приводит к созданию дубликатов на стороне АТСД
- Режим поточного копирования может сочетаться с ежедневным копированием как механизмом проверки целостности и восстановления пробелов

</article>
<article class="feature-highlight">

## Дополнительные источники

- Реализованные в комплекте с ATSD консьюмеры позволяют подключить ATSD к FAST Multicast Московской Биржи с установкой в зоне колокации для максимального быстродействия
- Подключение дополнительных источников в поточном режиме, например [Transaq](https://www.finam.ru/howtotrade/tconnector/), так и любых инструментов, предоставляющих API для подписки на рыночные данные
- Загрузка данных их внешних источников по расписанию, например следки IEX, данных из Polygon, Alphavantage, Yahoo Finance и пр.  

</article>