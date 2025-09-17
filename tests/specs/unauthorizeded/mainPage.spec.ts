import { test, expect } from '../../fixtures/fixteres';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов headera', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAreaSnapshot();
});

//тест падает, нет номаольного локатора - можно переделать
test('Проверка доступности элементов tabov категории', async ({ mainPage, page }) => {
  await mainPage.categoriesTabsHasCorrectAreaSnapshot();
});
test('Проверка доступности элементов бокового меню', async ({ mainPage }) => {
  await mainPage.menuHasCorrectAreaSnapshot();
});
