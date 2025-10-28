# 🎬 MovieMate - Discover Amazing Movies & TV Shows

A modern, responsive web application built with React for browsing trending movies and TV shows, managing your personal watchlist, and exploring detailed information about your favorite content.


## ✨ Features

- 🔥 **Trending Shows** - Browse the hottest TV shows and movies
- 🔍 **Smart Search** - Find any show or movie instantly
- ❤️ **Personal Watchlist** - Save your favorites with persistent storage
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- ⚡ **Fast Performance** - Optimized loading and rendering
- 📊 **Detailed Information** - View ratings, genres, release dates, and more

## 🚀 Demo

<div align="center">
  <img src="src/movie-mate.gif" alt="movie-mate" width="100%"/>
  <p><em>Complete feature demonstration of the Movie Mate</em></p>
</div>


## 🛠️ Technologies Used

### Frontend
- **React** - UI library for building components
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Custom styling with gradients and animations

### State Management
- **Custom Redux Implementation** - Hand-built state management
- **LocalStorage API** - Persistent data storage

### Routing
- **Custom Hash-based Router** - Client-side routing without external libraries

### API Integration
- **TVMaze API** - Free API for TV show and movie data
- **Fetch API** - Modern HTTP requests

### Development Tools
- **Create React App** - Project bootstrapping
- **VS Code** - Code editor
- **npm** - Package manager

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional) - [Download here](https://git-scm.com/)

## 📦 Installation

### Step 1: Clone or Download the Repository

```bash
# Option 1: Clone with Git
git clone https://github.com/rawatpradeep038-dot/moviemate.git

# Option 2: Download ZIP from GitHub and extract
```

### Step 2: Navigate to Project Directory

```bash
cd moviemate
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start Development Server

```bash
npm start
```

The app will open automatically in your browser at `http://localhost:3000`

## 📁 Project Structure

```
moviemate/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/             # Reusable components
│   │   ├── Header.js          # App header with logo & search
│   │   ├── MovieCard.js       # Movie/show card component
│   │   ├── Navigation.js      # Navigation menu
│   │   └── SearchBar.js       # Search input component
│   ├── pages/                  # Page components
│   │   ├── HomePage.js        # Main page with trending & popular
│   │   ├── WatchlistPage.js   # Saved favorites page
│   │   └── MovieDetailPage.js # Detailed movie information
│   ├── redux/                  # State management
│   │   ├── store.js           # Custom Redux store
│   │   └── movieReducer.js    # Movie state reducer
│   ├── router/                 # Routing system
│   │   └── Router.js          # Custom hash-based router
│   ├── styles/                 # Styling
│   │   └── main.css           # All CSS styles
│   ├── utils/                  # Helper functions
│   │   ├── api.js             # API integration
│   │   └── constants.js       # API endpoints & constants
│   ├── App.js                  # Main app component
│   └── index.js                # App entry point
├── package.json                # Dependencies & scripts
└── README.md                   # Project documentation
```

## 🎯 Key Features Explained

### 1. Custom Redux Implementation

Built from scratch without external libraries:

```javascript
// Simple store with subscribe/dispatch
const store = createStore(movieReducer, initialState);
```

**Actions:**
- `SET_MOVIES` - Load movie data
- `SET_TRENDING` - Load trending content
- `ADD_TO_WATCHLIST` - Add to favorites
- `REMOVE_FROM_WATCHLIST` - Remove from favorites
- `SET_SEARCH_QUERY` - Update search term

### 2. Custom Router

Hash-based routing system:

```javascript
// Routes
/ - Home page
/watchlist - Watchlist page
/movie/:id - Movie detail page
```

### 3. LocalStorage Persistence

Watchlist data persists across browser sessions:

```javascript
// Automatically saves to localStorage
localStorage.setItem('watchlist', JSON.stringify(watchlist));
```

### 4. DOM Manipulation

Direct DOM manipulation for animations:

```javascript
// Smooth fade-in animations
element.style.opacity = '0';
setTimeout(() => element.style.opacity = '1', 100);
```

## 🎨 Design Features

- **Cool Mint Gradient** - Fresh cyan to green background
- **Glassmorphism** - Frosted glass effect on header
- **Smooth Animations** - Fade-in, scale, and slide effects
- **Hover Effects** - Interactive card transformations
- **Responsive Grid** - Adapts to all screen sizes
- **Modern Typography** - Clean, readable fonts

## 📱 Responsive Breakpoints

- **Desktop:** 1400px+ (5-6 cards per row)
- **Laptop:** 1024px - 1399px (4-5 cards per row)
- **Tablet:** 768px - 1023px (3-4 cards per row)
- **Mobile:** Below 768px (2-3 cards per row)

## 🌐 API Reference

### TVMaze API

This project uses the free TVMaze API:

- **Base URL:** `https://api.tvmaze.com`
- **No API key required**
- **Free tier:** Unlimited requests

**Endpoints Used:**

```javascript
// Search shows
GET /search/shows?q={query}

// Get show details
GET /shows/{id}

// Popular shows (using predefined IDs)
GET /shows/{id}
```

## 🎓 Learning Outcomes

This project demonstrates:

✅ **React Fundamentals**
- Component architecture
- Props and state management
- Hooks (useState, useEffect, useRef)
- Event handling

✅ **State Management**
- Custom Redux implementation
- Actions and reducers
- Global state management

✅ **Routing**
- Client-side routing
- Dynamic routes with parameters
- Browser history API

✅ **API Integration**
- Fetch API
- Async/await
- Error handling
- Data transformation

✅ **LocalStorage**
- Data persistence
- JSON serialization
- Browser storage API

✅ **DOM Manipulation**
- Direct DOM access with refs
- Dynamic styling
- Animation triggers

✅ **Modern CSS**
- Flexbox and Grid
- Gradients and shadows
- Animations and transitions
- Responsive design

## 🐛 Troubleshooting

### Issue: App doesn't start

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### Issue: Blank page

**Solution:**
- Check browser console for errors (F12)
- Ensure all files are in correct locations
- Check if port 3000 is already in use

### Issue: Movies not loading

**Solution:**
- Check internet connection
- Open browser console and check for API errors
- TVMaze API might be down (rare)

### Issue: Search not working

**Solution:**
- Type at least 2 characters
- Check network tab in DevTools
- Clear browser cache

## 📝 Future Enhancements

- [ ] Add movie filters (genre, year, rating)
- [ ] Implement user authentication
- [ ] Add movie recommendations
- [ ] Include trailers with YouTube API
- [ ] Add dark mode toggle
- [ ] Implement infinite scroll
- [ ] Add movie reviews and comments
- [ ] Create shareable watchlists

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Pradeep Singh Rawat**

- GitHub: [@rawatpradeep038-dot](https://github.com/rawatpradeep038-dot)
- LinkedIn: [Pradeep Singh Rawat](https://linkedin.com/in/pradeepsinghrawat038)
- Email: rawatpradeep038@gmail.com

## 🙏 Acknowledgments

- [TVMaze API](https://www.tvmaze.com/api) - Free TV show data
- [Create React App](https://create-react-app.dev/) - Project setup
- [MDN Web Docs](https://developer.mozilla.org/) - Documentation
- [React Documentation](https://react.dev/) - Learning resource

## 📞 Support

If you have any questions or need help, feel free to:

- Open an issue on [GitHub](https://github.com/rawatpradeep038-dot/moviemate/issues)
- Contact me via email at rawatpradeep038@gmail.com
- Connect on [LinkedIn](https://linkedin.com/in/pradeepsinghrawat038)

---

⭐ If you found this project helpful, please give it a star!

**Made with ❤️ using React**