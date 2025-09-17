import test from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Открыть главную старницу', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
});
