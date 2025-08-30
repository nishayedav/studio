## Deployment: GitHub Actions -> Vercel

This repo is a Next.js app. The repository includes a GitHub Actions workflow that builds the project and deploys to Vercel.

Files added:

- `.github/workflows/vercel-deploy.yml` - builds and deploys to Vercel on push to `main`.
- `vercel.json` - minimal Vercel configuration (replace placeholders if needed).

Checklist before using CI:

1. Install Vercel CLI locally (optional): `npm i -g vercel`.
2. Create a Vercel project and link it to your GitHub repository via the Vercel dashboard.

Required secrets (GitHub):

- `VERCEL_TOKEN` — a personal token from Vercel used by the CLI to deploy.

How to create and add `VERCEL_TOKEN`:

1. On Vercel: Go to Settings -> Tokens (https://vercel.com/account/tokens) -> Create Token. Copy the token.
2. In GitHub: Go to the repository -> Settings -> Secrets -> Actions -> New repository secret.
   - Name: `VERCEL_TOKEN`
   - Value: (paste the token from Vercel)

Optional environment variables (common for Next.js apps):

- `NEXT_PUBLIC_API_URL` - public runtime URL for any API used by the frontend.
- `DATABASE_URL` - server-only database connection string (do not expose to client).

Add them in both places depending on needs:

- For GitHub Actions: add as repository secrets and reference in the workflow as `secrets.NAME`.
- For Vercel: add in the Project Settings -> Environment Variables so previews/production have correct values.

Using the workflow:

- The workflow runs on push to `main`. It installs dependencies, runs `npm run build`, then calls `npx vercel --prod --confirm` using `VERCEL_TOKEN` from GitHub Secrets.

Troubleshooting:

- If build fails on Actions but works locally, check Node version and environment variables.
- To debug, add a step before deploy: `npx vercel --prod --confirm --debug --token "$VERCEL_TOKEN"`.

Security notes:

- Never commit secrets to the repo.
- Use GitHub repository secrets or organization secrets for CI.
- Use Vercel's environment settings for runtime variables that shouldn't be exposed client-side.

That's it — push to `main` and the workflow will deploy to Vercel.
