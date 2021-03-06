//what are $ for?
//.details-btn <-- if uncommented, breaks app

import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    const browser = await puppeteer.launch({
        args: [
           '--no-sandbox',
           '--disable-setuid-sandbox'
        ]
    })
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const extra = await page.$('.event .event__Details');
    expect(extra).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .details-btn');

    const extra = await page.$('.event .event__Details');
    expect(extra).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .details-btn');

    const extra = await page.$('.event .event__Details');
    expect(extra).toBeNull();
  });
});
