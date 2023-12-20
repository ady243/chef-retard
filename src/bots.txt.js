const BotsTxt = () => null;

export async function getServerSideProps({ res }) {
  const content = `User-agent: *\nSitemap: https://chefretard.tech/sitemap.xml`;
  res.setHeader('Content-Type', 'text/plain');
  res.write(content);
  res.end();

  return {
    props: {},
  };
}

export default BotsTxt;
