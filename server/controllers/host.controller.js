import os from 'os';

export function getHost(req, res) {
  res.json({ hostname: os.hostname() });
}
