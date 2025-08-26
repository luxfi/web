import { test, expect } from '@playwright/test';

test.describe('Lux Network Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the hero section with full viewport height', async ({ page }) => {
    // Check if the hero section exists
    const heroSection = page.locator('div').filter({ hasText: 'LUX NETWORK' }).first();
    await expect(heroSection).toBeVisible();

    // Check for full viewport height classes
    const heroContainer = page.locator('.min-h-screen').first();
    await expect(heroContainer).toBeVisible();

    // Verify hero content
    await expect(page.locator('h1')).toContainText('LUX NETWORK');
    await expect(page.locator('text=Private, Post-Quantum,')).toBeVisible();
    await expect(page.locator('text=Sovereign DeFi')).toBeVisible();
  });

  test('should display key features in hero section', async ({ page }) => {
    const features = [
      'Sovereign and unstoppable',
      'Lightning-fast transactions',
      'Future-proof quantum security',
      'Privacy built for the modern age',
      'Effortless high-yield staking'
    ];

    for (const feature of features) {
      await expect(page.locator(`text=${feature}`)).toBeVisible();
    }
  });

  test('should have working CTA buttons', async ({ page }) => {
    // Check Run Chain button
    const runChainButton = page.locator('a').filter({ hasText: 'Run Chain' });
    await expect(runChainButton).toBeVisible();
    await expect(runChainButton).toHaveAttribute('href', 'https://lux.network#run-the-network');

    // Check Bridge Assets button
    const bridgeButton = page.locator('a').filter({ hasText: 'Bridge Assets' });
    await expect(bridgeButton).toBeVisible();
    await expect(bridgeButton).toHaveAttribute('href', 'https://bridge.lux.network');

    // Check Explore Network button
    const exploreButton = page.locator('a').filter({ hasText: 'Explore Network' });
    await expect(exploreButton).toBeVisible();
    await expect(exploreButton).toHaveAttribute('href', 'https://explore.lux.network/');
  });

  test('should display video in hero section', async ({ page }) => {
    // Check if video element exists
    const video = page.locator('video').first();
    await expect(video).toBeVisible();
    
    // Check video sources
    await expect(video).toHaveAttribute('poster', /Lux-VALIDATOR-poster\.jpg/);
  });

  test('should have responsive layout', async ({ page, viewport }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    
    const heroSection = page.locator('div').filter({ hasText: 'LUX NETWORK' }).first();
    await expect(heroSection).toBeVisible();
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.reload();
    await expect(heroSection).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.reload();
    await expect(heroSection).toBeVisible();
  });

  test('should scroll to sections smoothly', async ({ page }) => {
    // Check if page has multiple sections
    const sections = page.locator('[class*="screenful"]');
    const sectionCount = await sections.count();
    expect(sectionCount).toBeGreaterThan(1);
  });

  test('should display footer', async ({ page }) => {
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Check footer exists
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('should have working header navigation', async ({ page }) => {
    await page.goto('/');
    
    // Check if header exists
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });
});

test.describe('Performance', () => {
  test('should load within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test('should have no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // There should be no console errors
    expect(errors).toHaveLength(0);
  });
});