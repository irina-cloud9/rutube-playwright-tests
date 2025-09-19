import { test, expect } from '../../fixtures/fixteres';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов headera', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAreaSnapshot();
});

test('Проверка доступности попап элементов в уведомлениях', async ({ mainPage }) => {
  await mainPage.clickNotificationButton();
  await mainPage.notificationPopupButtonSnapshot();
});

//в yml документ элементы сохранисиль, но значения не стабильные и каждый раз выбрасывает 1-2 ошибки
test('Проверка доступности элементов меню навигации - раскрыт', async ({ mainPage }) => {
  await mainPage.clickNavigationMenu();
  await mainPage.navigationMenu();
});
