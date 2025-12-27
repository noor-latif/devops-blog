# Navigation & Menu Configuration Guide

## Website Structure Overview

Your Hydejack website now has a complete navigation menu with the following structure:

### Hydejack.com Layout Reference

The official Hydejack site (https://hydejack.com/) includes:

**Main Navigation (Sidebar):**
- Blog (link to blog posts)
- Showcase (portfolio of projects)
- Résumé (resume page)
- Documentation (help/docs)
- Download (download button)

**Social Links:**
- GitHub
- X/Twitter
- Email

**Footer:**
- License
- Notice
- Changelog
- Powered by Hydejack credit

---

## Your Current Navigation

Your site now has a complete sidebar menu with these items (in order):

### 1. **Home** (order: 1)
- **File:** `index.md`
- **URL:** `/`
- **Type:** Landing page with brand intro and latest posts

### 2. **About** (order: 2)
- **File:** `about.md`
- **URL:** `/about.html` or `/about/`
- **Type:** Personal story and philosophy

### 3. **Projects** (order: 3)
- **File:** `projects.md`
- **URL:** `/projects.html` or `/projects/`
- **Type:** Portfolio of DevOps projects

### 4. **Blog** (order: 4)
- **File:** `blog.md`
- **URL:** `/blog.html` or `/blog/`
- **Type:** Blog post listing page

---

## How Hydejack Menu Works

### Adding Pages to the Sidebar Menu

To make a page appear in the sidebar menu, add these fields to the page's front matter:

```yaml
---
layout: page
title: Your Page Title
menu: true        # Shows in sidebar
order: 1          # Controls sort order (lower = higher in menu)
---
```

**Key Points:**
- `menu: true` - Required to show in sidebar
- `order` - Numeric value for sorting (doesn't need to be sequential)
- `title` - Used as the link text in the menu
- Lower `order` values appear first

### Example: Adding a New Page

```markdown
---
layout: page
title: Learning Resources
menu: true
order: 5
---

# Learning Resources

Content here...
```

This would appear in the menu after Projects.

---

## Current Menu Order

| Order | Page | File |
|-------|------|------|
| 1 | Home | index.md |
| 2 | About | about.md |
| 3 | Projects | projects.md |
| 4 | Blog | blog.md |

---

## Blog Posts

Blog posts are automatically listed on the Blog page without needing front matter changes.

**Location:** `_posts/` folder
**Format:** `YYYY-MM-DD-title.md`
**Layout:** Must use `layout: post`

All blog posts automatically appear on `/blog.html`

---

## Social Links Configuration

Social links appear in the sidebar and are configured in `_config.yml`:

```yaml
author:
  social:
    github: noor-latif
    linkedin: noor-latif
    twitter: noor_latif
```

**Supported Social Networks:**
- github
- linkedin
- twitter (X)
- instagram
- email (becomes mailto link)
- And many others

---

## Adding More Pages to Menu

Want to add new pages like:

**Resume/CV:**
```markdown
---
layout: page
title: Resume
menu: true
order: 5
---
```

**Resources:**
```markdown
---
layout: page
title: Learning Resources
menu: true
order: 6
---
```

**Contact:**
```markdown
---
layout: page
title: Contact
menu: true
order: 7
---
```

Just create the file with `menu: true` and the appropriate `order` value.

---

## Menu Visibility

The sidebar menu is visible on:
- ✅ Home page
- ✅ Blog posts
- ✅ Project pages
- ✅ All individual pages
- ✅ Mobile (swipe from left edge)

---

## Customizing Menu Appearance

### Using Front Matter Defaults

Instead of adding menu configuration to each page, set defaults in `_config.yml`:

```yaml
defaults:
  - scope:
      path: "about.md"
    values:
      menu: true
      order: 2
  - scope:
      path: "projects.md"
    values:
      menu: true
      order: 3
  - scope:
      path: "blog.md"
    values:
      menu: true
      order: 4
```

---

## Page Layouts Available

Hydejack provides several layouts:

| Layout | Use Case |
|--------|----------|
| `home` | Landing page with intro and post feed |
| `page` | Regular page content |
| `blog` | Blog listing page |
| `post` | Individual blog post |
| `project` | Project showcase (PRO version) |
| `resume` | Resume/CV (PRO version) |

---

## Testing Your Navigation

When you make menu changes:

1. **Save the file** - Changes auto-compile with Jekyll
2. **Refresh browser** - LiveReload auto-refreshes
3. **Check sidebar** - Menu should update immediately

If menu items don't appear:
- Verify `menu: true` is in front matter
- Check `order` is numeric
- Confirm `title` is present
- Restart Jekyll if changes don't appear

---

## Complete Website Sitemap

```
Your Site Structure:
├── / (Home)
│   ├── Link to latest posts
│   └── Quick intro
├── /about.html (About)
│   ├── Personal story
│   ├── DevOps philosophy
│   └── Contact info
├── /projects.html (Projects)
│   ├── 7 DevOps projects
│   ├── Technologies used
│   └── GitHub links
├── /blog.html (Blog)
│   ├── All blog posts
│   ├── Kubernetes posts
│   ├── CI/CD posts
│   └── Infrastructure posts
└── Individual posts:
    ├── /kubernetes/devops/2025/12/20/kubernetes-fundamentals-simplified.html
    ├── /devops/ci-cd/2025/12/15/ci-cd-pipeline-from-scratch.html
    ├── /infrastructure/devops/2025/12/10/infrastructure-as-code-terraform-guide.html
    └── /2025/12/27/welcome.html
```

---

## What's Next

### Add More Pages

**Resume Page:**
```markdown
---
layout: page
title: Resume
menu: true
order: 5
---

# My Resume
...
```

**Resources Page:**
```markdown
---
layout: page
title: Resources
menu: true
order: 6
---

# Learning Resources
...
```

### Customize the Sidebar

Edit `_includes/nav.html` or `_includes/sidebar.html` (if using theme overrides)

---

## Quick Reference

| Task | How To |
|------|--------|
| Add page to menu | Add `menu: true` to front matter |
| Change menu order | Adjust `order:` number |
| Add new page | Create `.md` file with `layout: page` |
| Add blog post | Create `_posts/YYYY-MM-DD-title.md` with `layout: post` |
| Update social links | Edit `_config.yml` author section |
| Hide page from menu | Remove `menu: true` or set to `false` |
| Change page title in menu | Edit `title:` in front matter |

---

## Hydejack Resources

- **Official Docs:** https://hydejack.com/docs/
- **Basics Guide:** https://hydejack.com/docs/basics/
- **Config Guide:** https://hydejack.com/docs/config/
- **GitHub:** https://github.com/hydecorp/hydejack

---

**Your navigation is now complete with a fully functional sidebar menu.**
