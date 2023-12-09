import { SitemapStream, streamToPromise } from 'sitemap'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const links = [
    { url: '/', changefreq: 'daily', priority: 0.7 },
    { url: '/about', changefreq: 'daily', priority: 0.7 },
    { url: '/recetes', changefreq: 'daily', priority: 0.7 },
    { url: '/savoir', changefreq: 'daily', priority: 0.7 },
    { url: '/projects', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
  ]

  const stream = new SitemapStream({ hostname: 'https://chefretard.tech' })

  res.setHeader('Content-Type', 'application/xml')
 res.setHeader('Content-Encoding', 'gzip')


  links.forEach(link => {
    stream.write(link)
  })

  stream.end()

  const sitemap = await streamToPromise(stream).then(sm => sm.toString())

  res.send(sitemap)
}