# Discord Word of the Day Automation

Automated Discord bot integration for Marx Simplified that posts a daily **Word of the Day** entry to your Discord channel via Webhook.

---

## 🚀 Render Deployment Options

### Option A: Render Cron Job (Recommended)

1. In your **Render Dashboard**, click **New +** -> **Cron Job**.
2. Connect your `MarxSimplified` repository.
3. Configure the settings:
   - **Name**: `marx-simplified-discord-wotd`
   - **Environment**: `Node`
   - **Schedule**: `0 12 * * *` *(Runs once daily at 12:00 PM UTC)*
   - **Command**: `node discord/send-word-of-the-day.js` (or `node discord/cron-runner.js`)
4. Under **Environment Variables**, add:
   - `DISCORD_WEBHOOK_URL`: `https://discord.com/api/webhooks/your-webhook-id/your-webhook-token`
   - `SITE_URL`: `https://marxsimplified.onrender.com` (optional)
   - `ALLOWED_CATEGORIES`: `Marxism-Leninism,Maoism,Marxist Feminism` (optional)

---

### Option B: Render Background Worker Daemon

If running as a standing background worker process:
1. Set **Command**: `node discord/cron-runner.js --daemon`
2. The process stays active and automatically triggers `send-word-of-the-day.js` daily at 12:00 PM UTC.

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
