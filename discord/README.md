# Discord Word of the Day Automation

Automated Discord bot integration for Marx Simplified that posts a daily **Word of the Day** entry to your Discord channel via Webhook.

---

## ⚡ Option 1: GitHub Actions (100% Free & Recommended)

Since Render Cron Jobs require a paid plan, **GitHub Actions** is 100% free (includes 2,000 free execution minutes per month) and will run your daily 12:00 PM UTC schedule reliably without needing a paid server.

### Setup Steps:
1. Go to your GitHub repository: **Settings** -> **Secrets and variables** -> **Actions**.
2. Click **New repository secret**.
3. Name: `DISCORD_WEBHOOK_URL`
4. Value: Paste your Discord Webhook URL (`https://discord.com/api/webhooks/...`).
5. Commit `.github/workflows/discord-wotd.yml` to your repository.

That's it! GitHub will automatically run `node discord/send-word-of-the-day.js` every day at 12:00 PM UTC. You can also manually trigger it anytime from the **Actions** tab on GitHub!

---

## ⚙️ Option 2: Free Web Server Start Script (If running a Web Service)

If you run a Node Web Service on Render, you can launch the daemon alongside your server in your Start Command:

```bash
node discord/cron-runner.js --daemon & npm run preview
```

---

## 🧪 Local Testing Commands

```bash
# Test Word of the Day payload generation without posting to Discord
npm run discord:wotd:dry

# Test single execution posting to Webhook
npm run discord:wotd

# Test cron runner execution
npm run discord:cron
```
