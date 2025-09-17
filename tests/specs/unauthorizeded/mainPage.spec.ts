import test from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов headera', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.closeAdBlock();
  await mainPage.headerHasCorrectAreaSnapshot();
});

//тест падает, нет номаольного локаторы - можно переделать
test('Проверка доступности элементов tabov категории', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.closeAdBlock();
  await mainPage.categoriesTabsHasCorrectAreaSnapshot();
  await page.waitForTimeout(10000);
});
test('Проверка доступности элементов бокового меню', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.closeAdBlock();
  await mainPage.menuHasCorrectAreaSnapshot();
});
