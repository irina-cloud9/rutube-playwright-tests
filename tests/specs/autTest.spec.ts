import { test, expect } from '@playwright/test';
import path from 'path';
//Что бы обойти капчу https://github.com/berstend/puppeteer-extra/tree/master/packages/playwright-extra
//npm i playwright-extra
//npm install puppeteer-extra-plugin-stealth
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

chromium.use(stealth()); //Для капчи

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test('test', async () => {
  //Настройка по убиранию капчи
  const brauser = await chromium.launch();
  const context = await brauser.newContext();
  const page = await context.newPage();

  await page.goto('https://rutube.ru/');
  await page.getByRole('button', { name: 'Закрыть' }).click();
  await page.getByRole('button', { name: 'Ок', exact: true }).click();
  await page.getByRole('button', { name: 'Вход и регистрация' }).click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'Введите телефон' })
    .fill(process.env.LOGIN!);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Продолжить' })
    .click();
  //   await page.locator('iframe[title="Multipass"]').contentFrame().locator('#login-password').click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .locator('#login-password')
    .fill('irina');
  //   await page.locator('iframe[title="Multipass"]').contentFrame().locator('#login-password').press('CapsLock');
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .locator('#login-password')
    .fill(process.env.PASSWORD!);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Войти', exact: true })
    .click();
  await page.getByRole('img', { name: 'Иконка канала channel69814103' }).click();
  await page.getByRole('link', { name: 'Профиль' }).click();

  await page.context().storageState({ path: authFile }); // по пути локально будет созранятся файл
});
