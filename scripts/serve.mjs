import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve(process.argv[2] || '.');
const port = Number(process.env.PORT || 4173);
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css', '.svg':'image/svg+xml', '.jpg':'image/jpeg', '.png':'image/png', '.woff2':'font/woff2', '.ttf':'font/ttf', '.txt':'text/plain' };
http.createServer(async (req,res) => {
 try {
  const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  let file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root + path.sep) && file !== root) {res.writeHead(403).end();return;}
  if ((await stat(file).catch(()=>null))?.isDirectory()) file = path.join(file,'index.html');
  // Source mode maps public assets to their production paths.
  if (!process.argv[2] && /^(\/images\/|\/fonts\/)/.test(pathname)) file = path.join(root,'public',pathname);
  const bytes = await readFile(file);
  res.writeHead(200,{'Content-Type':mime[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'}).end(bytes);
 } catch {res.writeHead(404,{'Content-Type':'text/plain'}).end('Not found');}
}).listen(port,'127.0.0.1',()=>console.log(`GiftHorse review: http://127.0.0.1:${port}`));
