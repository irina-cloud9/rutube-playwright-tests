import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SabscripshionsPage extends BasePage {
  readonly contetntPageLocator: Locator;
  constructor(page: Page) {
    super(page);
    this.contetntPageLocator = this.page.locator('.application-module__content');
  }
  async open() {
    await this.page.goto('https://rutube.ru/my/subscriptions/');
  }
  async contentCorrectSnapshot() {
    await this.checkAriaSnapshot(this.contetntPageLocator, 'contentAriaSnapshot.yml');
  }
}
