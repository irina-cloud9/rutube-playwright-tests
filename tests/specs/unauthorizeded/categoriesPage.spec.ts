import { test, expect } from '../../fixtures/fixteres';
test('Проверка лайаута', async ({ categoriesPage }) => {
  await await categoriesPage.contentCorrectLayout();
});
