import * as cheerio from 'cheerio';

async function getImages(url: string) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });
  const html = await res.text();
  const $ = cheerio.load(html);
  const imgs: string[] = [];
  $('img').each((_, el) => {
    const src = $(el).attr('src') || $(el).attr('data-src');
    if (src && !src.endsWith('.svg')) imgs.push(src);
  });
  return imgs;
}

async function run() {
  console.log('Profitec Drive:', await getImages('https://www.profitec-espresso.com/en/products/drive'));
  console.log('Rocket Appartamento:', await getImages('https://rocket-espresso.com/appartamento.html'));
  console.log('Rocket Giotto:', await getImages('https://rocket-espresso.com/giotto-cronometro.html'));
}

run();
