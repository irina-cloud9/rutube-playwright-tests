import { test, expect } from '../../fixtures/fixteres';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов headera', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAreaSnapshot();
});

//тест падает, нет номаольного локатора - можно переделать
test('Проверка доступности элементов tabov категории', async ({ mainPage }) => {
  await mainPage.categoriesTabsHasCorrectAreaSnapshot();
});
test('Проверка доступности элементов бокового меню', async ({ mainPage }) => {
  await mainPage.menuHasCorrectAreaSnapshot();
});
test('Проверка доступности элементов по добавлению контента', async ({ mainPage }) => {
  await mainPage.clickAddButton();
  await mainPage.addPopupButtonSnapshot();
});
test('Проверка доступности попап элементов в уведомлениях', async ({ mainPage }) => {
  await mainPage.clickNotificationButton();
  await mainPage.notificationPopupButtonSnapshot();
});
test('Проверка доступности попап элементов в "Безопасный режим"', async ({ mainPage }) => {
  await mainPage.clickSaveModeButton();
  await mainPage.saveModePopupButtonSnapshot();
});
test('Проверка доступности элементов модального окна в авторизации', async ({ mainPage }) => {
  await mainPage.clickLoginButton();
  await mainPage.authorizedModelWindowSnapshot();
});

//Тест падает так как появляется капча ---нужно поискать, можно ли это как-то обойти
test('Проверка доступности элементов модального окна регистрации', async ({ mainPage }) => {
  await mainPage.clickLoginButton();
  await mainPage.enterPhoneNumber();
  await mainPage.clickButtonNext();
  await mainPage.registrationWindowSnapshot();
});
