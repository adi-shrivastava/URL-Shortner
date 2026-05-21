# 🔗 URL Shortener

A minimal and scalable URL shortening service built using Node.js, Express.js, MongoDB, and Postman.

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
- API testing with Postman

---

# 🖼️ Preview

## Create Short URL API Request (Postman)

<img width="1915" height="218" alt="Screenshot 2026-05-21 150010" src="https://github.com/user-attachments/assets/8ad4b049-03a9-4b89-9599-aa29eba4546b" />

---

## Generated Short URL Response

<img width="1919" height="126" alt="Screenshot 2026-05-21 150155" src="https://github.com/user-attachments/assets/e67f4bb5-2db3-4f38-9301-0fd3b175867d" />

---

## MongoDB Database Entry

<img width="1100" height="794" alt="Screenshot 2026-05-21 144750" src="https://github.com/user-attachments/assets/b0373c55-f09a-486a-962e-92a2b5637c49" />

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

Redirects to the original URL.

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
