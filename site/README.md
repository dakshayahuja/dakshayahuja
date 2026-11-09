# Dakshay Ahuja home

The static home page at https://dakshayahuja.in. It links to the Learning Room, Zeta Wiki, Dotfiles, and personal social profiles. Email uses hello@dakshayahuja.in, which forwards to Gmail through Cloudflare Email Routing.

## Local preview

From this directory, run:

```sh
python3 -m http.server 8787 --bind 127.0.0.1 --directory public
```

Open http://127.0.0.1:8787. No dependency installation or build is required. Project links and email work without JavaScript. Optional JavaScript provides terminal pointer lighting and route animation setup.

## Deployment

Deployed on 2026-11-09. The public root responds successfully; www redirects to it. The prior root LinkedIn Page Rule is disabled rather than deleted. The dedicated linkedin subdomain keeps its LinkedIn redirect. A Worker-specific public Access exception overrides the existing All Workers policy only for this home Worker. The three project apps retain their sign-in policies.

Deployed Worker version: `440b16e8-863e-490f-8b10-3d5791e942a6`. The public Worker alias is https://dakshay-home.dakshayahuja02.workers.dev. The local source belongs in the personal dakshayahuja/dakshayahuja repository, under the site directory. The repository's root profile content is separate.

Hosting uses Cloudflare Workers Static Assets, Worker name `dakshay-home`. Wrangler uploads only the public directory. Run these commands from this directory:

```sh
npx wrangler@4 login
npx wrangler@4 deploy --dry-run
npx wrangler@4 deploy
```

The Worker route is dakshayahuja.in/*. It uses the existing proxied root DNS record. No production credentials belong in this repository; the account identifier in the configuration is not a credential. Deployments require the owner's review; changes to source do not automatically deploy. Existing project subdomains retain their separate hosting and Cloudflare Access policies.

## Design and behavior

The charcoal infrastructure theme uses a technical grid, sparse circuit paths, and a cloud diagram connecting three destinations. Space Grotesk supplies headings, Instrument Sans supplies reading text, and JetBrains Mono supplies terminal text. Their license files are included. The SVG diagrams and favicon are original code assets.

Terminal entries and cards open the same three project URLs in new tabs with noopener and noreferrer. Hovering either an entry or its card uses the same orange highlight. Terminal links have no underline or background strip. Keyboard focus remains visible. Cursor-following light stays inside the terminal. Decorative route movement, cursor blink, and the typing entrance stop under reduced motion.

Email opens the visitor's mail application. Cloudflare forwards incoming mail for hello@dakshayahuja.in to the owner's verified Gmail address. Replies sent normally in Gmail still use the Gmail sender address. No outgoing domain-email service or message form is configured.

Visual references: [21st Terminal](https://21st.dev/@dillionverma/components/terminal) and the [Magic UI collection](https://mcp.21st.dev/@dillionverma/library/magic-ui). The implementation uses original static HTML/CSS rather than copied component source. No analytics, database, fabricated uptime, live cluster metrics, or terminal command execution is included.

## Validation and credit

Codex helped design, implement, and validate this page. Browser checks cover 1440px desktop, 768px tablet, 390px phone, 320px phone, keyboard focus, links, and reduced motion. The inspected versions have no horizontal overflow or missing resources. Readable body, card-description, and terminal-comment contrast exceeds 4.5:1. JavaScript syntax and the Workers upload dry run pass.

The prior v1 design, critique notes, and local review screenshots remain outside this repository. No source from the owner's earlier profile README is replaced.
