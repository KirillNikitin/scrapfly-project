import { ScrapeConfig, ScrapflyClient } from "scrapfly-sdk";

export async function basicGet(apiKey) {
  const client = new ScrapflyClient({ key: apiKey });

  let scrape_result = await client.scrape(
    new ScrapeConfig({
      url: 'https://growgrows.com/en-eu/products/plentiful-planets-sleepsuit',
      format: 'json',
      // Anti Scraping Protection bypass - enable this when scraping protected targets
      asp: true,
      // server side cache - great for repeated requests
      cache: true,
      cache_ttl: 3600,  // in seconds
      // cache_clear: true,  // you can always clear the cache explicitly!
    }),
  );

  // the scrape_result.result contains all result details
  console.log("web log url:");  // you can check web UI for request details:
  console.log(scrape_result.result.log_url);

  console.log("page content:");
  console.log(scrape_result.result.content);

  console.log("response headers:");
  console.log(scrape_result.result.response_headers);

  console.log("response cookies:");
  console.log(scrape_result.result.cookies);

  let product = {
    "fonts": [{
      family: scrape_result.selector(
        "<SELECTOR>"
      ).text(),

      ...
    }],
    "primaryButton": {
      fontFamily: scrape_result.selector(
        "<SELECTOR>"
      ).text(),
      ...
    }

  }
  console.log(product);
}