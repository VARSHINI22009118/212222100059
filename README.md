# URL Shortener Microservice

This repository contains the submission for the backend test by AffordMed, including:

- ✅ Logging Middleware
- ✅ Backend Microservice for URL Shortening

---

## 📁 Folder Structure

212222100059/
├── logging-middleware/
│ └── logger.js
│ └── package.json
├── url-shortener-backend/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── .env
│ ├── .gitignore
│ ├── index.js
│ ├── package.json

yaml
Copy
Edit

---

## 🔗 Features

### ✅ URL Shortener Microservice

- Create short URLs with optional custom codes
- Track click statistics
- Handle expiry of links
- Extensive logging using external logging middleware

### ✅ Logging Middleware

- Custom middleware for logging request information to the test server

---

## 🧪 APIs

### 🔸 POST `/shorturls`

- **Body:**
```json
{
  "url": "https://example.com/very/long/url",
  "validity": 30,
  "shortcode": "custom123"
}
Response:

json
Copy
Edit
{
  "shortLink": "http://localhost:5000/custom123",
  "expiry": "2025-01-01T00:30:00Z"
}
🔸 GET /shorturls/:shortcode
Response:

json
Copy
Edit
{
  "longUrl": "https://example.com/very/long/url",
  "createdAt": "2025-01-01T00:00:00Z",
  "expiryDate": "2025-01-01T00:30:00Z",
  "totalClicks": 1,
  "clicks": [
    {
      "timestamp": "2025-01-01T00:05:00Z",
      "referrer": "direct",
      "location": "India"
    }
  ]
}
🚀 Running Locally
bash
Copy
Edit
cd url-shortener-backend
npm install
node index.js
Ensure MongoDB is running locally or via Atlas.

