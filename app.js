const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint Utama dengan Tampilan UI Modern
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>DevSecOps Pipeline</title>
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #f8fafc;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .card {
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 40px;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
          text-align: center;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 24px;
        }
        .pulse {
          width: 8px;
          height: 8px;
          background-color: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        h1 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 12px;
          background: linear-gradient(to right, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 24px;
        }
        .info-box {
          background: rgba(15, 23, 42, 0.6);
          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .info-title {
          font-size: 0.75rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .info-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-top: 4px;
        }
        .btn {
          display: inline-block;
          width: 100%;
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
          color: white;
          text-decoration: none;
          padding: 12px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }
        .btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="badge">
          <span class="pulse"></span>
          Pipeline Live & Operational
        </div>
        <h1>DevSecOps Pipeline</h1>
        <p>Node.js App is Running Successfully inside Docker Container!</p>
        
        <div class="info-grid">
          <div class="info-box">
            <div class="info-title">Environment</div>
            <div class="info-value">Docker Container</div>
          </div>
          <div class="info-box">
            <div class="info-title">Security Scan</div>
            <div class="info-value">Passed (Trivy)</div>
          </div>
        </div>

        <a href="/health" class="btn">Check Health Status (/health)</a>
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