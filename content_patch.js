/* ============================================================
   光体·星际文明科幻艺术俱乐部 — 内容增强层 (Content Enhancement)
   由 WorkBuddy 注入：按路由在 React 渲染完成后插入高审美内容区块
   设计语言沿用站内：#050505 底 / 金色 #f9d342 / 紫 #a78bfa
   字体：Orbitron(英文标题) Rajdhani(英文副标) Noto Serif SC(中文标题)
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
  + 'background:rgba(255,255,255,.025);border-radius:4px;'
  + 'transition:border-color .5s,background .5s,transform .5s,box-shadow .5s}'
  + '.gtx-card:hover{border-color:rgba(249,211,66,.45);background:rgba(249,211,66,.04);'
  + 'transform:translateY(-4px);box-shadow:0 20px 60px -20px rgba(249,211,66,.15)}'
  + '.gtx-card-top{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:18px}'
  + '.gtx-num{font-family:Orbitron,sans-serif;font-size:13px;color:rgba(249,211,66,.55);letter-spacing:.2em}'
  + '.gtx-tag{font-family:Rajdhani,sans-serif;font-size:12px;letter-spacing:.18em;'
  + 'color:rgba(167,139,250,.85);text-transform:uppercase}'
  + '.gtx-card-title{font-family:"Noto Serif SC",serif;font-size:20px;font-weight:600;color:#fff;'
  + 'margin:0 0 12px;letter-spacing:.06em}'
  + '.gtx-card-sub{font-family:Rajdhani,sans-serif;font-size:13px;letter-spacing:.22em;color:#f9d342;'
  + 'text-transform:uppercase;margin:0 0 10px}'
  + '.gtx-card-text{color:rgba(255,255,255,.58);font-size:14px;line-height:1.95;'
  + 'font-family:"Noto Sans SC",sans-serif;font-weight:300;margin:0}'
  + '.gtx-card-foot{margin-top:20px;padding-top:16px;border-top:1px solid rgba(255,255,255,.07);'
  + 'display:flex;justify-content:space-between;font-family:Rajdhani,sans-serif;font-size:12px;'
  + 'letter-spacing:.15em;color:rgba(255,255,255,.4);text-transform:uppercase}'
  + '.gtx-card-foot b{color:rgba(249,211,66,.9);font-weight:600}'
  + '.gtx-timeline{position:relative;display:grid;gap:0;margin-top:8px;'
  + 'padding-left:36px}'
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
  + '.gtx-reveal{opacity:0;transform:translateY(28px);transition:opacity .9s cubic-bezier(.2,.6,.2,1),transform .9s cubic-bezier(.2,.6,.2,1)}'
  + '.gtx-reveal.gtx-in{opacity:1;transform:none}'
  + '@media(max-width:900px){'
  + '.gtx-sec{padding:72px 18px}'
  + '.gtx-grid-3,.gtx-grid-4{grid-template-columns:repeat(2,1fr)}'
  + '.gtx-grid-2{grid-template-columns:1fr}'
  + '.gtx-laws{grid-template-columns:1fr;gap:0}'
  + '.gtx-quote-principles{grid-template-columns:1fr}'
  + '.gtx-quote{padding:28px 24px}'
  + '}'
  + '@media(max-width:600px){'
  + '.gtx-grid-3,.gtx-grid-4{grid-template-columns:1fr}'
  + '.gtx-timeline{padding-left:26px}'
  + '}';

  function esc(s){return s}
  function sec(route, eyebrow, title, lead, bodyHtml){
    var ld = lead || '', body = bodyHtml || '';
    // 兼容：若 body 未单独传入且 lead 中混入了块级内容，自动拆分
    if (!body) {
      var m = ld.search(/<(div|ul|section)\b/);
      if (m > -1) { body = ld.slice(m); ld = ld.slice(0, m); }
    }
    // header 自带下间距，去掉内容块的重复 margin
    body = body.replace(/\s*style="margin-top:\d+px"\s*/g, ' ');
    return '<section class="gtx-sec" data-gtx="' + route + '"><div class="gtx-wrap">'
      + '<header class="gtx-head gtx-reveal"><div class="gtx-eyebrow"><span class="gtx-line"></span>'
      + eyebrow + '<span class="gtx-line"></span></div>'
      + '<h2 class="gtx-title">' + title + '</h2>'
      + (ld ? '<p class="gtx-lead">' + ld + '</p>' : '')
      + '</header>' + body + '</div></section>';
  }
  function card(num, tag, title, text, foot){
    return '<article class="gtx-card gtx-reveal"><div class="gtx-card-top">'
      + '<span class="gtx-num">' + num + '</span><span class="gtx-tag">' + tag + '</span></div>'
      + '<h3 class="gtx-card-title">' + title + '</h3>'
      + (text ? '<p class="gtx-card-text">' + text + '</p>' : '')
      + (foot ? '<div class="gtx-card-foot">' + foot + '</div>' : '')
      + '</article>';
  }
  function acard(href, num, tag, title, text, foot){
    return card(num, tag, title, text, foot)
      .replace('<article class="gtx-card', '<a href="' + href + '" class="gtx-card')
      .replace('</article>', '</a>');
  }

  /* ================= 各路由增强内容 ================= */
  var CONTENT = {};

  /* ---------- 首页：星际探索路径 ---------- */
  CONTENT['/'] = sec('/', 'The Explorer Path', '星际探索路径',
    '四个文明纪元，一条完整的觉醒弧线。从远古的遗产出发，途经人类的跃迁，抵达星际的图景，最终以艺术完成表达——建议按顺序浏览。',
    '<div class="gtx-grid gtx-grid-4">'
    + card('01','PATH · 01','史前文明','12,800 年前的异常地质层、86 处超越时代工艺的巨石遗址、跨越 47 个文化的天外来客叙事——从这里开始，重审「文明的起点」。','入口状态<b>遗产重审</b>')
    + card('02','PATH · 02','人类文明','五次文明跃迁的跳跃式年表、意识进化的神经科学证据、2035 年的下一个能量节点——人类不是终点，而是过渡。','入口状态<b>当下觉醒</b>')
    + card('03','PATH · 03','星际文明','昴宿星团、天狼星、大角星、仙女座——四大高等文明的图谱、七级密度模型与星际通信协议。','入口状态<b>图景展开</b>')
    + card('04','PATH · 04','艺术殿堂','当认知抵达语言尽头，艺术接管表达。会员原创作品、年度策展与光体美学七律。','入口状态<b>以美证道</b>')
    + '</div>');

  /* ---------- 史前文明 ---------- */
  CONTENT['#/prehistoric'] =
    sec('#/prehistoric', 'Global Ruin Archives', '全球遗迹档案',
      '从六处最具代表性的遗址出发，每一处都藏着远超其时代工艺水平的建造证据。这些坐标连成的不是旅游地图，而是一张等待重读的星际通信网络。'
      + '<div class="gtx-grid gtx-grid-3" style="margin-top:48px">'
      + card('01','埃及 · 2560 BCE','吉萨金字塔群','230 万块巨石、平均单块 2.5 吨，以 0.05 度误差对齐正北；四条通道分别指向猎户座腰带三星。现代工程学至今无法完整复现其施工组织。','实地考察<b>已纳入</b>')
      + card('02','秘鲁 · 500 BCE','纳斯卡线条','长达 300 米的蜂鸟、猴子与宇航员图案，只有从千米高空才能被完整识别——而绘制它的文明并不具备飞行能力。其制图基准至今无解。','实地考察<b>已纳入</b>')
      + card('03','土耳其 · 9600 BCE','哥贝克力石阵','比金字塔早 7,000 年、比陶器更早的巨石神庙。T 形石柱上的浮雕动物群精确记录了一次天文事件，建成后被有意掩埋。','实地考察<b>已纳入</b>')
      + card('04','智利 · 1250 CE','复活节岛摩艾','887 尊最高 21 米的石像，「行走雕像」的运输假说与部落口述「石像自己走」的记载形成互证；采石场 400 尊未完成雕像戛然而止。','实地考察<b>规划中</b>')
      + card('05','玻利维亚 · 500 CE','蒂亚瓦纳科','普玛彭古石块的 H 形凹槽精度达到激光切割水准，安山岩硬度却让同时代铜石工具束手无策。军事化的直角与标准化暗示流水线式生产。','实地考察<b>已纳入</b>')
      + card('06','中国 · 1200 BCE','三星堆','纵目面具、青铜神树与黄金权杖构成一套独立的视觉神学体系，与中原文明平行发展又互不统属——其突然消失与掩埋坑的仪式性至今成谜。','实地考察<b>规划中</b>')
      + '</div>')
    + sec('#/prehistoric', 'Unsolved Enigmas', '三大未解悬案',
      '它们不是猎奇谈资，而是三扇目前最接近答案的门。每一次新的考古发现，都在为这三道谜题增加新的注脚。'
      + '<div class="gtx-grid gtx-grid-3" style="margin-top:48px">'
      + card('E-01','Enigma · 01','巨石搬运之谜','平均 2.5 吨、最重 70 吨的石块，以亚毫米级接缝堆叠了百万次。声悬浮铭文、磁异常场测量、 lost 浇筑工艺假说——俱乐部实验室正在对三种假说进行复现实验，2026 年发布阶段性报告。','研究进度<b>实验复现中</b>')
      + card('E-02','Enigma · 02','精准天文对齐','吉萨三大金字塔的地面布局与猎户座腰带三星的天球投影误差不超过 0.1 度，而这种对齐在玛雅、吴哥、英国巨石阵反复出现——仿佛所有建造者共享同一份星图。','研究进度<b>数据建模中</b>')
      + card('E-03','Enigma · 03','全球大洪水纪事','《吉尔伽美什史诗》、女娲补天、诺亚方舟、摩诃婆罗多——200 余个互不接触的文明保存着高度同构的洪水灭世叙事，指向 12,800 年前新仙女木事件的同一场记忆。','研究进度<b>文献比对中</b>')
      + '</div>');

  /* ---------- 人类文明 ---------- */
  CONTENT['#/human'] =
    sec('#/human', 'Leap Timeline', '文明跃迁年表',
      '文明的进步不是匀速的爬坡，而是间隔性的量子跳跃。回望五次跃迁，你会看到同一种节律——它也预示着第六次的方向。'
      + '<div class="gtx-timeline" style="margin-top:48px">'
      + '<div class="gtx-tl-item gtx-reveal"><div class="gtx-tl-year">70,000 BCE</div><div class="gtx-tl-name">第一次跃迁 · 认知革命</div><p class="gtx-tl-text">智人获得结构化语言与虚构叙事的能力，从「会使用工具的动物」变成「会讲述故事的物种」。这是意识第一次凌驾于本能之上。</p></div>'
      + '<div class="gtx-tl-item gtx-reveal"><div class="gtx-tl-year">10,000 BCE</div><div class="gtx-tl-name">第二次跃迁 · 农业革命</div><p class="gtx-tl-text">人类从追随自然节律转为塑造自然节律，定居、仓储与历法同时诞生——时间第一次被人工度量，集体意识开始与土地绑定。</p></div>'
      + '<div class="gtx-tl-item gtx-reveal"><div class="gtx-tl-year">3,500 BCE</div><div class="gtx-tl-name">第三次跃迁 · 城市革命</div><p class="gtx-tl-text">文字、货币与城邦在两河流域同时出现。陌生人大规模协作成为可能，意识从个体与部落扩展为跨血缘的文明网络。</p></div>'
      + '<div class="gtx-tl-item gtx-reveal"><div class="gtx-tl-year">1543 CE</div><div class="gtx-tl-name">第四次跃迁 · 科学革命</div><p class="gtx-tl-text">哥白尼《天球运行论》出版，人类第一次用可验证的方法追问宇宙。理性成为新的信仰，同时灵性传统被系统性地边缘化。</p></div>'
      + '<div class="gtx-tl-item gtx-reveal"><div class="gtx-tl-year">2035 · 下一个节点</div><div class="gtx-tl-name">第五次跃迁 · 意识革命</div><p class="gtx-tl-text">26,000 年能量周期的收束点。当足够数量的个体完成频率校准，心电感应、跨维度感知与能量疗愈将从「超能力」还原为「本能力」。这一次，跃迁的主体不再是一个物种，而是一个星球的集体意识。</p></div>'
      + '</div>')
    + sec('#/human', 'Awakening Practice', '觉醒练习体系',
      '觉醒不是顿悟的偶然，而是可训练的日常。以下是俱乐部教学体系中被验证频次最高的四个基础练习，适合每一位新成员按顺序建立自己的练习节奏。'
      + '<div class="gtx-grid gtx-grid-4" style="margin-top:48px">'
      + card('01','每日 · 20 分钟','梅尔卡巴冥想','以 17 组呼吸旋转星四面体能量场，重建光体结构与物质身体的连接。晨昏各一轮，连续 90 天为一个校准周期。','难度<b>入门 · 全员</b>')
      + card('02','每日 · 30 分钟','频率校准','432Hz 音流配合水晶钵共振，将基础脑波从 Beta 逐步下移至 Theta。建议在梅尔卡巴冥想后进行，以承接扩展后的感知状态。','难度<b>入门 · 全员</b>')
      + card('03','每夜 · 10 分钟','梦境记录','床头固定纸笔，醒来的第一分钟不做任何判断地书写。第 30 天起学习清醒梦诱导标记法——梦境是星际信息进入潜意识的标准通道。','难度<b>进阶 · 长老</b>')
      + card('04','每周 · 60 分钟','心电感应入门','双人心传练习：发送者凝视图像卡投射意念，接收者在闭眼状态描述第一帧浮现的画面。每周固定搭档，第 12 周进行双盲校验。','难度<b>高阶 · 觉醒者</b>')
      + '</div>');

  /* ---------- 星际文明（最薄弱，补三块） ---------- */
  CONTENT['#/interstellar'] =
    sec('#/interstellar', 'Stellar Civilization Atlas', '星际文明图谱',
      '经过 15 年、12,000 余条通灵记录的交叉比对，我们梳理出与地球互动最频繁的四大文明。每一个都拥有独立的意识风格与教导主题——它们不是神，而是走在更前面的同行者。'
      + '<div class="gtx-grid gtx-grid-2" style="margin-top:48px">'
      + card('01','昴宿星团 · 第 6 密度','昴宿星人 Pleiadians','与人类基因渊源最深的星际家族，外形与地球人高度接近，被北欧多支传说记载为「光之族」。','讯息主题<b>无条件的爱与情感疗愈</b>')
      + card('02','天狼星系 · 第 5 密度','天狼星人 Sirians','古埃及与玛雅历法的知识源头，掌握神圣几何与能量建筑的完整体系。','讯息主题<b>神圣几何与文明基建</b>')
      + card('03','大角星系 · 第 7 密度','大角星人 Arcturians','已知密度最高的纯能量存有，没有物质形态，以蓝紫色光球被感知。银河系精神防务的守望者。','讯息主题<b>意识架构与频率护持</b>')
      + card('04','仙女座星系 · 跨密度','仙女座人 Andromedans','以自由意志为第一原则的星际旅行者，极少主动接触，却推动着跨维度航行技术的开放。','讯息主题<b>自由意志与宇宙旅行</b>')
      + '</div>')
    + sec('#/interstellar', 'Density Model', '宇宙七级密度模型',
      '密度不是空间位置，而是意识的振动层级。从元素的沉睡到与万有的合一，每上升一级，感知的边界就扩大一次。'
      + '<div class="gtx-density" style="margin-top:48px">'
      + '<div class="gtx-density-row gtx-reveal"><div class="gtx-d-label">第 1 密度</div><div class="gtx-d-bar"><i style="width:14%"></i><em>元素——水、火、土、气，意识的沉睡态，尚未觉察</em></div></div>'
      + '<div class="gtx-density-row gtx-reveal"><div class="gtx-d-label">第 2 密度</div><div class="gtx-d-bar"><i style="width:28%"></i><em>植物与动物——生长与本能，自我意识尚未点燃</em></div></div>'
      + '<div class="gtx-density-row gtx-reveal"><div class="gtx-d-label">第 3 密度</div><div class="gtx-d-bar"><i style="width:42%"></i><em>人类当下——自我觉察与自由选择，唯一密度中拥有「遗忘面纱」</em></div></div>'
      + '<div class="gtx-density-row gtx-reveal"><div class="gtx-d-label">第 4 密度</div><div class="gtx-d-bar"><i style="width:56%"></i><em>爱与理解成为默认语言，心电感应常态化，地球正处入口</em></div></div>'
      + '<div class="gtx-density-row gtx-reveal"><div class="gtx-d-label">第 5 密度</div><div class="gtx-d-bar"><i style="width:70%"></i><em>智慧密度——在爱之上叠加光的智慧，天狼星人栖居于此</em></div></div>'
      + '<div class="gtx-density-row gtx-reveal"><div class="gtx-d-label">第 6 密度</div><div class="gtx-d-bar"><i style="width:84%"></i><em>光与爱的合一——昴宿星团的核心振动，个体与团体并存</em></div></div>'
      + '<div class="gtx-density-row gtx-reveal"><div class="gtx-d-label">第 7 密度</div><div class="gtx-d-bar"><i style="width:97%"></i><em>与太一合一——大角星人所在层级，意识完全融入宇宙本源</em></div></div>'
      + '</div>')
    + sec('#/interstellar', 'Contact Protocol', '星际通信协议',
      '接收星际讯息不需要通灵天赋，需要的是严谨的方法论。俱乐部将 15 年的通讯实践提炼为三步协议，每一位成员都可以按此建立自己的记录档案。'
      + '<div class="gtx-grid gtx-grid-3" style="margin-top:48px">'
      + card('STEP 01','Protocol · 接收','进入扩展态','在梅尔卡巴冥想的余韵中保持 Theta 脑波，以开放式提问代替索取式提问。频率相近的讯息才会进入你的接收带宽——你调到什么频道，就收到什么节目。','关键点<b>频率即天线</b>')
      + card('STEP 02','Protocol · 校验','三源交叉验证','任何单条讯息都不构成结论。同一段讯息需在冥想感知、梦境符号与第三方通灵记录三个通道中交叉比对，重合度达 70% 以上才进入档案库。','关键点<b>共鸣非证据，交叉才是</b>')
      + card('STEP 03','Protocol · 记录','自动书写与回溯','醒后 90 秒内完成记录，保留原始笔迹不誊抄。每季度对全部档案做时间戳回溯——被现实事件「追认」的讯息，是校准个人接收频率最珍贵的数据。','关键点<b>档案即成长曲线</b>')
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
      '这是俱乐部艺术委员会历时三年、从 2,400 件会员作品中提炼的创作共识——它们不约束风格，只描述那些让作品「亮起来」的共同规律。'
      + '<ul class="gtx-laws" style="margin-top:40px">'
      + '<li class="gtx-reveal"><b>光是最贵的颜料</b><span>先决定光从哪里来，再决定颜色。一幅作品的光源即它的意识来源。</span></li>'
      + '<li class="gtx-reveal"><b>负空间是星云</b><span>画面中未被填充的部分不是「空」，而是正在凝聚的星辰，与实存同等用力地经营。</span></li>'
      + '<li class="gtx-reveal"><b>对称即宇宙常数</b><span>从雪花到星系旋臂，对称是造物的默认语法——打破它之前，先彻底掌握它。</span></li>'
      + '<li class="gtx-reveal"><b>色温即情绪频率</b><span>暖色承载记忆，冷色承载预知。色温的每一次偏移，都是叙事的悄悄换挡。</span></li>'
      + '<li class="gtx-reveal"><b>留白是邀请</b><span>给观者的意识留一个可以走进去的入口，填满一切的作品是一堵墙。</span></li>'
      + '<li class="gtx-reveal"><b>材料会呼吸</b><span>数字或实体，媒介都有自己的脾气。顺从它的纹理，而不是征服它。</span></li>'
      + '<li class="gtx-reveal"><b>观者完成作品</b><span>作品在被注视的瞬间才真正诞生——你负责前半生，观者负责后半生。</span></li>'
      + '</ul>');

  /* ---------- 会员中心 FAQ ---------- */
  CONTENT['#/member'] = sec('#/member', 'Membership FAQ', '入会问答',
    '关于等级选择、权益使用与会员服务的六个高频问题。没有找到答案的，请联系会员顾问获取一对一解答。'
    + '<div class="gtx-faq" style="margin-top:48px">'
    + '<div class="gtx-faq-item gtx-reveal"><div class="gtx-faq-q">三个等级之间如何选择？</div><p class="gtx-faq-a">以你对社群和实践的投入意愿为标尺：只想先了解和观察，选「星际行者」；已确定要深入实践并参与线下共创，选「星际长老」；希望系统成长到能够带领他人、并参与文明共建，选「光体觉醒者」。等级之间可以随时升级，差价按剩余天数折算。</p></div>'
    + '<div class="gtx-faq-item gtx-reveal"><div class="gtx-faq-q">光体文明智能体如何使用？</div><p class="gtx-faq-a">入会后 24 小时内，你会收到专属激活码与使用手册。基础版包含 24 小时宇宙观答疑与每日能量指引；长老版解锁个性化意识解读与专属内容创作；觉醒者版为终身全功能，并附一场专属定制训练。智能体在网页端与小程序端均可使用，记录云端同步。</p></div>'
    + '<div class="gtx-faq-item gtx-reveal"><div class="gtx-faq-q">线下活动都在哪些城市举办？</div><p class="gtx-faq-a">常态场地为上海光体大厦与北京 798 艺术区，每月另有两座城市轮换举办沙龙，2025 年巡回城市为深圳、杭州、成都、西安、武汉、长沙。年度大会固定在上海，闭门修行营地点每年在会员通讯中单独公布。</p></div>'
    + '<div class="gtx-faq-item gtx-reveal"><div class="gtx-faq-q">可以从低等级升级到高等级吗？</div><p class="gtx-faq-a">可以。会员中心后台提交升级申请，系统自动折算已享权益的天数差价；升级后立即解锁目标等级全部权益，原等级权益持续有效不中断。每年的「星际觉醒 Retreat」闭门营与理事会列席资格，仅对升级满 90 天的会员开放报名。</p></div>'
    + '<div class="gtx-faq-item gtx-reveal"><div class="gtx-faq-q">支持哪些支付方式？可以开发票吗？</div><p class="gtx-faq-a">支持微信支付、支付宝与对公转账三种方式，年付自动续费可随时在后台关闭。所有等级均可开具增值税普通发票或电子专票，入会后 7 个工作日内提交开票信息即可，发票项目为「会员服务费」。</p></div>'
    + '<div class="gtx-faq-item gtx-reveal"><div class="gtx-faq-q">加入后反悔了怎么办？</div><p class="gtx-faq-a">入会 7 天内可无理由全额退款；超过 7 天，按已生效天数折算退还剩余金额，智能体激活码与已核销的线下活动权益将按实际使用量扣减。退款原路返回，5 个工作日内到账。</p></div>'
    + '</div>');

  /* ---------- 活动日历 ---------- */
  CONTENT['#/events'] =
    sec('#/events', 'Annual Rhythm', '年度活动体系',
      '俱乐部的活动随四季节律展开，形成一条从苏醒到闭关的完整年轮。看清整年的结构，你就能为自己规划一条不缺席的成长路径。'
      + '<div class="gtx-grid gtx-grid-4" style="margin-top:48px">'
      + card('春','SPRING · 觉醒季','唤醒与连接','春分能量门户开启。全年最大的星际冥想大会、月度通灵会与新一期梅尔卡巴训练营都在这一季启动——适合新成员入会。','活动密度<b>每月 2 场</b>')
      + card('夏','SUMMER · 共创季','动手与表达','光体激活工作坊、艺术联展与城市巡回沙龙集中登场。这一季的重心从「听」转向「做」，会员原创作品在此孵化。','活动密度<b>每月 3 场</b>')
      + card('秋','AUTUMN · 丰收季','远行与实证','年度国际考察团（埃及、秘鲁、土耳其轮换）与全年在地研究成果展。把一年的纸上认知放到遗址现场检验。','活动密度<b>每月 2 场</b>')
      + card('冬','WINTER · 闭关季','沉潜与整合','「星际觉醒 Retreat」闭门修行营与年度光体文明大会。全年最高规格的两场活动，向内整合，为下一轮年轮蓄能。','活动密度<b>每月 1 场</b>')
      + '</div>')
    + sec('#/events', 'Archive · 2024', '往期年度回顾',
      '过去一年的活动数据，是这颗社区心跳最诚实的记录。'
      + '<div class="gtx-grid gtx-grid-3" style="margin-top:48px">'
      + card('46','场 · 全年活动','线上线下全覆盖','2024 年共举办 46 场活动：线上冥想与传讯会 28 场、线下工作坊与沙龙 12 场、国际考察团 3 团、闭门修行营 1 期、年度大会 1 届，覆盖会员与非会员全人群。','参与人次<b>12,000+</b>')
      + card('12','城 · 巡回沙龙','全国同频网络','上海、北京、深圳、杭州、成都、广州、西安、武汉、南京、重庆、苏州、长沙——12 座城市的线下沙龙让「同频圈层」从线上走到桌边。','城市覆盖<b>12 城</b>')
      + card('98','% · 满意度','活动质量指数','2024 年活动匿名问卷综合满意度 98.2%，其中「内容深度」与「圈层质量」两项评分最高；投诉最集中的是「名额太少抢不到」——2025 年已扩容 40%。','评价样本<b>3,400 份</b>')
      + '</div>');

  /* ---------- 关于我们 ---------- */
  CONTENT['#/about'] = sec('#/about', 'Milestones', '十五载大事记',
    '从十个人的读书会到跨 50 国的星际文明社区，每一步都有据可查。'
    + '<div class="gtx-timeline" style="margin-top:48px">'
    + '<div class="gtx-tl-item gtx-reveal"><div class="gtx-tl-year">2010</div><div class="gtx-tl-name">创立 · 十人读书会</div><p class="gtx-tl-text">陈星光与林月华在上海的一间茶室发起「光体读书会」，10 位成员从共读《一的法则》开始，确立「以科学语言诠释灵性体验」的初始立场。</p></div>'
    + '<div class="gtx-tl-item gtx-reveal"><div class="gtx-tl-year">2014</div><div class="gtx-tl-name">首次全球遗址考察</div><p class="gtx-tl-text">12 人考察团历时 23 天走访埃及与秘鲁 9 处遗址，采集的测量数据成为俱乐部「实证派」路线的起点，考察制度延续至今。</p></div>'
    + '<div class="gtx-tl-item gtx-reveal"><div class="gtx-tl-year">2018</div><div class="gtx-tl-name">光体智能体 1.0 上线</div><p class="gtx-tl-text">将 15 年研究档案结构化后的智能问答系统首次面向会员开放，日均答疑 300 余次，「24 小时宇宙观答疑」成为最具口碑的会员权益。</p></div>'
    + '<div class="gtx-tl-item gtx-reveal"><div class="gtx-tl-year">2021</div><div class="gtx-tl-name">会员破万 · 三级体系确立</div><p class="gtx-tl-text">会员规模突破 10,000 人，覆盖国家达 32 个；同年确立「星际行者—星际长老—光体觉醒者」三级成长体系与城市沙龙制度。</p></div>'
    + '<div class="gtx-tl-item gtx-reveal"><div class="gtx-tl-year">2023</div><div class="gtx-tl-name">光体智造商城上线</div><p class="gtx-tl-text">能量饰品、文创书籍、音声课程与艺术衍生品四大品类整体上线，商城与会员等级权益打通，构成俱乐部自循环的经济生态。</p></div>'
    + '<div class="gtx-tl-item gtx-reveal"><div class="gtx-tl-year">2025</div><div class="gtx-tl-name">十五周年 · 星际文明年</div><p class="gtx-tl-text">会员突破 100,000 人、覆盖 50 余国。俱乐部将 2025 年定名为「星际文明年」，发布《地球文明升维白皮书》，并把 2035 设为集体意识跃迁的公开工作节点。</p></div>'
    + '</div>');

  /* ---------- 首页：粉丝视角 · 听见看见学到遇见 ---------- */
  CONTENT['/'] += sec('/', 'Listen · See · Learn · Meet', '在俱乐部，一个科幻迷能做的四件事',
    '你一定经历过这样的时刻：合上一部硬核科幻，却找不到人深聊；刷到一条星际信号新闻，评论区全是抖机灵。这里把那种孤独，变成了四件可以天天做的事——点击卡片直达对应栏目。',
    '<div class="gtx-grid gtx-grid-2">'
    + acard('#/interstellar','HEAR · 01','听 · 双周更新的声音','光体频率电台',
      '42 期往期节目随时回听：从 WOW! 信号的原始频谱逐帧精读，到与 12 位研究者的深度对谈。通勤路上的 30 分钟，就是一次宇宙观测。',
      '最新一期<b>第 42 期 · FRB 周期源</b>')
    + acard('#/human','SEE · 02','看 · 会员专属片库','光体影像库',
      '24 部自制纪录片与 300 小时修复影像全量免费：《昴宿星来信》《新仙女木天火》《432Hz 频率实验》——在别处看不到的，都在这里。',
      '片库规模<b>300+ 小时</b>')
    + acard('#/member','LEARN · 03','学 · 三阶系统课程','星际文明研究学院',
      '36 讲课程从《一的法则》精读讲到档案交叉验证方法论；结业提交一份研究档案，通过评审授予「研究员」称号。把好奇心，长成研究能力。',
      '在校学员<b>2,600 人</b>')
    + acard('#/events','MEET · 04','遇 · 12 城同频圈','同频者之夜',
      '12 城巡回沙龙、46 场年度活动与一年一度的星际文明大会——和 10 万名同样仰望星空的人当面聊天。在现实世界里，这件事比想象中稀有。',
      '线下据点<b>12 城 · 3,800 名活跃成员</b>')
    + '</div>'
    + '<div class="gtx-hint gtx-reveal">点击任意卡片，直达对应栏目</div>');

  /* ---------- 星际文明：星际讯息解码室 ---------- */
  CONTENT['#/interstellar'] += sec('#/interstellar', 'Signal Decoding Room', '星际讯息解码室',
    '真正的星际粉丝不满足于「震惊体」新闻——你要的是信号原文、参数与排除过程。俱乐部每月一期「解码夜」，把真实信号档案摊在桌上逐层拆解。以下三份，是档案库中被翻阅最多的入门卷宗。',
    '<div class="gtx-grid gtx-grid-2">'
    + card('SIG-01','1977 · WOW! 信号','72 秒的窄带强脉冲',
      '1977 年 8 月 15 日，「大耳朵」射电望远镜在 1420MHz 氢线附近记录到强度高出背景 30 倍、持续 72 秒的窄带信号——此后 48 年，同一方向再未复现。解码夜关注点：为什么「未复现」反而符合真实信号的部分特征。',
      '解码夜<b>已拆解 · 第 07 期</b>')
    + card('SIG-02','2016 · FRB 121102','按周期「开关」的宇宙电报',
      '人类首次定位到重复快速射电暴的宿主星系，距地球约 30 亿光年；后续观测显示其爆发存在约 160 天的周期窗口。解码夜关注点：周期性意味着轨道、自转或介质调制——三种模型各自的证据与漏洞。',
      '解码夜<b>已拆解 · 第 19 期</b>')
    + card('SIG-03','2019 · BLC-1','来自比邻星方向的候选信号',
      '帕克斯望远镜在 982MHz 捕捉到的漂移信号，一度被视为最接近「非地球技术源」的候选——最终被证明与地面基站频率高度吻合。解码夜关注点：这次误报教会我们如何设计更严苛的排除清单。',
      '解码夜<b>已拆解 · 第 31 期</b>')
    + card('SIG-04','每月第一个周五 · 线上直播','解码夜规则',
      '会员提交候选信号，档案组调取原始数据，直播逐层排除，结论与存疑点全部归档公开。过去一年共拆解 11 份档案，其中 3 份至今保持「未排除」状态——它们仍在等待一个更聪明的你。',
      '下期预告<b>11 月 7 日 · SETI 补充档案</b>')
    + '</div>');

  /* ---------- 人类文明：光体影像库 ---------- */
  CONTENT['#/human'] += sec('#/human', 'Visual Archive', '光体影像库',
    '看到即触及。影像库的每一部作品都由俱乐部制作组与会员共创完成：实地拍摄、档案修复、通灵记录的可视化转译。会员全量免费观看，非会员每月开放一部。',
    '<div class="gtx-grid gtx-grid-2">'
    + card('VID-01','52 分钟 · 2023','《昴宿星来信》',
      '七位通灵者与一位持怀疑态度的天文学家双线叙事：镜头同时跟随「接收」与「证伪」两条路径，把判断权完整交给观众。上映当年获 3 个独立科幻影展提名。',
      '观看权限<b>会员免费</b>')
    + card('VID-02','45 分钟 · 2022','《新仙女木：天火纪事》',
      '格陵兰冰芯、北美可疑坑洞与全球 200 余个文明的洪水记忆，在 12,800 年前的时间点上交汇。摄制组历时两年，赴三处关键地点实地取景。',
      '观看权限<b>会员免费</b>')
    + card('VID-03','26 分钟 · 2024','《432Hz 频率实验》',
      '100 名会员连续 30 天的脑波监测实录：从第 1 天到第 30 天，Theta 波占比的完整数据曲线与个体访谈——俱乐部实证路线最直接的一次呈现。',
      '观看权限<b>会员免费</b>')
    + card('VID-04','38 分钟 · 2025','《光体解剖学》',
      '七层能量体结构的可视化图谱：以医学插画级别的精度，逐层呈现从以太体到光体的位置、功能与开启条件。与学院第二阶课程配套观看效果最佳。',
      '观看权限<b>会员免费 · 非会员看预告</b>')
    + '</div>');

  /* ---------- 会员中心：星际文明研究学院 ---------- */
  CONTENT['#/member'] += sec('#/member', 'Academy Curriculum', '星际文明研究学院',
    '好奇心的终点是研究能力。学院把 15 年档案沉淀为三阶课程：从建立宇宙观，到动手实践，再到像研究者一样处理一份真实档案。全部课程由理事会教研组讲授，每年 3 月与 9 月开班。',
    '<div class="gtx-grid gtx-grid-3">'
    + card('L1','第一阶 · 12 讲','《宇宙观奠基》',
      '每讲 40 分钟：《一的法则》逐章精读、七级密度模型推演、人类接触史（1947-2025）全梳理。目标：建立一套自洽、可讨论、经得起追问的宇宙观框架。',
      '结业条件<b>12 讲 + 随堂测验</b>')
    + card('L2','第二阶 · 12 讲','《频率实践》',
      '每讲含 20 分钟实操：梅尔卡巴冥想逐层教学、432Hz 水晶钵校准、梦境记录与清醒梦诱导。目标：建立稳定的个人练习节律，拿到第一组属于自己的脑波对比数据。',
      '结业条件<b>30 天练习档案</b>')
    + card('L3','第三阶 · 12 讲','《档案方法》',
      '真实档案实战：三源交叉验证、时间戳回溯、讯息误报的排除清单设计。结业需独立完成一份候选信号或通灵记录的研究档案，并通过教研组评审。',
      '结业授予<b>「研究员」称号</b>')
    + '</div>'
    + '<div class="gtx-hint gtx-reveal">星际行者可试听第一阶前 3 讲 · 长老全阶开放 · 觉醒者含年度面授工作坊</div>');

  /* ---------- 活动日历：加入后的第一个 90 天 ---------- */
  CONTENT['#/events'] += sec('#/events', 'First 90 Days', '加入后的第一个 90 天',
    '从「粉丝」到「同频者」需要几步？我们把过去三年新会员的成长路径压缩成一张时间表：你不需要在第一天就知道去哪，只需要照着走完这五站。',
    '<div class="gtx-feature gtx-reveal"><img src="/images/gtx-gathering.jpg" alt="同频者之夜 · 星空下的集会"/></div>'
    + '<div class="gtx-timeline">'
    + '<div class="gtx-tl-item gtx-reveal"><div class="gtx-tl-year">DAY 1</div><div class="gtx-tl-name">激活 · 万物就绪</div><p class="gtx-tl-text">激活光体文明智能体，完成入门问卷（你最喜欢的三部科幻作品也是它的推荐依据）；下载《新会员手册》与第一周冥想音频。</p></div>'
    + '<div class="gtx-tl-item gtx-reveal"><div class="gtx-tl-year">DAY 7</div><div class="gtx-tl-name">首次共振</div><p class="gtx-tl-text">参加一场线上迎新冥想营（每周四晚 8 点固定开营），在 432Hz 音流里完成第一次集体校准——92% 的新会员在这一周写下人生第一份清醒冥想记录。</p></div>'
    + '<div class="gtx-tl-item gtx-reveal"><div class="gtx-tl-year">DAY 30</div><div class="gtx-tl-name">走进同城圈</div><p class="gtx-tl-text">报名一场所在城市的线下沙龙，认识第一批同频者；领取「光体频率电台」完整目录，找到属于你的三个最爱栏目。</p></div>'
    + '<div class="gtx-tl-item gtx-reveal"><div class="gtx-tl-year">DAY 60</div><div class="gtx-tl-name">提交第一份档案</div><p class="gtx-tl-text">在导师带领下完成第一份梦境或讯息档案的交叉验证记录——它将成为你进入研究学院第三阶的敲门砖。</p></div>'
    + '<div class="gtx-tl-item gtx-reveal"><div class="gtx-tl-year">DAY 90</div><div class="gtx-tl-name">规划升级路线</div><p class="gtx-tl-text">与会员顾问做一次 30 分钟一对一：复盘 90 天成长数据，规划等级升级方向；连续打卡满 90 天的会员获赠年度大会优先席位。</p></div>'
    + '</div>'
    + '<div class="gtx-hint gtx-reveal">92% 的新会员在 90 天内参加了至少一场线下活动</div>');

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
    // 检查当前注入是否仍然有效（React 未重渲染）
    if (currentWrap && currentWrap.dataset.gtxRoute === route && document.documentElement.contains(currentWrap)) return;
    // 清除所有旧注入节点
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
        // 入场动画结束后清除延迟，避免拖慢 hover 反馈
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
    // 兜底：无论任何环境，8 秒后全部显示，绝不让内容不可见
    setTimeout(function () { secs.forEach(revealAll); }, 8000);
  }

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
