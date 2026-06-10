# 🔗 URL Shortener

A scalable URL Shortener built using **Node.js, Express.js, MongoDB Atlas, and Redis**. The application supports URL shortening, Redis-powered caching, IP-based rate limiting, click analytics, and malicious URL detection using **Google Safe Browsing API**.

The service is deployed on Railway and optimized for high-performance redirects through Redis caching.

## 🌐 Live Demo

https://url-shortner-production-b706.up.railway.app

---

# ✨ Features

* Generate short URLs
* Fast URL redirection
* Redis-based caching for redirects
* Redis-based IP rate limiting
* Google Safe Browsing API integration
* Click analytics
* URL validation
* Duplicate URL detection
* REST API support
* Clean backend architecture
* API testing with Postman
* Cloud deployment on Railway

---

# 🏗️ Architecture

```text
                ┌─────────────┐
                │   Client    │
                └──────┬──────┘
                       │
                       ▼
              ┌─────────────────┐
              │ Express Backend │
              └──────┬──────────┘
                     │
         ┌───────────┼───────────┐
         │                       │
         ▼                       ▼
 ┌──────────────┐       ┌────────────────┐
 │ Redis Cache  │       │ MongoDB Atlas  │
 │ Rate Limiter │       │ Persistent DB  │
 └──────┬───────┘       └────────────────┘
        │
        ▼
 Fast Redirect Response
```

---

# 🚀 Performance Benchmark

Load testing was performed using **Autocannon** with **100 concurrent connections**.

## Before Redis Caching

| Metric                 | Value      |
| ---------------------- | ---------- |
| Concurrent Connections | 100        |
| Average Latency        | 2395 ms    |
| Median Latency (P50)   | 1744 ms    |
| Maximum Latency        | 10326 ms   |
| Throughput             | 43 req/sec |

## After Redis Caching

| Metric                 | Value       |
| ---------------------- | ----------- |
| Concurrent Connections | 100         |
| Average Latency        | 347 ms      |
| Median Latency (P50)   | 311 ms      |
| Maximum Latency        | 1021 ms     |
| Throughput             | 314 req/sec |

## Impact of Redis Caching

| Metric          | Before     | After       | Improvement      |
| --------------- | ---------- | ----------- | ---------------- |
| Throughput      | 43 req/sec | 314 req/sec | **+630% (7.3×)** |
| Average Latency | 2395 ms    | 347 ms      | **-85.5%**       |
| Median Latency  | 1744 ms    | 311 ms      | **-82.2%**       |
| Maximum Latency | 10326 ms   | 1021 ms     | **-90.1%**       |

### Key Optimizations

* Implemented Redis caching for frequently accessed short URLs.
* Reduced repeated MongoDB lookups for redirect requests.
* Improved redirect response times through in-memory caching.
* Added Redis-based rate limiting to prevent abuse and excessive requests.

### Benchmark Command

```bash
autocannon -c 100 -d 20 https://url-shortner-production-b706.up.railway.app/<short-code>
```

---

# 🔒 Security Features

* Google Safe Browsing API integration
* Redis-based IP rate limiting
* URL validation
* Duplicate URL detection
* Protection against malicious redirects

---

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

| Technology               | Purpose                 |
| ------------------------ | ----------------------- |
| Node.js                  | Backend Runtime         |
| Express.js               | API Framework           |
| MongoDB Atlas            | Primary Database        |
| Redis                    | Caching & Rate Limiting |
| Mongoose                 | ODM                     |
| Google Safe Browsing API | Threat Detection        |
| Railway                  | Deployment              |
| Autocannon               | Load Testing            |
| Postman                  | API Testing             |
| Docker                   | Containerization        |

---

# 🐳 Docker Support

Build image:

```bash
docker build -t url-shortener .
```

Run container:

```bash
docker run -p 3000:3000 --env-file .env url-shortener
```

Using Docker Compose:

```bash
docker compose up -d
```

Stop services:

```bash
docker compose down
```

---

# 📂 Folder Structure

```text
URL-SHORTNER/
│
├── Backend/
│   ├── controller/
│   ├── middleware/
│   │   ├── ratelimit.js
│   │   ├── redis.js
│   │   └── safetycheck.js
│   │
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── db.js
│   ├── server.js
│   └── package.json
│
├── Frontend/
│
├── Dockerfile
├── docker-compose.yml
│
└── README.md
```

---

# 🔗 API Routes

## Create Short URL

```http
POST /shorten
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
  "shortUrl": "https://your-domain.com/abc123"
}
```

---

## Redirect URL

```http
GET /:id
```

Redirects to the original URL.

---

## Analytics

```http
GET /stats/:id
```

Returns analytics data for a shortened URL.

---

# 🔧 Environment Variables

Create a `.env` file:

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

REDIS_URL=your_redis_connection_string

GOOGLE_SAFE_BROWSING_API_KEY=your_api_key
```

---

# 🛠️ Setup & Installation

Clone repository:

```bash
git clone https://github.com/adi-shrivastava/URL-Shortner.git
```

```bash
cd URL-Shortner
```

Install dependencies:

```bash
npm install
```

Run application:

```bash
npm start
```

---

# 📈 Future Enhancements

* User authentication (JWT)
* CI/CD using GitHub Actions
* Kubernetes deployment

---

# 👨‍💻 Author

**Adi Shrivastava**

BS in Data Science – IIT Madras
CSE (AI & ML)

⭐ If you found this project useful, consider giving it a star.
