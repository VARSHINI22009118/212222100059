#  URL Shortener Microservice


##  Aim

To build a URL shortener backend microservice that allows users to generate short URLs from long links, manage optional expiration times, and fetch usage statistics. The project also includes a reusable logging middleware that sends logs to an external evaluation server as per AffordMed’s backend assessment requirements.



## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js    | Backend runtime |
| Express.js | HTTP server framework |
| MongoDB    | Database to store URLs and stats |
| Mongoose   | MongoDB ODM for schema-based data |
| Nanoid     | Generate unique shortcodes |
| Axios      | Make HTTP requests to logging API |
| dotenv     | Manage environment variables |



##  How It Works

1. User sends a `POST` request with a long URL.
2. Server responds with a shortened URL (`http://localhost:5000/shortcode`).
3. The short URL redirects to the original one if it's not expired.
4. Expiry is set by the user (in minutes) or defaults to 30 minutes.
5. All interactions are logged using a custom middleware via AffordMed’s logging API.
6. A `GET` request to `/shorturls/:shortcode` shows click stats, creation time, and expiry.

##  File Structure

```
212222100059/
├── logging-middleware/
│ ├── logger.js
│ ├── package.json
│
└── backend-submission/
├── controllers/
│ └── urlController.js
├── middleware/
│ └── logger.js (optional link)
├── models/
│ └── Url.js
├── routes/
│ └── urlRoutes.js
├── .env
├── .gitignore
├── index.js
└── package.json
```


##  Program Logic

###  Create Short URL (`POST /shorturls`)

- Accepts `url`, optional `shortcode`, and `validity` (in minutes).
- Checks for shortcode uniqueness.
- Stores the long URL and expiry date in MongoDB.

### 🔹 Redirect (`GET /:shortcode`)

- Redirects to original URL.
- Logs referrer and time if link is active.
- Returns 410 if expired.

### 🔹 Stats (`GET /shorturls/:shortcode`)

- Returns JSON with:
  - original URL
  - creation time
  - expiry time
  - total clicks
  - referrer & timestamp for each click


## 🧪 Sample Input & Output

### 🟢 POST `/shorturls`

#### Input

```
{
  "url": "https://example.com/long/tutorial/article",
  "validity": 45,
  "shortcode": "node45"
}

```
#### Output
```

{
  "shortLink": "http://localhost:5000/node45",
  "expiry": "2025-01-01T00:45:00Z"
}
```

###  GET /shorturls/node45

#### INPUT 

```
http://localhost:5000/shorturls/cloud60
```
#### OUTPUT

```
{
    "longUrl": "https://research.example-university.edu/publications/2025/international-conference/papers/advanced-distributed-systems-and-scalability-challenges-in-hybrid-cloud-architectures/section4/subsection/appendix-a/resources/related-works/downloads/full-paper-v2.html",
    "createdAt": "2025-07-16T09:56:27.958Z",
    "expiryDate": "2025-07-16T10:56:27.951Z",
    "totalClicks": 0,
    "clicks": []
}

```

## Output Screenshots

#### Connected to server 
<img width="1919" height="1021" alt="image" src="https://github.com/user-attachments/assets/2feb2503-2a70-48a3-9368-a2fb4e53ce6d" />

#### POST AND GET FOR EXAMPLE 1

<img width="1919" height="1020" alt="image" src="https://github.com/user-attachments/assets/7552dccc-d7d6-4f85-a432-de5ee9128483" />

<img width="1919" height="1020" alt="image" src="https://github.com/user-attachments/assets/bd4762e1-f153-4463-9954-a053f5147afe" />

#### POST AND GET FOR EXAMPLE 2

<img width="1919" height="1018" alt="image" src="https://github.com/user-attachments/assets/3523269e-0e7a-46c3-ae87-63c2948c6099" />

<img width="1919" height="1023" alt="image" src="https://github.com/user-attachments/assets/507ba9e0-d299-47df-a462-577207bac36d" />


## Final Result
A fully working backend microservice for URL shortening with integrated logging, expiry handling, and statistics tracking — meeting AffordMed’s evaluation expectations with organized code structure and modular design.

