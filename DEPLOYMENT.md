# Deployment Guide

This blog is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Initial Setup (One-Time Configuration)

To enable GitHub Pages deployment, follow these steps:

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: `https://github.com/noor-latif/devops-blog`
2. Click on **Settings** (in the repository menu)
3. In the left sidebar, click on **Pages** (under "Code and automation")
4. Under **Source**, select **GitHub Actions** from the dropdown menu
5. Save the settings

### 2. Merge the PR

Once the PR containing the GitHub Actions workflow is merged to the `main` branch:
- The workflow will automatically trigger
- It will build your Jekyll site
- It will deploy it to GitHub Pages

### 3. Access Your Published Blog

After the deployment completes (usually takes 2-3 minutes), your blog will be available at:

**https://noor-latif.github.io/devops-blog/** (or your custom domain if configured)

### Custom Domain Configuration

This repository includes a `CNAME` file configured for `latif.se`. To use this custom domain:

1. **Configure DNS**: Set up your domain's DNS records:
   - For apex domain (`latif.se`), add A records pointing to GitHub's IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - For www subdomain, add a CNAME record pointing to `noor-latif.github.io`

2. **Enable in GitHub**: Go to **Settings** > **Pages**:
   - The custom domain should be automatically detected from the CNAME file
   - Check "Enforce HTTPS" after DNS propagates (may take 24-48 hours)

3. **If not using custom domain**: Delete the `CNAME` file and your site will be available at `https://noor-latif.github.io/devops-blog/`

## Automatic Deployments

Once set up, the blog will automatically redeploy whenever you:
- Push changes to the `main` branch
- Merge a pull request into `main`

You can also trigger a manual deployment:
1. Go to **Actions** tab in your repository
2. Select the **Deploy Jekyll site to Pages** workflow
3. Click **Run workflow**
4. Choose the `main` branch and click **Run workflow**

## Monitoring Deployments

To check the status of deployments:
1. Go to the **Actions** tab in your repository
2. You'll see a list of workflow runs
3. Click on any run to see detailed logs
4. Green checkmark = successful deployment
5. Red X = failed deployment (check logs for errors)

## Local Development

To preview your blog locally before pushing:

```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Open in browser
open http://localhost:4000
```

## Troubleshooting

### Workflow not running?
- Ensure GitHub Actions is enabled in your repository settings
- Check that the workflow file is in the correct location: `.github/workflows/jekyll-gh-pages.yml`

### Deployment failing?
- Check the Actions logs for specific error messages
- Ensure all dependencies in `Gemfile` are valid
- Verify that the repository has Pages permissions enabled

### 404 Error when accessing the site?
- Wait a few minutes after the first deployment
- Verify Pages is enabled in repository settings
- Check that the workflow completed successfully

## Configuration

The blog is configured in `_config.yml`:
- Current URL: `https://latif.se`
- Baseurl: (empty, root of the domain)

If deploying to `username.github.io/repository-name`, you may need to update:
```yaml
url: https://noor-latif.github.io
baseurl: /devops-blog
```

However, the GitHub Actions workflow automatically handles the baseurl configuration during deployment, so you don't need to modify `_config.yml` unless you want to test locally with the subdirectory path.
