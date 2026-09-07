const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;

/**
 * WCAG 2.2 Level AA automated accessibility tests for critical routes.
 * Uses axe-core to detect serious and critical violations.
 * Automated testing is ONE layer — must be supplemented by manual keyboard and screen reader testing.
 */

test.describe("Accessibility — Homepage (/)", () => {
    test("should not have any automatically detectable WCAG AA violations", async ({ page }) => {
        await page.goto("/");
        // Wait for content to load and animations to settle
        await page.waitForSelector("h1");
        await page.waitForTimeout(600);

        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
            .analyze();

        // Log violations for debugging
        if (accessibilityScanResults.violations.length > 0) {
            console.log("Homepage violations:");
            accessibilityScanResults.violations.forEach((v) => {
                console.log(`  [${v.impact}] ${v.id}: ${v.description}`);
                v.nodes.forEach((n) => {
                    console.log(`    - ${n.html.substring(0, 120)}`);
                });
            });
        }

        // Fail on serious or critical violations
        const seriousViolations = accessibilityScanResults.violations.filter(
            (v) => v.impact === "serious" || v.impact === "critical"
        );

        expect(seriousViolations).toEqual([]);
    });

    test("should have a skip link that becomes visible on focus", async ({ page }) => {
        await page.goto("/");
        const skipLink = page.locator(".skip-link");

        // Should exist
        await expect(skipLink).toBeAttached();

        // Press Tab to focus skip link
        await page.keyboard.press("Tab");

        // Skip link should now be visible
        await expect(skipLink).toBeVisible();
        await expect(skipLink).toHaveText("Skip to main content");
    });

    test("should have exactly one h1", async ({ page }) => {
        await page.goto("/");
        const h1s = page.locator("h1");
        await expect(h1s).toHaveCount(1);
    });

    test("should have proper heading hierarchy (no skipped levels)", async ({ page }) => {
        await page.goto("/");

        const headingLevels = await page.evaluate(() => {
            const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
            return Array.from(headings).map((h) => parseInt(h.tagName[1]));
        });

        for (let i = 1; i < headingLevels.length; i++) {
            const jump = headingLevels[i] - headingLevels[i - 1];
            // Heading level should not skip (e.g., h2 -> h4)
            expect(jump).toBeLessThanOrEqual(1);
        }
    });

    test("should have proper semantic landmarks", async ({ page }) => {
        await page.goto("/");

        const landmarks = await page.evaluate(() => {
            return {
                header: document.querySelectorAll("header").length,
                nav: document.querySelectorAll("nav").length,
                main: document.querySelectorAll("main").length,
                footer: document.querySelectorAll("footer").length,
            };
        });

        expect(landmarks.header).toBeGreaterThanOrEqual(1);
        expect(landmarks.nav).toBeGreaterThanOrEqual(1);
        expect(landmarks.main).toBe(1);
        expect(landmarks.footer).toBe(1);
    });

    test("all images should have alt text", async ({ page }) => {
        await page.goto("/");

        const imagesWithoutAlt = await page.evaluate(() => {
            const imgs = document.querySelectorAll("img");
            return Array.from(imgs).filter(
                (img) => !img.hasAttribute("alt") && img.getAttribute("role") !== "presentation"
            ).length;
        });

        expect(imagesWithoutAlt).toBe(0);
    });

    test("form inputs should have associated labels", async ({ page }) => {
        await page.goto("/");

        const inputsWithoutLabels = await page.evaluate(() => {
            const inputs = document.querySelectorAll("input, textarea, select");
            return Array.from(inputs).filter((input) => {
                const id = input.id;
                if (!id) return true;
                const label = document.querySelector(`label[for="${id}"]`);
                const ariaLabel = input.getAttribute("aria-label");
                const ariaLabelledBy = input.getAttribute("aria-labelledby");
                return !label && !ariaLabel && !ariaLabelledBy;
            }).length;
        });

        expect(inputsWithoutLabels).toBe(0);
    });
});

test.describe("Accessibility — AI Vision Platform (/projects/ai-vision-platform)", () => {
    test("should not have any automatically detectable WCAG AA violations", async ({ page }) => {
        await page.goto("/projects/ai-vision-platform");
        await page.waitForSelector("h1");
        await page.waitForTimeout(600);

        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
            .analyze();

        if (accessibilityScanResults.violations.length > 0) {
            console.log("AI Vision Platform violations:");
            accessibilityScanResults.violations.forEach((v) => {
                console.log(`  [${v.impact}] ${v.id}: ${v.description}`);
                v.nodes.forEach((n) => {
                    console.log(`    - ${n.html.substring(0, 120)}`);
                });
            });
        }

        const seriousViolations = accessibilityScanResults.violations.filter(
            (v) => v.impact === "serious" || v.impact === "critical"
        );

        expect(seriousViolations).toEqual([]);
    });

    test("should have exactly one h1", async ({ page }) => {
        await page.goto("/projects/ai-vision-platform");
        const h1s = page.locator("h1");
        await expect(h1s).toHaveCount(1);
    });

    test("should have proper semantic landmarks including main", async ({ page }) => {
        await page.goto("/projects/ai-vision-platform");

        const hasMain = await page.evaluate(() => {
            return document.querySelectorAll("main").length === 1;
        });

        expect(hasMain).toBe(true);
    });
});

test.describe("Keyboard Navigation", () => {
    test("should be able to navigate homepage with Tab key without getting trapped", async ({ page }) => {
        await page.goto("/");
        await page.waitForSelector("h1");

        // Tab through several elements and verify focus moves
        const focusedElements = [];
        for (let i = 0; i < 15; i++) {
            await page.keyboard.press("Tab");
            const focused = await page.evaluate(() => {
                const el = document.activeElement;
                return el ? {
                    tag: el.tagName,
                    text: el.textContent?.substring(0, 50).trim() || "",
                    role: el.getAttribute("role") || "",
                    href: el.getAttribute("href") || "",
                } : null;
            });
            focusedElements.push(focused);
        }

        // Should have focused on multiple different interactive elements (not trapped)
        const uniqueElements = new Set(
            focusedElements.map((e) => e?.href || e?.text || e?.tag).filter(Boolean)
        );
        expect(uniqueElements.size).toBeGreaterThan(3);
    });

    test("focus should be visible on interactive elements", async ({ page }) => {
        await page.goto("/");
        await page.waitForSelector("h1");

        // Tab to the first interactive element
        await page.keyboard.press("Tab"); // Skip link
        await page.keyboard.press("Tab"); // First nav element

        // Check that the focused element has an outline
        const hasVisibleFocus = await page.evaluate(() => {
            const el = document.activeElement;
            if (!el) return false;
            const styles = window.getComputedStyle(el);
            const outline = styles.outline;
            const boxShadow = styles.boxShadow;
            // Should have some form of focus indicator
            return (
                (outline && outline !== "none" && !outline.includes("0px")) ||
                (boxShadow && boxShadow !== "none")
            );
        });

        expect(hasVisibleFocus).toBe(true);
    });
});
