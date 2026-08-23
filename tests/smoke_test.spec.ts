import { test, expect } from '@playwright/test';

test('Smoke test. Checking the accessibility of menu pages', async ({ page }) => {
    // Go to the main page Speak Ukrainian
    await page.goto('http://speak-ukrainian.eastus2.cloudapp.azure.com/dev/');
    //await page.waitForTimeout(1000); // For presentation
    //
    // Checking main page
    await expect(page.getByRole('heading', { name: 'Ініціатива “Навчай українською”' })).toBeVisible();
    console.log('[done] Checking main page');
    //await page.waitForTimeout(1000); // For presentation
    //
    // Go to the clubs page
    //await page.locator('li a[href*=\'/clubs\']').click();
    await page.getByRole('link', { name: 'Гуртки', exact: true }).click();
    //await page.waitForTimeout(1000); // For presentation
    //
    // Checking clubs page
    //await expect(page.getByText('Гуртки в місті Київ', { exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Гуртки в місті Київ' })).toBeVisible();
    console.log('[done] Checking clubs page');
    //await page.waitForTimeout(1000); // For presentation
    //
    // Open the challenge drop-down menu
    await page.getByText('Челендж').click();
    //await page.waitForTimeout(1000); // For presentation
    //
    // Go to the learn challenge page
    await page.getByRole('link', { name: 'Навчайся' }).click();
    //await page.waitForTimeout(1000); // For presentation
    //
    // Checking learn challenge page
    await expect(page.getByText('Навачайся', { exact: true })).toBeVisible();
    console.log('[done] Checking learn challenge page');
    //await page.waitForTimeout(1000); // For presentation
    //
    // Go to the news page
    await page.getByRole('link', { name: 'Новини' }).click();
    //await page.waitForTimeout(1000); // For presentation
    //
    // Checking news page
    await expect(page.getByRole('heading', { name: 'Новини' })).toBeVisible();
    console.log('[done] Checking news page');
    //await page.waitForTimeout(1000); // For presentation
    //
    // Go to the about us page
    await page.getByRole('link', { name: 'Про нас' }).click();
    //await page.waitForTimeout(1000); // For presentation
    //
    // Checking about us page
    await expect(page.getByText('Навчай українською', { exact: true })).toBeVisible();
    console.log('[done] Checking about us page');
    //await page.waitForTimeout(1000); // For presentation
    //
    // Go to the services in Ukrainian page
    await page.getByRole('link', { name: 'Послуги українською' }).click();
    //await page.waitForTimeout(1000); // For presentation
    //
    // Checking services in Ukrainian page
    await expect(page.getByRole('main').getByText('Послуги українською', { exact: true })).toBeVisible();
    console.log('[done] Checking services in Ukrainian page');
    //await page.waitForTimeout(1000); // For presentation
    //
    // Return to the home page Speak Ukrainian
    await page.getByRole('banner').getByRole('link').filter({ hasText: /^$/ }).click();
    //await page.waitForTimeout(1000); // For presentation
    //
    // Checking home page
    await expect(page.getByRole('heading', { name: '"Єдині"' })).toBeVisible();
    console.log('[done] Checking home page');
    //await page.waitForTimeout(1000); // For presentation
});
