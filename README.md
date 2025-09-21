# MyPortfolio

**Purpose:** Personal portfolio showcasing projects in AI, embedded systems, and web development.

---

## 🔗 Live
[Live Demo](https://final-project-kappa-jet-29.vercel.app/)

---

## 📂 Structure
```
/css/styles.css
/js/main.js
/assets/images/*
index.html
about.html
services.html
contact.html
```

---

## ✨ Features
- Mobile responsive layout (Flexbox + CSS Grid)
- Accessible navigation with ARIA attributes
- Client-side form validation
- Downloadable resume

---

## 💻 How to run locally
1. Clone the repository:
   ```bash
   git clone https://github.com/ABDURRAHMANKABEER/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl.git
   cd <repo-name>
   ```
2. Open `index.html` in your browser  
   OR use a live server (e.g., VS Code Live Server extension).

---

# 🚀 Deployment

### A) GitHub Pages (static)
1. Initialize and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial site commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub:
   - Go to **Settings → Pages**
   - Source: `Deploy from a branch`
   - Branch: `main`, folder: `/ (root)`
3. Save → GitHub gives you a live URL:  
   `https://<your-username>.github.io/<repo-name>/`

---

### B) Netlify (recommended for forms + CI/CD)
1. Create a Netlify account.  
2. Either:
   - Drag & drop your folder to **Netlify Drop**, OR  
   - Connect your GitHub repo (continuous deployment).  
3. Netlify builds & publishes → gives you a live URL (can be customized).  
4. For **Netlify Forms**: add `name="contact"` and a hidden input in your form.

---

### C) Vercel
1. Sign in with GitHub and import repo.  
2. Vercel auto-detects static site → deploys.  
3. You’ll get a live URL (can add custom domain in dashboard).  

---

# ✅ Validation & Testing Checklist
- [ ] All pages load and link correctly (no 404s)  
- [ ] Mobile responsive on small, medium, large screens  
- [ ] Header and footer consistent across pages  
- [ ] At least one interactive element per page:
  - nav toggle (mobile) ✅  
  - contact form validation ✅  
- [ ] Code organized in `/css`, `/js`, `/assets`  
- [ ] HTML passes accessibility checks (alt text, ARIA attributes)  
- [ ] README includes purpose, structure, and live URL  
- [ ] Live deployed site URL included in README  
