# 光体·星际文明科幻艺术俱乐部 — Kimi → WorkBuddy 迁移完成

源站：https://4bfqtcorsv5wi.ok.kimi.link/ （Kimi 生成的 React + Vite SPA）

## 迁移产物

| 产物 | 说明 |
|---|---|
| `光体星际文明科幻艺术俱乐部-单文件版.html` | **主交付物**（5.75MB，已同步桌面 `光体·星际文明科幻艺术俱乐部.html`）。JS/CSS/10 张图片/视频全部 base64 内联，双击即开，断网可用 |
| `index.html` + `assets/app-hash.js` | 多文件版（保留原始目录结构），配合 `server.py` 本地预览 |
| `assets/index-psWTgKHs.js` / `index-DGl1yDNd.css` | 原站原始构建产物（未改动备份） |
| `images/` `videos/` | 原站全部 10 张图 + 1 个视频 |
| `server.py` | 本地预览服务器（带 SPA 回退），`python server.py 8771` |
| `build_standalone.py` | 重建脚本：改路由 + 生成单文件版 |
| `test_all.js` / `test_mobile.js` | 自动化回归测试（桌面 18 项 + 移动端 4 项） |

## 修复的迁移 Bug

1. **file:// 白屏（致命）**：原版 `<script type="module" crossorigin>` 在本地双击打开时被 CORS 拦截，React 完全不执行 → 已通过全内联修复
2. **路由 404**：原版 BrowserRouter，本地打开/子路径部署/刷新子页均 404 → 已 patch 为 hash 路由（URL 形如 `#/about`），永不 404，前进后退/刷新均正常
3. **kimi 水印/统计脚本**：已移除 `kimi.com/sdk-seed.js` 外链
4. **favicon 404**：已补内联图标（logo.jpg）

## 还原的源码结构（来自 bundle 内嵌 code-path 元数据）

React 19 + React Router 7.18 + GSAP + TailwindCSS，共 19 个 TSX 文件：
- `src/main.tsx`、`src/App.tsx`、`src/components/{Header,Footer,Layout}.tsx`
- 8 个页面：`Home / PrehistoricCivilization / HumanCivilization / InterstellarCivilization / ArtPalace / MemberCenter / EventCalendar / AboutUs`
- 7 个区块组件：`HeroSection / MissionSection / MorphSection / CivilizationVideoSection / ReflectionSection / StickyValueSection` 等

## 测试结论（2026-09-08）

- 桌面 1440×900：单文件版 9/9 PASS、服务器版 9/9 PASS，console 零错误
- 移动端 375×812：4/4 PASS，无横向溢出
- 首页视频可播放（readyState 4），全部图片 0 损坏
- 已知特性：区块内容带 GSAP 滚动入场动画，需滚动到视口才渐显（原站行为，非 bug）

## 注意

- 字体（Orbitron/Rajdhani/Noto Sans SC 等）走 fonts.loli.net 在线加载，离线时回退系统字体
- 如需部署上线，整个目录可直接静态部署（hash 路由无需服务器回退配置）
