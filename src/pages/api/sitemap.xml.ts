import { SitemapStream, streamToPromise } from 'sitemap'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const links = [
    { url: '/', changefreq: 'daily', priority: 0.7 },
    { url: '/about', changefreq: 'daily', priority: 0.7 },
    { url: '/recetes', changefreq: 'daily', priority: 0.7 },
    {url:'/details/1', changefreq: 'daily', priority: 0.7},
    {url:'/details/2', changefreq: 'daily', priority: 0.7},
    {url:'/details/3', changefreq: 'daily', priority: 0.7},
    {url:'/details/4', changefreq: 'daily', priority: 0.7},
    {url:'/details/5', changefreq: 'daily', priority: 0.7},
    {url:'/details/6', changefreq: 'daily', priority: 0.7},
    {url:'/details/7', changefreq: 'daily', priority: 0.7},
    {url:'/details/8', changefreq: 'daily', priority: 0.7},
    {url:'/frites', changefreq: 'daily', priority: 0.7},
    {url:'/big', changefreq: 'daily', priority: 0.7},
    {url:'/double', changefreq: 'daily', priority: 0.7},
    {url:'/salade', changefreq: 'daily', priority: 0.7},
    {url:'/sandwichSteack', changefreq: 'daily', priority: 0.7},
    {url:'/sushi', changefreq: 'daily', priority: 0.7},
    {url:'/kebab', changefreq: 'daily', priority: 0.7},
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