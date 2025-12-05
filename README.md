# Apps Linktree Landing Page

A beautiful, responsive Linktree-style landing page for HomeLinkGH and Beacon of New Beginnings mobile apps.

## Features

- Modern, gradient design
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Auto-updating last modified date
- Clean, organized layout
- Social media and store links
- WhatsApp integration

## Setup Instructions

### 1. Add App Logos

Copy your app logos to this directory:
- `homelink-logo.png` - HomeLinkGH app icon (recommended: 1024x1024px)
- `beacon-logo.png` - Beacon app icon (recommended: 1024x1024px)
- `profile.png` - Profile/header image (recommended: 400x400px)

You can copy them from the Downloads folder:
```bash
cp /Users/enamegyir/Downloads/homelink_icon_1024.png homelink-logo.png
cp /Users/enamegyir/Downloads/beacon_icon_1024.png beacon-logo.png
```

### 2. Update Links

Edit `index.html` and update these placeholders:

**HomeLinkGH:**
- Instagram: Replace `https://instagram.com/homelinkgh` with actual URL
- LinkedIn: Replace `https://linkedin.com/company/homelinkgh` with actual URL
- WhatsApp: Replace `233XXXXXXXXX` with actual phone number

**Beacon:**
- Instagram: Replace `https://instagram.com/beaconnewbeginnings` with actual URL
- LinkedIn: Replace `https://linkedin.com/company/beacon-of-new-beginnings` with actual URL
- WhatsApp: Replace `233XXXXXXXXX` with actual phone number

### 3. Deploy to Netlify

1. **Initialize Git (if not already done):**
   ```bash
   cd /Users/enamegyir/Documents/Projects/apps-linktree
   git init
   git add .
   git commit -m "Initial commit: Apps Linktree landing page"
   ```

2. **Create GitHub Repository:**
   ```bash
   gh repo create apps-linktree --public --source=. --remote=origin --push
   ```

3. **Deploy to Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" > "Import an existing project"
   - Connect to GitHub and select `apps-linktree` repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `.`
   - Click "Deploy site"

4. **Custom Domain (Optional):**
   - In Netlify dashboard, go to Site settings > Domain management
   - Add custom domain like `apps.yourdomain.com`

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - JavaScript functionality
- `README.md` - This file

## Customization

### Change Colors
Edit `styles.css` and modify:
- Background gradient: Lines 8-9
- Link hover colors: Lines 127-131
- WhatsApp button colors: Lines 147-154

### Add More Apps
Copy the `.app-section` block in `index.html` and update the content.

### Analytics
Add your analytics code in `script.js` line 36.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Updating from Canva

While this page cannot automatically sync with Canva, you can:

1. **Export from Canva:**
   - Export your design as PNG
   - Update the `profile.png` image

2. **Manual Updates:**
   - Edit colors in `styles.css` to match Canva design
   - Update text content in `index.html`

3. **Push Changes:**
   ```bash
   git add .
   git commit -m "Update design from Canva"
   git push
   ```
   Netlify will auto-deploy your changes.

## License

© 2025 All rights reserved.
