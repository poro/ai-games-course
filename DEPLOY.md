# Deployment Guide for AI & Games Research Website

## Vercel Deployment (Recommended)

1. Go to https://vercel.com
2. Click "Import Project"
3. Import from GitHub: `https://github.com/poro/ai-games-course`
4. Configure with these settings:
   - Framework Preset: **Vite**
   - Build Command: **npm run build**
   - Output Directory: **dist**
   - Install Command: (leave default, it will use .npmrc)

## Manual Deployment Options

### Option 1: Netlify Drop
1. Go to https://app.netlify.com/drop
2. Drag and drop the entire `dist` folder
3. Your site will be live immediately

### Option 2: GitHub Pages
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Add this workflow file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install --legacy-peer-deps
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Troubleshooting

### Dependency Issues
The project uses `legacy-peer-deps` due to a conflict between:
- date-fns@4.1.0
- react-day-picker@8.10.1

This is handled automatically by the `.npmrc` file.

### Build Output
After successful build, you should see:
- dist/index.html
- dist/assets/index-[hash].css
- dist/assets/index-[hash].js
- dist/favicon.ico

## Local Testing (if localhost works)
```bash
npm install --legacy-peer-deps
npm run build
npm run preview
```

## Repository
https://github.com/poro/ai-games-course