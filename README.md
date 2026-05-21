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
URL-SHORTNER/
│
├── Backend/
│   ├── controller/
│   │   └── urlcontroller.js
│   │
│   ├── models/
│   │   └── urlmodel.js
│   │
│   ├── routes/
│   │   └── urlroutes.js
│   │
│   ├── node_modules/
│   ├── .gitignore
│   ├── db.js
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── Frontend/
│   └── index.html
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

# Future Improvements

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

