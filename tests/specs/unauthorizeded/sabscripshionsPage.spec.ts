import test from '@playwright/test';
import { SabscripshionsPage } from '../../pages/SabscripshionsPage';

test('Проверка доступности для неавторизованного пользователя', async ({ page }) => {
  const sabscripshionsPage = new SabscripshionsPage(page);
  await sabscripshionsPage.open();
  await sabscripshionsPage.closeCookiesAlert();
  await sabscripshionsPage.contentCorrectSnapshot();
});
