#  DevSecOps Node.js Application

![CI/CD Pipeline](https://github.com/mack3nzie-ai/devops-project/actions/workflows/ci.yml/badge.svg)
![Docker Image](https://img.shields.io/badge/Docker-Multi--Stage-blue?logo=docker)
![Node.js Version](https://img.shields.io/badge/Node.js-v22--alpine-green?logo=nodedotjs)
![Security](https://img.shields.io/badge/Security-Trivy%20Scanned-success?logo=aquasec)

A production-ready Node.js application built with Express.js, containerized using Docker multi-stage builds, and fully integrated with an automated **DevSecOps CI/CD Pipeline** using GitHub Actions and GitHub Container Registry (GHCR).

---

##  Architecture & DevSecOps Flow

```text
[ Developer ]
      │ (git push)
      ▼
[ GitHub Repository ]
      │ (trigger)
      ▼
[ GitHub Actions Pipeline ]
      ├─► Build Docker Multi-Stage Image
      ├─► Security Scan Container Image (Trivy)
      └─► Push Image to GitHub Container Registry (GHCR)
      │
      ▼
[ GHCR Registry ] ──(docker pull)──► [ Production / Local Deployment ]
```
---

##  Features & Security Best Practices
- Minimal Footprint: Uses node:22-alpine in a multi-stage Docker build to keep image size lightweight.
- Container Hardening: Runs as a non-root user (USER node) to minimize security exposure.
- Automated Security Scanning: Integrated Trivy Vulnerability Scanner in the CI pipeline to catch CVEs before deployment.
- Native Healthcheck: Includes a native Docker HEALTHCHECK directive hitting /health.
- Editorial UI: MIT-inspired minimal frontend design with dual-mode API support (HTML for browser, JSON for health monitors).

--- 

##  Quick Start (Local Deployment)
Make sure you have Docker installed on your machine.
1. Pull the Latest Image from GHCR
```text
docker pull ghcr.io/mack3nzie-ai/devops-app:latest
```
2. Run the Container
```text
docker run -d -p 8080:3000 --name my-web ghcr.io/mack3nzie-ai/devops-app:latest
```
3. Verify Application
- Main App: Open http://localhost:8080 in your browser.
- Health Endpoint: Open http://localhost:8080/health (renders MIT UI in browser, or returns JSON for API requests).
---
## Project Structure
```text
├── .github/
│   └── workflows/          # GitHub Actions CI/CD pipeline definitions
├── app.js                  # Main Express.js application
├── Dockerfile              # Hardened multi-stage Dockerfile
├── package.json            # Dependencies and app metadata
└── README.md               # Project documentation
```
---
## Inspection & Commands
Check container status and health:
```text
docker ps
```
Check memory and CPU usage:
```text
docker stats my-web
```
View application logs:
```text
docker logs my-web
```

