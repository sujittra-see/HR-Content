# Sujittra Seelabat Portfolio

Astro portfolio site using Tailwind CSS v4 and Astro image optimization.

## Production URL

Set `SITE_URL` to the final deployed domain before running a production build. Astro uses this value for canonical URLs, `og:url`, and the absolute `og:image`.

```bash
SITE_URL="https://your-production-domain.com" npm run build
```

## GitHub Pages

This project includes `.github/workflows/deploy.yml` for GitHub Pages using Astro's official GitHub Action.

1. Push the repository to GitHub.
2. In GitHub, go to `Settings` -> `Pages`.
3. Set `Build and deployment` -> `Source` to `GitHub Actions`.
4. Push to the `main` branch, or run the `Deploy to GitHub Pages` workflow manually.

The workflow automatically sets:

- `SITE_URL=https://<owner>.github.io` for a `<owner>.github.io` repository.
- `SITE_URL=https://<owner>.github.io/<repo>` and `BASE_PATH=/<repo>` for a project page repository.
