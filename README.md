# 🔗 URL Shortener

A full-stack URL Shortener built using Node.js, Express.js, MongoDB Atlas, Redis, and vanilla JavaScript.

The project started as a simple URL shortener but gradually evolved into a backend-focused system with Redis caching, rate limiting, analytics, QR code generation, malicious URL detection using Google Safe Browsing API, Docker support, and cloud deployment.

The main goal of this project was to learn how real-world backend systems handle caching, redirects, API integrations, rate limiting, deployment, and performance optimization.
---

## 🌐 Live Demo

Frontend:

https://url-shortner-five-rouge.vercel.app/

Backend:

https://url-shortner-g1we.onrender.com

---

## 📦 Technologies

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Redis
* Google Safe Browsing API
* Docker
* Render
* Vercel
* Autocannon
* Postman
* HTML
* CSS
* JavaScript

---

## ⌨️ Features

### URL Shortening

Generate short and shareable URLs from long links.

### Fast Redirects

Users are redirected to the original URL using a lightweight redirect system.

### Redis Caching

Frequently accessed URLs are stored in Redis to avoid repeated MongoDB queries.

### IP Rate Limiting

Redis-based rate limiting prevents abuse and excessive requests.

### Safe Browsing Checks

Every submitted URL is checked against the Google Safe Browsing API before shortening.

### QR Code Generation

Generate a QR code instantly for every shortened URL.

### Click Analytics

Track the number of visits for each shortened URL.

### Top Visited Links

Display the most visited shortened URLs on the frontend dashboard.

### Duplicate URL Detection

Avoid creating duplicate short URLs for links already present in the database.

### Cloud Deployment

Frontend deployed on Vercel and backend deployed on Render.

---

## 👨🏽‍🍳 The Process

I started by creating a basic URL shortener using Express.js and MongoDB Atlas.

The initial version stored the original URL and generated a random short identifier that could later be used for redirection.

Once the core functionality was working, I focused on improving performance.

I integrated Redis caching into the redirect flow. Before querying MongoDB, the backend first checks Redis for a cached URL. If the URL is found, the user is redirected immediately without hitting the database.

After implementing caching, I added Redis-based IP rate limiting to prevent users from sending excessive requests.

To improve security, I integrated the Google Safe Browsing API so potentially dangerous URLs are blocked before being shortened.

I then built a frontend interface where users can create short URLs, generate QR codes, and view analytics.

To better understand system performance, I load tested the application using Autocannon and compared redirect performance before and after Redis caching.

Finally, I containerized the application using Docker and deployed it to the cloud.

---

## 🚀 Performance Improvements

Load testing was performed using Autocannon with 100 concurrent connections.

### Before Redis Caching

* Throughput: 43 req/sec
* Average Latency: 2395 ms
* Median Latency: 1744 ms

### After Redis Caching

* Throughput: 314 req/sec
* Average Latency: 347 ms
* Median Latency: 311 ms

### Result

* 7.3× increase in throughput
* 85.5% reduction in average latency
* 90.1% reduction in maximum latency

The biggest improvement came from reducing repeated database lookups during redirects.

---

## 📚 What I Learned

### Redis Caching

This project helped me understand cache-aside patterns and how Redis can significantly reduce database load.

I learned when to store data in cache, how to handle cache misses, and how to structure cache keys.

### Rate Limiting

I learned how rate limiting works internally by tracking requests per IP address and using Redis expiration times.

### Database Optimization

I learned that reducing database reads can have a larger performance impact than many code-level optimizations.

### Third-Party APIs

Integrating Google Safe Browsing taught me how to work with external APIs, handle failures, and validate responses.

### Deployment

I learned how environment variables, cloud deployment, and production debugging differ from local development.

### Docker

I learned how to containerize applications and make deployments more consistent across environments.

### Performance Testing

Using Autocannon taught me how to measure latency, throughput, and the impact of caching on real workloads.

### Debugging

One of the most valuable lessons from this project was debugging deployment issues, Redis connection problems, environment variables, API failures, and route handling in production.

---

## 💭 How Can It Be Improved?

* Custom aliases for shortened URLs
* User authentication
* Personal dashboard
* URL expiration support
* Detailed analytics charts
* QR code download support
* CI/CD with GitHub Actions
* Kubernetes deployment
* Multi-region Redis caching

---

## 🚦 Running The Project

Clone the repository:

```bash
git clone https://github.com/adi-shrivastava/URL-Shortner.git
```

Move into the project directory:

```bash
cd URL-Shortner
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm start
```

---

## Video 

https://github.com/user-attachments/assets/8be90a95-0514-424b-b1e2-c444a9b68f91



## 👨‍💻 Author

Adi Shrivastava

BS in Data Science – IIT Madras
B.Tech CSE (AI & ML)
