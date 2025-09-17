import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  readonly headerLocator: Locator;
  readonly categoriesTabsLocator: Locator;
  readonly menuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.getByRole('banner');
    this.categoriesTabsLocator = this.page
      .locator('section')
      .filter({
        hasText: 'ГлавнаяРекомендацииФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ ',
      })
      .first();
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
  }

  async open() {
    this.page.goto('https://rutube.ru/');
  }
  //Проверка доступности элементов (локаторы) через кастомный метод
  async headerHasCorrectAreaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot();
  }
  async categoriesTabsHasCorrectAreaSnapshot() {
    await expect(this.categoriesTabsLocator).toMatchAriaSnapshot();
  }
  async menuHasCorrectAreaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot();
  }
}
