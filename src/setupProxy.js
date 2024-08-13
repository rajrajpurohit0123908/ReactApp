// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Proxy for API requests
  app.use(
    '/test1', // The prefix for API requests
    createProxyMiddleware({
      target: 'http://localhost:8080/', // The target server for API requests
      changeOrigin: true,
      
    })
  );

  // Proxy for SOAP requests
  app.use(
    '/test2', // The prefix for SOAP requests
    createProxyMiddleware({
      target: 'http://calldesk.reliancegeneral.co.in:8081/', // The target server for SOAP requests
      changeOrigin: true,
      
    })
  );
};
