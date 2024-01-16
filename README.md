# Handlebars-мессенджер

[Pull request](https://github.com/Muhozhukov/middle.messenger.praktikum.yandex/pull/4)

Проект мессенджера, построенного с помощью шаблонизаторов. Проект выполнен как одностраничное приложение.

Сборка и запуск проекта происходят в следующей последовательности:

- `npm install` - установка зависимостей,
- `npm run start` - сборка и запуск проекта.

#### Дополнительные команды

- `npm run checkProject` - проверка файлов проекта в соответствии с eslint, stylelint;
- `npm run prebuild` - проверка типов typescript.

## Страницы проекта:

Проект выполнен в качества SPA приложения.
Доступны следующие страницы:

- `Логин` - стартовая страница,
- `Регистрация` - переход со страницы логина по нажатию кнопки "Нет аккаунта?",
- `Чат` - основная страница, переход после логина, либо регистрации
- `Настройка профиля` - переход со страницы чата по нажатию кнопки "Профиль",
- `Ошибка` - страница с сообщением об ошибке, переход по нажатию кнопки настройки (три точки) на странице чата,

## Остальные ссылки

Для реализации был взят следующий [макет](https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=0%3A1).

Проект развернут на [Netlify](https://effortless-stroopwafel-c840f2.netlify.app/)
