import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  readonly headerLocator: Locator;
  readonly categoriesTabsLocator: Locator;
  readonly menuLocator: Locator;
  //Кнопка "Добавить" с попапом
  readonly headerAddButton: Locator;
  readonly headerAddButtonPopupLocator: Locator;
  //Кнопка "Уведомление" с попапом
  readonly headerNotificationButtonLocator: Locator;
  readonly headerNotificationButtonPopupLocator: Locator;

  readonly headerModeLightButtonLocator: Locator;
  readonly headerModeDarkButtonLocator: Locator;
  //Кпонка "Безопасный режим" с попапом
  readonly headerSafeModeButtonLocator: Locator;
  readonly headerSaveModeButtonPopupLocator: Locator;
  //Кнопка "Вход и регистрация" с модальным окном
  readonly headerLoginButtoLocator: Locator;
  readonly headerLoginModelWindowLocator: Locator;
  readonly headerLoginPhoneNumberFieldLocator: Locator;
  readonly headerLoginButtonNextLocator: Locator;
  readonly headerRegistrationWindow: Locator;

  //Навигация - бергер меню
  readonly openNavigationMenu: Locator;
  readonly elementsNavigationMenu: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.getByRole('banner');

    this.categoriesTabsLocator = this.categoriesTabsLocator = this.page
      .locator('section')
      .filter({
        hasText: 'ГлавнаяРекомендацииФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ ',
      })
      .first();
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
    this.headerAddButton = this.page.getByRole('button', { name: 'Добавить' });
    this.headerAddButtonPopupLocator = this.page.locator('.wdp-header-right-module__uploader ul');
    this.headerNotificationButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
    this.headerNotificationButtonPopupLocator = this.page.locator(
      '.wdp-notifications-popup-module__wrapper',
    );
    this.headerModeLightButtonLocator = this.page.getByRole('button', {
      name: 'Переключить на светлую тему',
    });
    this.headerModeDarkButtonLocator = this.page.getByRole('button', {
      name: 'Переключить на тёмную тему',
    });
    this.headerSafeModeButtonLocator = this.page.getByRole('button', { name: 'Безопасный режим' });
    //.wdp-header-auth-button-module__wrapper button
    this.headerSaveModeButtonPopupLocator = this.page.locator(
      '.safe-mode-header-entrypoint-module__desktop button',
    );
    this.headerLoginButtoLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
    this.headerLoginModelWindowLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]');
    this.headerLoginPhoneNumberFieldLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .getByRole('textbox', { name: 'Введите телефон' });
    this.headerLoginButtonNextLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .getByRole('button', { name: 'Продолжить' });

    this.headerRegistrationWindow = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]');

    //Меню навигации
    this.openNavigationMenu = this.page.getByRole('button', { name: 'Открыть меню навигации' });
    this.elementsNavigationMenu = this.page.locator('.menu-content-module__menuOpen');
  }

  async open() {
    await this.page.goto('https://rutube.ru/');
  }
  //Проверка доступности элементов (локаторы) через кастомный метод
  async headerHasCorrectAreaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot({ name: 'headerSnapshot.yml' });
  }
  async categoriesTabsHasCorrectAreaSnapshot() {
    await expect(this.categoriesTabsLocator).toMatchAriaSnapshot({
      name: 'categoriesTabsSnapshot.yml',
    });
  }
  async menuHasCorrectAreaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({ name: 'menuSnapshot.yml' });
  }

  //Header
  //Нажать на кнопку "Добавить"
  async clickAddButton() {
    await this.headerAddButton.click();
  }
  //Нажать на кнопку "Уведомления"
  async clickNotificationButton() {
    await this.headerNotificationButtonLocator.click();
  }
  //Нажать на кнопку "Переход на светлую тему"
  async clickModeLightButton() {
    await this.headerModeLightButtonLocator.click();
  }

  //Проверяем, что в атрибутах есть светлая тема - переключился
  async lightTheme() {
    await expect(this.page.locator('html')).toHaveAttribute('data-themeid', 'light');
  }

  //Нажать на кнопку "Переход на темную тему"
  async clickModeDarkButton() {
    await this.headerModeDarkButtonLocator.click();
  }

  //Проверяем, что в атрибутах есть темная тема - переключился
  async darkTheme() {
    await expect(this.page.locator('html')).toHaveAttribute('data-themeid', 'dark');
  }

  //Нажать на кнопку "Безопасный режим"
  async clickSaveModeButton() {
    await this.headerSafeModeButtonLocator.hover();
  }
  //Нажать на кнопку "Вход и регистрация"
  async clickLoginButton() {
    await this.headerLoginButtoLocator.click();
  }
  //Нажать на поле "Телефон"
  async clickPhoneNumber() {
    await this.headerLoginPhoneNumberFieldLocator.click();
  }
  //Ввести номер телефона
  async enterPhoneNumber() {
    await this.clickPhoneNumber();
    await this.headerLoginPhoneNumberFieldLocator.fill('80000000000');
  }

  //Нажать на кнопу "Продолжить"
  async clickButtonNext() {
    await this.headerLoginButtonNextLocator.click();
  }

  //Проверка доступности элементов header
  async addPopupButtonSnapshot() {
    await expect(this.headerAddButtonPopupLocator).toMatchAriaSnapshot({ name: 'addPopup.yml' });
  }
  async notificationPopupButtonSnapshot() {
    await expect(this.headerNotificationButtonPopupLocator).toMatchAriaSnapshot({
      name: 'notificationPopup.yml',
    });
  }
  async saveModePopupButtonSnapshot() {
    await expect(this.headerSaveModeButtonPopupLocator).toMatchAriaSnapshot({
      name: 'saveModePopupButton.yml',
    });
  }
  async authorizedModelWindowSnapshot() {
    await expect(this.headerLoginModelWindowLocator).toMatchAriaSnapshot({
      name: 'authorizedModelWindow.yml',
    });
  }
  async registrationWindowSnapshot() {
    await expect(this.headerRegistrationWindow).toMatchAriaSnapshot({
      name: 'registrationWindow.yml',
    });
  }

  //Проверка доступности элементов меню навигации
  async navigationMenu() {
    await expect(this.elementsNavigationMenu).toMatchAriaSnapshot({ name: 'navigationMenu.yml' });
  }

  //Нажать на меню навигации
  async clickNavigationMenu() {
    await this.openNavigationMenu.click();
  }
}
