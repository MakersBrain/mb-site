# MakersBrain public site

The public homepage, Privacy Policy, and Terms of Service for
`makersbrain.app`. It is a prerendered SvelteKit site with client-side rendering
disabled, deployed through Cloudflare Pages.

## Develop and verify

The private `@makersbrain/ui` package is installed from GitHub Packages. Set a
token with `read:packages` before installing:

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
- Required secret: `GITHUB_TOKEN` with read-only package access
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
