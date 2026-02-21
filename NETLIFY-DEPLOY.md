# Netlify Deployment Guide

This guide explains how to deploy the Okotoks Order Out (Triple O) website to Netlify.

## 🚀 Quick Deploy

### Option 1: Deploy via Netlify UI

1. **Push to GitHub/GitLab/Bitbucket**
   - Make sure your code is in a Git repository
   - Push to your remote repository

2. **Connect to Netlify**
   - Go to [Netlify](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider
   - Select your repository

3. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Netlify will auto-detect these from `netlify.toml`

4. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy automatically

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize Site**
   ```bash
   netlify init
   ```
   - Follow the prompts
   - Select "Create & configure a new site"

4. **Build and Deploy**
   ```bash
   npm run build
   netlify deploy --prod
   ```

### Option 3: Drag & Drop

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to Netlify dashboard
   - Drag and drop the `dist` folder
   - Site will be live instantly

## ⚙️ Configuration

The project includes `netlify.toml` with:
- ✅ Build settings (command and publish directory)
- ✅ SPA routing redirects (all routes → index.html)
- ✅ Security headers
- ✅ Cache optimization
- ✅ Service worker configuration

## 🔧 Build Settings

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18+ (auto-detected)

## 📋 Pre-Deployment Checklist

- [ ] All images are in `src/assets/images/`
- [ ] Partner websites are updated in `partnersData.js`
- [ ] Contact information is correct in Footer
- [ ] PWA icons are added (192x192 and 512x512)
- [ ] Test build locally: `npm run build`
- [ ] Test preview: `npm run preview`
- [ ] Verify all routes work
- [ ] Check service worker registration
- [ ] Test offline functionality

## 🌐 Custom Domain Setup

1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL certificate is automatic (Let's Encrypt)

## 🔄 Continuous Deployment

Once connected to Git:
- Every push to main/master branch = automatic deploy
- Pull requests = deploy previews
- Branch deploys = preview deployments

## 📊 Environment Variables (Optional)

If you need environment variables:

1. Go to Site settings → Environment variables
2. Add variables (e.g., API keys)
3. Access in code: `import.meta.env.VITE_YOUR_VAR`

## 🐛 Troubleshooting

### Build Fails
- Check Node version (should be 18+)
- Verify all dependencies are in `package.json`
- Check build logs in Netlify dashboard

### Routes Not Working
- Verify `netlify.toml` redirects are correct
- Check `_redirects` file in `public/` folder
- Ensure React Router is configured correctly

### PWA Not Working
- Verify HTTPS is enabled (automatic on Netlify)
- Check service worker registration
- Ensure manifest.webmanifest is accessible

### Images Not Loading
- Verify images are in `src/assets/images/`
- Check image imports in `images.js`
- Ensure build includes all assets

## 📝 Post-Deployment

1. **Test the live site**
   - Check all pages
   - Test navigation
   - Verify PWA install prompt
   - Test offline mode

2. **Update SEO**
   - Update canonical URLs in SEO component
   - Verify Open Graph tags
   - Check structured data

3. **Monitor**
   - Check Netlify analytics
   - Monitor build times
   - Review error logs

## 🎯 Quick Commands

```bash
# Build locally
npm run build

# Preview build
npm run preview

# Deploy to Netlify (if using CLI)
netlify deploy --prod

# View site logs
netlify logs
```

---

**Note**: The `netlify.toml` file is already configured. Just connect your repo and deploy!

