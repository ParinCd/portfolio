# Parin Bhardwaj Portfolio

A dark, circuit-inspired portfolio built with Next.js.

## Run it locally (in Antigravity)

1. Install Node.js (LTS version) from https://nodejs.org if you don't have it.
2. In Antigravity, open this `portfolio` folder (File > Open Folder).
3. Open the built-in terminal (Terminal > New Terminal).
4. Run:
   ```
   npm install
   npm run dev
   ```
5. Open http://localhost:3000 in your browser.

## Turn on the contact form

1. Create a free account at https://resend.com and create an API key.
2. Copy `.env.example` to a new file named `.env.local`.
3. Paste your key after `RESEND_API_KEY=`.
4. Stop the server (Ctrl+C) and run `npm run dev` again.

Note: while you use Resend's test sender (onboarding@resend.dev), it only delivers to the email address you signed up with. To receive messages at any address, verify your own domain in Resend later.

## Placeholders to fill in

Search the code for these markers and replace them:
- `[add CGPA]`
- `[add certifications, hackathons, and awards]`
- `[add link]` (LinkedIn, Instagram)
- "Profile photo coming soon" and "Photo or video coming soon" boxes (swap in an `<img>` when ready)

## Deploy

Push the folder to a GitHub repo, then import it at https://vercel.com. Add `RESEND_API_KEY` and `CONTACT_EMAIL` under Project Settings > Environment Variables.
