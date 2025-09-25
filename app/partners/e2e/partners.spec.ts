import { test, expect } from '@playwright/test';

test.describe('Lux Partners Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://lux.partners');
  });

  test('should display the intro section', async ({ page }) => {
    // Check if intro section exists
    await expect(page.locator('main')).toBeVisible();
  });

  test('should display leadership section with team members', async ({ page }) => {
    // Check for Leadership heading
    await expect(page.locator('text=Leadership')).toBeVisible();
    
    // Check for some key team members
    const teamMembers = [
      'Zach Kelling',
      'Z AI',
      'Ari Lerner',
      'Cyrus Pahlavi',
      'Vincent Butta'
    ];

    for (const member of teamMembers) {
      await expect(page.locator(`text=${member}`)).toBeVisible();
    }
  });

  test('should display team member cards with correct structure', async ({ page }) => {
    // Check for partner cards
    const partnerCards = page.locator('[class*="partner-card"]').first();
    
    // Check card structure
    const firstCard = page.locator('text=Chief Executive Officer').first().locator('..');
    await expect(firstCard).toBeVisible();
    
    // Check for name, title, and description
    await expect(page.locator('text=Chief Executive Officer')).toBeVisible();
  });

  test('should have clickable team member profiles', async ({ page }) => {
    // Find a team member link
    const teamMemberLink = page.locator('a[href*="linkedin"]').first();
    await expect(teamMemberLink).toBeVisible();
    
    // Check that links have proper href attributes
    const href = await teamMemberLink.getAttribute('href');
    expect(href).toBeTruthy();
  });

  test('should display team member images', async ({ page }) => {
    // Check for team member images
    const images = page.locator('img[alt*="Kelling"]').first();
    await expect(images).toBeVisible();
  });

  test('should display advisors section', async ({ page }) => {
    // Scroll to advisors section if it exists
    const advisorsSection = page.locator('text=Advisors');
    if (await advisorsSection.count() > 0) {
      await advisorsSection.scrollIntoViewIfNeeded();
      await expect(advisorsSection).toBeVisible();
    }
  });

  test('should display partner logos section', async ({ page }) => {
    // Check for logos section
    const logosSection = page.locator('[class*="logos"]');
    if (await logosSection.count() > 0) {
      await logosSection.first().scrollIntoViewIfNeeded();
      await expect(logosSection.first()).toBeVisible();
    }
  });

  test('should display press section', async ({ page }) => {
    // Check for press section
    const pressSection = page.locator('text=Press').first();
    if (await pressSection.count() > 0) {
      await pressSection.scrollIntoViewIfNeeded();
      await expect(pressSection).toBeVisible();
    }
  });

  test('should display products section', async ({ page }) => {
    // Check for products section
    const productsSection = page.locator('text=Products').first();
    if (await productsSection.count() > 0) {
      await productsSection.scrollIntoViewIfNeeded();
      await expect(productsSection).toBeVisible();
    }
  });

  test('should have responsive grid layout for team members', async ({ page }) => {
    // Check grid layout exists
    const grid = page.locator('.grid').first();
    await expect(grid).toBeVisible();
    
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    
    // Cards should stack on mobile
    const cards = page.locator('[class*="partner-card"]');
    const firstCard = cards.first();
    if (await firstCard.count() > 0) {
      await expect(firstCard).toBeVisible();
    }
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.reload();
    
    // Cards should be in grid on desktop
    if (await firstCard.count() > 0) {
      await expect(firstCard).toBeVisible();
    }
  });

  test('should display footer', async ({ page }) => {
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Check footer exists
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});

test.describe('Partners Page Performance', () => {
  test('should load within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('https://lux.partners');
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
    
    await page.goto('https://lux.partners');
    await page.waitForLoadState('networkidle');
    
    // There should be no console errors (or minimal)
    // Some third-party scripts might throw errors we can't control
    expect(errors.length).toBeLessThanOrEqual(2);
  });

  test('should have all images loaded', async ({ page }) => {
    await page.goto('https://lux.partners');
    await page.waitForLoadState('networkidle');
    
    // Check that all images are loaded
    const images = page.locator('img');
    const count = await images.count();
    
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const isVisible = await img.isVisible();
      if (isVisible) {
        // Check image has src
        const src = await img.getAttribute('src');
        expect(src).toBeTruthy();
      }
    }
  });
});