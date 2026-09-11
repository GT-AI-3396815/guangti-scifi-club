/* 一次性冒烟：新增交互验证（检索FAB / 艺术图接线 / 等级卡 / 对比表） */
const { chromium } = require("C:/Users/AW/.workbuddy/binaries/node/workspace/node_modules/playwright-core");
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const BASE = "http://127.0.0.1:8771/index.html";
let pass = 0, fail = 0;
function ok(name, cond) { console.log((cond ? "PASS " : "FAIL ") + name); cond ? pass++ : fail++; }
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: EDGE });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
  const sleep = ms => page.waitForTimeout(ms);

  // 1) FAB + 检索模态
  await page.goto(BASE, { waitUntil: 'networkidle' }).catch(() => {});
  await new Promise(r => setTimeout(r, 1200));
  ok('悬浮检索按钮存在', await page.$('#gtx-fab') !== null);
  await page.click('#gtx-fab');
  await new Promise(r => setTimeout(r, 700));
  ok('检索模态打开', (await page.$$('.gtx-s-in')).length === 1);
  const total = await page.$$eval('.gtx-s-item', els => els.length);
  ok('检索默认列出全部档案(>=60)', total >= 60);
  await page.type('.gtx-s-in', '金字塔');
  await new Promise(r => setTimeout(r, 300));
  const filtered = await page.$$eval('.gtx-s-item', els => els.length);
  ok('关键词过滤生效(金字塔)', filtered >= 1 && filtered < total);
  await page.click('.gtx-s-item');
  await new Promise(r => setTimeout(r, 700));
  ok('点击结果打开档案模态', (await page.$('.gtx-modal-x')) !== null && (await page.$('.gtx-s-in')) === null);
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 500));

  // 2) 艺术页展品接线
  await page.evaluate(() => { location.hash = '#/art'; });
  await new Promise(r => setTimeout(r, 1500));
  const wired = await page.$$eval('[data-gtx-detail]', els => els.map(e => e.getAttribute('data-gtx-detail')).filter(k => k.startsWith('art-')));
  ok('React 展品图已接线(>=10)', wired.length >= 10);
  await page.click('.art-card[data-gtx-detail="art-01"]');
  await new Promise(r => setTimeout(r, 700));
  ok('点击《星际之门》打开作品档案', (await page.evaluate(() => document.querySelector('.gtx-modal-panel .gtx-title')?.textContent || '')).includes('星际之门'));
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 500));

  // 3) 会员页：对比表 + 等级卡 + 智能体对话 + 会员说
  await page.evaluate(() => { location.hash = '#/member'; });
  await new Promise(r => setTimeout(r, 1500));
  ok('权益对比表存在(10行:表头+9项)', (await page.$$eval('.gtx-cmp tr', els => els.length)) === 10);
  ok('价格 3333/9999/33333 全部出现', await page.evaluate(() => document.body.innerText.includes('¥3,333') && document.body.innerText.includes('¥9,999') && document.body.innerText.includes('¥33,333')));
  await page.click('.gtx-tier-card[data-gtx-detail="tier-2"]');
  await new Promise(r => setTimeout(r, 700));
  ok('长老等级卡打开完整权益档案', (await page.evaluate(() => document.querySelector('.gtx-modal-panel .gtx-title')?.textContent || '')).includes('长老'));
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 500));
  ok('智能体示例对话渲染(4条)', (await page.$$eval('.gtx-msg', els => els.length)) === 4);
  ok('会员说 4 条', (await page.$$eval('.gtx-testi-card', els => els.length)) === 4);

  // 4) 关于页新板块
  await page.evaluate(() => { location.hash = '#/about'; });
  await new Promise(r => setTimeout(r, 1500));
  const aboutTxt = await page.evaluate(() => document.body.innerText);
  ok('关于页：世界观声明', aboutTxt.includes('世界观与边界声明') && aboutTxt.includes('不是科学结论'));
  ok('关于页：联系我们', aboutTxt.includes('hello@guangti.club'));
  ok('关于页：2026 大事记', aboutTxt.includes('开放数据年'));
  ok('关于页：商城四大品类', aboutTxt.includes('光体智造商城 · 四大品类'));

  // 5) 艺术页展览时间已更新
  await page.evaluate(() => { location.hash = '#/art'; });
  await new Promise(r => setTimeout(r, 1500));
  const artTxt = await page.evaluate(() => document.body.innerText);
  ok('展览列表已是 2026 展期', artTxt.includes('2026.09.12') && artTxt.includes('2027.03.20') && !artTxt.includes('2025.03.15'));

  ok('全程 console 零错误', errors.length === 0);
  if (errors.length) console.log('ERRORS:', errors.slice(0, 5));
  console.log(`\n==== 冒烟结果: PASS=${pass} FAIL=${fail} ====`);
  await browser.close();
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
