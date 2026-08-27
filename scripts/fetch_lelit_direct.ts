import * as cheerio from 'cheerio';

async function getLelit(slug: string) {
  try {
    const res = await fetch(`https://lelit.com/product/${slug}/`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });
    const html = await res.text();
    const $ = cheerio.load(html);
    const imgs: string[] = [];
    $('img').each((_, el) => {
      const src = $(el).attr('src') || $(el).attr('data-src') || $(el).attr('srcset');
      if (src) imgs.push(src.split(' ')[0]);
    });
    console.log(`\n=== ${slug} ===`);
    imgs.filter(s => s.includes('uploads') || s.includes('product') || s.includes('PL')).slice(0, 10).forEach(i => console.log('  ' + i));
  } catch (e: any) {
    console.error(e.message);
  }
}

async function run() {
  await getLelit('bianca-pl162t');
  await getLelit('marax-pl62x');
  await getLelit('anna-pl41tem');
  await getLelit('victoria-pl91t');
  await getLelit('glenda-pl41plus');
}

run();
