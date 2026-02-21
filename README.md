# Triple O - Local Delivery Company Website

A modern, responsive static website built with React and Vite for a local town delivery company.

## 🚀 Features

- **Modern Design**: Clean, professional, and trustworthy appearance
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **React Router**: Smooth navigation between pages
- **Component-Based**: Well-structured, reusable components
- **Production-Ready**: Optimized and ready for deployment

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation bar with responsive menu
│   ├── Footer.jsx      # Site footer with links and info
│   └── PartnerCard.jsx # Reusable partner business card
├── pages/
│   ├── Home.jsx        # Landing page with hero, services, features
│   ├── About.jsx       # Company mission, story, vision, team
│   └── Partners.jsx    # List of partner businesses
├── assets/             # Static assets (images, etc.)
├── App.jsx             # Main app component with routing
├── main.jsx            # Application entry point
└── styles.css          # Global styles and responsive design
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **CSS** - Custom styling with CSS variables

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

## 🏃 Running the Project

### Development Mode

Start the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🚀 Deploy to Netlify

The project is configured for Netlify deployment:

1. **Connect to Netlify**:
   - Push code to GitHub/GitLab/Bitbucket
   - Connect repository to Netlify
   - Netlify will auto-detect settings from `netlify.toml`

2. **Or use Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

3. **Configuration**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - All settings in `netlify.toml`

See `NETLIFY-DEPLOY.md` for detailed deployment instructions.

## 📄 Pages

- **Home** (`/`) - Hero section, services overview, and why choose us
- **About** (`/about`) - Company mission, story, vision, and team members
- **Partners** (`/partners`) - List of partner businesses with cards

## 🎨 Design Features

- Professional color palette (blue primary, orange accent)
- Smooth hover effects and transitions
- Soft shadows and modern spacing
- Mobile-first responsive design
- Sticky navigation header
- Hamburger menu for mobile devices

## 📝 Notes

- All content is static (no backend required)
- Partner data is hardcoded in `Partners.jsx` (can be moved to a data file)
- Images use placeholder divs (replace with actual images in production)
- Email and contact info are placeholders

## 🔧 Customization

To customize the website:

1. **Company Name**: Update "Triple O" in Header, Footer, and page titles
2. **Colors**: Modify CSS variables in `styles.css` (`:root` section)
3. **Content**: Edit the respective page components in `src/pages/`
4. **Partners**: Update the `partners` array in `src/pages/Partners.jsx`

## 📄 License

© 2026 Triple O. Website developed by Astronil.

