#   DevSecOps Automated CI/CD Pipeline & Deployment

![Node.js](https://img.shields.io/badge/Node.js-v22--alpine-339933?logo=node.js)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?logo=githubactions)
![Trivy](https://img.shields.io/badge/Security-Trivy_Validated-00C7B7?logo=aquasec)
![License](https://img.shields.io/badge/Status-Production--Ready-brightgreen)

Sistem pipeline **DevSecOps** *end-to-end* yang mengotomatisasi seluruh alur pengujian kode, pemindaian celah keamanan, pembuatan *container image*, hingga proses *continuous deployment* secara terintegrasi menggunakan **GitHub Actions** dan **Self-Hosted Runner**.

---

##  Architecture & DevSecOps Flow

```text
[ Developer ]
│ (git push / Pull Request)
▼
┌─────────────────────────────────────────────────────────────┐
│ 1. Continuous Integration (CI Cloud)                        │
│    ├── Automated Testing    --> Jest                        │
│    ├── Vulnerability Scan   --> Trivy Scanner               │
│    └── Build & Push Image   --> GitHub Container Registry   │
└──────────────────────────────┬──────────────────────────────┘
│ (Merge to main)
▼
┌─────────────────────────────────────────────────────────────┐
│ 2. Continuous Deployment (CD Self-Hosted Runner)            │
│    ├── Pull Latest Image    --> ghcr.io/repository:latest   │
│    ├── Stop & Remove        --> Old Container               │
│    └── Spawn New Container  --> Port 8080:3000              │
└──────────────────────────────┬──────────────────────────────┘
│
▼
[ Live Server ]
http://localhost:8080
```
---
##  Tech Stack & Tools

| Kategori | Teknologi / Alat | Peran & Fungsi |
| :--- | :--- | :--- |
| **Backend Framework** | Node.js (v22-alpine), Express | Aplikasi REST API / Web App utama. |
| **Testing** | Jest | *Unit testing* untuk validasi fungsi dan logika backend. |
| **Security Scanner** | Trivy | Pemindaian celah keamanan (*vulnerability scan*) pada Docker Image. |
| **Containerization** | Docker | Pengemasan lingkungan aplikasi yang konsisten. |
| **Artifact Registry** | GHCR (GitHub Container Registry) | Penyimpanan privat *Docker Image* terenkripsi. |
| **CI/CD Orchestrator**| GitHub Actions | Otomatisasi pengujian, *build*, dan instruksi *deployment*. |
| **Deployment Target** | Self-Hosted Runner | Agen eksekusi lokal/VPS untuk menyalakan kontainer aplikasi. |
---
---
##  Key Features & Best Practices

1. **Git Flow & Branch Protection:** Branch `main` dikunci (*protected*). Semua perubahan wajib melalui *Pull Request* dan harus lolos pengujian CI sebelum dapat di-*merge*.
2. **Automated Quality Control (Fail-Fast):** Pipeline CI otomatis menggagalkan *build* jika ditemukan *syntax error*, uji fungsi gagal (*Jest test failure*), atau celah keamanan tingkat tinggi (*High/Critical Vulnerabilities*).
3. **Zero-Touch Continuous Deployment:** Setiaps *commit* yang di-*merge* ke branch `main` secara otomatis memicu *Self-Hosted Runner* untuk menarik *image* terbaru dan melakukan *restart* kontainer tanpa intervensi manual.
4. **Clean & Secure Repository:** Konfigurasi `.gitignore` ketat untuk menjamin *junk files* (seperti `node_modules`) dan kredensial sensitif tidak pernah bocor ke repositori Git.
---
---
##  Repository Structure

```text
.
├── .github/
│   └── workflows/
│       ├── ci.yml           # Pipeline CI (Test, Security Scan, GHCR Push)
│       └── cd.yml           # Pipeline CD (Self-Hosted Runner Deployment)
├── app.js                   # Aplikasi utama Express.js
├── app.test.js              # Test suite menggunakan Jest
├── Dockerfile               # Instruksi pengemasan kontainer Node.js
├── package.json             # Manajer dependensi & shortcut npm scripts
├── .gitignore               # Daftar pengabaian berkas sensitif & node_modules
└── README.md                # Dokumentasi proyek
```
---

##  How to Run Locally
### Prerequisites
- Node.js (v18+)
- Docker Desktop
--- 

##  Quick Start (Local Deployment)

1. Jalankan Aplikasi Secara Lokal (Development)
```text
# Clone repositori
git clone [https://github.com/USERNAME/REPO_NAME.git](https://github.com/USERNAME/REPO_NAME.git)
cd REPO_NAME

# Install dependensi
npm install

# Jalankan Unit Test
npm test

# Nyalakan aplikasi
npm start
```
Akses aplikasi melalui browser di http://localhost:3000
2. Jalankan Kontainer Docker Manual
```text
# Build Docker Image
docker build -t devops-app:local .

# Run Container
docker run -d -p 8080:3000 --name my-web devops-app:local
```
Akses aplikasi melalui browser di http://localhost:8080
3. Mengaktifkan Self-Hosted Runner (CD)
Untuk menerima deployment otomatis dari GitHub Actions:
```text
cd path/to/actions-runner
.\run.cmd
```
---
Verification & Health Check
Setiap kali kontainer berjalan, endpoint berikut dapat diakses untuk memastikan status kesehatan runtime:
- Dashboard Utama: GET http://localhost:8080/
- Health Endpoint: GET http://localhost:8080/health (Returns 200 OK)
---
###  Langkah Cara Pasang di Repositori
1. Buka folder proyek di **VS Code**.
2. Buat file baru bernama **`README.md`** di root folder (jika belum ada) atau buka file `README.md` yang sudah ada.
3. *Copy* seluruh blok teks di atas, lalu *paste* ke file `README.md`.
4. Sesuaikan bagian `USERNAME/REPO_NAME` pada bagian link clone git dengan nama username/repo GitHub.
5. Simpan file, lalu kirim perubahan ke GitHub lewat terminal VS Code:
   ```bash
   git add README.md
   git commit -m "docs: add comprehensive README documentation"
   git push origin main
   ```
---
