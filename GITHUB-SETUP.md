# GitHub Setup Instructions

Follow these steps to push your code to GitHub and deploy to Netlify.

## 📦 Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `okotoks-order-out` (or any name you prefer)
4. Description: "Okotoks Order Out (Triple O) - Local delivery service website"
5. Set to **Public** (or Private if you prefer)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

## 🔗 Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/okotoks-order-out.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## 🚀 Step 3: Deploy to Netlify

1. Go to [Netlify](https://www.netlify.com/)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"GitHub"** (or your Git provider)
4. Authorize Netlify to access your repositories
5. Select your repository: `okotoks-order-out`
6. Netlify will auto-detect settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click **"Deploy site"**
8. Wait for build to complete (usually 1-2 minutes)
9. Your site will be live at `https://your-site-name.netlify.app`

## ✅ Verification

After deployment, verify:
- ✅ All pages load correctly
- ✅ Navigation works (Home, About, Partners)
- ✅ Images display properly
- ✅ PWA install prompt appears
- ✅ Service worker registers
- ✅ Offline mode works

## 🔄 Future Updates

After making changes:
```bash
git add .
git commit -m "Your commit message"
git push
```

Netlify will automatically rebuild and deploy!

## 📝 Notes

- The repository is already initialized locally
- All files are committed and ready to push
- `netlify.toml` is configured for automatic deployment
- PWA configuration is ready for production

