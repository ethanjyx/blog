# Blog

A Next.js blog deployed on Cloudflare Pages.

## Development

```bash
npm run dev
```

## Deployment

### Prerequisites

1. Install Wrangler CLI globally:
   ```bash
   npm install -g wrangler
   ```

2. Set up environment variables in `~/.zshrc`:
   ```bash
   export CLOUDFLARE_API_TOKEN="your_token_here"
   export CLOUDFLARE_ACCOUNT_ID="your_account_id_here"
   ```

### Deploy

1. **First time setup** (create Cloudflare Pages project):
   ```bash
   npm run deploy:create
   ```

2. **Deploy to Cloudflare Pages**:
   ```bash
   npm run deploy
   ```

### Live Site

- Production: https://blog-ea9.pages.dev
- Latest deployment: https://2ea11dfa.blog-ea9.pages.dev

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run deploy` - Build and deploy to Cloudflare Pages
- `npm run deploy:create` - Create new Cloudflare Pages project (one-time setup)