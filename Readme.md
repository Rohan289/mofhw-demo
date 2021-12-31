## Corona-case tracking

## for deployment to heroku

## change the start script in package.json to 
  "start": "node server/server.js",

 ## change the plugins in webpack.common.js to 
 plugins : [
    new webpack.DefinePlugin({
      'process.env':{  
        'BACKEND_BASE_URL': JSON.stringify(process.env.BACKEND_BASE_URL),
      }
    })
  ],