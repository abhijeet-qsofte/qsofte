[12:12 PM] Abhishek Kumar
import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Services' }).click();
  await page.locator('section').click();
  await page.getByRole('heading', { name: 'Technology Consultancy' }).click();
  await page.getByRole('heading', { name: 'Expert Guidance: Streamline' }).click();
  await page.getByRole('img', { name: 'Technology Consultancy' }).click();
  await page.getByRole('img', { name: 'Retail POS Solutions' }).click();
  await page.getByRole('heading', { name: 'Retail POS Solutions' }).click();
  await page.getByRole('heading', { name: 'Retail POS Solutions' }).click();
  await page.getByRole('heading', { name: 'In the fast-paced retail' }).click();
  await page.getByRole('heading', { name: 'Website and App Development' }).click();
  await page.getByRole('heading', { name: 'Your online presence is a' }).click();
  await page.getByRole('img', { name: 'Website and App Development' }).click();
  await page.getByRole('img', { name: 'OpenEMR Solutions' }).click();
  await page.getByRole('heading', { name: 'OpenEMR Solutions' }).click();
  await page.getByRole('heading', { name: 'OpenEMR Solutions' }).click();
  await page.getByRole('heading', { name: 'In the healthcare industry,' }).click();
  await page.getByRole('heading', { name: 'Testing Services' }).click();
  await page.getByRole('heading', { name: 'Delivering high-quality' }).click();
  await page.getByRole('img', { name: 'Testing Services' }).click();
 
});