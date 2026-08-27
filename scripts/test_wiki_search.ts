async function testWikiSearch(query: string) {
  const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&srlimit=5&format=json`;
  const res = await fetch(searchUrl, {
    headers: { 'User-Agent': 'TheCoffeeScore-App/1.0 (contact@thecoffeescore.es)' }
  });
  const data = await res.json();
  console.log(`\n=== Results for "${query}" ===`);
  if (data.query?.search) {
    for (const item of data.query.search) {
      console.log(`- Title: ${item.title}`);
      const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(item.title)}&prop=imageinfo&iiprop=url&format=json`;
      const infoRes = await fetch(infoUrl, {
        headers: { 'User-Agent': 'TheCoffeeScore-App/1.0 (contact@thecoffeescore.es)' }
      });
      const infoData = await infoRes.json();
      const pages = infoData.query?.pages;
      if (pages) {
        const pageKey = Object.keys(pages)[0];
        const directUrl = pages[pageKey]?.imageinfo?.[0]?.url;
        console.log(`  Direct image URL: ${directUrl}`);
      }
    }
  }
}

async function run() {
  await testWikiSearch('Rancilio Silvia');
  await testWikiSearch('Gaggia Classic');
  await testWikiSearch('La Pavoni Europiccola');
  await testWikiSearch('Moccamaster');
  await testWikiSearch('Chemex');
  await testWikiSearch('Bialetti Moka');
  await testWikiSearch('AeroPress');
  await testWikiSearch('La Marzocco');
}

run().catch(console.error);
