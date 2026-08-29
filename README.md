# MakersBrain public site

The public homepage, Privacy Policy, and Terms of Service for
`makersbrain.app`. It is a prerendered SvelteKit site with client-side rendering
disabled, deployed through Cloudflare Pages.

## Develop and verify

The public `@makersbrain/ui` package is installed from GitHub Packages. GitHub's
npm registry still requires authentication for downloads, so set a token with
`read:packages` before installing locally:

```sh
export GITHUB_TOKEN=...
npm ci
npm run dev
npm test
```

`npm test` checks Svelte and TypeScript, produces the static build, verifies all
three canonical pages and their internal links, and refuses any JavaScript in
the output.

## Cloudflare Pages

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `build`
- Package authentication: the workflow's short-lived `GITHUB_TOKEN`
- Custom domain: `makersbrain.app`

The deployed canonical URLs are:

- `https://makersbrain.app/`
- `https://makersbrain.app/privacy/`
- `https://makersbrain.app/terms/`

Use those exact URLs in the Google OAuth consent screen. The homepage and legal
pages must remain public without authentication.

Before accepting production personal data or submitting OAuth verification,
confirm the public contact mailbox, designate the legal controller, approve the
retention schedule, and obtain legal review of the Privacy Policy and Terms.

## License

MakersBrain-authored code, content, and visual assets are licensed under
AGPL-3.0-only. Trademark rights are not granted. See [LICENSE.md](LICENSE.md).
