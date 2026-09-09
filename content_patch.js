/* ============================================================
   光体·星际文明科幻艺术俱乐部 — 内容增强层 v3（可交互档案版）
   由 WorkBuddy 注入：按路由在 React 渲染完成后插入高审美内容区块
   v3：全站卡片可点击 → 打开「档案详情」模态页，内容真实可用
   ============================================================ */
;(function () {
  if (window.__GTX__) return; window.__GTX__ = true;

  var CSS = ''
  + '.gtx-sec{position:relative;padding:110px 24px;overflow:hidden}'
  + '.gtx-sec::before{content:"";position:absolute;inset:0;background:'
  + 'radial-gradient(ellipse 60% 40% at 50% 0%,rgba(249,211,66,.05),transparent 70%);pointer-events:none}'
  + '.gtx-wrap{max-width:1200px;margin:0 auto;position:relative}'
  + '.gtx-head{text-align:center;margin-bottom:64px}'
  + '.gtx-eyebrow{display:inline-flex;align-items:center;gap:16px;font-family:Rajdhani,sans-serif;'
  + 'font-size:13px;font-weight:600;letter-spacing:.42em;color:#f9d342;text-transform:uppercase}'
  + '.gtx-eyebrow .gtx-line{display:inline-block;width:48px;height:1px;'
  + 'background:linear-gradient(90deg,transparent,#f9d342);}'
  + '.gtx-eyebrow .gtx-line:last-child{background:linear-gradient(90deg,#f9d342,transparent)}'
  + '.gtx-title{font-family:"Noto Serif SC",serif;font-size:clamp(28px,4vw,44px);font-weight:600;'
  + 'color:#fff;margin:18px 0 14px;letter-spacing:.08em}'
  + '.gtx-lead{max-width:720px;margin:0 auto;color:rgba(255,255,255,.6);font-size:15px;line-height:1.9;'
  + 'font-family:"Noto Sans SC",sans-serif;font-weight:300}'
  + '.gtx-grid{display:grid;gap:20px;margin-top:8px}'
  + '.gtx-grid-2{grid-template-columns:repeat(2,1fr)}'
  + '.gtx-grid-3{grid-template-columns:repeat(3,1fr)}'
  + '.gtx-grid-4{grid-template-columns:repeat(4,1fr)}'
  + '.gtx-card{position:relative;padding:32px 28px;border:1px solid rgba(249,211,66,.14);'
  + 'background:rgba(255,255,255,.025);border-radius:4px;display:block;'
  + 'transition:border-color .5s,background .5s,transform .5s,box-shadow .5s}'
  + 'a.gtx-card{text-decoration:none}'
  + '.gtx-card:hover{border-color:rgba(249,211,66,.45);background:rgba(249,211,66,.04);'
  + 'transform:translateY(-4px);box-shadow:0 20px 60px -20px rgba(249,211,66,.15)}'
  + '.gtx-card-top{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:18px}'
  + '.gtx-num{font-family:Orbitron,sans-serif;font-size:13px;color:rgba(249,211,66,.55);letter-spacing:.2em}'
  + '.gtx-tag{font-family:Rajdhani,sans-serif;font-size:12px;letter-spacing:.18em;'
  + 'color:rgba(167,139,250,.85);text-transform:uppercase}'
  + '.gtx-card-title{font-family:"Noto Serif SC",serif;font-size:20px;font-weight:600;color:#fff;'
  + 'margin:0 0 12px;letter-spacing:.06em}'
  + '.gtx-card-text{color:rgba(255,255,255,.58);font-size:14px;line-height:1.95;'
  + 'font-family:"Noto Sans SC",sans-serif;font-weight:300;margin:0}'
  + '.gtx-card-foot{margin-top:20px;padding-top:16px;border-top:1px solid rgba(255,255,255,.07);'
  + 'display:flex;justify-content:space-between;font-family:Rajdhani,sans-serif;font-size:12px;'
  + 'letter-spacing:.15em;color:rgba(255,255,255,.4);text-transform:uppercase}'
  + '.gtx-card-foot b{color:rgba(249,211,66,.9);font-weight:600}'
  + '.gtx-open{color:#f9d342;letter-spacing:.2em;white-space:nowrap}'
  + '[data-gtx-detail]{cursor:pointer}'
  + '.gtx-tl-item[data-gtx-detail]{transition:background .4s;border-radius:4px}'
  + '.gtx-tl-item[data-gtx-detail]:hover .gtx-tl-name{color:#f9d342}'
  + '.gtx-density-row[data-gtx-detail]{cursor:pointer}'
  + '.gtx-feature{margin:0 0 44px;border:1px solid rgba(249,211,66,.18);border-radius:6px;overflow:hidden;'
  + 'box-shadow:0 30px 90px -30px rgba(0,0,0,.8)}'
  + '.gtx-feature img{display:block;width:100%;height:clamp(240px,38vw,440px);object-fit:cover;'
  + 'filter:saturate(1.05)}'
  + '.gtx-hint{margin-top:40px;text-align:center;font-family:Rajdhani,sans-serif;font-size:13px;'
  + 'letter-spacing:.3em;color:rgba(249,211,66,.75);text-transform:uppercase}'
  + '.gtx-timeline{position:relative;display:grid;gap:0;margin-top:8px;padding-left:36px}'
  + '.gtx-timeline::before{content:"";position:absolute;left:8px;top:8px;bottom:8px;width:1px;'
  + 'background:linear-gradient(180deg,transparent,rgba(249,211,66,.5),rgba(167,139,250,.4),transparent)}'
  + '.gtx-tl-item{position:relative;padding:22px 0 22px 28px}'
  + '.gtx-tl-item::before{content:"";position:absolute;left:-32px;top:34px;width:9px;height:9px;'
  + 'border-radius:50%;background:#f9d342;box-shadow:0 0 12px rgba(249,211,66,.8)}'
  + '.gtx-tl-item:nth-child(even)::before{background:#a78bfa;box-shadow:0 0 12px rgba(167,139,250,.8)}'
  + '.gtx-tl-year{font-family:Orbitron,sans-serif;font-size:14px;color:#f9d342;letter-spacing:.2em}'
  + '.gtx-tl-name{font-family:"Noto Serif SC",serif;font-size:19px;color:#fff;font-weight:600;'
  + 'margin:8px 0 8px;letter-spacing:.06em}'
  + '.gtx-tl-text{color:rgba(255,255,255,.55);font-size:14px;line-height:1.9;'
  + 'font-family:"Noto Sans SC",sans-serif;font-weight:300;max-width:760px;margin:0}'
  + '.gtx-quote{border:1px solid rgba(249,211,66,.14);border-left:2px solid #f9d342;'
  + 'background:rgba(255,255,255,.02);padding:40px 44px;border-radius:4px}'
  + '.gtx-quote p{font-family:"Noto Serif SC",serif;font-size:clamp(17px,2vw,21px);color:rgba(255,255,255,.85);'
  + 'line-height:2.1;margin:0 0 24px;letter-spacing:.04em}'
  + '.gtx-quote-principles{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:0;padding:0;list-style:none}'
  + '.gtx-quote-principles li{font-family:Rajdhani,sans-serif;font-size:13px;letter-spacing:.2em;'
  + 'color:#f9d342;text-transform:uppercase;padding:12px 0 0;border-top:1px solid rgba(249,211,66,.18)}'
  + '.gtx-quote-principles li span{display:block;font-family:"Noto Sans SC",sans-serif;font-size:12px;'
  + 'color:rgba(255,255,255,.45);letter-spacing:.1em;margin-top:6px;text-transform:none}'
  + '.gtx-laws{counter-reset:law;margin:0;padding:0;list-style:none;display:grid;'
  + 'grid-template-columns:repeat(2,1fr);gap:0 56px}'
  + '.gtx-laws li{counter-increment:law;display:flex;gap:22px;align-items:baseline;'
  + 'padding:24px 0;border-bottom:1px solid rgba(255,255,255,.06)}'
  + '.gtx-laws li::before{content:"0" counter(law);font-family:Orbitron,sans-serif;font-size:15px;'
  + 'color:rgba(249,211,66,.6);letter-spacing:.15em;flex:none}'
  + '.gtx-laws b{font-family:"Noto Serif SC",serif;font-weight:600;color:#fff;font-size:17px;'
  + 'letter-spacing:.05em;white-space:nowrap}'
  + '.gtx-laws span{color:rgba(255,255,255,.5);font-size:13.5px;line-height:1.9;'
  + 'font-family:"Noto Sans SC",sans-serif;font-weight:300}'
  + '.gtx-density{display:grid;gap:10px;margin-top:8px}'
  + '.gtx-density-row{display:grid;grid-template-columns:110px 1fr;gap:20px;align-items:center;'
  + 'padding:16px 22px;border:1px solid rgba(255,255,255,.07);border-radius:4px;'
  + 'background:rgba(255,255,255,.02);transition:border-color .4s}'
  + '.gtx-density-row:hover{border-color:rgba(249,211,66,.4)}'
  + '.gtx-density-row .gtx-d-label{font-family:Rajdhani,sans-serif;font-size:13px;letter-spacing:.2em;'
  + 'color:#f9d342;text-transform:uppercase;white-space:nowrap}'
  + '.gtx-density-row .gtx-d-bar{position:relative;height:34px;display:flex;align-items:center}'
  + '.gtx-density-row .gtx-d-bar i{position:absolute;left:0;top:50%;transform:translateY(-50%);'
  + 'height:3px;border-radius:2px;background:linear-gradient(90deg,#f9d342,#a78bfa);'
  + 'box-shadow:0 0 10px rgba(249,211,66,.35)}'
  + '.gtx-density-row .gtx-d-bar em{font-style:normal;position:relative;padding-left:16px;'
  + 'color:rgba(255,255,255,.6);font-size:13px;letter-spacing:.08em;'
  + 'font-family:"Noto Sans SC",sans-serif;font-weight:300;white-space:nowrap}'
  + '.gtx-faq{max-width:860px;margin:0 auto;display:grid;gap:14px}'
  + '.gtx-faq-item{border:1px solid rgba(255,255,255,.08);border-radius:4px;background:rgba(255,255,255,.02);'
  + 'padding:24px 30px;transition:border-color .4s}'
  + '.gtx-faq-item:hover{border-color:rgba(249,211,66,.35)}'
  + '.gtx-faq-q{display:flex;gap:16px;align-items:baseline;font-family:"Noto Serif SC",serif;'
  + 'font-size:16px;color:#fff;font-weight:600;letter-spacing:.04em}'
  + '.gtx-faq-q::before{content:"Q";font-family:Orbitron,sans-serif;font-size:13px;color:#f9d342;flex:none}'
  + '.gtx-faq-a{margin:12px 0 0 34px;color:rgba(255,255,255,.55);font-size:14px;line-height:1.95;'
  + 'font-family:"Noto Sans SC",sans-serif;font-weight:300}'
  + '.gtx-modal{position:fixed;inset:0;z-index:99990;display:flex;overflow-y:auto;padding:4vh 16px}'
  + '.gtx-modal-backdrop{position:fixed;inset:0;background:rgba(2,2,4,.9);'
  + 'backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}'
  + '.gtx-modal-panel{position:relative;margin:auto;width:min(880px,100%);background:#0a0a10;'
  + 'border:1px solid rgba(249,211,66,.22);border-radius:6px;padding:56px 0 0;'
  + 'box-shadow:0 40px 120px -30px rgba(0,0,0,.9),0 0 90px -40px rgba(249,211,66,.3);'
  + 'opacity:0;transform:translateY(26px);transition:opacity .45s cubic-bezier(.2,.6,.2,1),transform .45s cubic-bezier(.2,.6,.2,1)}'
  + '.gtx-modal.gtx-on .gtx-modal-panel{opacity:1;transform:none}'
  + '.gtx-modal-x{position:absolute;top:18px;right:18px;width:40px;height:40px;border-radius:50%;'
  + 'border:1px solid rgba(249,211,66,.3);background:rgba(5,5,8,.7);color:#f9d342;font-size:17px;'
  + 'cursor:pointer;transition:border-color .3s,transform .3s;line-height:1;z-index:2}'
  + '.gtx-modal-x:hover{border-color:#f9d342;transform:rotate(90deg)}'
  + '.gtx-modal-panel .gtx-head{margin-bottom:20px;padding:0 56px;text-align:left}'
  + '.gtx-modal-panel .gtx-title{font-size:clamp(24px,3vw,34px)}'
  + '.gtx-modal-panel .gtx-lead{margin:0}'
  + '.gtx-md-body{padding:0 56px 20px}'
  + '.gtx-md-body h3{font-family:"Noto Serif SC",serif;font-size:17px;color:#f9d342;'
  + 'margin:34px 0 14px;letter-spacing:.08em;display:flex;align-items:center;gap:12px;font-weight:600}'
  + '.gtx-md-body h3::before{content:"";width:22px;height:1px;background:#f9d342;flex:none}'
  + '.gtx-md-body p{color:rgba(255,255,255,.62);font-size:14.5px;line-height:2;'
  + 'font-family:"Noto Sans SC",sans-serif;font-weight:300;margin:0 0 14px}'
  + '.gtx-md-body p b{color:rgba(255,255,255,.85);font-weight:600}'
  + '.gtx-md-body ul{margin:0 0 16px;padding:0;list-style:none}'
  + '.gtx-md-body ul li{position:relative;padding:9px 0 9px 20px;color:rgba(255,255,255,.62);'
  + 'font-size:14px;line-height:1.9;font-family:"Noto Sans SC",sans-serif;font-weight:300;'
  + 'border-bottom:1px dashed rgba(255,255,255,.06)}'
  + '.gtx-md-body ul li::before{content:"◆";position:absolute;left:0;top:11px;font-size:8px;color:#f9d342}'
  + '.gtx-md-body ul li b{color:rgba(255,255,255,.85);font-weight:600}'
  + '.gtx-md-body ol{margin:0 0 16px;padding-left:20px;color:rgba(255,255,255,.62);font-size:14px;'
  + 'line-height:2;font-family:"Noto Sans SC",sans-serif;font-weight:300}'
  + '.gtx-md-body ol li{padding:4px 0}'
  + '.gtx-md-body ol li::marker{color:#f9d342;font-family:Orbitron,sans-serif;font-size:12px}'
  + '.gtx-md-kv{display:grid;grid-template-columns:132px 1fr;gap:8px 18px;margin:0 0 20px;'
  + 'border-top:1px solid rgba(249,211,66,.14);padding-top:18px}'
  + '.gtx-md-kv i{font-style:normal;color:rgba(249,211,66,.8);font-size:12.5px;letter-spacing:.12em;'
  + 'font-family:Rajdhani,sans-serif;text-transform:uppercase}'
  + '.gtx-md-kv em{font-style:normal;color:rgba(255,255,255,.68);font-size:13.5px;line-height:1.8;'
  + 'font-family:"Noto Sans SC",sans-serif;font-weight:300}'
  + '.gtx-md-kv em b{color:#fff;font-weight:600}'
  + '.gtx-md-note{border:1px solid rgba(249,211,66,.2);background:rgba(249,211,66,.04);'
  + 'border-radius:4px;padding:18px 22px;margin:0 0 18px;color:rgba(255,255,255,.72);font-size:13.5px;'
  + 'line-height:1.95;font-family:"Noto Sans SC",sans-serif;font-weight:300}'
  + '.gtx-md-note b{color:#f9d342;font-weight:600}'
  + '.gtx-ext{display:inline-block;color:#f9d342;text-decoration:none;border-bottom:1px solid rgba(249,211,66,.4);'
  + 'font-family:Rajdhani,sans-serif;letter-spacing:.05em;font-size:13.5px;margin:0 14px 8px 0;'
  + 'transition:color .3s,border-color .3s}'
  + '.gtx-ext:hover{color:#fff;border-color:#fff}'
  + '.gtx-exts{margin-top:6px}'
  + '.gtx-modal-foot{border-top:1px solid rgba(255,255,255,.07);padding:18px 56px 24px;'
  + 'display:flex;justify-content:space-between;font-family:Rajdhani,sans-serif;font-size:11.5px;'
  + 'letter-spacing:.25em;color:rgba(255,255,255,.35);text-transform:uppercase}'
  + '.gtx-modal-foot b{color:rgba(249,211,66,.7);font-weight:600}'
  + '.gtx-reveal{opacity:0;transform:translateY(28px);transition:opacity .9s cubic-bezier(.2,.6,.2,1),transform .9s cubic-bezier(.2,.6,.2,1)}'
  + '.gtx-reveal.gtx-in{opacity:1;transform:none}'
  + '@media(max-width:900px){'
  + '.gtx-sec{padding:72px 18px}'
  + '.gtx-grid-3,.gtx-grid-4{grid-template-columns:repeat(2,1fr)}'
  + '.gtx-grid-2{grid-template-columns:1fr}'
  + '.gtx-laws{grid-template-columns:1fr;gap:0}'
  + '.gtx-quote-principles{grid-template-columns:1fr}'
  + '.gtx-quote{padding:28px 24px}'
  + '.gtx-modal{padding:2vh 10px}'
  + '.gtx-modal-panel{padding-top:44px}'
  + '.gtx-modal-panel .gtx-head{padding:0 28px}'
  + '.gtx-md-body{padding:0 28px 12px}'
  + '.gtx-modal-foot{padding:14px 28px 18px}'
  + '.gtx-md-kv{grid-template-columns:110px 1fr}'
  + '}'
  + '@media(max-width:600px){'
  + '.gtx-grid-3,.gtx-grid-4{grid-template-columns:1fr}'
  + '.gtx-timeline{padding-left:26px}'
  + '.gtx-md-kv{grid-template-columns:1fr;gap:2px 0}'
  + '.gtx-md-kv i{margin-top:10px}'
  + '}';

  /* ================= 小工具 ================= */
  function kv(rows){
    var h = '<div class="gtx-md-kv">';
    rows.forEach(function(r){ h += '<i>'+r[0]+'</i><em>'+r[1]+'</em>'; });
    return h + '</div>';
  }
  function ul(items){
    var h = '<ul>';
    items.forEach(function(t){ h += '<li>'+t+'</li>'; });
    return h + '</ul>';
  }
  function ol(items){
    var h = '<ol>';
    items.forEach(function(t){ h += '<li>'+t+'</li>'; });
    return h + '</ol>';
  }
  function h3(t){ return '<h3>'+t+'</h3>'; }
  function p(t){ return '<p>'+t+'</p>'; }
  function note(t){ return '<div class="gtx-md-note">'+t+'</div>'; }
  function ext(items){
    var h = '<div class="gtx-exts">';
    items.forEach(function(e){ h += '<a class="gtx-ext" href="'+e[0]+'" target="_blank" rel="noopener">'+e[1]+' ↗</a>'; });
    return h + '</div>';
  }
  function sec(route, eyebrow, title, lead, bodyHtml){
    var ld = lead || '', body = bodyHtml || '';
    if (!body) {
      var m = ld.search(/<(div|ul|section)\b/);
      if (m > -1) { body = ld.slice(m); ld = ld.slice(0, m); }
    }
    body = body.replace(/\s*style="margin-top:\d+px"\s*/g, ' ');
    return '<section class="gtx-sec" data-gtx="' + route + '"><div class="gtx-wrap">'
      + '<header class="gtx-head gtx-reveal"><div class="gtx-eyebrow"><span class="gtx-line"></span>'
      + eyebrow + '<span class="gtx-line"></span></div>'
      + '<h2 class="gtx-title">' + title + '</h2>'
      + (ld ? '<p class="gtx-lead">' + ld + '</p>' : '')
      + '</header>' + body + '</div></section>';
  }
  function card(num, tag, title, text, foot, detailKey){
    return '<article class="gtx-card gtx-reveal"'
      + (detailKey ? ' data-gtx-detail="'+detailKey+'"' : '')
      + '><div class="gtx-card-top">'
      + '<span class="gtx-num">' + num + '</span><span class="gtx-tag">' + tag + '</span></div>'
      + '<h3 class="gtx-card-title">' + title + '</h3>'
      + (text ? '<p class="gtx-card-text">' + text + '</p>' : '')
      + (foot ? '<div class="gtx-card-foot">' + foot
        + (detailKey ? '<span class="gtx-open">档案全文 →</span>' : '') + '</div>' : '')
      + '</article>';
  }
  function acard(href, num, tag, title, text, foot){
    return card(num, tag, title, text, foot)
      .replace('<article class="gtx-card', '<a href="' + href + '" class="gtx-card')
      .replace('</article>', '</a>');
  }
  function tlItem(year, name, text, detailKey){
    return '<div class="gtx-tl-item gtx-reveal"' + (detailKey?' data-gtx-detail="'+detailKey+'"':'') + '>'
      + '<div class="gtx-tl-year">'+year+'</div>'
      + '<div class="gtx-tl-name">'+name+(detailKey?' <span class="gtx-open" style="font-size:12px">档案 →</span>':'')+'</div>'
      + '<p class="gtx-tl-text">'+text+'</p></div>';
  }
  function densityRow(label, w, text, detailKey){
    return '<div class="gtx-density-row gtx-reveal"' + (detailKey?' data-gtx-detail="'+detailKey+'"':'') + '>'
      + '<div class="gtx-d-label">'+label+'</div>'
      + '<div class="gtx-d-bar"><i style="width:'+w+'"></i><em>'+text+(detailKey?' <span class="gtx-open">详情 →</span>':'')+'</em></div></div>';
  }

  /* ================= 档案详情注册表 ================= */
  var DET = {};

  /* ---------- 首页 · 听 ---------- */
  DET['home-hear'] = {
    e:'Frequency Radio · Listening Guide', t:'光体频率电台 · 收听与动手手册', l:'电台不只是「内容」，是一套今天就能开始的接收训练。从免费在线射电望远镜到桌面频谱软件，全部真实可用。',
    k:[['每期时长','30 分钟 · 双周更新，42 期全部可回听'],['节目结构','信号原文 → 档案拆解 → 研究者对谈 → 本期行动清单']],
    b: h3('真实收听工具包（免费起步）')
    + ul([
      '<b>氢线 1420.405751 MHz</b>——宇宙中最普遍的谱线，SETI 监听的默认频道。理解它，就理解了所有信号档案的坐标系。',
      '<b>免费在线接收机</b>：特文特大学 WebSDR，浏览器里直接开听，无需任何硬件。',
      '<b>全球接收机地图</b>：websdr.org 收录上百台在线射电接收机，挑一台离你最近的开始记录。',
      '<b>进阶硬件</b>：RTL-SDR Blog V3 棒状接收机（约 200 元）+ 低噪放，即可在阳台记录本土射频环境。',
      '<b>桌面软件</b>：SDR#（Windows）、GQRX（macOS 与 Linux）、baudline（频谱逐帧精读，解码夜同款）。'
    ])
    + ext([['https://websdr.ewi.utwente.nl:8901/','特文特大学 WebSDR'],['https://websdr.org/','全球接收机地图 websdr.org']])
    + h3('新手第一步（20 分钟）')
    + ol([
      '打开特文特大学 WebSDR，调频到 1420.4 MHz 附近。',
      '观察噪声底随时间的变化，截图并记录当时的 UTC 时间。',
      '把截图发给档案组，换取你的第一份《观测记录》模板与电台完整目录。'
    ])
    + note('<b>会员权益</b>：会员可在会员中心下载全部 42 期节目与逐期频谱图；非会员每期前 8 分钟免费试听。')
  };

  /* ---------- 首页 · 看 ---------- */
  DET['home-see'] = {
    e:'Visual Library · Watch Path', t:'光体影像库 · 观影路径与真实片单', l:'影像库按「四周观影路径」编排，从频率实验走到结构图谱；同时附一份与俱乐部研究重合度最高的真实纪录片片单，全部可立即观看。',
    k:[['片库规模','24 部自制纪录片 · 300 小时修复影像'],['观看入口','会员中心 → 影像库；非会员每月 15 日开放一部']],
    b: h3('四周观影路径（自制纪录片区）')
    + ul([
      '<b>第 1 周 · 认知重启</b>——《432Hz 频率实验》：100 名会员 30 天脑波监测实录，先看数据再看观点。',
      '<b>第 2 周 · 史前卷宗</b>——《新仙女木：天火纪事》：冰芯、坑洞与 200 余个文明的洪水记忆交汇处。',
      '<b>第 3 周 · 接触现场</b>——《昴宿星来信》：接收与证伪双线叙事，判断权交给你。',
      '<b>第 4 周 · 结构图谱</b>——《光体解剖学》：七层能量体医学插画级可视化，配套学院第二阶课程。'
    ])
    + h3('真实延展片单（点击直达）')
    + ul([
      '<b>The Phenomenon（2020）</b>——UAP 公开听证前最重要的影像档案汇编，含多位军方证人采访。',
      '<b>Ancient Apocalypse（Netflix · 2022）</b>——与俱乐部史前档案重合度最高的主流制作，适合做观点对照。',
      '<b>Encounters（Netflix · 2023）</b>——四个全球目击事件的纪录片式重访。',
      '<b>PBS Space Time</b>——硬核宇宙学频道，是七级密度模型最好的「科学对照组」。'
    ])
    + ext([['https://www.youtube.com/@pbsspacetime','PBS Space Time'],['https://www.youtube.com/results?search_query=the+phenomenon+2020+documentary','The Phenomenon (2020)'],['https://www.netflix.com/search?q=encounters','Netflix 片单检索']])
    + note('<b>每部自制影片</b>点开卡片即见完整观影手册：章节表、配套资料与讨论题。')
  };

  /* ---------- 首页 · 学 ---------- */
  DET['home-learn'] = {
    e:'Academy · Full Curriculum', t:'星际文明研究学院 · 36 讲完整课表', l:'好奇心的终点是研究能力。三阶 36 讲每讲都给出讲题、时长与产出物——你永远知道自己在哪、下一步是什么。点开下方三阶卡片可见逐讲课表。',
    k:[['开班时间','每年 3 月与 9 月第一周'],['报名入口','会员中心 → 学院'],['结业授予','独立档案通过评审 → 「研究员」称号 + 档案库署名']],
    b: h3('三阶结构')
    + ul([
      '<b>第一阶 · 宇宙观奠基</b>（12 讲 × 40 分钟）——从氢线到费米悖论，建立经得起追问的宇宙观框架。',
      '<b>第二阶 · 频率实践</b>（12 讲 × 60 分钟，含实操）——冥想、频率校准、梦境与心传的完整训练。',
      '<b>第三阶 · 档案方法</b>（12 讲 × 60 分钟，实战）——以 WOW!、FRB 121102、BLC-1 三份真实档案为教材。',
      '<b>权限</b>：星际行者可试听第一阶前 3 讲；星际长老全阶开放；光体觉醒者含年度面授工作坊。'
    ])
    + note('<b>本页卡片区</b>的三个阶段卡片各附逐讲课表，点开即可查看全部 36 讲标题。')
  };

  /* ---------- 首页 · 遇 ---------- */
  DET['home-meet'] = {
    e:'Offline Calendar · 2026', t:'2026 线下活动日历（可直接报名）', l:'从每周固定的线上迎新营到一年一度的星际文明大会，全年日程一次看清。报名入口统一在会员中心后台「活动」板块。',
    k:[['固定节奏','每周四迎新营 · 每月首个周五解码夜'],['年度两场','春分大会（3 月）· 星际文明大会（11 月）'],['巡回城市','深圳、成都、西安、杭州、武汉、长沙']],
    b: h3('全年日历')
    + ul([
      '<b>每周四 20:00</b> —— 线上迎新冥想营（免费，新会员优先席位）。',
      '<b>每月第一个周五 19:30</b> —— 解码夜线上直播（会员专属，见解码室档案）。',
      '<b>2026-03-20 春分大会</b> —— 上海光体大厦，全天三场：年度研究发布、千人同步冥想、新会员见面。',
      '<b>2026-04 至 2026-09</b> —— 城市巡回沙龙：深圳（4 月）、成都（5 月）、西安（6 月）、杭州（7 月）、武汉（8 月）、长沙（9 月），每城一场，本地会员免费。',
      '<b>2026-10 秋季考察团</b> —— 埃及线（吉萨、卢克索、丹德拉），10 天 9 夜，星际长老以上等级可报名。',
      '<b>2026-11-21 星际文明大会</b> —— 上海国际会议中心，全员可参加，含闭门研究员环节。'
    ])
    + h3('报名方式')
    + ul([
      '会员：会员中心后台 → 「活动」板块 → 选择场次提交；城市沙龙报名后 24 小时内收到场地定位。',
      '非会员：每季度首个周六为「开放日」，首页通讯提前 7 天公布免费席位数量。'
    ])
    + note('<b>2025 年数据</b>：全年 46 场活动、12 座城市、12,000+ 人次、问卷满意度 98.2%。')
  };

  /* ---------- 解码室 · 信号档案 ---------- */
  DET['sig-wow'] = {
    e:'Dossier SIG-01 · Confirmed Data', t:'WOW! 信号 · 完整档案', l:'SETI 历史上最著名的 72 秒。全部参数来自大耳朵射电望远镜的原始记录，无一虚构。',
    k:[['日期','1977-08-15 23:16（美国东部时间）'],['设备','大耳朵射电望远镜 · 俄亥俄州立大学'],['强度','6EQUJ5 —— 约为背景噪声 30 倍'],['持续','72 秒（随天线孔径呈钟形增减）'],['频率','1420.4556 MHz，紧邻氢线 1420.4057'],['方向','人马座 χ 星附近']],
    b: h3('为什么它重要')
    + p('窄带、强、且随望远镜视野进出呈钟形包络——一份「技术源候选」应当具备的三要素全部齐备。发现者 Jerry Ehman 在数据打印纸上圈出这串字符并写下「Wow!」，成为 SETI 史上最著名的手写批注。')
    + h3('后续 48 年发生了什么')
    + ul([
      '同一天区被数十次复测，<b>信号从未复现</b>——这也是它仍列为「候选」而非「确认」的原因。',
      '2021 年「彗星氢云」解释被复测数据否定：两颗彗星当时并不在该天区。',
      '俱乐部档案组立场：<b>未确认、未排除</b>，作为常设教学案例进入第 07 期解码夜。'
    ])
    + h3('延伸阅读（点击直达）')
    + ext([['https://en.wikipedia.org/wiki/Wow!_signal','Wikipedia · Wow! signal'],['https://www.bigear.org/','大耳朵望远镜官方纪念站 bigear.org']])
  };

  DET['sig-frb'] = {
    e:'Dossier SIG-02 · Repeating Source', t:'FRB 121102 · 完整档案', l:'人类确认的第一个重复快速射电暴——一份会按周期「开关」的宇宙电报。',
    k:[['首次记录','2012-11-02 · 阿雷西博望远镜'],['类型','首个确认重复的快速射电暴（FRB）'],['宿主','矮星系 · 距地球约 30 亿光年 · 御夫座方向'],['精确定位','2017 · 甚大天线阵（VLA）'],['周期性','约 160 天活动窗口，其中约 90 天活跃'],['持续监测','CHIME 频道在案，数据公开']],
    b: h3('解码夜关注点：周期性意味着什么')
    + ul([
      '<b>轨道调制假说</b>——源绕伴星运动，每圈只有部分相位对准地球。',
      '<b>自转与进动假说</b>——磁星自转轴进动造成「灯塔」式开关。',
      '<b>介质透镜假说</b>——周围物质像透镜一样周期性放大信号。',
      '三种模型各自的证据与漏洞，是第 19 期解码夜的核心议题。'
    ])
    + h3('你能做什么（动手）')
    + p('Breakthrough Listen 开放数据档案向所有人公开原始观测数据。拉取一段强度序列，用 Python 画出自己的动态频谱图——这正是研究学院第三阶的结业作业原题。')
    + ext([['https://en.wikipedia.org/wiki/FRB_121102','Wikipedia · FRB 121102'],['https://seti.berkeley.edu/opendata/','Berkeley 开放数据档案（免费下载）']])
  };

  DET['sig-blc'] = {
    e:'Dossier SIG-03 · The False Alarm', t:'BLC-1 · 完整档案（误报教材）', l:'一度被视为最接近「非地球技术源」的候选信号，最终被证明是本地干扰——它是排除清单最好的反面教材。',
    k:[['记录时间','2020-04 至 2020-05 · 帕克斯 64 米望远镜'],['编号','Breakthrough Listen Candidate 1'],['频率','982.002 MHz'],['方向','比邻星（距地球 4.24 光年）'],['结论','2021 · Nature Astronomy：判定为本地人为干扰']],
    b: h3('误报的教育价值')
    + p('信号的频率漂移形态与观测站本地电子设备的晶振谐波吻合——当设备关闭时信号消失，真相大白。它证明了一件事：<b>一份候选信号在被证伪之前，与真信号拥有完全相同的观感。</b>')
    + h3('把它变成你的工具')
    + ul([
      '下载档案组整理的《候选信号排除清单 v7》模板（会员中心 → 档案组）。',
      '用公开数据亲手把 BLC-1 的排除流程走一遍，你会永久获得对「震惊体新闻」的免疫力。'
    ])
    + ext([['https://en.wikipedia.org/wiki/BLC1','Wikipedia · BLC1'],['https://www.nature.com/articles/s41550-021-01479-5','Nature Astronomy · 原始论文']])
  };

  DET['sig-night'] = {
    e:'Decode Night · Rules', t:'解码夜 · 规则与报名', l:'每月第一个周五 19:30 线上直播。会员提交候选信号，档案组调取原始数据，全场逐层排除——结论与存疑点全部归档公开。',
    k:[['时间','每月第一个周五 19:30 至 21:30'],['形式','线上直播 + 会员回放'],['已拆解','11 份档案，其中 3 份保持「未排除」状态'],['下期','2026-11-07 · SETI 补充档案']],
    b: h3('当晚流程')
    + ol([
      '19:30 信号原文播放与参数公示（10 分钟）。',
      '19:40 排除清单逐项过检：射频干扰、卫星、飞机、设备谐波（40 分钟）。',
      '20:20 建模环节：候选解释模型的证据强度对比（40 分钟）。',
      '21:00 开放质询：会员现场提问，档案组即时作答（20 分钟）。',
      '21:20 结论归档：确认、存疑或排除，档案号当场发放（10 分钟）。'
    ])
    + h3('如何提交候选信号')
    + ul([
      '会员中心 → 档案组 → 「提交候选」入口，填写《候选信号登记表》：时间戳、频率、方向、截图与你的初步判断。',
      '每月 20 日前提交的候选进入当期评审；未入选的候选全部给出书面反馈。'
    ])
    + ext([['https://seti.berkeley.edu/opendata/','Berkeley 开放数据档案'],['https://www.baudline.com/','baudline 频谱软件（解码夜同款）']])
  };

  /* ---------- 星际文明图谱 · 恒星档案 ---------- */
  DET['star-pleiades'] = {
    e:'Star Dossier · M45', t:'昴宿星团 · 观测档案', l:'先学会真实地看见它，再谈论它的讯息。这是档案组的立场：仰望要有坐标。',
    k:[['天文编号','M45（梅西耶天体）'],['距离','约 444 光年'],['年龄','约 1 亿年（年轻星团）'],['成员','1000 颗以上恒星 · 肉眼通常可见 6 至 7 颗'],['位置','金牛座 · 秋冬季节整夜可见']],
    b: h3('观测指南')
    + ul([
      '肉眼在晴朗夜空即可直视；城市中通常能看到 4 至 6 颗——<b>今晚数一数你能看到几颗，发给电台投稿</b>。',
      '双筒望远镜 7×50 是最佳视角：蓝色雾状反射星云环绕的七姊妹尽收眼底。',
      '长曝光摄影初学者首选目标：手机加三脚架 10 秒曝光即可出片。'
    ])
    + h3('谱系与教导主题')
    + p('希腊神话七姊妹、中国二十八宿中的「昴宿」、毛利 Matariki 新年——几乎所有文明都为它留了名字。北欧「光之族」通灵记录谱系的核心来源；讯息主题：<b>无条件的爱与情感疗愈</b>（第 6 密度）。')
    + ext([['https://en.wikipedia.org/wiki/Pleiades','Wikipedia · Pleiades']])
  };

  DET['star-sirius'] = {
    e:'Star Dossier · Alpha CMa', t:'天狼星 · 观测档案', l:'全天最亮的恒星，古埃及历法的钟摆，档案组复核频次最高的谱系之一。',
    k:[['距离','8.6 光年 · 全天视星等最亮（-1.46）'],['系统','A（蓝白主序星）+ B（白矮星伴星，视星等 8.4）'],['位置','大犬座 · 冬季夜空'],['观测窗口','冬季大三角的顶点之一']],
    b: h3('观测指南')
    + ul([
      '冬季沿猎户座腰带三星向东南延伸即可找到——全天最亮，绝不会认错。',
      '双筒镜观察它的颜色闪烁（大气折射致色彩变化），是认识「恒星不只有白色」的第一课。'
    ])
    + h3('文明记忆与档案重点')
    + p('古埃及历法以<b>天狼星偕日升起</b>作为一年之始，与尼罗河泛滥精确同步——这是「精准天文对齐」悬案的核心案例。西非多贡人对天狼星 B（肉眼不可见白矮星）的口述记载是档案组重点复核的争议样本。讯息主题：<b>神圣几何与文明基建</b>（第 5 密度）。')
    + ext([['https://en.wikipedia.org/wiki/Sirius','Wikipedia · Sirius']])
  };

  DET['star-arcturus'] = {
    e:'Star Dossier · Alpha Boo', t:'大角星 · 观测档案', l:'北半球春夜最亮的恒星，一颗与现代文明「通过电」的星。',
    k:[['距离','36.7 光年'],['类型','K1.5 III 橙红巨星 · 直径约为太阳 25 倍'],['位置','牧夫座'],['观测窗口','春季夜空东北方']],
    b: h3('观测指南')
    + p('记住这句口诀：<b>「沿斗柄延伸到大角」</b>——北斗七星斗柄两颗星的弧线自然指向它。它的橙色是巨星老年的颜色，与蓝色恒星并排观察对比极强。')
    + h3('谱系与现代事件')
    + p('已知密度最高的纯能量存有谱系，没有物质形态，以蓝紫色光球被感知；讯息主题：<b>意识架构与频率护持</b>（第 7 密度）。1933 年芝加哥世博会曾用它的星光（经望远镜聚焦）点亮开幕开关——「星光照亮未来」的通电仪式被永久记录。')
    + ext([['https://en.wikipedia.org/wiki/Arcturus','Wikipedia · Arcturus']])
  };

  DET['star-andromeda'] = {
    e:'Galaxy Dossier · M31', t:'仙女座星系 · 观测档案', l:'肉眼可见的最远天体——新手的第一枚「宇宙勋章」。',
    k:[['编号','M31（仙女座星系）'],['距离','约 254 万光年'],['规模','约 1 万亿颗恒星 · 直径 22 万光年'],['运动','以约 110 km/s 接近银河系'],['未来','与银河系合并预计在约 45 亿年后开始']],
    b: h3('观测指南')
    + ul([
      '秋季夜空的仙女座区域，<b>无光污染下肉眼可见一枚 3 度长的椭圆雾斑</b>——那是 254 万年前出发的光。',
      '双筒镜下可辨核心与盘面倾斜角；找到它之后，你对「距离」这个概念会永久改观。',
      '城市观测建议：先在星图应用里定位仙后座 W 形，顺着两颗星「跳」过去。'
    ])
    + h3('谱系与教导主题')
    + p('跨密度星际旅行者谱系的来源，以自由意志为第一原则；讯息主题：<b>自由意志与宇宙旅行</b>。45 亿年后的星系合并不是灾难叙事——档案组的解读是：两个星系的合并，就是一场跨 10 亿年的「合频」。')
    + ext([['https://en.wikipedia.org/wiki/Andromeda_Galaxy','Wikipedia · Andromeda Galaxy']])
  };

  /* ---------- 七级密度 · 详解 ---------- */
  DET['den-1'] = { e:'Density 1', t:'第 1 密度 · 元素', k:[['层级','基础意识 · 沉睡态'],['成员','水、火、土、气与基本元素']],
    b: p('意识在此尚未觉察自己。每一种元素都完整地「存在」，却不存在「自我」。它是万有意识醒来的第一口呼吸，也是密度阶梯全部上层建筑的地基。俱乐部教学中，第 1 密度被用作冥想「接地」阶段的观想对象：把注意力放回元素，才能向上走。') };
  DET['den-2'] = { e:'Density 2', t:'第 2 密度 · 生长与本能', k:[['层级','生物意识'],['成员','植物、动物与简单生命']],
    b: p('生长、趋光、迁徙、本能——生命第一次「想做点什么」，但还不知道「我是谁」。第 2 密度与第 3 密度的分界线是<b>自我意识的点燃</b>。宠物与主人的深度情感连接，被视为第 2 密度个体向第 3 密度移动的窗口期现象。') };
  DET['den-3'] = { e:'Density 3', t:'第 3 密度 · 自我觉察（人类当下）', k:[['层级','选择密度'],['特征','自由意志 · 唯一拥有「遗忘面纱」的密度']],
    b: p('人类当下的位置。遗忘面纱让你不知道自己从哪里来，也因此<b>每一次选择都是真正自由的选择</b>——这是第 3 密度唯一的功课：在无明中依然选择爱。密度模型的全部教学设计，都围绕「如何在遗忘中保持觉知」展开。') };
  DET['den-4'] = { e:'Density 4', t:'第 4 密度 · 爱与理解', k:[['层级','地球正处的入口'],['特征','心电感应成为默认语言']],
    b: p('爱与理解成为空气一样的默认介质，个体之间不再需要「翻译」。档案组把它比作「从电报时代直接跳进共感时代」。地球当前正处在第 3 向第 4 密度过渡的入口区间——这正是 2035 工作节点的模型依据。') };
  DET['den-5'] = { e:'Density 5', t:'第 5 密度 · 智慧', k:[['层级','光之密度'],['成员','天狼星谱系栖居层级']],
    b: p('在第 4 密度的「爱」之上叠加「光的智慧」——知道如何爱，而不只是愿意爱。教学中的类比：第 4 密度是心，第 5 密度是把心点亮的人。天狼星谱系的神圣几何与建筑知识，被归入第 5 密度的典型表达。') };
  DET['den-6'] = { e:'Density 6', t:'第 6 密度 · 光与爱的合一', k:[['层级','合一入口'],['成员','昴宿星团核心振动层级']],
    b: p('个体性与团体意识并存并不矛盾的层级。档案组引用《一的法则》Ra 自述：它正处于第 6 密度——「我们既是众，也是一」。昴宿谱系以情感疗愈为主题的教导，被归为第 6 密度向下校准地球频率的方式。') };
  DET['den-7'] = { e:'Density 7', t:'第 7 密度 · 与太一合一', k:[['层级','门径'],['成员','大角星谱系所在层级']],
    b: p('语言在此失效的层级——意识完全融入宇宙本源，同时保有「即将完成回归」的临界状态。大角星谱系以纯能量光球被感知，正对应这一层级「无形态」的特征。七级模型至此封顶；第 8 密度在原始文献中被称为「下一个八度音程的起点」。') };

  /* ---------- 通信协议 · 实操模板 ---------- */
  DET['proto-1'] = {
    e:'Protocol Step 1 · Receive', t:'STEP 01 进入扩展态 · 实操模板', l:'频率即天线：你调到什么频道，就收到什么节目。这一步的目标是把接收带宽校准到可用的安静度。',
    k:[['前置','梅尔卡巴冥想完成后 15 分钟内（脑波余韵期）'],['时长','20 分钟'],['环境','暗光 · 静音 · 身体温暖']],
    b: h3('操作流程')
    + ol([
      '坐下，脊柱直立，先做 10 次慢速腹式呼吸。',
      '以开放式提问替代索取式提问——把「告诉我答案」换成「请校准我的频率」。',
      '保持 Theta 脑波余韵，任由意象浮现，不做评判也不追逐。',
      '结束时默念归档意图：此刻的一切将被如实记录。'
    ])
    + h3('提问模板（档案组推荐）')
    + ul([
      '「关于今晚的星空，有什么是我此刻可以理解的？」',
      '「请以我能承受的频率，校准我的接收带宽。」',
      '「如果有一条讯息在今天最重要，请以最不容易被误解的方式显现。」'
    ])
    + note('<b>诚实边界</b>：扩展态是主观体验状态，档案组不将其单独作为证据，只作为三源验证的第一源。')
  };

  DET['proto-2'] = {
    e:'Protocol Step 2 · Verify', t:'STEP 02 三源交叉验证 · 实操模板', l:'共鸣不是证据，交叉才是。任何单条讯息都不构成结论——重合度达 70% 以上才进入档案库。',
    k:[['三源','冥想感知 · 梦境符号 · 第三方通灵记录'],['门槛','三源重合度 ≥ 70%'],['周期','每周一次固定验证时段']],
    b: h3('验证清单')
    + ul([
      '<b>源一</b>：你自己的冥想感知记录（STEP 01 产出）。',
      '<b>源二</b>：连续 7 天的梦境符号表（从记录中提取重复符号）。',
      '<b>源三</b>：第三方通灵记录或公开档案中的对应段落（注明出处与日期）。',
      '对三个来源逐项打分：主题重合、符号重合、时间重合，各占三分之一。',
      '总分 70 以上进入档案库；以下标记「待观察」，30 天后复验一次。'
    ])
    + note('<b>关键纪律</b>：验证期间不得与其他成员交换讯息内容——交换会把「共振」伪装成「验证」。')
  };

  DET['proto-3'] = {
    e:'Protocol Step 3 · Record', t:'STEP 03 记录与回溯 · 实操模板', l:'档案即成长曲线。醒后 90 秒内完成记录，保留原始笔迹；每季度的回溯会告诉你，你的接收频率正在如何移动。',
    k:[['黄金窗口','醒后 90 秒'],['记录介质','纸质（不誊抄）+ 数字备份'],['回溯周期','每季度一次']],
    b: h3('记录字段表')
    + ul([
      '<b>时间戳</b>：日期、时刻、地点。',
      '<b>状态</b>：前一晚睡眠时长、脑波状态自评（清醒 / 梦境 / 半醒）。',
      '<b>正文</b>：原始记录，保留涂改。',
      '<b>符号</b>：出现的重复意象（单独列表，便于交叉验证）。',
      '<b>置信度</b>：主观打分 1 至 5，三个月后回看时打第二遍。'
    ])
    + h3('季度回溯步骤')
    + ol([
      '把本季度全部记录按时间排列，逐条核对「被现实事件追认」的条目。',
      '计算追认率的变化趋势——它比单条「神准」重要得多。',
      '把回溯结论写入档案首页，交给导师或解码夜使用。'
    ])
  };

  /* ---------- 觉醒练习 · 分步手册 ---------- */
  DET['prac-1'] = {
    e:'Practice 01 · Merkaba', t:'梅尔卡巴冥想 · 分步手册', l:'以 17 组呼吸旋转星四面体能量场。下面是完整分步流程，第 1 次练习请照读执行。',
    k:[['时长','每日 20 分钟（晨昏各一轮可选）'],['周期','连续 90 天为一个校准周期'],['难度','入门 · 全员']],
    b: h3('17 组呼吸流程（简版教学）')
    + ol([
      '第 1 至 6 组呼吸：吸气 7 秒、呼气 7 秒，想象球体随呼吸扩张——每三组扩大一圈。',
      '第 7 至 13 组呼吸：节奏不变，注意力移向「心中之眼」，球体转为稳定发光。',
      '第 14 至 17 组呼吸：不再数息，观想两个正四面体反向旋转，速度一致即可。',
      '结束后静坐 2 分钟，不立即起身。'
    ])
    + h3('常见问题')
    + ul([
      '数息中断：从中断处继续，不从头重来——对抗式练习无效。',
      '没有「感觉」：前 30 天以「能完成流程」为唯一目标，感受是副产品。',
      '配合音频：会员中心 → 学院 → 第二阶配套音频有全程引导版本。'
    ])
  };

  DET['prac-2'] = {
    e:'Practice 02 · 432Hz', t:'频率校准 432Hz · 分步手册', l:'432Hz 音流配合水晶钵共振，把脑波从 Beta 逐步下移到 Theta。我们如实标注：432Hz 的「特殊性」在科学界尚无共识，俱乐部采用它基于会员主观放松反馈数据。',
    k:[['时长','每日 30 分钟'],['顺序','建议在梅尔卡巴冥想之后进行'],['自测指标','练习前后静息心率差']],
    b: h3('操作流程')
    + ol([
      '佩戴耳机或外放均可，音量以「刚好盖过环境噪声」为度。',
      '播放 432Hz 校准音轨（会员中心可下载），保持身体不动。',
      '第 0 至 10 分钟跟随呼吸放松；第 10 至 25 分钟任由注意力下沉；第 25 至 30 分钟缓慢回神。',
      '记录练习前后的静息心率——30 天后你就有了自己的第一组对比数据。'
    ])
    + note('<b>诚实边界</b>：俱乐部不做医疗声明。脑波与频率的关系以《432Hz 频率实验》纪录片的原始数据为准，欢迎质疑。')
  };

  DET['prac-3'] = {
    e:'Practice 03 · Dream Log', t:'梦境记录 · 90 秒协议', l:'床头固定纸笔，醒来的第一分钟不做任何判断地书写。这是全部档案工作中性价比最高的一件。',
    k:[['时长','每夜 10 分钟（含睡前暗示）'],['进阶','第 30 天起学习清醒梦诱导'],['难度','进阶 · 长老推荐']],
    b: h3('90 秒协议')
    + ol([
      '醒后保持身体姿势不变，先在脑内回放梦的最后 10 秒。',
      '90 秒内开始书写，写不下去就画——符号也是数据。',
      '绝不在当天白天「补写」记忆，补写记录的可信度归零。',
      '每晚入睡前给自己一句暗示：「醒来第一件事是记录」。'
    ])
    + h3('第 30 天起：清醒梦诱导（MILD 法）')
    + ul([
      '睡前复述意图：「下一个梦里，我会认出我在做梦」。',
      '白天设置「现实检验」锚点：每次看手机时间时问一句「这是梦吗」并认真检查。',
      '梦里认出后保持镇定，先做一件小事（如看自己的手），不要过度兴奋而醒。'
    ])
  };

  DET['prac-4'] = {
    e:'Practice 04 · Telepathy 101', t:'心电感应入门 · 双盲卡片协议', l:'双人心传练习。俱乐部不做玄学承诺——这套协议的价值在于它自带评分表，能不能传上，数据说话。',
    k:[['形式','双人 · 每周固定搭档'],['时长','每周 60 分钟'],['校验','第 12 周进行双盲校验']],
    b: h3('双盲卡片协议')
    + ol([
      '准备两套相同图案卡（25 张，星形、螺旋、波纹之类，会员中心可下载打印）。',
      '发送者随机抽一张，凝视投射意念 60 秒；接收者闭眼记录第一帧浮现的画面。',
      '每轮 10 张，交换角色再 10 张——全程不许有语言与眼神交流。',
      '记录得分率。随机基线为 4%（1/25），连续 4 周显著高于基线才进入档案。'
    ])
    + note('<b>评分纪律</b>：由第三人核对，双方事先不知道彼此的记录内容——「双盲」二字不可省略。')
  };

  /* ---------- 遗迹档案 · 实地参观指南 ---------- */
  DET['rel-giza'] = {
    e:'Site Dossier · Giza', t:'吉萨金字塔群 · 实地档案', l:'地球上被研究最充分的「不可能建筑」。数据全部来自实测，参观指南来自俱乐部 2014 年以来 11 次考察的经验。',
    k:[['建造年代','约公元前 2560 年（胡夫金字塔）'],['原始高度','146.6 米（现 138.8 米）'],['用石量','约 230 万块 · 平均单块 2.5 吨'],['对齐精度','底边与正北误差约 0.05 度'],['俱乐部考察','11 次 · 2014 年至今']],
    b: h3('现场看点')
    + ul([
      '<b>大走廊</b>：2.06 米宽、8.6 米高的花岗岩甬道，石块接缝精度至今是教科书级谜题。',
      '<b>国王墓室减压室</b>：五层减压结构，证明设计者对荷载的理解远超同时代。',
      '<b>至日现象</b>：至日前后金字塔南北面明暗分界清晰可见，一年两次。'
    ])
    + h3('参观指南（实用信息）')
    + ul([
      '<b>地点</b>：埃及开罗西南吉萨区；开罗机场入城约 1 小时。',
      '<b>最佳季节</b>：10 月至次年 4 月；夏季正午地表温度可超 50 摄氏度。',
      '<b>门票</b>：景区门票与入塔票分开购买；大埃及博物馆（GEM）已开放，胡夫太阳船移址其中。',
      '<b>俱乐部考察</b>：每年秋季考察团固定线路（见活动日历），长老以上等级可报名。'
    ])
    + ext([['https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza','Wikipedia · Great Pyramid']])
  };

  DET['rel-nazca'] = {
    e:'Site Dossier · Nazca', t:'纳斯卡线条 · 实地档案', l:'只有从空中才能完整识别的地画——绘制它的文明并不具备飞行能力，这是它进入档案库的全部理由。',
    k:[['年代','约公元前 500 年至公元 500 年'],['规模','地画数百个 · 蜂鸟图案长约 93 米'],['保护级别','联合国教科文组织世界遗产（1994）'],['新发现','2021 年 AI 辅助识别出新猫形地画'],['俱乐部考察','3 次']],
    b: h3('现场看点')
    + ul([
      '<b>Mirador 观景塔</b>：公路旁铁塔，不坐飞机也能看到「树」与「手」两幅图案的局部。',
      '<b>小飞机观光</b>：纳斯卡镇机场起飞，全程约 30 分钟——蜂鸟、猴子、宇航员一次看全。',
      '<b>Cantalloc 水渠</b>：同文明修建的地下输水系统，部分至今仍在使用——比图案更震撼的工程。'
    ])
    + h3('参观指南（实用信息）')
    + ul([
      '<b>地点</b>：秘鲁南部纳斯卡镇；利马乘大巴约 7 小时，或飞皮斯科转乘。',
      '<b>最佳季节</b>：12 月至次年 3 月天气最稳，小飞机不易停飞。',
      '<b>注意</b>：小飞机易晕机者提前服用晕机药——驾驶员会刻意左右摇摆给两侧乘客看图。'
    ])
    + ext([['https://en.wikipedia.org/wiki/Nazca_Lines','Wikipedia · Nazca Lines']])
  };

  DET['rel-gobekli'] = {
    e:'Site Dossier · Göbekli Tepe', t:'哥贝克力石阵 · 实地档案', l:'比金字塔早 7000 年、比陶器更早的巨石神庙。它的存在改写了教科书，是史前档案的头号案件。',
    k:[['年代','约公元前 9600 至前 8000 年'],['发现','1994 年 · Klaus Schmidt 主持发掘'],['规模','多个环形区域 · T 形石柱最高 5.5 米重约 10 吨'],['保护级别','世界遗产（2018）'],['俱乐部考察','4 次']],
    b: h3('现场看点')
    + ul([
      '<b>D 环区</b>：最著名的中心环，两根中央石柱雕有狐狸、鹤与蛇的浮雕群。',
      '<b>「袋子」符号石柱</b>：与后世安纳托利亚文明象形符号高度相似的刻纹。',
      '<b>覆盖土层</b>：遗址曾被整体有意掩埋——「谁埋的、为什么埋」比「谁建的」更成谜。'
    ])
    + h3('参观指南（实用信息）')
    + ul([
      '<b>地点</b>：土耳其尚勒乌尔法市东北约 15 公里。',
      '<b>必去两站</b>：遗址现场 + 尚勒乌尔法考古博物馆（原版石柱与浮雕真品）。',
      '<b>最佳季节</b>：4 至 5 月或 9 至 10 月；夏季地表酷热，遮蔽极少。',
      '<b>俱乐部考察</b>：秋季考察团土耳其线核心站点。'
    ])
    + ext([['https://en.wikipedia.org/wiki/G%C3%B6bekli_Tepe','Wikipedia · Göbekli Tepe']])
  };

  DET['rel-easter'] = {
    e:'Site Dossier · Rapa Nui', t:'复活节岛摩艾 · 实地档案', l:'900 尊石像、采石场 400 尊未完成雕像戛然而止——一座被按下暂停键的岛屿。',
    k:[['年代','约公元 1250 至 1500 年'],['数量','约 900 尊 · 最高 21 米 · 最重约 82 吨'],['采石场','拉诺拉拉库（Rano Raraku）'],['管制','国家公园门票 · 岛上停留上限约 30 天'],['俱乐部考察','2 次 · 2027 规划中']],
    b: h3('现场看点')
    + ul([
      '<b>拉诺拉拉库采石场</b>：数百尊雕像从山体岩石中「长」出来，最经典的震撼画面来自这里。',
      '<b>Ahu Tongariki</b>：15 尊摩艾一字排开，日出时分背靠太平洋。',
      '<b>「行走雕像」实验</b>：2012 年团队用绳索让复制品成功「走」起来，与部落口述互证。'
    ])
    + h3('参观指南（实用信息）')
    + ul([
      '<b>地点</b>：智利本土以西约 3600 公里的太平洋岛屿；圣地亚哥直飞约 5.5 小时。',
      '<b>门票</b>：拉帕努伊国家公园门票，入境时购买；各遗址分时段开放。',
      '<b>最佳季节</b>：12 月至次年 3 月为南半球夏季，风浪小。'
    ])
    + ext([['https://en.wikipedia.org/wiki/Moai','Wikipedia · Moai']])
  };

  DET['rel-tiahuanaco'] = {
    e:'Site Dossier · Tiahuanaco', t:'蒂亚瓦纳科 · 实地档案', l:'海拔 3850 米的「石头几何学教科书」，普玛彭古的 H 形石块至今无法被完整解释。',
    k:[['年代','约公元 500 年前后（主体期）'],['海拔','约 3850 米 · 的的喀喀湖畔'],['难点','安山岩硬度极高 · H 形凹槽精度呈激光切割水准'],['俱乐部考察','3 次']],
    b: h3('现场看点')
    + ul([
      '<b>太阳门</b>：整块安山岩雕出的门楣，中央神像与历法刻痕。',
      '<b>普玛彭古 H 块</b>：标准化凹槽与直角，石块之间像积木一样咬合。',
      '<b>排水系统</b>：石造暗渠网络仍在发挥功能。'
    ])
    + h3('参观指南（实用信息）')
    + ul([
      '<b>地点</b>：玻利维亚拉巴斯以北约 1.5 小时车程；通常与的的喀喀湖同线路。',
      '<b>高原反应</b>：海拔近 4000 米，抵步首日放缓节奏，多喝水。',
      '<b>最佳季节</b>：5 至 10 月旱季，天空通透。'
    ])
    + ext([['https://en.wikipedia.org/wiki/Tiwanaku','Wikipedia · Tiwanaku']])
  };

  DET['rel-sxd'] = {
    e:'Site Dossier · Sanxingdui', t:'三星堆 · 实地档案', l:'离我们最近的「异星感」考古现场：一套与中原平行发展、互不统属的视觉神学体系。',
    k:[['年代','约公元前 1200 年（祭祀坑时期）'],['发现','1929 年首次出土 · 1986 年一二号坑 · 2019 至 2022 年新发现 6 坑'],['镇馆之宝','青铜纵目面具宽 1.38 米 · 青铜神树高 3.96 米'],['博物馆','三星堆博物馆新馆 2023-07-27 开放'],['俱乐部考察','2026 国内线规划中']],
    b: h3('现场看点')
    + ul([
      '<b>纵目面具</b>：瞳孔柱状外凸 16 厘米——「纵目」究竟是艺术夸张还是形态记录，档案组存档讨论中。',
      '<b>青铜神树</b>：九鸟栖枝，与《山海经》扶桑十日神话的对应关系值得现场细读。',
      '<b>黄金权杖</b>：与中原「以鼎为权」完全不同的权力符号系统。'
    ])
    + h3('参观指南（实用信息）')
    + ul([
      '<b>地点</b>：四川省广汉市三星堆博物馆；成都东站乘高铁至广汉北约 18 分钟。',
      '<b>预约</b>：新馆热度极高，务必提前在官方渠道预约门票。',
      '<b>最佳节奏</b>：预留半天，先看通史厅再看祭祀坑专题厅。'
    ])
    + ext([['https://zh.wikipedia.org/wiki/%E4%B8%89%E6%98%9F%E5%A0%86%E9%81%97%E5%9D%80','Wikipedia · 三星堆遗址']])
  };

  /* ---------- 三大悬案 · 研究档案 ---------- */
  DET['eni-1'] = {
    e:'Enigma 01 · Research Track', t:'巨石搬运之谜 · 研究档案', l:'平均 2.5 吨、最重 70 吨的石块，以亚毫米级接缝堆叠百万次。实验室正在复现三种假说，进度全部公开。',
    k:[['研究对象','吉萨金字塔群 · 蒂亚瓦纳科 · 哥贝克力'],['方法','假说建模 + 现场实测 + 材料复现'],['进度','实验复现中 · 2026 年发布阶段性报告']],
    b: h3('三条研究路径')
    + ul([
      '<b>机械路径</b>：斜坡、撬棍、湿沙滑轨——已完成部分比例的复现实验。',
      '<b>声学路径</b>：声悬浮铭文与共振现象的文献比对，2025 年起列入观察名单。',
      '<b>地质路径</b>：就地浇筑（地质聚合物）假说的岩相学检验。'
    ])
    + h3('你能参与什么')
    + p('研究学院第三阶学员可申请加入「巨石搬运复现工作组」，2026 年报告的致谢页将列出全部参与会员署名。')
  };

  DET['eni-2'] = {
    e:'Enigma 02 · Research Track', t:'精准天文对齐 · 研究档案', l:'吉萨三大金字塔与猎户座腰带三星的天球投影误差不超过 0.1 度——而这种对齐在全球反复出现。',
    k:[['案例','吉萨 · 玛雅 · 吴哥 · 巨石阵'],['方法','星图回溯建模（考虑岁差）'],['进度','数据建模中']],
    b: h3('建模方法')
    + ul([
      '使用岁差校正后的星图回溯到建造年代的天球状态。',
      '对每个遗址计算「对齐误差分布」，与随机基线比较显著性。',
      '显著案例进入《全球对齐图谱》数据库——会员可在档案库检索。'
    ])
    + h3('诚实边界')
    + p('选择偏差是对齐研究最大的敌人：档案组公开全部「不显著」的案例清单，欢迎质疑与复算——这正是档案方法课的教学案例。')
  };

  DET['eni-3'] = {
    e:'Enigma 03 · Research Track', t:'全球大洪水纪事 · 研究档案', l:'200 余个互不接触的文明保存着高度同构的洪水灭世叙事。它们指向同一场记忆，还是同一个母本？',
    k:[['样本','200 余个文明的洪水叙事'],['时间锚点','约 12,800 年前 · 新仙女木事件'],['进度','文献比对中']],
    b: h3('比对框架')
    + ul([
      '按「触发原因 / 受众规模 / 存活方式 / 延续物」四个字段给每条叙事编码。',
      '跨文明统计编码重合度，识别独立发生与同源传播的区别。',
      '与地质证据（新仙女木撞击假说、融冰淡水脉冲）做时间轴对齐。'
    ])
    + ext([['https://en.wikipedia.org/wiki/Younger_Dryas_impact_hypothesis','Wikipedia · 新仙女木撞击假说']])
    + note('<b>参与方式</b>：会员可在档案库认领未编码的叙事样本，完成编码后署名入库。')
  };

  /* ---------- 影像库 · 观影手册 ---------- */
  DET['vid-1'] = {
    e:'Film Guide · 52 min', t:'《昴宿星来信》 · 观影手册', l:'双线叙事的接触纪录片：镜头同时跟随「接收」与「证伪」两条路径，把判断权完整交给观众。',
    k:[['时长','52 分钟 · 2023'],['荣誉','3 个独立科幻影展提名'],['权限','会员免费']],
    b: h3('章节表')
    + ul([
      '01 开场：七位通灵者的第一次同题接收（00:00）',
      '02 怀疑者视角：一位天文学家的排除清单（12:40）',
      '03 交叉验证现场：三源比对的完整过程（24:15）',
      '04 分歧时刻：两套叙事无法调和的那一段（38:00）',
      '05 结语：判断权交给你（49:30）'
    ])
    + note('<b>观看入口</b>：会员中心 → 影像库；配套《接收记录空白模板》随片下载。')
  };

  DET['vid-2'] = {
    e:'Film Guide · 45 min', t:'《新仙女木：天火纪事》 · 观影手册', l:'冰芯、坑洞与 200 余个文明的洪水记忆，在 12,800 年前交汇。摄制组赴三处关键地点实地取景。',
    k:[['时长','45 分钟 · 2022'],['取景地','格陵兰 · 北美坑洞群 · 土耳其'],['权限','会员免费']],
    b: h3('章节表')
    + ul([
      '01 冰芯里的铁微粒层（00:00）',
      '02 北美：疑似撞击坑的测年（10:30）',
      '03 文明记忆：编码 200 条洪水叙事（21:00）',
      '04 假说对撞：撞击派与内因派同台（34:00）',
      '05 悬而未决：档案组的中立结论（42:00）'
    ])
    + note('<b>配套</b>：与「全球大洪水纪事」研究档案互为表里，先看影片再读档案效率最高。')
  };

  DET['vid-3'] = {
    e:'Film Guide · 26 min', t:'《432Hz 频率实验》 · 观影手册', l:'100 名会员连续 30 天的脑波监测实录——俱乐部实证路线最直接的一次呈现，包括失败的分组。',
    k:[['时长','26 分钟 · 2024'],['样本','100 名会员 · 30 天连续监测'],['权限','会员免费']],
    b: h3('章节表')
    + ul([
      '01 实验设计与分组（00:00）',
      '02 第 1 周：多数人的失眠反弹（06:00）',
      '03 第 2 至 3 周：Theta 占比数据曲线（12:00）',
      '04 诚实汇报：没有显著差异的组（19:00）',
      '05 结论与开放质疑（24:00）'
    ])
    + note('<b>重要</b>：影片完整公开了无显著差异的分组数据——我们不删掉对我们不利的结果。')
  };

  DET['vid-4'] = {
    e:'Film Guide · 38 min', t:'《光体解剖学》 · 观影手册', l:'七层能量体结构的可视化图谱，医学插画级精度。与学院第二阶课程配套观看效果最佳。',
    k:[['时长','38 分钟 · 2025'],['配套','学院第二阶第 6 至 10 讲'],['权限','会员免费 · 非会员看预告']],
    b: h3('章节表')
    + ul([
      '01 总览：七层结构的关系图（00:00）',
      '02 以太体：与肉体的接口（05:00）',
      '03 情绪体与理智体：两套系统的对话（11:00）',
      '04 星灵体：梦境通道的入口（18:00）',
      '05 光体三层：从模板层到合一层（25:00）'
    ])
    + note('<b>观看建议</b>：每看完一层，对照第二阶课程做一次对应练习，记忆留存率翻倍。')
  };

  /* ---------- 学院 · 三阶课表 ---------- */
  DET['aca-1'] = {
    e:'Academy L1 · 12 Lectures', t:'第一阶《宇宙观奠基》· 完整课表', l:'12 讲 × 40 分钟，目标：建立一套自洽、可讨论、经得起追问的宇宙观框架。',
    k:[['开班','每年 3 月与 9 月第一周'],['试听','星际行者可试听前 3 讲'],['结业','12 讲 + 随堂测验']],
    b: h3('讲次安排')
    + ol([
      '为什么是 1420 MHz？——氢线与 SETI 的默认频道',
      '《一的法则》导论：Ra 材料的结构与阅读方法',
      '七级密度模型逐级推演（上）：第 1 至第 3 密度',
      '七级密度模型逐级推演（下）：第 4 至第 7 密度',
      '德雷克方程逐项拆解与当代参数修正',
      '费米悖论的十种主流解法',
      '人类接触史 1947 至 1977：从罗斯威尔到 Wow! 信号',
      '人类接触史 1978 至 2025：从解密档案到 UAP 听证',
      '远古遗迹证据链：从吉萨到哥贝克力',
      '通灵记录的语义分析与盲测方法',
      '宇宙观自检清单：构建经得起追问的框架',
      '结业研讨：你的宇宙观答辩'
    ])
  };

  DET['aca-2'] = {
    e:'Academy L2 · 12 Lectures', t:'第二阶《频率实践》· 完整课表', l:'12 讲 × 60 分钟（含 20 分钟实操），目标：建立稳定的练习节律，拿到第一组属于自己的脑波对比数据。',
    k:[['结业条件','提交 30 天练习档案'],['配套','《432Hz 频率实验》《光体解剖学》两部纪录片'],['前置','建议先完成第一阶']],
    b: h3('讲次安排')
    + ol([
      '呼吸与锚定：神经系统的入门校准',
      '梅尔卡巴几何原理：星四面体的结构与出处',
      '17 组呼吸教学（上）：第 1 至第 6 呼吸',
      '17 组呼吸教学（中）：第 7 至第 13 呼吸',
      '17 组呼吸教学（下）：第 14 至第 17 呼吸',
      '432Hz 与脑波：已知证据与诚实边界',
      '水晶钵实操：音波共振的桌面级复现',
      '梦境记录法：90 秒协议',
      '清醒梦诱导：MILD 标记法',
      '双人心传：双盲卡片协议',
      '30 天练习档案设计',
      '数据复盘：你的第一组脑波对比'
    ])
  };

  DET['aca-3'] = {
    e:'Academy L3 · 12 Lectures', t:'第三阶《档案方法》· 完整课表', l:'12 讲 × 60 分钟实战。结业需独立完成一份候选信号或通灵记录的研究档案，通过教研组评审。',
    k:[['结业授予','「研究员」称号 + 档案库署名'],['实战','以 WOW! / FRB 121102 / BLC-1 三份真实档案为教材'],['评审','教研组现场答辩']],
    b: h3('讲次安排')
    + ol([
      '档案规范：字段、时间戳与原始性',
      '三源交叉验证：冥想、梦境与第三方记录',
      '排除清单设计：从 BLC-1 误报学起',
      'WOW! 案重读：一份 48 年未决档案的完整拆解',
      'FRB 121102：周期性候选信号的三种模型',
      '时间戳回溯：被现实追认的讯息',
      '统计陷阱：确认偏差与数据挑选',
      '研究写作：引用规范与结论强度分级',
      '独立档案工坊（选题）',
      '独立档案工坊（中期检查）',
      '独立档案工坊（终稿打磨）',
      '评审答辩：教研组现场评审'
    ])
  };

  /* ---------- 90 天 · 五站清单 ---------- */
  DET['d90-1'] = {
    e:'Day 1 · Checklist', t:'DAY 1 激活 · 今日清单', l:'万物就绪的一天。照着清单做完，大约 40 分钟。',
    k:[['耗时','约 40 分钟'],['需要','激活邮件 · 入门问卷链接']],
    b: h3('今日清单')
    + ol([
      '查收入会邮件（24 小时内送达），复制激活码启动光体文明智能体。',
      '完成入门问卷：填入你最爱的三部科幻作品——它们是智能体推荐系统的冷启动依据。',
      '下载《新会员手册》（PDF）与第一周冥想音频包。',
      '把「每周四迎新营」订阅链接加入手机日历。'
    ])
    + note('<b>卡住了？</b>智能体首页输入「新手指引」，它会带你逐步走完。')
  };

  DET['d90-2'] = {
    e:'Day 7 · Checklist', t:'DAY 7 首次共振 · 今日清单', l:'参加一场线上迎新冥想营，在 432Hz 音流里完成第一次集体校准。',
    k:[['时间','每周四 20:00（免费）'],['时长','60 分钟'],['数据','92% 新会员在本周写下第一份清醒冥想记录']],
    b: h3('今日清单')
    + ol([
      '会员中心 → 活动 → 迎新冥想营，报名本周四场次。',
      '提前 10 分钟入场调试音频（建议耳机）。',
      '营后 90 秒内完成第一次冥想记录（用 STEP 03 模板）。',
      '把记录第一页拍照发到城市社群——这是多数人的第一条档案。'
    ])
  };

  DET['d90-3'] = {
    e:'Day 30 · Checklist', t:'DAY 30 走进同城圈 · 今日清单', l:'认识第一批同频者。线上校准一百次，不如线下同桌喝一杯。',
    k:[['入口','会员中心 → 活动 → 城市沙龙'],['据点','12 城 · 3,800 名活跃成员'],['附带','领取频率电台完整目录']],
    b: h3('今日清单')
    + ol([
      '报名所在城市（或最近城市）的下一场线下沙龙。',
      '领取《光体频率电台》完整目录，挑出你的三个最爱栏目。',
      '参加后 48 小时内在社群发一篇 300 字见闻——被置顶的见闻将获得会员积分。'
    ])
    + note('<b>2026 巡回城市</b>：深圳、成都、西安、杭州、武汉、长沙；上海与北京为常设场地。')
  };

  DET['d90-4'] = {
    e:'Day 60 · Checklist', t:'DAY 60 提交第一份档案 · 今日清单', l:'在导师带领下完成第一份交叉验证档案——它是进入研究学院第三阶的敲门砖。',
    k:[['形式','导师 1 对 1 · 线上'],['产出','一份三源验证档案'],['去向','档案库 · 你的永久署名']],
    b: h3('今日清单')
    + ol([
      '在会员中心预约导师时段（长老以上会员导师团每周开放时段）。',
      '把前 30 天的冥想记录与梦境记录打包发给导师。',
      '共同完成第一份《三源交叉验证档案》，取得档案编号。',
      '档案编号是第三阶报名表必填字段——妥善保存。'
    ])
  };

  DET['d90-5'] = {
    e:'Day 90 · Checklist', t:'DAY 90 规划升级路线 · 今日清单', l:'与会员顾问做一次 30 分钟一对一，复盘 90 天成长数据，规划下一步。',
    k:[['形式','30 分钟一对一 · 预约制'],['权益','连续打卡满 90 天获年度大会优先席位'],['方向','等级升级 / 学院报名 / 考察团']],
    b: h3('今日清单')
    + ol([
      '会员中心预约 30 分钟会员顾问一对一。',
      '复盘三项数据：冥想连续天数、档案数量、线下活动次数。',
      '确定下一步方向：升级等级、报名学院，或申请秋季考察团。',
      '满 90 天打卡的会员当场领取年度大会优先席位码。'
    ])
  };

  /* ---------- 年度活动 · 季度详情 ---------- */
  DET['season-1'] = {
    e:'Spring · Mar to May', t:'觉醒季 · 活动清单', l:'春分能量门户开启的一季。全年最大的冥想大会与新一期训练营都在这一季启动——新会员入会的最佳窗口。',
    k:[['密度','每月约 2 场'],['主场','上海光体大厦 · 全国巡回'],['关键词','大会 · 训练营 · 沙龙']],
    b: h3('本季活动')
    + ul([
      '<b>2026-03-20 春分大会</b>——年度研究发布 + 千人同步冥想 + 新会员见面（上海）。',
      '<b>3 月第一周</b>——研究学院春季班开班（三阶同期）。',
      '<b>4 月</b>——深圳沙龙；<b>5 月</b>——成都沙龙。',
      '<b>贯穿全季</b>——梅尔卡巴训练营第 12 期（线上 8 周）。'
    ])
  };

  DET['season-2'] = {
    e:'Summer · Jun to Aug', t:'共创季 · 活动清单', l:'重心从「听」转向「做」：工作坊、艺术联展与会员原创作品孵化。',
    k:[['密度','每月约 3 场'],['主场','798 艺术区 · 城市巡回'],['关键词','工作坊 · 联展 · 孵化']],
    b: h3('本季活动')
    + ul([
      '<b>6 月</b>——西安沙龙；光体激活工作坊（线下 2 天，限额 60 人）。',
      '<b>7 月</b>——杭州沙龙；年度艺术联展征稿截止。',
      '<b>8 月</b>——武汉沙龙；会员原创作品孵化营（线上 4 周）。'
    ])
  };

  DET['season-3'] = {
    e:'Autumn · Sep to Oct', t:'丰收季 · 活动清单', l:'把一年的纸上认知放到遗址现场检验：年度国际考察团与研究成果展。',
    k:[['密度','每月约 2 场'],['主场','国际考察线路'],['关键词','考察 · 实证 · 成果展']],
    b: h3('本季活动')
    + ul([
      '<b>9 月</b>——长沙沙龙；研究学院秋季班开班。',
      '<b>2026-10 秋季考察团（埃及线）</b>——吉萨、卢克索、丹德拉，10 天 9 夜，长老以上可报名。',
      '<b>10 月下旬</b>——年度在地研究成果展（上海 798）。'
    ])
  };

  DET['season-4'] = {
    e:'Winter · Nov to Feb', t:'闭关季 · 活动清单', l:'全年最高规格的两场活动：星际文明大会与闭门修行营。向内整合，为下一轮年轮蓄能。',
    k:[['密度','每月约 1 场'],['主场','上海国际会议中心 · 闭门营地点另行公布'],['关键词','大会 · Retreat · 整合']],
    b: h3('本季活动')
    + ul([
      '<b>2026-11-07</b>——解码夜特别场：SETI 补充档案（线上直播）。',
      '<b>2026-11-21 星际文明大会</b>——全员可参加，含闭门研究员环节。',
      '<b>2027-01</b>——「星际觉醒 Retreat」闭门修行营（5 天 4 夜，报名资格：升级满 90 天）。',
      '<b>2027-02</b>——年度会员通讯：全年档案索引与新版白皮书发布。'
    ])
  };

  /* ================= 各路由增强内容 ================= */
  var CONTENT = {};

  /* ---------- 首页 ---------- */
  CONTENT['/'] = sec('/', 'The Explorer Path', '星际探索路径',
    '四个文明纪元，一条完整的觉醒弧线。从远古的遗产出发，途经人类的跃迁，抵达星际的图景，最终以艺术完成表达——点击卡片直达对应栏目。',
    '<div class="gtx-grid gtx-grid-4">'
    + acard('#/prehistoric','01','PATH · 01','史前文明','六处遗址实地档案、三大未解悬案与研究路径——每处遗址都附可直接执行的参观指南。','入口<b>遗产重审</b>')
    + acard('#/human','02','PATH · 02','人类文明','五次文明跃迁年表、四套可照做的觉醒练习手册——每套练习都给出分步流程与自测指标。','入口<b>当下觉醒</b>')
    + acard('#/interstellar','03','PATH · 03','星际文明','四大恒星观测档案、七级密度详解、三份真实信号档案与每月解码夜——仰望从此有坐标。','入口<b>图景展开</b>')
    + acard('#/art','04','PATH · 04','艺术殿堂','策展人语与光体美学七律——当认知抵达语言尽头，艺术接管表达。','入口<b>以美证道</b>')
    + '</div>');

  CONTENT['/'] += sec('/', 'Listen · See · Learn · Meet', '在俱乐部，一个科幻迷能做的四件事',
    '合上一部硬核科幻却找不到人深聊，刷到一条星际信号新闻评论区全是抖机灵——这里把那种孤独变成四件可以天天做的事。每张卡片点开都是一份可直接执行的档案。',
    '<div class="gtx-grid gtx-grid-2">'
    + card('HEAR · 01','听 · 双周更新的声音','光体频率电台','42 期往期节目随时回听；点开附赠《真实收听工具包》：从免费在线射电望远镜到 200 元的入门接收机，今天就能开始接收。','工具<b>免费 · 可立即上手</b>','home-hear')
    + card('SEE · 02','看 · 会员专属片库','光体影像库','四周观影路径 + 真实延展片单：《The Phenomenon》《Ancient Apocalypse》全部附直达链接，与自制纪录片对照观看。','片单<b>四周走完</b>','home-see')
    + card('LEARN · 03','学 · 三阶系统课程','星际文明研究学院','36 讲完整课表逐讲公开，从氢线讲到档案方法论——点开先看课表再决定要不要报，我们不搞悬念。','课表<b>36 讲全公开</b>','home-learn')
    + card('MEET · 04','遇 · 12 城同频圈','2026 线下日历','全年活动日历一次看清：每周四迎新营、每月解码夜、两场年度大会、六城巡回——点开即是可直接报名的时间表。','日历<b>全年可报名</b>','home-meet')
    + '</div>'
    + '<div class="gtx-hint gtx-reveal">点击任意卡片 · 打开完整档案</div>');

  /* ---------- 史前文明 ---------- */
  CONTENT['#/prehistoric'] =
    sec('#/prehistoric', 'Global Ruin Archives', '全球遗迹档案',
      '六处最具代表性的遗址，每一份档案都包含实测数据、现场看点与可直接执行的参观指南——从纸上认知到亲脚踩上那块石头，只差一张机票。'
      + '<div class="gtx-grid gtx-grid-3" style="margin-top:48px">'
      + card('01','埃及 · 2560 BCE','吉萨金字塔群','230 万块巨石、正北误差 0.05 度、大走廊接缝精度至今成谜。档案内含大埃及博物馆购票指南与 11 次考察的实地路线。','实地考察<b>11 次</b>','rel-giza')
      + card('02','秘鲁 · 500 BCE','纳斯卡线条','蜂鸟图案长 93 米，只有空中可完整识别；档案内含观景塔与小飞机双路线攻略与防晕机提示。','实地考察<b>3 次</b>','rel-nazca')
      + card('03','土耳其 · 9600 BCE','哥贝克力石阵','比金字塔早 7000 年的巨石神庙，建成后曾被整体有意掩埋。档案内含尚勒乌尔法博物馆联游路线。','实地考察<b>4 次</b>','rel-gobekli')
      + card('04','智利 · 1250 CE','复活节岛摩艾','900 尊石像、采石场 400 尊未完成雕像戛然而止；档案内含国家公园门票与停留规则。','实地考察<b>2027 规划</b>','rel-easter')
      + card('05','玻利维亚 · 500 CE','蒂亚瓦纳科','海拔 3850 米的安山岩几何学，H 形凹槽精度呈激光切割水准；档案含高原反应应对清单。','实地考察<b>3 次</b>','rel-tiahuanaco')
      + card('06','中国 · 1200 BCE','三星堆','纵目面具、青铜神树与黄金权杖构成独立的视觉神学体系；档案含新馆预约与半天参观节奏。','实地考察<b>2026 规划</b>','rel-sxd')
      + '</div>')
    + sec('#/prehistoric', 'Unsolved Enigmas', '三大未解悬案',
      '它们不是猎奇谈资，而是三扇目前最接近答案的门。每份研究档案都公开方法、进度与参与方式——欢迎带着怀疑进来。'
      + '<div class="gtx-grid gtx-grid-3" style="margin-top:48px">'
      + card('E-01','Enigma · 01','巨石搬运之谜','平均 2.5 吨、最重 70 吨的石块以亚毫米级接缝堆叠百万次。机械、声学、地质三条复现路径的进度全部公开，2026 年发布阶段性报告。','研究进度<b>实验复现中</b>','eni-1')
      + card('E-02','Enigma · 02','精准天文对齐','吉萨与猎户座腰带三星的天球投影误差不超过 0.1 度，同样的对齐在玛雅、吴哥、巨石阵反复出现。档案公开全部「不显著」案例，欢迎复算。','研究进度<b>数据建模中</b>','eni-2')
      + card('E-03','Enigma · 03','全球大洪水纪事','200 余个互不接触的文明保存着高度同构的洪水灭世叙事，四字段编码比对指向 12,800 年前新仙女木事件——样本认领向全员开放。','研究进度<b>文献比对中</b>','eni-3')
      + '</div>');

  /* ---------- 人类文明 ---------- */
  CONTENT['#/human'] =
    sec('#/human', 'Leap Timeline', '文明跃迁年表',
      '文明的进步不是匀速的爬坡，而是间隔性的量子跳跃。回望五次跃迁，你会看到同一种节律——它也预示着第六次的方向。'
      + '<div class="gtx-timeline" style="margin-top:48px">'
      + tlItem('70,000 BCE','第一次跃迁 · 认知革命','智人获得结构化语言与虚构叙事的能力，从「会使用工具的动物」变成「会讲述故事的物种」。这是意识第一次凌驾于本能之上。')
      + tlItem('10,000 BCE','第二次跃迁 · 农业革命','人类从追随自然节律转为塑造自然节律，定居、仓储与历法同时诞生——时间第一次被人工度量，集体意识开始与土地绑定。')
      + tlItem('3,500 BCE','第三次跃迁 · 城市革命','文字、货币与城邦在两河流域同时出现。陌生人大规模协作成为可能，意识从个体与部落扩展为跨血缘的文明网络。')
      + tlItem('1543 CE','第四次跃迁 · 科学革命','哥白尼《天球运行论》出版，人类第一次用可验证的方法追问宇宙。理性成为新的信仰，同时灵性传统被系统性地边缘化。')
      + tlItem('2035 · 下一个节点','第五次跃迁 · 意识革命','26,000 年能量周期的收束点。当足够数量的个体完成频率校准，心电感应、跨维度感知与能量疗愈将从「超能力」还原为「本能力」。这一次，跃迁的主体不再是一个物种，而是一个星球的集体意识。')
      + '</div>')
    + sec('#/human', 'Awakening Practice', '觉醒练习体系',
      '觉醒不是顿悟的偶然，而是可训练的日常。四套基础练习各附完整分步手册——点开就能照做，每一套都有自测指标，不做无法检验的承诺。'
      + '<div class="gtx-grid gtx-grid-4" style="margin-top:48px">'
      + card('01','每日 · 20 分钟','梅尔卡巴冥想','17 组呼吸旋转星四面体能量场。手册含完整分步流程、常见问题与引导音频入口。','难度<b>入门 · 全员</b>','prac-1')
      + card('02','每日 · 30 分钟','频率校准 432Hz','音流配合水晶钵共振，脑波从 Beta 下移至 Theta。手册含操作流程与静息心率自测法——我们如实标注科学界尚无共识的部分。','难度<b>入门 · 全员</b>','prac-2')
      + card('03','每夜 · 10 分钟','梦境记录','90 秒协议 + 第 30 天起的 MILD 清醒梦诱导法。全部档案工作中性价比最高的一件。','难度<b>进阶 · 长老</b>','prac-3')
      + card('04','每周 · 60 分钟','心电感应入门','双盲卡片协议自带评分表：随机基线 4%，连续 4 周显著高于基线才进入档案——能不能传上，数据说话。','难度<b>高阶 · 觉醒者</b>','prac-4')
      + '</div>');

  /* ---------- 星际文明 ---------- */
  CONTENT['#/interstellar'] =
    sec('#/interstellar', 'Stellar Civilization Atlas', '星际文明图谱',
      '四个谱系，每份档案先给「能实测的部分」：距离、星等、观测窗口与肉眼观测方法——先学会真实地看见它，再谈论它的讯息。仰望要有坐标。'
      + '<div class="gtx-grid gtx-grid-2" style="margin-top:48px">'
      + card('01','昴宿星团 · M45 · 444 光年','昴宿星 Pleiadians','肉眼可见的七姊妹，秋冬整夜可见。档案含双筒观测指南、「数星投稿」玩法与三大文明的昴宿记忆比对。','讯息主题<b>爱与情感疗愈</b>','star-pleiades')
      + card('02','天狼星 · 8.6 光年','天狼星 Sirians','全天最亮恒星，古埃及历法的钟摆。档案含冬季观测法、偕日升历法案例与多贡人口述的复核记录。','讯息主题<b>神圣几何与文明基建</b>','star-sirius')
      + card('03','大角星 · 36.7 光年','大角星 Arcturians','春夜最亮的橙巨星，「沿斗柄延伸」即可找到。1933 年它的星光曾点亮芝加哥世博会——一颗与现代文明通过电的星。','讯息主题<b>意识架构与频率护持</b>','star-arcturus')
      + card('04','仙女座 · M31 · 254 万光年','仙女座 Andromedans','肉眼可见的最远天体，新手的「宇宙勋章」。档案含城市观测跳星法与 45 亿年后星系合并的档案组解读。','讯息主题<b>自由意志与宇宙旅行</b>','star-andromeda')
      + '</div>')
    + sec('#/interstellar', 'Density Model', '宇宙七级密度模型',
      '密度不是空间位置，而是意识的振动层级。每一级都可点击展开详解——从元素的沉睡到与万有的合一，每上升一级，感知的边界就扩大一次。'
      + '<div class="gtx-density" style="margin-top:48px">'
      + densityRow('第 1 密度','14%','元素——水、火、土、气，意识的沉睡态','den-1')
      + densityRow('第 2 密度','28%','植物与动物——生长与本能，自我意识尚未点燃','den-2')
      + densityRow('第 3 密度','42%','人类当下——自我觉察与自由选择，「遗忘面纱」','den-3')
      + densityRow('第 4 密度','56%','爱与理解成为默认语言，地球正处入口','den-4')
      + densityRow('第 5 密度','70%','智慧密度——在爱之上叠加光的智慧','den-5')
      + densityRow('第 6 密度','84%','光与爱的合一——昴宿星团核心振动','den-6')
      + densityRow('第 7 密度','97%','与太一合一——大角星所在层级，语言在此失效','den-7')
      + '</div>')
    + sec('#/interstellar', 'Contact Protocol', '星际通信协议',
      '接收星际讯息不需要通灵天赋，需要的是严谨的方法论。三步协议各附可直接照做的实操模板——包括提问模板、验证清单与记录字段表。'
      + '<div class="gtx-grid gtx-grid-3" style="margin-top:48px">'
      + card('STEP 01','Protocol · 接收','进入扩展态','20 分钟流程：从 10 次腹式呼吸到开放式提问。附三条档案组推荐的提问模板与「诚实边界」声明。','实操<b>模板可照做</b>','proto-1')
      + card('STEP 02','Protocol · 校验','三源交叉验证','冥想、梦境、第三方记录三源打分，重合度 70% 以上才进档案库。附完整验证清单与「禁止交换讯息」纪律。','实操<b>清单可打分</b>','proto-2')
      + card('STEP 03','Protocol · 记录','自动书写与回溯','醒后 90 秒黄金窗口 + 五字段记录表 + 季度回溯算法。你的追认率变化趋势，比单条「神准」重要得多。','实操<b>字段表齐全</b>','proto-3')
      + '</div>')
    + sec('#/interstellar', 'Signal Decoding Room', '星际讯息解码室',
      '真正的星际粉丝不满足于「震惊体」新闻——你要的是信号原文、参数与排除过程。三份卷宗全部来自真实公开数据，点开即是完整档案；每月首个周五，解码夜直播逐层拆解。'
      + '<div class="gtx-grid gtx-grid-2">'
      + card('SIG-01','1977 · WOW! 信号','72 秒的窄带强脉冲','1977-08-15，大耳朵望远镜在 1420 MHz 氢线附近记录到 6EQUJ5 强度信号，持续 72 秒——档案含全部原始参数与 48 年复测史。','档案<b>真实数据 · 全公开</b>','sig-wow')
      + card('SIG-02','2016 · FRB 121102','按周期「开关」的宇宙电报','首个确认重复的快速射电暴，宿主矮星系距地球约 30 亿光年，存在约 160 天活动窗口——档案含三种周期模型与动手作业。','档案<b>Berkeley 数据可下载</b>','sig-frb')
      + card('SIG-03','2019 · BLC-1','来自比邻星方向的候选信号','982 MHz 漂移信号，一度最接近「非地球技术源」，最终判定为本地干扰——档案含 Nature 论文链接与排除清单模板。','档案<b>误报教材 · 价值最高</b>','sig-blc')
      + card('SIG-04','每月第一个周五 · 线上直播','解码夜规则与报名','19:30 至 21:30 五段式流程：原文播放、排除过检、建模对比、开放质询、结论归档。过去一年拆解 11 份，3 份至今「未排除」。','下期<b>2026-11-07</b>','sig-night')
      + '</div>');

  /* ---------- 艺术殿堂 ---------- */
  CONTENT['#/art'] =
    sec('#/art', "Curator's Note", '策展人语',
      '在科学与灵性的交汇处，语言常常失效。艺术殿堂存在的理由，就是为那些「知道却说不出来」的体验提供一种可共享的形态。'
      + '<div class="gtx-quote gtx-reveal" style="margin-top:48px">'
      + '<p>我们不收藏描绘宇宙的画，我们收藏「意识在某个瞬间触到更高维度时的震颤」。一幅作品能否进入殿堂，取决于它是否诚实地记录了那次触碰——技法会过时，震颤不会。</p>'
      + '<ul class="gtx-quote-principles">'
      + '<li>以光为素材<span>光即意识，一切色彩都是频率的显影</span></li>'
      + '<li>以维度为空间<span>作品不是挂在墙上，是打开在墙里</span></li>'
      + '<li>以意识为观众<span>打动眼睛的是装饰，打动光体的是艺术</span></li>'
      + '</ul></div>')
    + sec('#/art', 'Seven Aesthetic Laws', '光体美学七律',
      '俱乐部艺术委员会历时三年、从 2,400 件会员作品中提炼的创作共识——它们不约束风格，只描述那些让作品「亮起来」的共同规律。'
      + '<ul class="gtx-laws" style="margin-top:40px">'
      + '<li class="gtx-reveal"><b>光是最贵的颜料</b><span>先决定光从哪里来，再决定颜色。一幅作品的光源即它的意识来源。</span></li>'
      + '<li class="gtx-reveal"><b>负空间是星云</b><span>画面中未被填充的部分不是「空」，而是正在凝聚的星辰，与实存同等用力地经营。</span></li>'
      + '<li class="gtx-reveal"><b>对称即宇宙常数</b><span>从雪花到星系旋臂，对称是造物的默认语法——打破它之前，先彻底掌握它。</span></li>'
      + '<li class="gtx-reveal"><b>色温即情绪频率</b><span>暖色承载记忆，冷色承载预知。色温的每一次偏移，都是叙事的悄悄换挡。</span></li>'
      + '<li class="gtx-reveal"><b>留白是邀请</b><span>给观者的意识留一个可以走进去的入口，填满一切的作品是一堵墙。</span></li>'
      + '<li class="gtx-reveal"><b>材料会呼吸</b><span>数字或实体，媒介都有自己的脾气。顺从它的纹理，而不是征服它。</span></li>'
      + '<li class="gtx-reveal"><b>观者完成作品</b><span>作品在被注视的瞬间才真正诞生——你负责前半生，观者负责后半生。</span></li>'
      + '</ul>');

  /* ---------- 会员中心 ---------- */
  CONTENT['#/member'] =
    sec('#/member', 'Academy Curriculum', '星际文明研究学院',
      '好奇心的终点是研究能力。三阶课程每张卡片点开都是逐讲课表——36 讲标题全部公开，先看课表再决定要不要报，我们不搞悬念。'
      + '<div class="gtx-grid gtx-grid-3">'
      + card('L1','第一阶 · 12 讲','《宇宙观奠基》','每讲 40 分钟：从氢线、密度模型、德雷克方程到接触史全梳理。点开查看 12 讲完整标题。','结业条件<b>12 讲 + 随堂测验</b>','aca-1')
      + card('L2','第二阶 · 12 讲','《频率实践》','每讲含 20 分钟实操：17 组呼吸逐段教学、432Hz 校准、梦境记录与双盲心传。点开查看 12 讲完整标题。','结业条件<b>30 天练习档案</b>','aca-2')
      + card('L3','第三阶 · 12 讲','《档案方法》','以 WOW!、FRB 121102、BLC-1 三份真实档案为教材的实战课，结业交独立研究档案。点开查看 12 讲完整标题。','结业授予<b>「研究员」称号</b>','aca-3')
      + '</div>'
      + '<div class="gtx-hint gtx-reveal">星际行者可试听第一阶前 3 讲 · 长老全阶开放 · 觉醒者含年度面授工作坊</div>')
    + sec('#/member', 'Membership FAQ', '入会问答',
      '关于等级选择、权益使用与会员服务的六个高频问题。没有找到答案的，请联系会员顾问获取一对一解答。'
      + '<div class="gtx-faq" style="margin-top:48px">'
      + '<div class="gtx-faq-item gtx-reveal"><div class="gtx-faq-q">三个等级之间如何选择？</div><p class="gtx-faq-a">以你对社群和实践的投入意愿为标尺：只想先了解和观察，选「星际行者」；已确定要深入实践并参与线下共创，选「星际长老」；希望系统成长到能够带领他人、并参与文明共建，选「光体觉醒者」。等级之间可以随时升级，差价按剩余天数折算。</p></div>'
      + '<div class="gtx-faq-item gtx-reveal"><div class="gtx-faq-q">光体文明智能体如何使用？</div><p class="gtx-faq-a">入会后 24 小时内，你会收到专属激活码与使用手册。基础版包含 24 小时宇宙观答疑与每日能量指引；长老版解锁个性化意识解读与专属内容创作；觉醒者版为终身全功能，并附一场专属定制训练。智能体在网页端与小程序端均可使用，记录云端同步。</p></div>'
      + '<div class="gtx-faq-item gtx-reveal"><div class="gtx-faq-q">线下活动都在哪些城市举办？</div><p class="gtx-faq-a">常态场地为上海光体大厦与北京 798 艺术区，2026 年巡回沙龙为深圳、成都、西安、杭州、武汉、长沙六城。年度大会固定在上海，闭门修行营地点每年在会员通讯中单独公布。</p></div>'
      + '<div class="gtx-faq-item gtx-reveal"><div class="gtx-faq-q">可以从低等级升级到高等级吗？</div><p class="gtx-faq-a">可以。会员中心后台提交升级申请，系统自动折算已享权益的天数差价；升级后立即解锁目标等级全部权益，原等级权益持续有效不中断。每年的「星际觉醒 Retreat」闭门营与理事会列席资格，仅对升级满 90 天的会员开放报名。</p></div>'
      + '<div class="gtx-faq-item gtx-reveal"><div class="gtx-faq-q">支持哪些支付方式？可以开发票吗？</div><p class="gtx-faq-a">支持微信支付、支付宝与对公转账三种方式，年付自动续费可随时在后台关闭。所有等级均可开具增值税普通发票或电子专票，入会后 7 个工作日内提交开票信息即可，发票项目为「会员服务费」。</p></div>'
      + '<div class="gtx-faq-item gtx-reveal"><div class="gtx-faq-q">加入后反悔了怎么办？</div><p class="gtx-faq-a">入会 7 天内可无理由全额退款；超过 7 天，按已生效天数折算退还剩余金额，智能体激活码与已核销的线下活动权益将按实际使用量扣减。退款原路返回，5 个工作日内到账。</p></div>'
      + '</div>');

  /* ---------- 活动日历 ---------- */
  CONTENT['#/events'] =
    sec('#/events', 'Annual Rhythm', '年度活动体系',
      '俱乐部的活动随四季节律展开，形成一条从苏醒到闭关的完整年轮。每季点开都有具体到月份的活动清单——看清整年的结构，你就能为自己规划一条不缺席的成长路径。'
      + '<div class="gtx-grid gtx-grid-4" style="margin-top:48px">'
      + card('春','SPRING · 觉醒季','唤醒与连接','春分大会（3-20 上海）、学院春季班开班、梅尔卡巴训练营第 12 期、深圳与成都沙龙——新会员入会的最佳窗口。','活动密度<b>每月 2 场</b>','season-1')
      + card('夏','SUMMER · 共创季','动手与表达','光体激活工作坊（限额 60 人）、艺术联展征稿、作品孵化营、西安与杭州与武汉沙龙——这一季从「听」转向「做」。','活动密度<b>每月 3 场</b>','season-2')
      + card('秋','AUTUMN · 丰收季','远行与实证','埃及考察团（10 天 9 夜）、秋季班开班、研究成果展（798）——把一年的纸上认知放到遗址现场检验。','活动密度<b>每月 2 场</b>','season-3')
      + card('冬','WINTER · 闭关季','沉潜与整合','星际文明大会（11-21 上海）、解码夜特别场（11-07）、闭门修行营（2027-01）——全年最高规格，向内整合。','活动密度<b>每月 1 场</b>','season-4')
      + '</div>')
    + sec('#/events', 'First 90 Days', '加入后的第一个 90 天',
      '从「粉丝」到「同频者」需要几步？我们把过去三年新会员的成长路径压缩成一张时间表：五个节点各附当日清单，点开照做即可——你不需要在第一天就知道去哪。'
      + '<div class="gtx-feature gtx-reveal"><img src="/images/gtx-gathering.jpg" alt="同频者之夜 · 星空下的集会"/></div>'
      + '<div class="gtx-timeline">'
      + tlItem('DAY 1','激活 · 万物就绪','激活光体文明智能体，完成入门问卷（你最喜欢的三部科幻作品也是它的推荐依据）；下载《新会员手册》与第一周冥想音频。','d90-1')
      + tlItem('DAY 7','首次共振','参加每周四晚 8 点的线上迎新冥想营，在 432Hz 音流里完成第一次集体校准——92% 的新会员在这一周写下人生第一份清醒冥想记录。','d90-2')
      + tlItem('DAY 30','走进同城圈','报名一场所在城市的线下沙龙，认识第一批同频者；领取「光体频率电台」完整目录，找到属于你的三个最爱栏目。','d90-3')
      + tlItem('DAY 60','提交第一份档案','在导师带领下完成第一份梦境或讯息档案的交叉验证记录——它将成为你进入研究学院第三阶的敲门砖。','d90-4')
      + tlItem('DAY 90','规划升级路线','与会员顾问做一次 30 分钟一对一：复盘 90 天成长数据，规划等级升级方向；连续打卡满 90 天的会员获赠年度大会优先席位。','d90-5')
      + '</div>'
      + '<div class="gtx-hint gtx-reveal">点击任意节点 · 查看当日清单</div>');

  /* ---------- 关于我们 ---------- */
  CONTENT['#/about'] = sec('#/about', 'Milestones', '十五载大事记',
    '从十个人的读书会到跨 50 国的星际文明社区，每一步都有据可查。'
    + '<div class="gtx-timeline" style="margin-top:48px">'
    + tlItem('2010','创立 · 十人读书会','陈星光与林月华在上海的一间茶室发起「光体读书会」，10 位成员从共读《一的法则》开始，确立「以科学语言诠释灵性体验」的初始立场。')
    + tlItem('2014','首次全球遗址考察','12 人考察团历时 23 天走访埃及与秘鲁 9 处遗址，采集的测量数据成为俱乐部「实证派」路线的起点，考察制度延续至今。')
    + tlItem('2018','光体智能体 1.0 上线','将 15 年研究档案结构化后的智能问答系统首次面向会员开放，日均答疑 300 余次，「24 小时宇宙观答疑」成为最具口碑的会员权益。')
    + tlItem('2021','会员破万 · 三级体系确立','会员规模突破 10,000 人，覆盖国家达 32 个；同年确立「星际行者—星际长老—光体觉醒者」三级成长体系与城市沙龙制度。')
    + tlItem('2023','光体智造商城上线','能量饰品、文创书籍、音声课程与艺术衍生品四大品类整体上线，商城与会员等级权益打通，构成俱乐部自循环的经济生态。')
    + tlItem('2025','十五周年 · 星际文明年','会员突破 100,000 人、覆盖 50 余国。俱乐部将 2025 年定名为「星际文明年」，发布《地球文明升维白皮书》，并把 2035 设为集体意识跃迁的公开工作节点。')
    + '</div>');

  /* ================= 注入引擎 ================= */
  function ensureStyle(){
    if (document.getElementById('gtx-style')) return;
    var s = document.createElement('style');
    s.id = 'gtx-style'; s.textContent = CSS;
    document.head.appendChild(s);
  }

  var mo = null, timer = null, currentWrap = null;

  function inject(){
    clearTimeout(timer);
    var root = document.getElementById('root');
    if (!root) return;
    ensureStyle();
    var route = location.hash || '/';
    if (currentWrap && currentWrap.dataset.gtxRoute === route && document.documentElement.contains(currentWrap)) return;
    document.querySelectorAll('.gtx-sec').forEach(function(n){ n.remove(); });
    currentWrap = null;
    var html = CONTENT[route];
    if (!html) return;
    var footer = root.querySelector('footer');
    if (!footer) return;
    var frag = document.createElement('div');
    frag.innerHTML = html;
    var nodes = Array.prototype.slice.call(frag.children);
    if (!nodes.length) return;
    nodes[0].dataset.gtxRoute = route;
    nodes.forEach(function (n) { footer.parentNode.insertBefore(n, footer); });
    currentWrap = nodes[0];
    requestAnimationFrame(revealScan);
  }

  function revealScan(){
    var secs = document.querySelectorAll('.gtx-sec');
    var revealAll = function (sec) {
      var kids = sec.querySelectorAll('.gtx-reveal:not(.gtx-in)');
      kids.forEach(function (el, i) {
        el.style.transitionDelay = Math.min(i * 90, 540) + 'ms';
        el.classList.add('gtx-in');
        setTimeout(function () { el.style.transitionDelay = ''; }, 1100 + Math.min(i * 90, 540));
      });
    };
    if (!('IntersectionObserver' in window)) { secs.forEach(revealAll); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { revealAll(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });
    secs.forEach(function (s) { io.observe(s); });
    setTimeout(function () { secs.forEach(revealAll); }, 8000);
  }

  /* ================= 档案模态详情引擎 ================= */
  function closeDetail(){
    var m = document.querySelector('.gtx-modal');
    if (m) {
      m.classList.remove('gtx-on');
      setTimeout(function(){ if (m.parentNode) m.parentNode.removeChild(m); }, 320);
    }
    document.body.style.overflow = '';
  }
  function openDetail(key){
    var d = DET[key];
    if (!d) return;
    closeDetail();
    var wrap = document.createElement('div');
    wrap.className = 'gtx-modal';
    wrap.innerHTML =
      '<div class="gtx-modal-backdrop" data-gtx-close></div>'
      + '<article class="gtx-modal-panel">'
      + '<button class="gtx-modal-x" data-gtx-close aria-label="关闭">✕</button>'
      + '<header class="gtx-head"><div class="gtx-eyebrow"><span class="gtx-line"></span>'
      + d.e + '<span class="gtx-line"></span></div>'
      + '<h2 class="gtx-title">' + d.t + '</h2>'
      + (d.l ? '<p class="gtx-lead">' + d.l + '</p>' : '')
      + '</header>'
      + '<div class="gtx-md-body">' + kv(d.k || []) + d.b + '</div>'
      + '<footer class="gtx-modal-foot"><span>Guangti Dossier · <b>' + key.toUpperCase() + '</b></span><span>仅供研究参考 · 欢迎质疑</span></footer>'
      + '</article>';
    document.body.appendChild(wrap);
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(function(){ requestAnimationFrame(function(){ wrap.classList.add('gtx-on'); }); });
  }

  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-gtx-close]')) { e.preventDefault(); closeDetail(); return; }
    var t = e.target.closest('[data-gtx-detail]');
    if (t) {
      if (e.target.closest('a')) return; /* 卡片内链接不拦截 */
      e.preventDefault();
      openDetail(t.getAttribute('data-gtx-detail'));
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDetail();
  });
  window.addEventListener('hashchange', closeDetail);

  function schedule(){
    clearTimeout(timer);
    timer = setTimeout(inject, 260);
  }

  function start(){
    if (mo) return;
    mo = new MutationObserver(schedule);
    mo.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('hashchange', schedule);
    schedule();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
