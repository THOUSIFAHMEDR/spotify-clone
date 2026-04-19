# 🎵 Spotify Clone — Full Stack Music Streaming App

A full stack Spotify-inspired music streaming web app built with Node.js, Express, and MongoDB.

Live Demo → [https://thousif-spotify.onrender.com](https://thousif-spotify.onrender.com)

---

## 🚀 Features

- 🎵 Music Player — Play, Pause, Next, Previous, Seek, Volume control
- 🔍 Search — Real-time song search from database
- 🔐 Authentication — Register and Login with JWT tokens
- 📚 Playlists — Create and manage personal playlists
- 🗄️ Database — All data stored in MongoDB Atlas
- 📱 Responsive — Clean Spotify-inspired dark UI

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Auth | JWT, Bcrypt |
| Deployment | Render |

---

## 📁 Project Structure

```
spotify-clone/
├── models/
│   ├── song.js        # Song schema
│   ├── Artist.js      # Artist schema
│   └── User.js        # User schema
├── Assets/
│   ├── trending songs/
│   ├── Popular artisits/
│   ├── popular albums/
│   ├── popular radio/
│   └── featured charts/
├── server.js          # Main server file
├── seed.js            # Database seeder
├── spotify.html       # Main frontend
├── spotify.css        # Styles
├── register.html      # Registration page
├── .env.example       # Environment variables template
└── package.json
```

---

## ⚙️ Setup & Installation

### 1. Clone the repo
```
git clone https://github.com/THOUSIFAHMEDR/spotify-clone.git
cd spotify-clone
```

### 2. Install dependencies
```
npm install
```

### 3. Create `.env` file
```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Seed the database
```
node seed.js
```

### 5. Start the server
```
node server.js
```

### 6. Open in browser
```
http://localhost:3000/spotify.html
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/trending | Get trending songs |
| GET | /api/artists | Get popular artists |
| GET | /api/albums | Get popular albums |
| GET | /api/radio | Get radio stations |
| GET | /api/charts | Get featured charts |
| GET | /api/search?q= | Search songs |
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| GET | /api/playlists/:userId | Get user playlists |
| POST | /api/playlists | Create playlist |
| POST | /api/playlists/addsong | Add song to playlist |

---

## 🗄️ Database Models

### Song
```javascript
{
    title: String,
    artist: String,
    image: String,
    audioUrl: String,
    type: String,      // trending, album, radio, chart
    genre: String,
    duration: String
}
```

### Artist
```javascript
{
    name: String,
    image: String,
    genre: String,
    songs: Array
}
```

### User
```javascript
{
    username: String,
    email: String,
    password: String,  // bcrypt hashed
    playlists: Array,
    likedSongs: Array,
    createdAt: Date
}
```

---

## 🚀 Deployment

This app is deployed on **Render** with MongoDB Atlas as the cloud database.

Environment variables required on Render:
```
MONGO_URL → MongoDB Atlas connection string
JWT_SECRET → Secret key for JWT tokens
```

---

## 👨‍💻 Developer

**Thousif Ahmed**
BCA Student — East Point College, Bengaluru

GitHub → [THOUSIFAHMEDR](https://github.com/THOUSIFAHMEDR)

---

## 📌 Future Improvements

- Full album tracklist support
- Add song to playlist from UI
- User profile page
- Like/Unlike songs
- Recently played history
- Mobile responsive player

---

⭐ Star this repo if you found it useful!
