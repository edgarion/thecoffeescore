import * as cheerio from 'cheerio';

async function testPage(name: string, url: string) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });
    const html = await res.text();
    const $ = cheerio.load(html);
    console.log(`=== ${name} (status: ${res.status}) ===`);
    $('img').each((_, el) => {
      const src = $(el).attr('src') || $(el).attr('data-src') || $(el).attr('data-lazy-src') || $(el).attr('srcset');
      if (src && (src.includes('upload') || src.includes('product') || src.includes('cdn') || src.includes('media') || src.includes('.png') || src.includes('.jpg'))) {
        console.log(`  ${src.split(' ')[0]}`);
      }
    });
  } catch (e: any) {
    console.error(`Error on ${name}: ${e.message}`);
  }
}

async function run() {
  await testPage('Profitec Drive', 'https://www.profitec-espresso.com/en/products/drive');
  await testPage('Rocket Appartamento', 'https://rocket-espresso.com/appartamento.html');
  await testPage('Eureka Specialita', 'https://www.eureka.co.it/en/catalogo/prodotti/macinacaffe+istantaneo/19.aspx');
  await testPage('Fellow Ode Gen 2', 'https://fellowproducts.com/products/ode-gen-2-brew-grinder');
}

run();
