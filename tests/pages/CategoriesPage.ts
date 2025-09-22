import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CategoriesPage extends BasePage {
  readonly contentPageLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.contentPageLocator = this.page.locator('.application-module__content');
  }

  async open() {
    await this.page.goto('https://rutube.ru/categories/');
  }

  async contentCorrectLayout() {
    await this.checklayoutByScreenshot(this.contentPageLocator, 'categoriesPage.png');
  }

  //Не буден видет видет хедер на скриншоте
  async hideHeader() {
    await this.hideElement('header');
  }
}
