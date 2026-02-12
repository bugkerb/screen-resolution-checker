# Screen Resolution Checker

## 🖥️ Check Your Display Size Instantly

One-Page Website that shows your screen resolution, display size, and viewport dimensions with live updates.

## ✨ Features

- ✅ **Real-time Updates** - Automatically detects screen resize and orientation changes
- ✅ **Multiple Metrics** - Shows screen resolution, available space, viewport, and pixel ratio
- ✅ **Device Info** - Displays color depth, orientation, and touch support
- ✅ **Fast Loading** - Loads in under 2 seconds
- ✅ **Mobile-Friendly** - Responsive design for all devices
- ✅ **No Registration** - Instant use, no signup required

## 📊 Metrics Displayed

| Metric | Description |
|--------|-------------|
| Screen Resolution | Total display pixels |
| Available Screen | Minus taskbar/system bar |
| Viewport Size | Browser window area |
| Device Pixel Ratio | High-DPI scaling factor |
| Color Depth | Bits per color channel |
| Orientation | Portrait or Landscape |
| Touch Support | Touch screen capability |

## 🚀 Tech Stack

- **Frontend:** HTML5 + CSS3 + Vanilla JavaScript
- **Hosting:** Vercel (Free)
- **Deployment:** Git push → Vercel auto-deploy

## 📦 Project Structure

```
screen-resolution-checker/
├── index.html      # Main HTML structure
├── app.js          # JavaScript logic
├── vercel.json     # Vercel configuration
├── package.json    # Project metadata
└── README.md       # This file
```

## 🛠️ Local Development

1. Clone repository
```bash
git clone <repo-url>
cd screen-resolution-checker
```

2. Run local server
```bash
python3 -m http.server 8000
# or
npm run dev
```

3. Open browser
```
http://localhost:8000
```

## 🌐 Deployment (Vercel)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Screen Resolution Checker MVP"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and login
2. Click "Add New Project"
3. Select your GitHub repository
4. Vercel will detect it as a static site automatically
5. Click "Deploy"

Done! Your website is live on Vercel Free Plan.

## 🔍 SEO Strategy

- **Keywords:** screen resolution checker, display size, viewport dimensions, screen width, screen height
- **Meta Tags:** Optimized for search intent
- **Performance:** < 2s load time, mobile-friendly

## 💰 Monetization Plan (Phase 2+)

- Google AdSense (placeholder ready)
- Affiliate links to monitor/TV retailers

## 📝 License

MIT

---

**Status:** Phase 1 - Complete ✅
