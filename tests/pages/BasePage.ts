import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async closeCookiesAlert() {
    // await this.page.getByRole('button', { name: 'Ок', exact: true }).click();
    const closeCookiesAlert = this.page.getByRole('button', { name: 'Закрыть' });

    if (await closeCookiesAlert.isVisible()) {
      await closeCookiesAlert.click();
    }
  }

  async closeAdBlock() {
    // await this.page.getByRole('button', { name: 'Закрыть' }).click();
    const closeButton = this.page.getByRole('button', { name: 'Закрыть' });

    if (await closeButton.isVisible()) {
      await closeButton.click();
    }
  }
}
