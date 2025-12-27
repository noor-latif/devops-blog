# Getting Started with Your DevOps Blog

## Quick Start

Your website is live at **http://127.0.0.1:4000/** while running locally.

### View the Site
1. Open browser: `http://127.0.0.1:4000/`
2. Navigate to:
   - Home: `/` (main landing page)
   - About: `/about/` (your story)
   - Projects: `/projects/` (your work)
   - Posts: `/2025/12/27/welcome.html` (blog articles)

### Keep Jekyll Running
```bash
# The dev server is already running in background
# It watches for changes and auto-refreshes in browser

# If it stops, restart it:
bundle exec jekyll serve --livereload
```

### Watch for Changes
Changes to `.md` files are auto-compiled. Just save, and the site updates in your browser.

---

## File Structure

```
devops-blog/
├── index.md                          # Home page
├── about.md                          # About page
├── projects.md                       # Projects page
├── _posts/
│   ├── 2025-12-27-welcome.md        # Blog posts go here
│   ├── 2025-12-20-kubernetes-...md
│   ├── 2025-12-15-ci-cd-...md
│   └── 2025-12-10-terraform-...md
├── _config.yml                       # Site configuration
├── _sass/                            # Custom SCSS (theme colors)
├── assets/                           # Images, CSS, JS
└── Gemfile                           # Ruby dependencies
```

---

## Customization Guide

### 1. Change Site Title
Edit `_config.yml`:
```yaml
title: Noor Latif | DevOps Engineer
tagline: Learning DevOps in Public
description: Your description here
```

### 2. Update Social Links
Edit `_config.yml`:
```yaml
author:
  social:
    github: your-username
    linkedin: your-profile
    twitter: your-handle
```

### 3. Change Colors
Edit `_config.yml`:
```yaml
accent_color: '#58a6ff'      # Links and highlights
theme_color: '#0d1117'       # Dark background
```

### 4. Add a New Blog Post
Create file: `_posts/2025-12-27-your-title.md`

```markdown
---
layout: post
title: Your Post Title
date: 2025-12-27
categories: [devops, kubernetes]
tags: [relevant, tags]
---

# Your Content Here

Your markdown content here. Use code blocks, headers, lists—it all works.
```

### 5. Update Home Page
Edit `index.md` to change the landing page content.

### 6. Update About Page
Edit `about.md` to change your personal story and details.

### 7. Update Projects Page
Edit `projects.md` to add/remove projects or change descriptions.

---

## Publishing to Production

### Option A: GitHub Pages (Recommended)
```bash
# Push your repo to GitHub
git push origin main

# GitHub Actions automatically builds and deploys
# Site will be at: https://your-username.github.io/
```

### Option B: Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `bundle exec jekyll build`
3. Set publish directory: `_site`
4. Netlify auto-deploys on every push

### Option C: Any Static Host
```bash
# Build the static site
bundle exec jekyll build

# Upload `_site/` folder to any web host
# Works with: AWS S3, Vercel, Surge, etc.
```

---

## Blog Strategy

### Content Pillars
Based on your brand, focus on:

1. **Kubernetes Deep Dives** - Advanced patterns, troubleshooting
2. **CI/CD Practices** - Real-world pipelines, automation
3. **Infrastructure as Code** - Terraform, best practices
4. **Production Lessons** - Incident reports, what broke and why
5. **Beginner-Friendly Explainers** - Concepts simplified

### Publishing Rhythm
- 1 post per week or bi-weekly works well
- Consistency > frequency
- Quality > quantity

### Post Template
```markdown
---
layout: post
title: Your Title Here
date: 2025-12-27
categories: [devops, kubernetes]  # Pick relevant categories
tags: [tag1, tag2, tag3]
---

# Main Heading

Brief intro paragraph explaining what readers will learn.

## Section 1: The Problem
Explain the context and challenge.

## Section 2: The Solution
Show how to solve it with examples.

## Section 3: Key Takeaways
Summarize the learning and next steps.

---

*Call-to-action or reflection to end.*
```

---

## Analytics & SEO

### Add Google Analytics
Edit `_config.yml`:
```yaml
google_analytics: "UA-XXXXXXXXX-X"  # Your Google Analytics ID
```

### Improve SEO
- Use descriptive titles (✓ "Kubernetes Secrets Management Best Practices")
- Write meta descriptions in posts
- Use relevant categories and tags
- Link between related posts
- Include code examples (shows up in search)

### Share Your Posts
- Twitter: Share with #devops #kubernetes hashtags
- Reddit: r/devops, r/kubernetes, r/sysadmin
- Hacker News: Share interesting projects/learnings
- Dev.to: Cross-post your blog posts
- LinkedIn: Share insights and summaries

---

## Maintenance

### Update Dependencies
```bash
# Update gems (once per month)
bundle update

# Check for outdated packages
bundle outdated
```

### Check for Broken Links
```bash
# Install broken link checker (optional)
npm install -g broken-link-checker

# Run check
blc http://127.0.0.1:4000 -r
```

### Backup Your Work
```bash
# Push regularly to GitHub
git add .
git commit -m "Update posts and content"
git push origin main
```

---

## Troubleshooting

### Site won't build
```bash
# Check for YAML syntax errors
bundle exec jekyll build --verbose

# Common issue: Bad date format in post front matter
# Should be: 2025-12-27 (not 12/27/2025)
```

### Changes not showing up
```bash
# Stop Jekyll (Ctrl+C)
# Rebuild from scratch
rm -rf _site
bundle exec jekyll serve --livereload
```

### Livereload not working
```bash
# Port 35729 might be in use
# Kill the process:
lsof -ti:35729 | xargs kill -9

# Restart Jekyll
bundle exec jekyll serve --livereload
```

---

## Next Steps

1. **Customize Your Site** - Update colors, social links, about section
2. **Create Your Content** - Add your own projects and blog posts
3. **Set Up GitHub** - Push to GitHub and enable GitHub Pages
4. **Buy a Domain** - Point your custom domain to the site
5. **Share Your Work** - Tweet, post, and build your audience
6. **Keep Publishing** - Consistency builds credibility

---

## Resources

- **Jekyll Docs:** https://jekyllrb.com/docs/
- **Hydejack Theme:** https://hydejack.com/docs/
- **Markdown Guide:** https://www.markdownguide.org/
- **Git & GitHub:** https://git-scm.com/book

---

## Support

Have questions? Check:
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Hydejack Theme Docs](https://hydejack.com/docs/)
- [Your GitHub Issues](https://github.com)

---

**Your DevOps blog is ready. Now go write something great.**
