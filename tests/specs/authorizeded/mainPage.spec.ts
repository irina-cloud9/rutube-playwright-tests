import { test, expect } from '../../fixtures/fixteres';

test('Проверка доступности элементов headera авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.headerHasCorrectAreaSnapshot();
});

test('Проверка доступности попап элементов в уведомлениях авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.clickNotificationButton();
  await mainPage.notificationPopupButtonSnapshot();
});

//в yml документ элементы сохранисиль, но значения не стабильные и каждый раз выбрасывает 1-2 ошибки
test('Проверка доступности элементов меню навигации авторизованного пользователя - раскрыт', async ({
  mainPage,
}) => {
  await mainPage.clickNavigationMenu();
  await mainPage.navigationMenu();
});

test('Проверка доступности элементов в иконке авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.cliclIconUser();
  await mainPage.modalUser();
});
