# 🔗 URL Shortener

A minimal and scalable URL shortening service built using Node.js, Express.js, and MongoDB.

The project focuses on backend architecture, URL redirection handling, API design, and scalable system fundamentals.

---

## ✨ Features

- Generate short URLs
- Fast redirection system
- Custom aliases
- Click tracking
- REST API support
- URL validation
- Clean backend architecture

---

# 🖼️ Preview

## Home Page
<!-- Add Screenshot Here -->

![Home Page](./screenshots/home.png)

---

## Generated Short URL
<!-- Add Screenshot Here -->

![Generated URL](./screenshots/generated.png)

---

## Analytics Dashboard
<!-- Add Screenshot Here -->

![Analytics](./screenshots/analytics.png)

---

# 🚀 Live Demo


---

# ⚙️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Backend Runtime |
| Express.js | API Handling |
| MongoDB | Database |
| Mongoose | ODM |
| NanoID | Short URL Generation |

---

# 📂 Folder Structure

```text
URL-Shortner/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── utils/
│
├── screenshots/
├── server.js
└── package.json
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
  "shortUrl": "http://localhost:3000/abc123"
}
```

---

## Redirect URL

```http
GET /:shortId
```

Redirects to original URL.

---

# 🧠 Future Improvements

- QR Code Generation
- Redis Caching
- Authentication System
- URL Expiration
- Rate Limiting
- Docker Deployment
- Analytics Dashboard
  
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

# 📌 Sample Workflow

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

GitHub: https://github.com/adi-shrivastava
