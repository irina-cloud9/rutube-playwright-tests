import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

//Удалили конструктор и readonly, так как это все наследуется откласса BasePage
export class MainPage extends BasePage {
  async open() {
    this.page.goto('https://rutube.ru/');
  }
}
