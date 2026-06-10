# 🔗 URL Shortener

Built a scalable URL Shortener using Node.js, Express.js, MongoDB, and Redis. Implemented Redis-based caching for URL redirects and IP-based rate limiting to improve performance and prevent abuse. Load tested using Autocannon (100 concurrent connections), where Redis caching improved throughput from 43 req/sec to 314 req/sec (~7.3× increase) and reduced average latency from 2395 ms to 347 ms (~85% reduction). Deployed on Railway with URL safety checks integrated via Google's Safe Browsing API.
---

## ✨ Features

- Generate short URLs
- Fast redirection system
- Google Safe Browsing API (-Security Check)
- Custom aliases
- Click tracking
- Efficient Databse Handling Eliminating Duplicate Records Easily (Reducing Data Redundancy MongoDB)
- REST API support
- URL validation
- Clean backend architecture
- API testing with Postman

---
## 🚀 Performance Benchmark

Load testing was performed using **Autocannon** with **100 concurrent connections** on the deployed Railway application.

### Before Redis Caching

| Metric | Value |
|----------|----------|
| Concurrent Connections | 100 |
| Average Latency | 2395 ms |
| Median Latency (P50) | 1744 ms |
| Maximum Latency | 10326 ms |
| Throughput | 43 req/sec |

### After Redis Caching

| Metric | Value |
|----------|----------|
| Concurrent Connections | 100 |
| Average Latency | 347 ms |
| Median Latency (P50) | 311 ms |
| Maximum Latency | 1021 ms |
| Throughput | 314 req/sec |

### Performance Improvement

| Metric | Before | After | Improvement |
|----------|----------|----------|----------|
| Throughput | 43 req/sec | 314 req/sec | **+630% (7.3×)** |
| Average Latency | 2395 ms | 347 ms | **-85.5%** |
| Median Latency | 1744 ms | 311 ms | **-82.2%** |
| Maximum Latency | 10326 ms | 1021 ms | **-90.1%** |

### Key Optimizations

- Implemented **Redis caching** for frequently accessed short URLs.
- Reduced repeated **MongoDB lookups** for redirect requests.
- Improved redirect response times through **in-memory caching**.
- Added **Redis-based rate limiting** to prevent abuse and excessive requests.

### Benchmark Command

```bash
autocannon -c 100 -d 20 https://url-shortner-production-b706.up.railway.app/<short-code>
```

### Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Redis
- Railway
- Google Safe Browsing API
- Autocannon

# 🖼️ Preview

## Create Short URL API Request (Postman)

<img width="1043" height="294" alt="Screenshot 2026-05-21 154025" src="https://github.com/user-attachments/assets/01e934bb-135b-4e3f-a9fe-1ba863cb604e" />

---

## Generated Short URL Response

<img width="6798" height="1024" alt="Screenshot 2026-05-21 154035" src="https://github.com/user-attachments/assets/a629d84f-4555-4001-b3d4-181170220925" />

---

## MongoDB Database Entry

<img width="962" height="440" alt="Screenshot 2026-05-21 154709" src="https://github.com/user-attachments/assets/19f4f677-2ab4-49bb-b5bd-df68b361070d" />


---

# 🎥 Demo

<img width="800" height="450" alt="ezgif-3e7e50aaef28ab23" src="https://github.com/user-attachments/assets/34f3f31f-72d2-4236-b1d0-b5abfd9abc2a" />

---

# ⚙️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Backend Runtime |
| Express.js | API Handling |
| MongoDB | Database |
| Mongoose | ODM |
| NanoID | Short URL Generation |
| Postman | API Testing |

---

# 📂 Folder Structure

```text
#Updated
URL-SHORTNER/
│
├── Backend/
│   ├── controller/
│   │   └── urlcontroller.js
│   │
│   ├── middleware/
│   │   └── safetycheck.js
│   │
│   ├── models/
│   │   └── urlmodel.js
│   │
│   ├── routes/
│   │   └── urlroutes.js
│   │
│   ├── node_modules/
│   │
│   ├── .env
│   ├── .gitignore
│   ├── db.js
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── Frontend/
│
└── README.md
```

---

# 🔗 API Routes

## Create Short URL

```http
POST /api/shorten
```

### Request

```json
{
  "url": "https://example.com"
}
```

### Response

```json
{
  "shortUrl": "http://localhost:3000/uniqueshortid"
}
```

---

## Redirect URL

```http
GET /:shortId
```

Redirects to the original URL.

---


## ⚙️ System Scalability & Optimization Architecture

I am currently refactoring this service to handle high-concurrency enterprise workloads and security filtering using a dual-layer upgrade:

### 1. High-Performance Caching Layer (Redis Integration)
* **Problem**: High-volume redirect operations (`GET /:shortId`) create expensive, high-latency I/O bottlenecks on the primary MongoDB cluster.
* **Solution**: Implementing an in-memory Redis caching layer.
* **Data Flow Logic**:
  1. Incoming redirect request hits the `GET /:shortId` endpoint.
  2. System checks the Redis cluster using key lookup in $O(1)$ time complexity.
  3. If cache **HIT**: Redirect user instantly, bypassing database overhead entirely.
  4. If cache **MISS**: Query MongoDB, write records to Redis with an explicit Time-To-Live (TTL), and redirect.

### 2. Destination Input Security Scoring Engine
* **Problem**: Malicious actors frequently exploit URL shorteners to mask phishing vectors, domain traps, or malware links.
* **Solution**: Integrating an validation layer inside the `POST /api/shorten` controller.
* **Mechanism**: The backend runs the long URL string against malicious domain blocklists and calculates an automated threat vector safety score before allowing short code allocation.

---

# 🛠️ Setup & Installation

```bash
git clone https://github.com/adi-shrivastava/URL-Shortner.git

cd URL-Shortner

npm install
```

Run server:

```bash
npm start
```

---

# Sample Workflow

```text
Long URL
   ↓
Generate Unique ID
   ↓
Store in Database
   ↓
Create Short URL
   ↓
Redirect User
```

---

# 👨‍💻 Author

Adi Shrivastava

