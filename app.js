const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint Utama dengan Tampilan Style MIT Editorial/Brutalist
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MIT-Style // DevSecOps App</title>
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          background-color: #f4f4f0;
          color: #111111;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          padding: 40px 20px;
          display: flex;
          justify-content: center;
        }
        .container {
          max-width: 850px;
          width: 100%;
          background: #ffffff;
          border: 3px solid #111111;
          box-shadow: 12px 12px 0px #111111;
          padding: 40px;
        }
        header {
          border-bottom: 3px solid #111111;
          padding-bottom: 20px;
          margin-bottom: 30px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 10px;
        }
        .brand {
          font-family: "Georgia", "Times New Roman", serif;
          font-size: 2.2rem;
          font-weight: 900;
          letter-spacing: -1px;
          color: #A31F34; /* MIT Signature Red */
          text-transform: uppercase;
        }
        .tagline {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: #111111;
          color: #ffffff;
          padding: 4px 8px;
        }
        .hero {
          margin-bottom: 35px;
        }
        .hero h1 {
          font-family: "Georgia", "Times New Roman", serif;
          font-size: 2.8rem;
          line-height: 1.1;
          margin-bottom: 15px;
          color: #111111;
        }
        .hero p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #333333;
          max-width: 650px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 35px;
        }
        .box {
          border: 2px solid #111111;
          padding: 20px;
          background-color: #fafafa;
          transition: transform 0.15s ease;
        }
        .box:hover {
          transform: translate(-3px, -3px);
          box-shadow: 5px 5px 0px #A31F34;
        }
        .box-title {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #A31F34;
          margin-bottom: 8px;
        }
        .box-value {
          font-size: 1.1rem;
          font-weight: 700;
          color: #111111;
        }
        .actions {
          border-top: 3px solid #111111;
          padding-top: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
        }
        .btn-mit {
          display: inline-block;
          background-color: #A31F34;
          color: #ffffff;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 12px 24px;
          border: 2px solid #111111;
          box-shadow: 4px 4px 0px #111111;
          transition: all 0.1s ease;
        }
        .btn-mit:hover {
          background-color: #111111;
          color: #ffffff;
          box-shadow: 4px 4px 0px #A31F34;
        }
        .timestamp {
          font-size: 0.8rem;
          font-family: monospace;
          color: #666666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <div class="brand">DEVSECOPS // APP</div>
          <div class="tagline">Containerized Runtime</div>
        </header>

        <section class="hero">
          <h1>Node.js App is Running.</h1>
          <p>Continuous Integration & Deployment via GitHub Actions, scanned with Trivy, and served via GitHub Container Registry (GHCR).</p>
        </section>

        <section class="grid">
          <div class="box">
            <div class="box-title">ENVIRONMENT</div>
            <div class="box-value">Node v22-alpine</div>
          </div>
          <div class="box">
            <div class="box-title">SECURITY SCAN</div>
            <div class="box-value">Trivy Validated</div>
          </div>
          <div class="box">
            <div class="box-title">STATUS</div>
            <div class="box-value" style="color: #A31F34;">● LIVE 200 OK</div>
          </div>
        </section>

        <div class="actions">
          <a href="/health" class="btn-mit">INSPECT /HEALTH ENDPOINT →</a>
          <div class="timestamp">PORT: 3000 | HOST MAPPED</div>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Endpoint Monitoring Health Status
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'UP', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});