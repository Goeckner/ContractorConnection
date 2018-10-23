const express = require('express')
const createBindings = require('@monsantoit/velocity-service-bindings')

const app = express()
const baseUrl = '/contractor-connection'
const bindings = createBindings({})

app.use(`${baseUrl}/service-bindings`, bindings)

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable global-require */
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')

  const config = require('../../webpack.config.js')
  const compiler = webpack(config)

  // Tell express to use the middleware and the config file as a
  // base for running the middleware. Also enable server-side
  // rendering so we can avoid sending the GZip versions of the files.
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    logLevel: 'error',
    serverSideRender: true,
  }))

  function normalizeAssets(assets) {
    return Array.isArray(assets) ? assets : [ assets ]
  }

  // Because we are not GZip-ing the bundle during development,
  // we want to send the index.html file (generated below) on
  // every request to `baseUrl/*`.
  app.use((req, res) => {
    const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName
    const styles = normalizeAssets(assetsByChunkName.main)
      .filter(path => path.endsWith('.css'))
      .map(path => `<link rel="stylesheet" href="${path}" />`)
      .join('\n')
    const scripts = normalizeAssets(assetsByChunkName.main)
      .filter(path => path.endsWith('.js'))
      .map(path => `<script src="${path}"></script>`)
      .join('\n')

    res.send(`
      <html>
        <head>
          <title>UI Starter Kit</title>
          ${styles}
        </head>
        <body>
          <div id="root"></div>
          ${scripts}
          <script src="${baseUrl}/service-bindings"></script>
        </body>
      </html>
    `)
  })
} else {
  app.get(`${baseUrl}/bundle.js`, (req, res) => {
    req.url += '.gz'
    res.set('Content-Encoding', 'gzip')
    res.set('Content-Type', 'text/javascript')
    res.sendFile(`${__dirname}/bundle.js.gz`)
  })

  app.get(`${baseUrl}/styles.css`, (req, res) => {
    res.set('Content-Encoding', 'gzip')
    res.set('Content-Type', 'text/css')
    res.sendFile(`${__dirname}/styles.css.gz`)
  })

  app.get(`${baseUrl}*`, (req, res) => {
    res.set('Content-Encoding', 'gzip')
    res.set('Content-Type', 'text/html')
    res.sendFile(`${__dirname}/index.html.gz`)
  })
}

const defaultPort = 3031
const port = process.env.PORT || defaultPort

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App running at http://localhost:${port}${baseUrl}`)
})
