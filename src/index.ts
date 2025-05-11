import { Hono } from 'hono'
import { ofetch } from 'ofetch'
import { logger } from 'hono/logger'
import { cache } from 'hono/cache'
import * as cheerio from 'cheerio';

const app = new Hono()
app.use(logger())

app.get(
  '*',
  cache({
    cacheName: 'gh-og-img',
    cacheControl: 'max-age=3600',
  })
)

app.get('/*', async (c) => {
  const path = c.req.path
  const githubURL = `https://github.com${path}`
  const html = await ofetch(githubURL, {
    parseResponse: (txt) => txt
  })
  const $ = cheerio.load(html)
  const imageURL = $('meta[property="og:image"]').attr('content') ?? 'https://opengraph.githubassets.com'
  const image = await ofetch(imageURL, {
    responseType: 'blob'
  })
  return c.body(image)
})

export default app
