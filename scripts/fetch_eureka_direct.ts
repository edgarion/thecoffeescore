import * as cheerio from 'cheerio';

async function getEureka(id: number) {
  try {
    const res = await fetch(`https://www.eureka.co.it/en/catalogo/prodotti/macinacaffe+istantaneo/${id}.aspx`, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    const html = await res.text();
    const $ = cheerio.load(html);
    const imgs: string[] = [];
    $('img').each((_, el) => {
      const src = $(el).attr('src');
      if (src && (src.includes('upload') || src.includes('prodotti') || src.includes('.png') || src.includes('.jpg'))) {
        imgs.push(src.startsWith('http') ? src : `https://www.eureka.co.it${src}`);
      }
    });
    console.log(`=== Eureka Product ${id} ===`, imgs);
  } catch (e: any) {
    console.error(e.message);
  }
}

async function run() {
  await getEureka(19); // Mignon Specialita
  await getEureka(1);  // Mignon Silenzio
  await getEureka(40); // Mignon Zero
}

run();
