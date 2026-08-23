import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const wotdScript = path.resolve(__dirname, 'send-word-of-the-day.js');

const TARGET_HOUR_UTC = 12; // 12:00 PM UTC

function runWordOfTheDay() {
  console.log(`[${new Date().toISOString()}] Triggering Discord Word of the Day job...`);
  
  const child = spawn('node', [wotdScript], {
    stdio: 'inherit',
    env: process.env,
  });

  child.on('close', (code) => {
    if (code === 0) {
      console.log(`[${new Date().toISOString()}] Word of the Day job completed successfully.`);
    } else {
      console.error(`[${new Date().toISOString()}] Word of the Day job exited with code ${code}.`);
    }
  });
}

function getMsUntilNextTargetTime(targetHourUtc = 12) {
  const now = new Date();
  const next = new Date(now);
  
  next.setUTCHours(targetHourUtc, 0, 0, 0);

  if (now.getTime() >= next.getTime()) {
    next.setUTCDate(next.getUTCDate() + 1);
  }

  return next.getTime() - now.getTime();
}

function startDaemon() {
  console.log('=== Marx Simplified Discord Word of the Day Daemon ===');
  console.log(`Target Schedule: Daily at ${TARGET_HOUR_UTC}:00 UTC (12:00 PM UTC)`);
  
  const msUntilNext = getMsUntilNextTargetTime(TARGET_HOUR_UTC);
  const nextDate = new Date(Date.now() + msUntilNext);

  console.log(`Next execution scheduled in ${(msUntilNext / 1000 / 60).toFixed(1)} minutes (at ${nextDate.toISOString()})`);

  setTimeout(() => {
    runWordOfTheDay();
    // Repeat every 24 hours (86,400,000 ms)
    setInterval(runWordOfTheDay, 24 * 60 * 60 * 1000);
  }, msUntilNext);
}

// Parse args: if --daemon, run background timer; otherwise run once immediately (for Render Cron Job)
const args = process.argv.slice(2);
if (args.includes('--daemon')) {
  startDaemon();
} else {
  runWordOfTheDay();
}
