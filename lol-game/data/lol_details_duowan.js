const heroDetailArr = [{
    id: "rakan",
    title: "幻翎",
    name: "洛",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big497000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big497001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big497002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big497003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big497004.jpg"
    ],
    tags: ["辅助"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small497000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small497001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small497002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small497003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small497004.jpg"
    ],
    Ability: {
      life: "60",
      physical: "10",
      magic: "60",
      difficulty: "50"
    },
    story: "对洛特兰部落而言，瓦斯塔亚的洛是臭名远播的捣蛋鬼，同时也是有史以来最为出色的战舞舞者。他风流潇洒，魅力无穷，同时却令人难以捉摸。在艾欧尼亚高地的居民眼中，“洛”这个名字一直都跟热闹非凡的节日庆典、热火朝天的狂欢派对和杂乱无章的音乐划上等号。很少人知道，这个精力充沛的浪荡子和叛逆的霞是一对儿，而他的一举一动就是为了全力配合她的行动。“自由为伍，佳人为伴，还有值得献身的道义。”"
  },
  {
    id: "Sylas",
    title: "解脱者",
    name: "塞拉斯",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big517000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big517001.jpg"
    ],
    tags: ["中单", "打野"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small517000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small517001.jpg"
    ],
    Ability: {
      life: "80",
      physical: "30",
      magic: "70",
      difficulty: "80"
    },
    story: "作为一个出生于德玛西亚穷苦家庭的法师，虽然当时塞拉斯还只是一个少年，搜魔人还是将他终身监禁。他使用偷来的魔法杀害了场上所有人，除了饱受惊吓的拉克丝。塞拉斯不是以逃犯的身份离开搜魔人监狱，而是成为了法师反抗的代表。"
  },
  {
    id: "ivern",
    title: "翠神",
    name: "艾翁",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big427000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big427001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big427002.jpg"
    ],
    tags: ["辅助", "法师", "打野"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small427000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small427001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small427002.jpg"
    ],
    Ability: {
      life: "50",
      physical: "30",
      magic: "60",
      difficulty: "80"
    },
    story: "背景故事人们所说的翠神，真正的名字是艾翁·荆足。半人半树的它，常在符文之地的丛林中游荡，所经之处无不生机盎然。他知晓自然界的种种秘密，无论是飞禽走兽还是游鱼虫孑，都与他交谊深厚。在逍遥四野的途中，艾翁会向路遇的人传授奇特的智慧，或是培植丰茂的丛林。时不时地，他也会向口风不严的蝴蝶托付自己所知的秘密。"
  },
  {
    id: "tahmkench",
    title: "河流之王",
    name: "塔姆",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big223000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big223001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big223002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big223003.jpg"
    ],
    tags: ["坦克", "辅助"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small223000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small223001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small223002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small223003.jpg"
    ],
    Ability: {
      life: "80",
      physical: "30",
      magic: "60",
      difficulty: "50"
    },
    story: "''世界，就是一条河流，而我，是它的国王。''塔姆丶肯奇在符文大陆的各个水道游历着，用毫无戒心者们的悲惨喂养着他那贪得无厌的食欲。这个充满奇异魅力的美食家纵情享受着猎物们受苦时的每个时刻。一次伴随着两件外套*的交易也许会带你通往任何想去的地方，但你的旅程几乎必然会在绝望的深渊中结束。（注：“两件外套”是一首福音曲，歌词大意是关于一新一旧两件外套的选择，其中的新外套是由救世主赐予的，然而塔姆并不像救世主那样仁慈。）"
  },
  {
    id: "xayah",
    title: "逆羽",
    name: "霞",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big498000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big498001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big498002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big498003.jpg"
    ],
    tags: ["射手"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small498000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small498001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small498002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small498003.jpg"
    ],
    Ability: {
      life: "70",
      physical: "80",
      magic: "10",
      difficulty: "50"
    },
    story: "身为瓦斯塔亚的志士，霞要掀起一场革命来拯救她的族群。她身法敏捷又慧心独具，凭借锋芒逼人的羽刃，扫除任何异己。霞与她的灵魂伴侣洛并肩作战，共同守护他们日渐衰落的部族，同时韬光养晦，希望终有一天能率领全族重夺昔日荣光。“你知道羽毛能有多锋利么？”"
  },
  {
    id: "warwick",
    title: "祖安怒兽",
    name: "沃里克",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big19000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big19001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big19002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big19003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big19004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big19005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big19006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big19007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big19008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big19009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big19010.jpg"
    ],
    tags: ["近战", "战士"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small19000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small19001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small19002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small19003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small19004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small19005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small19006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small19007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small19008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small19009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small19010.jpg"
    ],
    Ability: {
      life: "60",
      physical: "90",
      magic: "20",
      difficulty: "30"
    },
    story: "在他的实验室内，一种可怕的饥渴占据了沃里克。当他的徒弟辛吉德惊恐地望着他时，沃里克甩开据点大门，狂奔向未知的地方，一路上发出令人毛骨悚然的嚎叫。"
  },
  {
    id: "jinx",
    title: "暴走萝莉",
    name: "金克丝",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big222000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big222001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big222002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big222003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big222004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big222012.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big222013.jpg"
    ],
    tags: ["远程", "物理"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small222000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small222001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small222002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small222003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small222004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small222012.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small222013.jpg"
    ],
    Ability: {
      life: "30",
      physical: "90",
      magic: "35",
      difficulty: "85"
    },
    story: "''我有——最美好的初衷''金克丝活着就是为了不计后果的四处肆虐，在她身后留下的只有一片混乱与恐慌。她是一名暴躁而残忍的罪犯，她蔑视一切仅仅是因为无聊，她会在她认为最无趣的地方：皮尔特沃夫，欢乐地进行带着她烙印的肆虐，以引起混乱。她携带着兵工厂里的致命玩具，她引发着最闪耀而响亮的爆炸——这也是为了引起倒霉的当局的震惊与注意。金克丝总是能够逍遥法外，她最爱的游戏就是戏弄皮城的警察——尤其是蔚。"
  },
  {
    id: "leblanc",
    title: "诡术妖姬",
    name: "乐芙兰",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big7000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big7001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big7002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big7003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big7004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big7005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big7012.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big7019.jpg"
    ],
    tags: ["远程", "法师", "爆发"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small7000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small7001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small7002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small7003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small7004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small7005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small7012.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small7019.jpg"
    ],
    Ability: {
      life: "60",
      physical: "20",
      magic: "80",
      difficulty: "70"
    },
    story: '"接下来，我要让你的生命条消失！" —乐芙兰曾经是贵族时代的幕后黑手，黑色玫瑰领导人的乐芙兰，经历过辉煌也经历过挫折。但这位邪恶的女妖术师不屈不挠地打拼出自己的一席之地，究竟是什么样的力量在支撑她？。'
  },
  {
    id: "leona",
    title: "曙光女神",
    name: "蕾欧娜",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big89000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big89001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big89002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big89003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big89004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big89008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big89009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big89010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big89011.jpg"
    ],
    tags: ["近战", "辅助"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small89000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small89001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small89002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small89003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small89004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small89008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small89009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small89010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small89011.jpg"
    ],
    Ability: {
      life: "80",
      physical: "30",
      magic: "40",
      difficulty: "30"
    },
    story: "''太阳的光芒笼罩着整个符文之地，而此刻我的盔甲也褶褶生辉。''在高耸入云的巨神峰上，有一个叫做拉阔尔的民族自古就在此生息繁衍，他们是一群拥有战士天赋的民族。族群中能力超群的人可以登上嘉岗坦山的顶峰，响应“神圣”召唤。这群人又叫做烈阳族，他们退出战争，将生命献给了崇敬的太阳。"
  },
  {
    id: "lulu",
    title: "仙灵女巫",
    name: "璐璐",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big117000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big117001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big117002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big117003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big117004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big117005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big117006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big117014.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big117015.jpg"
    ],
    tags: ["远程", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small117000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small117001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small117002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small117003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small117004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small117005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small117006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small117014.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small117015.jpg"
    ],
    Ability: {
      life: "70",
      physical: "30",
      magic: "80",
      difficulty: "60"
    },
    story: "''这种天马行空的幻想能力，难道是水瓶座女生？''璐璐率性而为的程度，也许联盟中没有哪个英雄能够比得上。在班德尔城中度过的青春岁月中，她总是把大部分时间都花在林间漫步或者做白日梦上。这并不表示她不合群；班德尔城日复一日的喧嚣，根本比不上她想象中的那个多姿多彩的世界。"
  },
  {
    id: "thresh",
    title: "魂锁典狱长",
    name: "锤石",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big412000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big412001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big412002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big412003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big412004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big412005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big412006.jpg"
    ],
    tags: ["辅助", "物理"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small412000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small412001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small412002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small412003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small412004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small412005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small412006.jpg"
    ],
    Ability: {
      life: "65",
      physical: "48",
      magic: "78",
      difficulty: "80"
    },
    story: "''人心是肉长的……玩具。''锤石是一个残酷成性的幽灵收割者，以折磨生灵和死灵为乐。他曾是一个蹂躏囚犯的无情狱卒，后来被受他折磨的囚犯们吊死在他自己的锁链上。在他的恶毒本质解开束缚后，魂索典狱长游荡在符文大陆，寻找着猎物。他取乐的方式，是先把那些最为不羁的猎物们的意志给破坏掉，然后将他们的灵魂捕获到他的那盏泛着幽绿光芒的灯笼中。"
  },
  {
    id: "aatrox",
    title: "暗裔剑魔",
    name: "亚托克斯",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big266000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big266001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big266002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big266003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big266007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big266008.jpg"
    ],
    tags: ["近战", "物理"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small266000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small266001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small266002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small266003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small266007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small266008.jpg"
    ],
    Ability: {
      life: "60",
      physical: "88",
      magic: "40",
      difficulty: "65"
    },
    story: "''根本没人理解我，他们以为我在切菜''亚托克斯是一位传奇战士，也是一个被称为暗裔的上古种族里仅存的五位战士之一。他优雅镇定地挥舞着巨剑，用令人迷离的剑式在千军万马中穿行。每当敌人倒下，亚托克斯那把如同活物般的巨剑便会啜饮着他们的鲜血，同时增强他的力量，并为他残暴、优雅的杀戮战役提供给养。"
  },
  {
    id: "ahri",
    title: "九尾妖狐",
    name: "阿狸",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big103000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big103001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big103002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big103003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big103004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big103005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big103006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big103007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big103014.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big103015.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big103016.jpg"
    ],
    tags: ["远程", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small103000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small103001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small103002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small103003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small103004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small103005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small103006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small103007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small103014.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small103015.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small103016.jpg"
    ],
    Ability: {
      life: "50",
      physical: "20",
      magic: "80",
      difficulty: "50"
    },
    story: "''慈悲是人类的奢侈之举，但也是责任所在。''跟其他游荡在艾欧尼亚南部丛林中的狐狸不同，阿狸总觉得她跟魔法世界有一种说不清道不明的联系，一种不完整的联系。在内心深处，她觉得她难以适应这具生而拥有的肉体，梦想有一天可以变成人类。这个梦想看起来遥不可及，直到有一天人类战场上发生的事情改变了她。"
  },
  {
    id: "riven",
    title: "放逐之刃",
    name: "瑞文",
    bgs: [
      "http://img2.dwstatic.com/lol/1512/315489415195/1451534494405.jpg",
      "http://img5.dwstatic.com/lol/1512/315489415195/1451534564729.jpg",
      "http://img.dwstatic.com/lol/1512/315489415195/1451534573341.jpg",
      "http://img3.dwstatic.com/lol/1512/315489415195/1451534583873.jpg",
      "http://img5.dwstatic.com/lol/1512/315489415195/1451534594943.jpg",
      "http://img4.dwstatic.com/lol/1512/315489415195/1451534607051.jpg",
      "http://img.dwstatic.com/lol/1512/315489415195/1451534621236.jpg"
    ],
    tags: ["近战", "战士"],
    bgs_thumbnail: [
      "http://img1.dwstatic.com/lol/1512/315489415195/1451534759126.jpg",
      "http://img.dwstatic.com/lol/1512/315489415195/1451534768687.jpg",
      "http://img1.dwstatic.com/lol/1512/315489415195/1451534776247.jpg",
      "http://img4.dwstatic.com/lol/1512/315489415195/1451534783654.jpg",
      "http://img1.dwstatic.com/lol/1512/315489415195/1451534793484.jpg",
      "http://img1.dwstatic.com/lol/1512/315489415195/1451534801245.jpg",
      "http://img.dwstatic.com/lol/1512/315489415195/1451534817910.jpg"
    ],
    Ability: {
      life: "70",
      physical: "80",
      magic: "10",
      difficulty: "70"
    },
    story: "''战争与谋杀之间，潜藏着我们的心魇。''在诺克萨斯，每一位居民都可以平步青云，而无论其种族、男女、贵贱——实力，就是一切。锐雯曾怀着对此理想的坚定信仰，不懈地追求着远大的前程。她曾是一位初露锋芒的士兵，那时的她能够挥动一把与自己差不多重的长剑。她曾是一位无情高效的勇士，但是她真正的实力潜藏在她的信念之中。"
  },
  {
    id: "orianna",
    title: "发条魔灵",
    name: "奥莉安娜",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big61000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big61001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big61002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big61003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big61004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big61005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big61006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big61007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big61008.jpg"
    ],
    tags: ["远程", "法师", "输出"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small61000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small61001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small61002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small61003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small61004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small61005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small61006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small61007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small61008.jpg"
    ],
    Ability: {
      life: "40",
      physical: "30",
      magic: "70",
      difficulty: "70"
    },
    story: "奥莉安娜和她的科技球现在是联盟英雄的一员。她认真尝试适应周围的人。但无论多么努力，奥莉安娜永远不可能成为真正的人类，只有极少数人能忽略她非人的本质。在更多人眼里，奥莉安娜只是一副没有灵魂的发条外壳。"
  },
  {
    id: "camille",
    title: "青钢影",
    name: "卡蜜尔",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big164000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big164001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big164002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big164010.jpg"
    ],
    tags: ["近战", "战士"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small164000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small164001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small164002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small164010.jpg"
    ],
    Ability: {
      life: "90",
      physical: "50",
      magic: "10",
      difficulty: "90"
    },
    story: "精准与否，就是屠宰与手术的区别卡蜜尔是一名精英特工，为了皮尔特沃夫的权势阶层维护着城市的秩序。在责任心的驱使下，青钢影将自己的身体改造成了一台海克斯动力驱动的杀戮机器。当卡蜜尔追捕目标时，她就会变得冷静、无情，并且极其可怕地精确。"
  },
  {
    id: "irelia",
    title: "刀锋舞者",
    name: "艾瑞莉娅",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big39001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big39002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big39003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big39004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big39005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big39006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big39015.jpg"
    ],
    tags: ["突进", "战士"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small39000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small39001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small39002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small39003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small39004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small39005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small39006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small39015.jpg"
    ],
    Ability: {
      life: "60",
      physical: "60",
      magic: "30",
      difficulty: "60"
    },
    story: "那把剑狂乱飞舞，仿佛以血涂饰。-选自诺克萨斯艾瑞莉娅回身冲入敌军，操控手中巨剑。巨剑轻灵起舞，在诺克萨斯人的惊恐中斩杀敌人。受到重创的入侵者被迫从爱欧尼亚撤退。艾瑞莉娅加入了联盟。"
  },
  {
    id: "lucian",
    title: "圣枪游侠",
    name: "卢锡安",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big236000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big236001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big236002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big236006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big236007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big236008.jpg"
    ],
    tags: ["远程", "物理"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small236000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small236001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small236002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small236006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small236007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small236008.jpg"
    ],
    Ability: {
      life: "38",
      physical: "86",
      magic: "68",
      difficulty: "85"
    },
    story: "''她曾是我的全部，但他们带走了她 和她一起被带走的还有我的友善与仁慈。''卢锡安将灌输着远古力量的遗物作为武器，以坚定守护神的身份对抗着亡灵生物。他冷酷的信念从未动摇，即使面对着令人发狂的恐惧，他也会咆哮着用圣焰将之毁灭。卢锡安独自承受着一项残酷的任务：净化那些被亡灵生物诱捕的灵魂，他的永远挚爱也在此之中。正如他们装配的双生遗物武器一般，卢锡安和他的妻子赛娜如同用相同的石头雕刻而成。他们共同在符文大陆战斗多年，将圣光带向黑暗，净化那些被腐败夺走的人们。他们是正义的风向标：赛娜对事业的奉献从未迟疑，卢锡安的友善与热心则感动了许多被他们拯救的生命。..."
  },
  {
    id: "zoe",
    title: "暮光星灵",
    name: "佐伊",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big142000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big142001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big142002.jpg"
    ],
    tags: ["中单", "辅助"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small142000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small142001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small142002.jpg"
    ],
    Ability: {
      life: "70",
      physical: "10",
      magic: "80",
      difficulty: "90"
    },
    story: "佐伊是调皮、想像力跟改变的化身。作为代表巨神峰与星空联系的信使，佐伊能够预示即将改变世界的重大事件。她的存在本身扭曲了掌管现实的神秘法则，有时一个无心的差错就会引起足以动摇世界的灾变──尽管她没有丝毫恶意。这也许能够解释为何佐伊总是以一种轻松，甚至可以说是有些不认真的态度履行她的义务。她把大部分的时间都拿来玩耍、恶作剧，或是想一些其它的花招来娱乐自己。佐伊可爱无害的外表也许让你觉得与她相遇是一件开心的事，但事实往往比你以为的还要复杂，还要危险。"
  },
  {
    id: "yasuo",
    title: "疾风剑豪",
    name: "亚索",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big157000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big157001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big157002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big157003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big157009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big157010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big157017.jpg"
    ],
    tags: ["近战", "突进"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small157000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small157001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small157002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small157003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small157009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small157010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small157017.jpg"
    ],
    Ability: {
      life: "65",
      physical: "80",
      magic: "20",
      difficulty: "85"
    },
    story: "''死亡如风，常伴吾身''亚索是一个百折不屈的男人，还是一名身手敏捷的剑客，能够运用风的力量来斩杀敌人。这位曾经春风得意的战士因为诬告而身败名裂，并且被迫卷入了一场令人绝望的生存之战。即使整个世界都已与他为敌，他也要竭尽所能地去将罪恶绳之以法，并恢复自身的名誉。"
  },
  {
    id: "syndra",
    title: "暗黑元首",
    name: "辛德拉",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big134000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big134001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big134002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big134003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big134004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big134005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big134006.jpg"
    ],
    tags: ["远程", "法术"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small134000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small134001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small134002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small134003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small134004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small134005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small134006.jpg"
    ],
    Ability: {
      life: "70",
      physical: "50",
      magic: "90",
      difficulty: "90"
    },
    story: "''我的能量，无穷无尽！''辛德拉生来就具有无边的魔法潜能，除了爱好以自己的意志来运用这难以置信的能量外，就再无所好。随着每一天的过去，她的魔力天赋也变得更加有效且更具毁灭性。辛德拉拒绝任何平衡或克制的观念，只想保持她的能量的控制权，即使它意味着那些想要制止她的当局会废掉她。在艾欧尼亚度过的年少时光里，辛德拉对魔法的鲁莽使用吓坏了村庄的长老们。他们将她带到一个偏僻的寺庙，把她交给一个老法师照顾。令辛德拉愉快的是，老法师解释说，这个寺庙是一间学校——老法师可以在这里指引她，让她发展她的才能。..."
  },
  {
    id: "varus",
    title: "惩戒之箭",
    name: "韦鲁斯",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big110000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big110001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big110002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big110003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big110004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big110005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big110006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big110007.jpg"
    ],
    tags: ["远程", "射手"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small110000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small110001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small110002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small110003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small110004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small110005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small110006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small110007.jpg"
    ],
    Ability: {
      life: "30",
      physical: "80",
      magic: "30",
      difficulty: "60"
    },
    story: "''一支箭矢的生命一闪即息，支撑它的唯有方向与目的''由于他举世无双的弓术和无可置疑的荣誉感，韦鲁斯被一间神圣的艾欧尼亚寺院选作守望者。这个寺院是为了镇压一个远古的腐败深渊而建。这个深渊是那么地令人不安，以至于艾欧尼亚的长老们害怕它将整个岛屿都笼罩在黑暗之中。"
  },
  {
    id: "caitlyn",
    title: "皮城女警",
    name: "凯特琳",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big51000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big51001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big51002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big51003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big51004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big51005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big51006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big51010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big51011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big51013.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big51019.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big51020.jpg"
    ],
    tags: ["远程", "物理"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small51000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small51001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small51002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small51003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small51004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small51005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small51006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small51010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small51011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small51013.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small51019.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small51020.jpg"
    ],
    Ability: {
      life: "40",
      physical: "70",
      magic: "30",
      difficulty: "60"
    },
    story: "最初，皮特沃夫为了发展高科技，进口了很多珍贵资源，强盗和小偷们发现这块肥肉后便经常光顾这里。传说中的皮城女警凯特琳琳就此诞生！"
  },
  {
    id: "nidalee",
    title: "狂野女猎手",
    name: "奈德丽",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big76000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big76001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big76002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big76003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big76004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big76005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big76006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big76007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big76008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big76009.jpg"
    ],
    tags: ["刺客", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small76000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small76001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small76002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small76003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small76004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small76005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small76006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small76007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small76008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small76009.jpg"
    ],
    Ability: {
      life: "40",
      physical: "20",
      magic: "80",
      difficulty: "70"
    },
    story: "宏伟屏障的南部是一片被诅咒的凶险之地，因此人烟稀少，而英雄更是凤毛麟角。那里的大部分地区仍然残留着上次符文战争留下的创伤，特别是神秘的库莽古森林。在这些陌生的土地上蕴藏着被人久已遗忘的宝藏，许多人不惜冒生命危险去寻宝。奈德丽当时只是一个小姑娘，随着寻宝的父母一起迷失在这片茂密的雨林中。丛林是无情的，她眼睁睁地看着自己的父母染上莫名的恶疾在痛苦与煎熬中死去。就是在这样恶劣的环境中，奈德丽奇迹般地生存了下来。由于她天真无邪，童稚可人，丛林中的野兽都很喜欢她。更幸运的是，居住其中的美洲狮一家将她当作自己的亲人般抚养。奈德丽渐渐长大了，并不知不觉地吸收着茂密丛林的魔法原力，她的进化超越了人类和猫科的本能。奈德丽现在已经成长为神话般存在的凶狠捕猎者，用她的尖牙利齿抵御着胆敢侵犯她丛林的家园的敌人。"
  },
  {
    id: "zac",
    title: "生化魔人",
    name: "扎克",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big154000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big154001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big154002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big154006.jpg"
    ],
    tags: ["远程", "法术"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small154000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small154001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small154002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small154006.jpg"
    ],
    Ability: {
      life: "30",
      physical: "60",
      magic: "70",
      difficulty: "70"
    },
    story: "''妈妈说我看上去比实际年龄大''扎克是祖安某个实验的产物。这个实验是为了制造海克斯生化超级士兵——祖安无定型战斗体。他结合了残暴的力量和无限的灵巧，是一名全能的主宰者：这个创造性的战士可以弹过障碍并猛击他的敌人直至屈服。尽管扎克出生于武器实验室，却被一对有爱的父母救下并收养，并且成了一个和蔼友善的小孩。随着岁月的流逝，他逐渐成长为一名勇猛的英雄，宣誓保护祖安的普通老百姓们。"
  },
  {
    id: "khazix",
    title: "虚空掠夺者",
    name: "卡兹克",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big121000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big121001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big121002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big121003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big121004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big121011.jpg"
    ],
    tags: ["打野", "突进"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small121000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small121001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small121002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small121003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small121004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small121011.jpg"
    ],
    Ability: {
      life: "30",
      physical: "40",
      magic: "90",
      difficulty: "30"
    },
    story: "''他们绝对想不到会是这样！''一头来自虚空、名为卡兹克的恶毒掠食者渗入了瓦洛兰，准备吞噬这块大陆上最有潜力的生物们。每次猎杀后，他都会吸收掉猎物的力量，让自己进化得更加强大。卡兹克最渴望征服和吞噬的对象是雷恩加尔，一只与他实力在伯仲之间的野兽。当卡兹克刚刚穿越到这个世界时，他非常地脆弱和饥饿。他最先遇到的一批动物实在是太弱小了，难以为他的快速进化提供给养。于是，卡兹克将他的目光转移到他所能找到的最为危险的生物上，即便冒着生命危险，也要满足进化所需的给养。每次击杀都让他大快朵颐，焕然一新，变成更强更快的掠食者。..."
  },
  {
    id: "sion",
    title: "亡灵战神",
    name: "赛恩",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big14000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big14001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big14002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big14003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big14004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big14005.jpg"
    ],
    tags: ["战士", "近战"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small14000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small14001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small14002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small14003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small14004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small14005.jpg"
    ],
    Ability: {
      life: "50",
      physical: "90",
      magic: "30",
      difficulty: "50"
    },
    story: '诺克萨斯是一个为达目的可以连传统道德都抛弃的城邦。对于诺克萨斯来说，除了使用暴力的意愿，其他都无关紧要。而这点则在杀戮战士赛恩的身上得到了最好的体现。赛恩会用他那巨大的双刃斧头"切削者"无情地杀戮敌人。'
  },
  {
    id: "Pyke",
    title: "血港鬼影",
    name: "派克",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big555000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big555001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big555009.jpg"
    ],
    tags: ["辅助", "打野"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small555000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small555001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small555009.jpg"
    ],
    Ability: {
      life: "70",
      physical: "70",
      magic: "30",
      difficulty: "60"
    },
    story: "在比尔吉沃特的屠宰码头，颇有名气的鱼叉手派克葬身在一条巨大的琢珥鱼腹内……然而，他却回来了。他在家乡的阴街陋巷中徘徊着，用超自然的手段干脆残忍地解决那些鱼肉他人的恶棍——一座因捕猎怪物而自豪的城市如今发觉自己却成了狩猎的目标。"
  },
  {
    id: "illaoi",
    title: "海兽祭司",
    name: "俄洛伊",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big420000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big420001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big420002.jpg"
    ],
    tags: ["近战", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small420000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small420001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small420002.jpg"
    ],
    Ability: {
      life: "80",
      physical: "60",
      magic: "30",
      difficulty: "50"
    },
    story: "''说教无益。折断的骨头是更好的课本。''俄洛伊的体格强横无比，却唯独会在她的坚定信仰面前屈身。作为大海兽的先知，她挥舞着一个巨大的金色神像，将敌人的灵魂抽离体外，将他们对现实的感知完全击毁。所有对“娜伽卡波洛丝的真者”发起挑战的人，很快就会发现，俄洛伊从来不单打独斗——蟒行群岛的众神会与她并肩作战。"
  },
  {
    id: "tryndamere",
    title: "蛮族之王",
    name: "泰达米尔",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big23000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big23001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big23002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big23003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big23004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big23005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big23006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big23007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big23008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big23009.jpg"
    ],
    tags: ["近战", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small23000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small23001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small23002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small23003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small23004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small23005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small23006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small23007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small23008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small23009.jpg"
    ],
    Ability: {
      life: "50",
      physical: "100",
      magic: "40",
      difficulty: "100"
    },
    story: "“我的右手比左手要强！”泰达米尔从他的父亲手中继承了大剑，而这把剑也是他父亲从泰达米尔祖父那里继承来的。多年来他一直铭记着父亲的教诲“熟练掌握它，就能拥有它。”他和寒冰射手艾希缔结了政治婚姻，并一起为守护联盟的子民们而战。"
  },
  {
    id: "reksai",
    title: "虚空遁地兽",
    name: "雷克赛",
    bgs: [
      "http://img5.dwstatic.com/lol/1512/315158331600/1451206571804.jpg",
      "http://img.dwstatic.com/lol/1512/315158331600/1451206635916.jpg",
      "http://img5.dwstatic.com/lol/1512/315158331600/1451206665636.jpg"
    ],
    tags: ["突进", "打野"],
    bgs_thumbnail: [
      "http://img.dwstatic.com/lol/1512/315158331600/1451206795620.jpg",
      "http://img4.dwstatic.com/lol/1512/315158331600/1451206806786.jpg",
      "http://img5.dwstatic.com/lol/1512/315158331600/1451206815605.jpg"
    ],
    Ability: {
      life: "70",
      physical: "80",
      magic: "20",
      difficulty: "30"
    },
    story: "''嘚~~~''雷克塞是她族群之中体型最大、脾气最暴的。她是一个无情的掠食者，可以在地底挖掘隧道，来伏击并吞噬她的猎物。她那永不满足的饥渴已经使鼎盛一时的恕瑞玛帝国遍布废墟。商人、贸易者和武装商队都会绕行百里，来躲开这些广袤的地区，但是狡诈的盗匪们会引诱粗心的人们进入雷克塞的杀戮之地。一旦雷克塞侦测到你，你的命运就已注定。毫无逃生的希望；她是来自沙砾之下的死亡。"
  },
  {
    id: "volibear",
    title: "雷霆咆哮",
    name: "沃利贝尔",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big106000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big106001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big106002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big106003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big106004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big106005.jpg"
    ],
    tags: ["坦克", "打野"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small106000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small106001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small106002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small106003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small106004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small106005.jpg"
    ],
    Ability: {
      life: "80",
      physical: "60",
      magic: "20",
      difficulty: "40"
    },
    story: "''没有战争，熊人族不会领悟和平。''弗雷卓德的无情北壁是熊人族的家园，这个凶猛好战的种族在这块冻土之上已经经历了上千年的洗礼。他们的首领是一位暴怒的敌手，他可以召唤闪电的力量击打敌人，以使其畏惧：他就是沃利贝尔，他既是个战士也是个谜团，致力于守护上古传统和部族里的战士精神。"
  },
  {
    id: "anivia",
    title: "冰晶凤凰",
    name: "艾尼维亚",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big34000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big34001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big34002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big34003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big34004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big34005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big34006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big34007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big34008.jpg"
    ],
    tags: ["远程", "魔法"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small34000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small34001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small34002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small34003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small34004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small34005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small34006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small34007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small34008.jpg"
    ],
    Ability: {
      life: "50",
      physical: "10",
      magic: "100",
      difficulty: "70"
    },
    story: "艾尼维亚是拥有强大能量的不朽存在。她可以瞬间冰封身前的地面，用寒冰冻结一切，甚至操纵寒冰使其剧烈爆炸，向各个方向发射锋利的冰片。她还能召唤一阵冰川风暴，用狂暴的暴风雪对范围内的单位造成伤害并减速。需要防御时，艾尼维亚可以生成一道无法穿越的冰墙。"
  },
  {
    id: "nami",
    title: "唤潮鲛姬",
    name: "娜美",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big267000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big267001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big267002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big267003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big267007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big267008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big267009.jpg"
    ],
    tags: ["辅助", "法术"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small267000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small267001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small267002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small267003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small267007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small267008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small267009.jpg"
    ],
    Ability: {
      life: "40",
      physical: "30",
      magic: "80",
      difficulty: "90"
    },
    story: "''我的命运由我做主。''娜美引导着海洋的原始能量，来统御海洋神秘的恢复特性，并号令潮汐本身的狂野能量。尽管被大部分人质疑，娜美仍然具有承担起一个没有人愿意承担的危险使命的勇气和决心。现在，她的人民坚信她是唤潮者，一个命中注定要去完成一项事关她整个族群生存的使命的天选之人。唤潮者的神圣使命是去获取一个月石，一个仅在地表世界的高耸山巅上找到的物体。她的人民，鲛人族，依赖月石的光芒来避开深渊里的恐惧之物。不过，月石的能量只会持续一百年。..."
  },
  {
    id: "talon",
    title: "刀锋之影",
    name: "泰隆",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big91000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big91001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big91002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big91003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big91004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg"
    ],
    tags: ["近战", "战士"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small91000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small91001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small91002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small91003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small91004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small91005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small91012.jpg"
    ],
    Ability: {
      life: "50",
      physical: "80",
      magic: "10",
      difficulty: "70"
    },
    story: "''来挑战我们吧，如果你够胆的话。''泰隆最早记住的东西，就是诺克萨斯地下隧道的阴暗，以及手中刀刃那令人放心的可靠感。他对家庭，温暖，或是友善没有一点印象。所窃金币的叮当作响，以及身后墙壁的安全感，反而是他曾渴望的一切。"
  },
  {
    id: "sol",
    title: "铸星龙王",
    name: "奥瑞利安索尔",
    bgs: [
      "http://img3.dwstatic.com/lol/1603/322852568002/1458897488919.jpg",
      "http://img5.dwstatic.com/lol/1603/322852568002/1458897529908.jpg"
    ],
    tags: ["法师"],
    bgs_thumbnail: [
      "http://img5.dwstatic.com/lol/1603/322852568002/1458897565161.jpg",
      "http://img5.dwstatic.com/lol/1603/322852568002/1458897606681.jpg"
    ],
    Ability: {
      life: "20",
      physical: "20",
      magic: "80",
      difficulty: "20"
    },
    story: "''　奥瑞利安•索尔曾创造了奇迹般的群星，为无垠的荒芜太空布下他宏伟的恩典。为了重返铸星大道，奥瑞利安•索尔誓要夺回属于自己的自由。哪怕召星降怒，倾覆众生。''奥瑞利安•索尔，这一古老的存在，远在星云的残迹汇聚成万千世界之初便早已现身。自从降生于太息之初，他便在无垠的空无中遨游，寻觅着散落于广袤深空中可称奇伟的光华，渲染他亘古凭飞的漫卷长天。正如星空之龙来自天外，奥瑞利安•索尔从未遇见过任何能与之比肩的存在。"
  },
  {
    id: "Kaisa",
    title: "虚空之女",
    name: "卡莎",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big145000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big145001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big145014.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big145015.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big145016.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big145017.jpg"
    ],
    tags: ["下路", "打野"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small145000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small145001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small145014.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small145015.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small145016.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small145017.jpg"
    ],
    Ability: {
      life: "50",
      physical: "80",
      magic: "30",
      difficulty: "60"
    },
    story: "在孩童时期就被虚空夺走的卡莎，凭着纯粹的固执和意志力活了下来。她的历练让她成为了一位夺命的猎手，或者也有人会称她为黑暗未来的使者。她与一副有生命的虚空生物甲壳形成了一种不得安宁的共生状态，而很快她就将面临一个重大的抉择，究竟是原谅那些称她为怪物的凡人并协力抵御压境的黑暗……还是干脆忘记，放任虚空吞噬这个已将她抛弃的世界。"
  },
  {
    id: "kayn",
    title: "影流之镰",
    name: "凯隐",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big141000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big141001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big141002.jpg"
    ],
    tags: ["战士", "打野", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small141000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small141001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small141002.jpg"
    ],
    Ability: {
      life: "80",
      physical: "70",
      magic: "10",
      difficulty: "80"
    },
    story: "“悉达·凯隐是修炼暗影魔法的佼佼者。他战斗的意义，是为了实现自己真正的命运——有朝一日能够率领影流教派，开创艾欧尼亚霸业的新世代。凯隐大刀阔斧地挥舞着活体暗裔武器拉亚斯特，毫不畏惧它给自己的身体和思想带来的腐化作用。这样的后果只可能有两种：要么，凯隐让这把武器臣服于自己的意志；要么，这把恶毒的巨镰将他彻底吞噬，为符文之地的毁灭奏响序曲。”"
  },
  {
    id: "kayle",
    title: "正义天使",
    name: "凯尔",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big10000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big10008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big10009.jpg"
    ],
    tags: ["近战/远程", "魔法"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small10000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small10001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small10002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small10003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small10004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small10005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small10006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small10007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small10008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small10009.jpg"
    ],
    Ability: {
      life: "90",
      physical: "50",
      magic: "60",
      difficulty: "30"
    },
    story: "远古时代，整个世界都充斥着暴乱和冲突，凯尔是战争中的英雄，正义的使者，被人们称作天使的人。然而，也有一部分人称她做杀手或者怪物。凯尔为了自己的人民不屈不挠的战斗着，让他们的敌人全部在自己跪倒在自己面前。"
  },
  {
    id: "gnar",
    title: "迷失之牙",
    name: "纳尔",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big150000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big150001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big150002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big150003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big150004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big150013.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big150014.jpg"
    ],
    tags: ["物理", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small150000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small150001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small150002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small150003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small150004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small150013.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small150014.jpg"
    ],
    Ability: {
      life: "60",
      physical: "50",
      magic: "50",
      difficulty: "80"
    },
    story: "''丛林不会原谅盲目与无知。每根断枝都在讲述着故事。''我已经猎遍了这个丛林里的所有生物。我确信，这儿以前已经没剩下什么挑战了，但现在，这儿有了新来客。它的脚印和长牙领主一般大小；它的爪子就像弯刀。它能把人撕成两半。总算碰到有价值的猎物了。在我穿越丛林追踪我的猎物时，我开始看到这家伙所造成的破坏。我踏进了一个由破裂的树木们形成的怪异圆环。这些巨大的木质哨卫们已经在这片土地上矗立了无数岁月，它们铁一般的树皮，曾让那些手拿破斧又想砍伐它们的蠢货们无可奈何。..."
  },
  {
    id: "shyvana",
    title: "龙血武姬",
    name: "希瓦娜",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big102000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big102001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big102002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big102003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big102004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big102005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big102006.jpg"
    ],
    tags: ["近战", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small102000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small102001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small102002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small102003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small102004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small102005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small102006.jpg"
    ],
    Ability: {
      life: "80",
      physical: "70",
      magic: "40",
      difficulty: "30"
    },
    story: "''以吾父之血，取尔等之命！''在符文之地，有少数龙类，能熟练地运用他们的独特骨骼里所流淌的强烈魔法能量，因而进化成了一种罕见的天空之龙。这些强大且神秘的生物，绝大部分时候都隐藏在远离人类国家的地方。不过，有一些会被人类文明所吸引，并变成人类的形态，将自己融入到人类世界中去。"
  },
  {
    id: "zed",
    title: "影流之主",
    name: "劫",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big238000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big238001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big238002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big238003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big238010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big238011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big238013.jpg"
    ],
    tags: ["物理", "刺客"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small238000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small238001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small238002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small238003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small238010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small238011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small238013.jpg"
    ],
    Ability: {
      life: "80",
      physical: "90",
      magic: "60",
      difficulty: "90"
    },
    story: "''无形之刃，最为致命。''劫是200年以来第一个冲破古老、禁忌之路的忍者。他违抗了他的宗族和导师，抛弃了束缚他一生的均衡与信条。劫现在为那些拥抱影之奥义的人提供力量，并屠杀那些墨守成规的人。劫是一个孤儿，他被一名伟大的忍者大师收养并训练。在他心目中，只有一个人能与他匹敌，他就是大师的儿子，慎。劫似乎永远都得不到导师的青睐，因为他与对手们的每一次较量都是以平局结束。在挫败感和嫉妒心的驱使之下，他开始寻找取胜之道。这个年轻的忍者冒险进入了宗族寺庙里的禁地，并找到了一个装饰华美的不祥之盒。..."
  },
  {
    id: "diana",
    title: "皎月女神",
    name: "黛安娜",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big131000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big131001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big131002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big131003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big131011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big131012.jpg"
    ],
    tags: ["突进", "法术"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small131000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small131001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small131002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small131003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small131011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small131012.jpg"
    ],
    Ability: {
      life: "60",
      physical: "80",
      magic: "90",
      difficulty: "50"
    },
    story: "''一轮新月正在冉冉升起~''黛安娜——月之力的一个不屈化身——开展了一次针对崇拜太阳的烈阳族的黑暗远征。尽管她曾经试图寻求她的民族的认同，可是多年的徒劳无功将她消磨成了一个郁郁寡欢、满腔怨气的战士。现在，她给她的仇敌们下达了一个可怕的最后通牒：要么敬畏月之光华，要么死在她的新月之刃下。尽管出生于烈阳族，但黛安娜寻根问底的天性让她与同胞们格格不入。她总会在夜空中找到指引与抚慰，并且质疑太阳在她的社会中的统治地位。烈阳族的长老们只会用嘲笑和惩罚来回应她的诸多盘问。..."
  },
  {
    id: "hecarim",
    title: "战争之影",
    name: "赫卡里姆",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big120000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big120001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big120002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big120003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big120004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big120005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big120006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big120007.jpg"
    ],
    tags: ["近战", "战士"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small120000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small120001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small120002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small120003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small120004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small120005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small120006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small120007.jpg"
    ],
    Ability: {
      life: "70",
      physical: "80",
      magic: "30",
      difficulty: "50"
    },
    story: "''无情利刃所向，尽皆披靡。恐惧铁蹄之下，生灵涂炭。''赫卡里姆是一只披坚执锐的庞然大物，从暗影岛狂奔而出，带领着一群幽灵骑兵猎杀鲜活的生命。赫卡里姆是人与野兽的融合体，诅咒让他永世狂奔，杀戮让他欣喜若狂，铁蹄让他碾压一切生灵。"
  },
  {
    id: "velkoz",
    title: "虚空之眼",
    name: "维克兹",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big161000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big161001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big161002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big161003.jpg"
    ],
    tags: ["辅助", "法术"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small161000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small161001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small161002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small161003.jpg"
    ],
    Ability: {
      life: "70",
      physical: "45",
      magic: "85",
      difficulty: "88"
    },
    story: "''在虚空存活下来的人类？难以置信！''我进入了突如其来的强光。闪烁。闪烁，闪烁，闪烁。我调整好眼睛，评估我前方的景观。有东西在乱窜。我往下看，发现了一只小个的白色生物，用后腿站立着，嗅闻着我的躯体。它吸引了我的注意。你有什么用途？"
  },
  {
    id: "skarner",
    title: "水晶先锋",
    name: "斯卡纳",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big72000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big72001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big72002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big72003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big72004.jpg"
    ],
    tags: ["近战", "打野"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small72000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small72001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small72002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small72003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small72004.jpg"
    ],
    Ability: {
      life: "80",
      physical: "50",
      magic: "40",
      difficulty: "40"
    },
    story: "''我的毒刺，不会让你失望''斯卡纳，水晶守卫，保卫着一个深埋于恕瑞玛荒漠下的国度的入口。少数擅自闯入他的地盘并活下来的人形容他是一个拥有令人恐惧的智力、愤怒和准度的生物。这个残忍的生物在守护着什么，没人知道。"
  },
  {
    id: "xerath",
    title: "远古巫灵",
    name: "泽拉斯",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big101000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big101001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big101002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big101003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big101004.jpg"
    ],
    tags: ["远程", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small101000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small101001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small101002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small101003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small101004.jpg"
    ],
    Ability: {
      life: "40",
      physical: "20",
      magic: "80",
      difficulty: "70"
    },
    story: "''魔法，他在召唤我''强得无可估量，被称作泽拉斯的飞升生命体曾是一个有血有肉的凡人。他现在是一个截然不同的东西——一个由翻腾的奥术能量形成的生命体。从千年的囚禁中解脱后，他现在准备在符文之地上释放他的能量，并彻底毁灭任何反对他的人。"
  },
  {
    id: "ezreal",
    title: "探险家",
    name: "伊泽瑞尔",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big81000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big81001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big81002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big81003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big81004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big81006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big81008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big81009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big81018.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big81019.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big81021.jpg"
    ],
    tags: ["远程", "射手"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small81000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small81001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small81002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small81003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small81004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small81005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small81006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small81007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small81008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small81009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small81018.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small81019.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small81020.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small81021.jpg"
    ],
    Ability: {
      life: "40",
      physical: "70",
      magic: "60",
      difficulty: "60"
    },
    story: "勇敢的年轻探险家伊泽瑞尔已经探索过符文之地上的一些最为偏远和荒废的地区。在对古代恕瑞玛被掩埋的废墟进行探索时，他发现了一个拥有难以置信的神秘力量的护符。可能是做给某个飞升者穿戴的，这个巨大的护符紧套在他的手臂上，将他的原生魔法技术增幅到一个足以让他获得“英雄”名号的程度，让他十分尴尬。"
  },
  {
    id: "quinn",
    title: "德玛西亚之翼",
    name: "奎因",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big133000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big133001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big133002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big133003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big133004.jpg"
    ],
    tags: ["远程", "物理"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small133000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small133001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small133002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small133003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small133004.jpg"
    ],
    Ability: {
      life: "50",
      physical: "90",
      magic: "90",
      difficulty: "70"
    },
    story: "''就像打野鸭子一样轻松''奎因和华洛是一对精锐的游侠搭档。凭借着弩弓和利爪，他们深入敌军领土执行着祖国最为险峻的任务，小至快速侦查，大至致命刺杀。这对搭档那牢不可破的羁绊在战场中非常致命，敌方在被摧残并身中百箭之后，才会意识到与他们进行战斗的不只一人，而是两位德玛西亚的传奇。"
  },
  {
    id: "yorick",
    title: "牧魂人",
    name: "约里克",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big83000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big83001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big83002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big83003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big83004.jpg"
    ],
    tags: ["近战", "战士"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small83000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small83001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small83002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small83003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small83004.jpg"
    ],
    Ability: {
      life: "60",
      physical: "50",
      magic: "40",
      difficulty: "60"
    },
    story: "''在鬼影重重的暗影岛上无休止地挖掘墓穴然后填土''约里克是一个骇人的悲剧人物，也是存在于死亡边缘上的一个食尸鬼般的生物。有些人说，他曾是他的家族的最后一人，并且在死的时候没有任何子嗣来传承血脉，并且他还身中诅咒，即使死后也要延续他家族的使命。"
  },
  {
    id: "wukong",
    title: "齐天大圣",
    name: "孙悟空",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big62000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big62001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big62002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big62003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big62004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big62005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big62006.jpg"
    ],
    tags: ["近战", "战士"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small62000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small62001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small62002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small62003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small62004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small62005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small62006.jpg"
    ],
    Ability: {
      life: "70",
      physical: "70",
      magic: "30",
      difficulty: "30"
    },
    story: "''哼，你们还没见识过俺老孙的真本事呢！''在战争学院里，有很多来自异世界的英雄，其中的大部分都是被召唤师们给“请”来的，而另一小部分，则不请自来。齐天大圣孙悟空，就是其中之一。成佛后的平淡生活，让生性贪玩的孙悟空感到枯燥不已。在一次神游异世的过程中，他发现了符文大陆这个能量波动异常频繁的世界。"
  },
  {
    id: "azir",
    title: "沙漠皇帝",
    name: "阿兹尔",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big268000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big268001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big268002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big268003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big268004.jpg"
    ],
    tags: ["法术", "射手"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small268000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small268001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small268002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small268003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small268004.jpg"
    ],
    Ability: {
      life: "60",
      physical: "30",
      magic: "80",
      difficulty: "90"
    },
    story: "''恕瑞玛，你的皇帝回来啦。''曾是一名被自大与傲慢所蒙蔽的凡人，对灼热沙漠有着无上统治权的阿兹尔以一个飞升者的身份重新归来。他想让恕瑞玛重回昔日的荣光，但在称霸途中遇上一些阻挠。然而，阿兹尔的力量是不容质疑的。"
  },
  {
    id: "trundle",
    title: "巨魔之王",
    name: "特朗德尔",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big48000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big48001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big48002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big48003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big48004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big48005.jpg"
    ],
    tags: ["近战", "坦克", "战士"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small48000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small48001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small48002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small48003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small48004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small48005.jpg"
    ],
    Ability: {
      life: "60",
      physical: "50",
      magic: "20",
      difficulty: "50"
    },
    story: "一个睿智的Ruhgosk萨满发现他可以将整个部落的诅咒通过魔法转移到某一个巨魔战士身上，然而，部落里一直没有这样的战士出现...直至Trundle出生。他生来就有超凡的自愈能力，似乎部落里感染的疾病对他毫无影响一样。"
  },
  {
    id: "nautilus",
    title: "深海泰坦",
    name: "诺提勒斯",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big111000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big111001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big111002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big111003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big111004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big111005.jpg"
    ],
    tags: ["法术", "辅助"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small111000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small111001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small111002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small111003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small111004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small111005.jpg"
    ],
    Ability: {
      life: "80",
      physical: "30",
      magic: "60",
      difficulty: "50"
    },
    story: "''被无边的黑暗吞噬时，除了向前，别无他法。''从前，诺提勒斯曾是一名受战争学院委任，去探索守护者之海未知流域的海员。这次远征曾让他深入未知的水域。当时，他和其他海员找到了一大片正在泄露的黑色液体，并且没人知道是什么。尽管他们的工作就是调查他们所找到的新事物，但是船上除了诺提勒斯之外，没人敢于面对这片黑水。"
  },
  {
    id: "darius",
    title: "诺克萨斯之手",
    name: "德莱厄斯",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big122000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big122001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big122002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big122003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big122004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big122008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big122014.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big122015.jpg"
    ],
    tags: ["近战", "战士"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small122000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small122001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small122002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small122003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small122004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small122008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small122014.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small122015.jpg"
    ],
    Ability: {
      life: "70",
      physical: "70",
      magic: "20",
      difficulty: "50"
    },
    story: "''团结一致的诺克萨斯能够掌控整个世界''提到诺克萨斯力量的象征，没有人能比德莱厄斯这名城邦中最让人畏惧和久经沙场的战士更加适合了。自幼失去双亲的德莱厄斯，为了让他自己和弟弟活下去，不得不进行战斗。到他加入军队的时候，他已经练就出了如同身经百战的老练士兵一般的力气和纪律性。"
  },
  {
    id: "nunu",
    title: "雪原双子",
    name: "努努",
    bgs: [
      "http://img1.dwstatic.com/lol/1809/401455576410/1537500447524.jpg",
      "http://img2.dwstatic.com/lol/1809/401455576410/1537500447889.jpg",
      "http://img4.dwstatic.com/lol/1809/401455576410/1537500448193.jpg",
      "http://img.dwstatic.com/lol/1809/401455576410/1537500448447.jpg",
      "http://img.dwstatic.com/lol/1809/401455576410/1537500448769.jpg",
      "http://img5.dwstatic.com/lol/1809/401455576410/1537500449257.jpg",
      "http://img3.dwstatic.com/lol/1809/401455576410/1537500449512.jpg",
      "http://img4.dwstatic.com/lol/1809/401455576410/1537500449759.jpg"
    ],
    tags: ["打野", "辅助"],
    bgs_thumbnail: [
      "http://img.dwstatic.com/lol/1809/401455716120/1537500687694.jpg",
      "http://img1.dwstatic.com/lol/1809/401455716120/1537500687747.jpg",
      "http://img4.dwstatic.com/lol/1809/401455716120/1537500687820.jpg",
      "http://img3.dwstatic.com/lol/1809/401455716120/1537500687900.jpg",
      "http://img1.dwstatic.com/lol/1809/401455716120/1537500687961.jpg",
      "http://img1.dwstatic.com/lol/1809/401455716120/1537500688088.jpg",
      "http://img4.dwstatic.com/lol/1809/401455716120/1537500688152.jpg",
      "http://img2.dwstatic.com/lol/1809/401455716120/1537500688228.jpg"
    ],
    Ability: {
      life: "70",
      physical: "15",
      magic: "70",
      difficulty: "20"
    },
    story: "佐伊是调皮、想像力跟改变的化身。作为代表巨神峰与星空联系的信使，佐伊能够预示即将改变世界的重大事件。她的存在本身扭曲了掌管现实的神秘法则，有时一个无心的差错就会引起足以动摇世界的灾变──尽管她没有丝毫恶意。这也许能够解释为何佐伊总是以一种轻松，甚至可以说是有些不认真的态度履行她的义务。她把大部分的时间都拿来玩耍、恶作剧，或是想一些其它的花招来娱乐自己。佐伊可爱无害的外表也许让你觉得与她相遇是一件开心的事，但事实往往比你以为的还要复杂，还要危险。"
  },
  {
    id: "janna",
    title: "风暴之怒",
    name: "迦娜",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big40000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big40001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big40002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big40003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big40004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big40005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big40006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big40007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big40008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big40013.jpg"
    ],
    tags: ["远程", "辅助"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small40000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small40001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small40002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small40003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small40004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small40005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small40006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small40007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small40008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small40013.jpg"
    ],
    Ability: {
      life: "36",
      physical: "31",
      magic: "70",
      difficulty: "85"
    },
    story: "不要被迦娜的美貌迷惑，她是最可怕的毁灭风暴！迦娜在战斗中积累无数经验和技巧，她不仅能预判敌人的战术做出反应，还能增加友军的攻击和移动速度，代领他们走向胜利。"
  },
  {
    id: "gragas",
    title: "酒桶",
    name: "古拉加斯",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big79000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big79001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big79002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big79003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big79004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big79005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big79006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big79007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big79008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big79009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big79010.jpg"
    ],
    tags: ["战士", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small79000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small79001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small79002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small79003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small79004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small79005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small79006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small79007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small79008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small79009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small79010.jpg"
    ],
    Ability: {
      life: "80",
      physical: "30",
      magic: "70",
      difficulty: "40"
    },
    story: "对古拉加斯而言，喝酒，是唯一一件比战斗还要重要的事。他对酒劲更强的麦酒有着难以抑制的渴求。在这种渴求的驱使下，他不断寻找着酒劲最强、最不寻常的原料来进行蒸馏。这个行事冲动、难以预测的吵闹酒徒，最喜欢的活动就是砸酒桶和砸脑袋。拜他那古怪的酒水和喜怒无常的脾气所赐，和古拉加斯一起喝酒永远是一个危险的提议。古拉加斯对佳酿有着矢志不渝的爱，但他巨大的体格总是阻止他进入那种飘飘欲仙的醉酒状态。某个晚上，当古拉加斯喝空所有酒桶还意犹未尽时，他突然被一个灵感而不是高脚凳给击中了：为什么不亲自酿造一些让他能真正喝醉的酒呢？随后，他立下誓言，一定要创造出终极麦酒。这个追求，最终将古拉加斯带到了弗雷尔卓德。在那里，他为了追求配方上最为纯净的极地之水而涉入了未被探索过的冰封荒原。古拉加斯在一场扎实的暴风雪中迷失了方向时，却偶然发现了一个宏伟的嚎哭深渊。在那里，他找到了它：一块完美无暇、前所未见的碎冰。这块永不溶化的碎冰，不但可以用难以置信的能力来浸染他库存的麦酒，而且也有个非常方便的副作用——它能将酿造出来的液体以最佳饮用温度进行冷冻。在他新酿液体的魔力下，古拉加斯开始朝着人类聚集地进发，渴望与人分享他辛勤酿制的发酵水果。命运弄人，古拉加斯朦胧的双眼所看到的第一个集会，将改变弗雷尔卓德的未来。在两个部族之间正在讨论与艾希组成同盟之时，他把这次讨论弄成了一次有着恶化趋势的谈判。尽管艾希对这个打破紧张局势的小插曲表示欢迎，但另一些战士们对这个入侵者表示愤怒，并朝这个醉醺醺的呆子投以最恶劣的辱骂。出于天性，古拉加斯用一记老练的头槌还以颜色，引发了一次只有在弗雷尔卓德传说里才出现过的斗殴。当这次大型互殴中倒下的人们终于醒过来时，艾希建议用一次友好的畅饮来代替战争。随着他们的火气在酒沫中熄灭，这两个曾在战争边缘的部族，因为对古拉加斯佳酿的共同爱好，而团结在一起。尽管这次冲突已经平息，古拉加斯成了英雄，但他仍然没有达成酩酊大醉的梦想。所以，他再一次启程前往冰原，去寻找酿造符文大陆极品美酒的原料。"
  },
  {
    id: "pantheon",
    title: "战争之王",
    name: "潘森",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big80000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big80001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big80002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big80003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big80004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big80005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big80006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big80007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big80008.jpg"
    ],
    tags: ["近战", "刺客"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small80000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small80001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small80002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small80003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small80004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small80005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small80006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small80007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small80008.jpg"
    ],
    Ability: {
      life: "60",
      physical: "90",
      magic: "30",
      difficulty: "30"
    },
    story: "在高耸入云的巨神峰居住着一个名为拉阔尔的部族，部族人民崇尚战争的艺术，他们至今仍然记得符文之地的那场符文战争，并且知道虽然英雄联盟一直竭力镇压暴乱，但现在也已经到了极限。斯坦帕部族的每个成员都被训练成纪律严明、凶狠好战的战士，在与诺克萨斯或德玛西亚的士兵作战时，他们喜欢以一敌十。斯坦帕勇士常常进行空手搏斗的训练，他们认为赤手空拳击毙对手才是最优秀的武术家。不仅如此，他们还可以熟练使用部族众多的遗留武器。这些古董武器在勇士们当中代代相传，增强了符文之地的神秘特色。古老的传世武器是极为危险的，因此它们通过潘森之手成功地进入英雄联盟也就不足为奇了。潘森，这个有着岩石一样坚毅脸庞的男人是部族的楷模，他的存在便象征了对搏斗艺术的狂热。然而瓦洛兰人建立了新的组织代替战争，完全由所谓的英雄组成，把斯坦帕部族排除在外，这对潘森来说简直是奇耻大辱。因此，他带着族人的祝福与祖辈传世武器来到了联盟，他要向全世界展示什么才是真正的勇士。他不在乎对手是谁，也不在乎联盟英雄的声望，他只为战斗的荣耀而活。只要潘森一息尚存，他便渴望将对手击败。“就没有更能打的人了么？”潘森，站在德玛西亚营地的废墟中说道。"
  },
  {
    id: "akali",
    title: "离群之刺",
    name: "阿卡丽",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big84002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big84003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big84004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big84005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big84006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big84007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big84008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big84009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big84013.jpg"
    ],
    tags: ["刺客", "近战"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small84000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small84001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small84002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small84003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small84004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small84005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small84006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small84007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small84008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small84009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small84013.jpg"
    ],
    Ability: {
      life: "70",
      physical: "30",
      magic: "70",
      difficulty: "65"
    },
    story: "艾欧尼亚岛上存在一个上古教派，致力于维护均衡。规则与混乱、光明与黑暗——万物必须和谐共存，这就是宇宙的真理。该教派名为均衡教派，维护世界均衡的神圣使命则由三个暗影战士来执行。阿卡丽便是这三名暗影勇士中一员，她肩负着修枝的神圣职责——将威胁瓦洛兰大陆和谐的敌人消灭干净。阿卡丽自小和母亲一起习武，练就一身好武功。母亲的训练严酷无情，她的基本原则是：“我们是在替天行道”。阿卡丽十四岁加入均衡教派，那时她就能空手砍断链条。毋庸置疑，她将继承母亲“暗影之拳”的名号。她的所作所为别人可能无法理解，但在阿卡丽看来，她在执行母亲神圣的信条。现在她和同伴慎，凯南一起维护着瓦洛兰大陆的平衡。这一神圣的追求毫无疑问地将三个暗影战士领向正义之地。"
  },
  {
    id: "twitch",
    title: "瘟疫之源",
    name: "图奇",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big29000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big29001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big29002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big29003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big29004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big29005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big29006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big29007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big29008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big29012.jpg"
    ],
    tags: ["射手", "刺客"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small29000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small29001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small29002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small29003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small29004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small29005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small29006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small29007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small29008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small29012.jpg"
    ],
    Ability: {
      life: "20",
      physical: "90",
      magic: "30",
      difficulty: "40"
    },
    story: "祖安是一座科技、魔法、重商主义混杂的扭曲之城。年轻的次世代技术科学大大地促进了文明的发展，而它在祖安的研究与应用也日益扩展了道德的边界。不计其数的工厂与实验室不断地向环境排泄废弃物，令祖安变成了一个乌烟瘴气之地。与祖安的天空相比，它的地下污染则更为严重。所有祖安的废弃物都汇聚在它的下水道里，混合成一种剧毒而神秘的调合物。从这种可怕混合物里诞生了一只瘟疫鼠——图奇。不同于他的尚未进化的表亲，图奇具有与人无异的知觉……如果他们与他一般疯狂的话。而这种进化的副产物则是图奇的狂躁疯癫，虽然是在官能方面。图奇来到了英雄联盟，在正义之地上展示自己是“他的种类中的独一无二”。自此以后，他在祖安——也就是赋予他进化的感知的城市，找到了一位慷慨的资助者。图奇是祖安在联盟的最早的英雄之一，当瓦洛兰城邦起了政治纷争之时，他便为祖安而战。他曾公开表示他在联盟工作的目的便是为了获得足够的影响力与物质财富，来努力重造他获得感知的过程。虽然他的追求面临着诸多的挑战——其中最大的挑战之一便是他自身的疯癫。如果他成功了，则意味着整个符文之地的进化向前迈出了巨大而无耻的一步。虽然祖安在此事中的隐秘用心还不得而知，但祖安向图奇保证支持他的追求。图奇的存在证明在符文之地一切皆有可能。”— 黑默丁格。"
  },
  {
    id: "renekton",
    title: "荒漠屠夫",
    name: "雷克顿",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big58000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big58001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big58002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big58003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big58004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big58005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big58006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big58007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big58008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big58009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big58017.jpg"
    ],
    tags: ["近战", "突进", "战士"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small58000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small58001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small58002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small58003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small58004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small58005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small58006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small58007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small58008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small58009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small58017.jpg"
    ],
    Ability: {
      life: "60",
      physical: "60",
      magic: "20",
      difficulty: "70"
    },
    story: "雷克顿来自遥远一个的世界，和哥哥内瑟斯一样都是兽形种族的一份子，统治且保护着人类。雷克顿和内瑟斯一起管理秘藏着远古智慧和生死循环奥义的大图书馆。"
  },
  {
    id: "viktor",
    title: "机械先驱",
    name: "维克托",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big112000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big112001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big112002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big112003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big112004.jpg"
    ],
    tags: ["远程", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small112000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small112001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small112002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small112003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small112004.jpg"
    ],
    Ability: {
      life: "30",
      physical: "20",
      magic: "90",
      difficulty: "80"
    },
    story: "''于人之手，科技魔法技术乃工具也。为人之手，则其乃解放也。''在年轻时，维克托就发现了他对科学与发明的激情，特别是机械自动化这一领域。他参加了祖安享有盛名的科技魔法大学，并带领了一支队伍，研发出了布里兹这一科学史上的突破，并期待着这项发明能够让他登上职业生涯的巅峰。不幸的是，他的傲人成果被斯坦里克教授给篡夺了。"
  },
  {
    id: "elise",
    title: "蜘蛛女皇",
    name: "伊莉丝",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big60000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big60001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big60002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big60003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big60004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big60005.jpg"
    ],
    tags: ["打野", "法术"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small60000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small60001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small60002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small60003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small60004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small60005.jpg"
    ],
    Ability: {
      life: "30",
      physical: "40",
      magic: "90",
      difficulty: "90"
    },
    story: "''听说男人都喜欢腿多的女人！''伊莉丝那令人着迷的美貌和优雅下隐藏着一个致命掠食者的残忍与黑暗的心。冷酷狡猾的她将蜘蛛之神的恩赐作为承诺，用来诱惑那些毫无戒心的人。伊莉丝已经将自己的人性换成了一些更加邪恶的东西，通过牺牲无辜的人来维持她的力量与看似永恒的青春。没人能数得清楚，已经有多少人被她抓到网中杀死并用来喂养她那永无止境的饥饿了。"
  },
  {
    id: "poppy",
    title: "圣锤之毅",
    name: "波比",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big78000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big78001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big78002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big78003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big78004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big78005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big78006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big78007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big78014.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big78015.jpg"
    ],
    tags: ["近战", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small78000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small78001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small78002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small78003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small78004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small78005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small78006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small78007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small78014.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small78015.jpg"
    ],
    Ability: {
      life: "80",
      physical: "70",
      magic: "10",
      difficulty: "40"
    },
    story: "“我不是英雄。只是个拿锤子的约德尔人。”符文之地不乏英勇之人，但很少有人能和波比一样坚毅。带着长度两倍于她身高的锤子，这个决绝的约德尔人已经花费了数不清的岁月来寻找那个“德玛西亚英雄”。然而，这位据称是她武器的合法持有人的英雄，只是个虚构出来的人物。"
  },
  {
    id: "jayce",
    title: "未来守护者",
    name: "杰斯",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big126000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big126001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big126002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big126003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big126004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big126005.jpg"
    ],
    tags: ["战士", "射手"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small126000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small126001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small126002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small126003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small126004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small126005.jpg"
    ],
    Ability: {
      life: "60",
      physical: "80",
      magic: "20",
      difficulty: "90"
    },
    story: "''皮尔特沃夫能强势地面对任何威胁''武装着睿智与魅力，以及标志性的可变形铁锤，杰斯毕生致力于守护他的祖国，皮尔特沃夫。靠着发明家的身份而闻达于世的他，用充满磁性的人格以及创意新颖的作品照亮了城邦人民的生活。/p>"
  },
  {
    id: "taliyah",
    title: "岩雀",
    name: "塔莉垭",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big163000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big163001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big163002.jpg"
    ],
    tags: ["远程", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small163000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small163001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small163002.jpg"
    ],
    Ability: {
      life: "70",
      physical: "10",
      magic: "80",
      difficulty: "50"
    },
    story: "何枝可依塔莉垭来自恕瑞玛，怀有操纵岩石的能力。身为一名流浪法师，她洋溢着饱满的热情，天真而又坚定。她在年幼的憧憬与成人的责任之间苦苦求索，踏遍了瓦洛兰的山山水水，只为寻得控制己身异能的法门。据传说，已驾崩无数纪元的皇帝现已重生，她毅然决定返回故乡，保护自己的族人免遭恕瑞玛的沙暴吞没。有些人把她的温柔善意当做是懦弱的表现，最终也为自己的愚鲁付出了代价。塔莉垭青春稚嫩的举止背后，是一颗敢于移山填海的雄心，和一个堪能倾世的灵魂。"
  },
  {
    id: "braum",
    title: "弗雷尔卓德之心",
    name: "布隆",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big201000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big201001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big201002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big201003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big201010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big201011.jpg"
    ],
    tags: ["辅助", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small201000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small201001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small201002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small201003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small201010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small201011.jpg"
    ],
    Ability: {
      life: "90",
      physical: "30",
      magic: "40",
      difficulty: "60"
    },
    story: "''想听个睡前故事吗？''“奶奶，我已经过了听故事的年龄了！”“听故事可没有年龄的限制。”小女孩嫌恶地爬到床上等着，因为她知道这场仗她赢不了。刺骨的寒风在屋外嗥叫着，将纷飞的雪花抽打成魔鬼般的旋涡。"
  },
  {
    id: "bard",
    title: "星界游神",
    name: "巴德",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big432000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big432001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big432005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big432006.jpg"
    ],
    tags: ["法术", "辅助"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small432000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small432001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small432005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small432006.jpg"
    ],
    Ability: {
      life: "60",
      physical: "30",
      magic: "50",
      difficulty: "70"
    },
    story: "''叮~~~''巴德游历于各个超乎凡间生命体想象的秘界之间。瓦洛兰最出色的一些学者已经付出他们的一生去尝试理解巴德所体现的奥秘。这个充满谜团的灵体在瓦洛兰的历史中有过很多名字，但星界游荡者和伟大看护者这样的头衔对他的真正意图来说只是管中窥豹而已。当不可知的宇宙构造受到威胁时，巴德就会引导所有存在的事物避过彻底灭绝的命运。"
  },
  {
    id: "kalista",
    title: "复仇之矛",
    name: "卡莉丝塔",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big429000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big429001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big429002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big429003.jpg"
    ],
    tags: ["物理", "射手"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small429000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small429001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small429002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small429003.jpg"
    ],
    Ability: {
      life: "60",
      physical: "70",
      magic: "30",
      difficulty: "80"
    },
    story: "''被冤枉时，我们寻求正义。被伤害时，我们进行回击。被出卖时，复仇之矛无情出击。''卡莉丝塔是充满复仇怨念的幽灵，是不灭的复仇之魂，是召唤自暗影岛的噩梦，专门猎杀背信弃义之人。背叛行为的受害者会以血泪盼望复仇，但卡莉丝塔只会挑选那些她认为正当的理由，回应召唤，施展自己的杀人技艺。所有被卡莉丝塔盯上的人都将不可避免地遭遇不幸，因为这位死亡猎手终结誓约的方式只有一种，那就是她灵魂标枪上的冷酷灵火。"
  },
  {
    id: "kogmaw",
    title: "深渊巨口",
    name: "克格莫",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big96000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big96001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big96002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big96003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big96004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big96005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big96006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big96007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big96008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big96009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big96010.jpg"
    ],
    tags: ["射手", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small96000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small96001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small96002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small96003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small96004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small96005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small96006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small96007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small96008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small96009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small96010.jpg"
    ],
    Ability: {
      life: "20",
      physical: "80",
      magic: "50",
      difficulty: "40"
    },
    story: "“如果那只是饥饿，我不愿看到愤怒。”当虚空先知玛尔扎哈在艾卡西亚重生时，充满凶意的呼唤就占据了他的心智，从此指引着他的方向。呼唤的声音在他的内心烙下了恐怖的意志，虽然玛尔扎哈不再把这种呼唤当作一种折磨，但他再也无法阻止脑海里不断盘旋的回音。现在驻留在符文之地的邪恶声音唤起了一头令人厌恶的野兽，它从容地跨入了一个无法理解的世界，也撕开了不同时空之间的裂痕。在艾卡西亚鬼灵频现的废墟中，克格莫来到了瓦洛兰大陆，表现出令人不安的好奇心。那引领他通往符文之地的闪光挑逗着他，催促他走向玛尔扎哈。闪光也引导它去适应新的环境，并征服沿途遇到的一切恐惧。符文之地迷人的色彩和香气让克格莫沉醉，它用自己唯一熟知的方法探索着这个奇怪世界里的各种蔬果：吞噬。最初它只是随意尝试恰巧遇到的动物花草，但在穿越炎热的风暴平原时，它遇到了一群游牧民。仿佛不受物理规则约束一般，克格莫张开巨口吞食了所有游牧民以及他们携带的货物，其体积和重量是克格莫的许多倍。受害者在他们生命结束之前努力想弄明白这个怪物口中滴下的腐蚀酸液是来自何方，但这些思绪也在张嘴闭口的瞬间失去了意义。即使在结束了这样的饕餮盛宴之后，克格莫仍然无法获得丝毫满足感。它对毁灭的渴求驱使着它不断靠近玛尔扎哈，而他们相聚之时会发生什么则无人能晓。"
  },
  {
    id: "fiora",
    title: "无双剑姬",
    name: "菲奥娜",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big114000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big114001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big114002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big114003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big114004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big114005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big114022.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big114023.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big114031.jpg"
    ],
    tags: ["近战", "战士"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small114000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small114001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small114002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small114003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small114004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small114005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small114022.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small114023.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small114031.jpg"
    ],
    Ability: {
      life: "70",
      physical: "80",
      magic: "30",
      difficulty: "60"
    },
    story: "''我以荣誉之名前来杀你。即使你毫无荣誉可言，也一样得死。''菲奥娜是瓦洛兰的决斗家中最为可怕的一个，她的名声来自她唐突的举止和精明的头脑，以及与这些相称的对蓝钢刺剑的挥舞速度。她出生在德玛西亚王国里的劳伦特家族，并在一次几乎要毁掉家族的丑闻后，从她父亲那里夺过了家族的控制权。"
  },
  {
    id: "evelynn",
    title: "痛苦之拥",
    name: "伊芙琳",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big28000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big28001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big28002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big28003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big28004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big28005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big28006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big28007.jpg"
    ],
    tags: ["刺客", "打野"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small28000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small28001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small28002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small28003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small28004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small28005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small28006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small28007.jpg"
    ],
    Ability: {
      life: "30",
      physical: "40",
      magic: "70",
      difficulty: "70"
    },
    story: "灵动且致命的伊芙琳是符文大陆上最为致命的——也是收费最高的——刺客之一。她能够随意融入暗影之中，并用这个能力来耐心地追踪她的猎物，等待着合适的机会进行袭击。伊芙琳显然不是一个彻彻底底的人类，她的来历仍然不是很清楚，人们普遍认为她出生于暗影岛——尽管她与那个磨难国度的联系仍然被神秘所笼罩着。"
  },
  {
    id: "jarvan",
    title: "德玛西亚皇子",
    name: "嘉文四世",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big59000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big59001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big59002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big59003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big59004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big59005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big59006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big59007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big59008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big59009.jpg"
    ],
    tags: ["突进", "打野"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small59000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small59001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small59002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small59003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small59004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small59005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small59006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small59007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small59008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small59009.jpg"
    ],
    Ability: {
      life: "70",
      physical: "80",
      magic: "20",
      difficulty: "30"
    },
    story: "''嘚~~~''作为德玛西亚正统皇室光盾家族的成员，几个世纪以来他们都在与那些反对德玛西亚准则的敌人作战。据说每个光盾族人生来骨子里就有一股反诺克萨斯的情绪。嘉文四世也是如此，即使他是第一个生于英雄联盟年代的光盾人。他效仿先人，带领德玛西亚军队和诺克萨斯军队浴血奋战。嘉文四世和他的军队并肩作战，英勇负伤。他曾被斯维因领导的诺克萨斯军队智取并俘虏，这是他最惨烈的败仗。那一次，嘉文四世差点丧命于厄加特之手，幸好童年伙伴盖伦带领着无畏先锋军团，将他解救出来。嘉文四世的亲信觉得这次被俘改变了他。赵信说：“你感觉不到他视线的焦点，他的目光变得茫然而空洞”。某一天，嘉文四世在毫无预警的情况下精心挑选了一队德玛西亚士兵，离开了德玛西亚，他发誓要“将功赎罪，血债血还”。嘉文四世开始追捕瓦洛兰北部最危险的野兽和强盗，但他很快就厌倦了这种狩猎的生活。他冒险来到了宏伟屏障的南部，寻找他一直在追寻的东西，两年内音讯全无，很多人都猜测他死了。然而，他还是回到了热闹的德玛西亚大街。他的战甲上装饰着很多骨头和未知生物，此时的嘉文四世已拥有异于同龄人的智慧。两年前跟着他一起离开的十二个士兵，如今也只有两个活着回来。他用钢铁般冷淡且坚定的声音起誓，他会让德玛西亚的敌人俯首称臣。“世间唯一的真理就在我长矛的尖儿上。”——嘉文四世在被厄加特处刑前的“遗言”。"
  },
  {
    id: "nocturne",
    title: "永恒梦魇",
    name: "魔腾",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big56000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big56001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big56002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big56003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big56004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big56005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big56006.jpg"
    ],
    tags: ["突进", "打野"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small56000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small56001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small56002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small56003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small56004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small56005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small56006.jpg"
    ],
    Ability: {
      life: "30",
      physical: "90",
      magic: "10",
      difficulty: "50"
    },
    story: "''嘚~~~''在魔腾出现之前，人们都认为日有所思才会夜有所梦，梦只是他们在睡觉时昙花一现的无意义影像。但当联盟召唤师受到一连串和梦相关事件的影响后，人们开始怀疑这个说法。有些人尖叫从梦中惊醒，终日惶惶不安；有些人无法入睡，黑夜的到来让他们渐渐失去心智；有些人甚至再也没有醒来。医生们也很困惑，不知道事出何由。直到有一天，一名建筑师昏倒在扭曲丛林旁的枢纽，目击者说建筑师临死前大声呼喊过。紧接着，魔法能量从枢纽中涌出，魔腾腾空而出。魔腾带着杀气袭来，在召唤师用魔法将他限制前，他屠杀了所看到的一切。经过一番深入研究，联盟的专家发现魔腾在召唤师的梦境中追捕他们，并在一个他们无法施放魔法的地方攻击他们，而他唯一的目的似乎只是杀死他们。受害者的家人要求严惩，但联盟官员担心，死亡只会让魔腾回到原来的地方。因此，他们把魔腾限制在枢纽的碎片中、控制在实体世界里。至于对魔腾罪行的惩罚，联盟决定让召唤师在联盟的比赛中召唤魔腾，让他屈服于其厌恶的召唤师并为其制造梦靥。联盟的学者至今都不清楚魔腾是否真的来自梦之星球，也不知道他是否还有同伴。有人推断，召唤行为影响了召唤师的潜意识，诱使魔腾来到他们的梦中。最令人恐慌的说法是魔腾是某人梦靥的真实版。如果这说法是真的，那做梦者是谁呢？“黑暗即将到来……现在漆黑一片了……但我还能看见他……”病人4236如是说道。"
  },
  {
    id: "shaco",
    title: "恶魔小丑",
    name: "萨科",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big35000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big35001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big35002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big35003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big35004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big35005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big35006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big35007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big35008.jpg"
    ],
    tags: ["刺客", "近战"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small35000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small35001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small35002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small35003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small35004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small35005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small35006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small35007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small35008.jpg"
    ],
    Ability: {
      life: "30",
      physical: "80",
      magic: "50",
      difficulty: "40"
    },
    story: "常人都不会视死亡如儿戏。死确非儿戏，但如果你是萨科——则另当别论了。他是瓦洛兰第一位专业的嗜杀喜剧演员。他喜欢变着戏法将人折磨致死，然后放声大笑。他如何获得恶魔小丑的名号仍是个未解之迷。至于他来自何方也是众说纷纭，萨科对此也一直守口如瓶。大多数人认为萨科并非来自符文之地，而是从黑暗扭曲的世界召唤来的。另一些人则认为，他是人类阴暗欲望衍生出的恶魔化身，因此不能以常理而论。而最为可信的一种说法则是萨科是一名雇佣杀手，不需要服务时便捣腾他那些可笑的玩意。萨科也证明了自己确实是一个狡黠之人，每次政府当局想要捉拿他拷问一些骇人的非法暴行时，他都能设法逃避。虽然这样的传言可以让瓦洛兰当地居民稍稍宽心，但人们还是觉得政府竟然让这样的非法之徒逍遥法外，实在有点不可理喻。无论他的过往真相为何，萨科已经加入了英雄联盟，其中缘由惟其自知。萨科实在令人生畏，几乎所有的英雄同道与各路媒体都对他避而远之。唯有战争学院的召唤师们才知道为何让萨科加入英雄联盟，但大多数符文之地的人却怀疑这不过是一种手段而已，好让当权者能以此监督这个神秘莫测的家伙。不出所料，萨科在疯狂的地方大受欢迎，像祖安与诺克萨斯那些权欲熏心的召唤师便能与他打成一片。无论你做什么，千万不要告诉他你错过了他的连珠妙语。"
  },
  {
    id: "malphite",
    title: "熔岩巨兽",
    name: "墨菲特",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big54000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big54001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big54002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big54003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big54004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big54005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big54006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big54007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big54016.jpg"
    ],
    tags: ["近战", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small54000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small54001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small54002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small54003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small54004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small54005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small54006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small54007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small54016.jpg"
    ],
    Ability: {
      life: "90",
      physical: "50",
      magic: "70",
      difficulty: "30"
    },
    story: "''说教无益。折断的骨头是更好的课本。''俄洛伊的体格强横无比，却唯独会在她的坚定信仰面前屈身。作为大海兽的先知，她挥舞着一个巨大的金色神像，将敌人的灵魂抽离体外，将他们对现实的感知完全击毁。所有对“娜伽卡波洛丝的真者”发起挑战的人，很快就会发现，俄洛伊从来不单打独斗——蟒行群岛的众神会与她并肩作战。"
  },
  {
    id: "fizz",
    title: "潮汐海灵",
    name: "菲兹",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big105000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big105001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big105002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big105003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big105004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big105008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big105009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big105010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big105014.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big105015.jpg"
    ],
    tags: ["近战", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small105000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small105001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small105002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small105003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small105004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small105008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small105009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small105010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small105014.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small105015.jpg"
    ],
    Ability: {
      life: "70",
      physical: "20",
      magic: "80",
      difficulty: "70"
    },
    story: "''菲兹能在战斗中让经验最最丰富的老水手们像喝醉了的旱鸭子一样滑稽，我真庆幸它站在我们这边。''几个世纪以前，一种名叫凯玛的水生种族在征服者之海的一座海底山脉下修建了一所城市，阿纳波斯，虽然凯玛族人树敌众多，但是有这座坚不可摧的堡垒保护着他们。由于这座城池所提供的超然安全感，凯玛族民们逐渐的变得自满起来。"
  },
  {
    id: "Neeko",
    title: "万花通灵",
    name: "妮蔻",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big518000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big518001.jpg"
    ],
    tags: ["中单", "打野"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small518000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small518001.jpg"
    ],
    Ability: {
      life: "50",
      physical: "30",
      magic: "70",
      difficulty: "80"
    },
    story: "妮蔻来自一个早已迷失的瓦斯塔亚部落。她可以借用别人的外表来伪装自己，融入人群，甚至通过影响别人的情绪状态，一瞬间就能化敌为友。没人知道妮蔻到底在哪儿——或者到底是谁，但是想要为难她的人会立刻见识到她的本色，感受原始的精神魔法倾泻在自己身上的痛苦。"
  },
  {
    id: "ornn",
    title: "山隐之焰",
    name: "奥恩",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big516000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big516001.jpg"
    ],
    tags: ["战士", "打野", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small516000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small516001.jpg"
    ],
    Ability: {
      life: "90",
      physical: "50",
      magic: "30",
      difficulty: "60"
    },
    story: "奥恩是弗雷尔卓德的一位半神，主掌着锻造和工艺。他在名为炉乡的火山下的溶洞中凿出了一座雄伟的工坊，独自一人在里头干活。他摆弄着熔岩沸腾的坩埚，提炼矿石，打造出无与伦比的精良物件。当其他神灵——尤其是沃利贝尔，在大地上行走并且介入了凡间的事务时，奥恩就会出面，将这些鲁莽的家伙劝回各自的位置上。要么是用手里可靠的锤子，要么就是群山的烈火。"
  },
  {
    id: "missfortune",
    title: "赏金猎人",
    name: "厄运小姐",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big21000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big21001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big21002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big21003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big21004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big21005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big21006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big21007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big21008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big21009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big21015.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big21017.jpg"
    ],
    tags: ["远程", "物理"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small21000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small21001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small21002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small21003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small21004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small21005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small21006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small21007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small21008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small21009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small21015.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small21016.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small21017.jpg"
    ],
    Ability: {
      life: "10",
      physical: "90",
      magic: "30",
      difficulty: "50"
    },
    story: "''嘚~~~''“风险越大，赏金越多。” 无论是美貌颜值还是危险指数，鲜有人能在任何一方面与厄运小姐媲美。作为比尔吉沃特最负盛名的赏金猎人，她的传奇故事建立在无数密布着弹孔的尸体和被捕获的混混们之上。只要比尔吉沃特那臭烘烘的码头和拾荒者棚屋中回响起她标志性的双枪，赏金告示板上的悬赏令就又少了一张。                        “黑暗即将到来……现在漆黑一片了……但我还能看见他……”病人4236如是说道。"
  },
  {
    id: "draven",
    title: "荣耀行刑官",
    name: "德莱文",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big119000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big119001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big119002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big119003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big119004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big119005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big119006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big119012.jpg"
    ],
    tags: ["射手"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small119000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small119001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small119002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small119003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small119004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small119005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small119006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small119012.jpg"
    ],
    Ability: {
      life: "50",
      physical: "90",
      magic: "10",
      difficulty: "90"
    },
    story: "''我的斧子无可挑剔''不同于他的兄长德莱厄斯，战场上的胜利对德莱文来说是绝对不够的。他热切渴望着人们的承认，喝彩，以及荣耀。他先是在诺克萨斯军队里寻求成名的机会，可他的戏剧天资却被严重埋没。"
  },
  {
    id: "lissandra",
    title: "冰霜女巫",
    name: "丽桑卓",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big127000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big127001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big127002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big127003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big127004.jpg"
    ],
    tags: ["法师", "远程"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small127000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small127001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small127002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small127003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small127004.jpg"
    ],
    Ability: {
      life: "20",
      physical: "50",
      magic: "80",
      difficulty: "60"
    },
    story: "''闭上眼睛，让寒冷将你夺去。''丽桑卓的魔法将纯净的冰霜之力扭曲为某种黑暗而可怕的东西。伴随着她的黑色冰霜之力，她不仅冻结敌人，还能将他们刺穿并粉碎。对于北部饱受恐吓的居民来说，她只是被称为“冰霜女巫”。但事实却更为凶险：丽桑卓是个本质上的堕落之人，她阴谋释放能力将世界转变成冰河世纪。丽桑卓努力在世界上清除一切有关于守望者的知识。利用魔法保持人形，她伪装成许多的先知和长者。"
  },
  {
    id: "rengar",
    title: "傲之追猎者",
    name: "雷恩加尔",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big107001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big107002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big107003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big107008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big107015.jpg"
    ],
    tags: ["突进", "物理"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small107000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small107001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small107002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small107003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small107008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small107015.jpg"
    ],
    Ability: {
      life: "90",
      physical: "60",
      magic: "90",
      difficulty: "60"
    },
    story: "''今晚 猎个痛快！''在藏品猎人雷恩加尔的兽穴里，每一面墙上都陈列着来自瓦洛兰里最为致命的生物们的头颅、巨角、利爪与尖牙。尽管他的收藏非常广泛，但他仍然没有满足，并且不知疲倦地寻找着更加强大的猎物。他的每次猎杀都颇费时间，包括研究他的猎物，学习，以及为了与那个他绝对无法打败的怪兽的下次相遇做准备。雷恩加尔从来不知道他的亲生父母是谁，一个被尊为传奇猎人的人类将他抚养长大。他是一个完美的学生，专心地汲取着他养父的课程，并用他怪异的野性本能来改进它们。..."
  },
  {
    id: "xinzhao",
    title: "德邦总管",
    name: "赵信",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big5000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big5001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big5002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big5003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big5004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big5005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big5006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big5013.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big5020.jpg"
    ],
    tags: ["近战", "物理"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small5000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small5001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small5002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small5003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small5004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small5005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small5006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small5013.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small5020.jpg"
    ],
    Ability: {
      life: "60",
      physical: "70",
      magic: "30",
      difficulty: "10"
    },
    story: "''嘚~~~''“人之死，难免也。可免者，唯败也。”每当德玛西亚国王嘉文三世在皇宫顶部那熠熠生辉的大理石阳台上发表激情澎湃的演讲时，赵信都会侍立于他的身旁。人称“德邦总管”的赵信是光盾王朝的私人管家。他那高深莫测且不苟言谈的守夜值勤，使得关于他的“隐秘生活”与出身来源的推测层出不穷。不管是被茶余饭后的闲谈疑为“祖安的双重间谍”，还是被《德玛西亚恒量》的社论推测为“负债累累的符文法师”，赵信从未泄露出任何蛛丝马迹，以满足大众的好奇心……这当然是有充分理由的。许多年前，诺克萨斯以其蔚为壮观的“绞肉大赛”而闻名于世。这是一个残忍而扭曲的角斗赛事：当一位斗士赢得比赛时，他要同时面对的对手（通常为战俘）数目会随之增加。这就意味着每个参赛者最终都必死无疑，只是会带着无上的荣耀死去。赵信，当时被称为“维斯塞罗”，所面对的是300名士兵，这个数目是之前记录的将近六倍。显然，这也意味着是他的最终赛事了。嘉文二世，在听闻了这个史无前例的功绩之后，偷偷地潜入角斗场，给赵信提供了另一个选择：为德玛西亚效力，惩罚那些最终要将他处死的人，以此换取他的自由。堂堂君主竟会舍生救他，赵信在震惊之余接受了嘉文二世的条件。在德玛西亚策划的突袭掩护之下，嘉文解放了赵信以及他的三百名对手。在他们撤退的途中，赵信替嘉文挡下了一支毒箭。这种忠心护主之举，来自于一个并未宣誓效忠的人，为赵信赢得了一个国王身边的职位，直到国王驾崩。目前赵信效命于先王之子嘉文三世，为收容他的国家而战，以此报答赋予他生命意义的先王恩典，光耀嘉文一族的门庭。"
  },
  {
    id: "graves",
    title: "法外狂徒",
    name: "格雷夫斯",
    bgs: [
      "http://img5.dwstatic.com/lol/1512/315414597848/1451466514447.jpg",
      "http://img1.dwstatic.com/lol/1512/315414597848/1451466522938.jpg",
      "http://img2.dwstatic.com/lol/1512/315414597848/1451466538356.jpg",
      "http://img1.dwstatic.com/lol/1512/315414597848/1451466565429.jpg",
      "http://img1.dwstatic.com/lol/1512/315414597848/1451466577636.jpg",
      "http://img.dwstatic.com/lol/1512/315414597848/1451466596377.jpg",
      "http://img2.dwstatic.com/lol/1512/315414597848/1451466611153.jpg"
    ],
    tags: ["远程", "打野"],
    bgs_thumbnail: [
      "http://img4.dwstatic.com/lol/1512/315414597848/1451466780696.jpg",
      "http://img4.dwstatic.com/lol/1512/315414597848/1451466801035.jpg",
      "http://img2.dwstatic.com/lol/1512/315414597848/1451466808297.jpg",
      "http://img2.dwstatic.com/lol/1512/315414597848/1451466814610.jpg",
      "http://img3.dwstatic.com/lol/1512/315414597848/1451466820612.jpg",
      "http://img1.dwstatic.com/lol/1512/315414597848/1451466829360.jpg",
      "http://img5.dwstatic.com/lol/1512/315414597848/1451466836826.jpg"
    ],
    Ability: {
      life: "70",
      physical: "80",
      magic: "20",
      difficulty: "30"
    },
    story: "''来试试子弹吧''马尔科姆丶格雷福斯的足迹遍布整个大陆，他在许多领地、城邦和帝国都是通缉要犯。格雷福斯粗狂不羁、意志坚定，而且残忍无情无人能及，他一生的犯罪恶行为他积攒了（随后又不可避免地失去了）一笔小财。"
  },
  {
    id: "jhin",
    title: "戏命师",
    name: "烬",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big202000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big202001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big202002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big202003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big202004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big202005.jpg"
    ],
    tags: ["刺客", "射手"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small202000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small202001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small202002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small202003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small202004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small202005.jpg"
    ],
    Ability: {
      life: "30",
      physical: "90",
      magic: "20",
      difficulty: "50"
    },
    story: "艺术需要相当程度的…残忍。”作为一名心思缜密的癫狂杀手，烬坚信谋杀是一门艺术。他曾在艾欧尼亚的监狱中服刑，但却因为执政议会里涌动着的暗流而得到释放，成为了权术斗争所利用的刺客。烬将手中的枪当成画笔，尽情地挥洒他所追求的残忍艺术，让受害者肝胆俱裂，令旁观者震悚难平。他在自己制作的阴森剧目里肆意取乐，让“恐怖”二字有了最合适不过的，使者。"
  },
  {
    id: "chogath",
    title: "虚空恐惧",
    name: "科加斯",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big31000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big31001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big31002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big31003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big31004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big31005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big31006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big31007.jpg"
    ],
    tags: ["近战", "法术"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small31000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small31001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small31002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small31003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small31004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small31005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small31006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small31007.jpg"
    ],
    Ability: {
      life: "70",
      physical: "10",
      magic: "70",
      difficulty: "50"
    },
    story: "在各维度和各世界间，存在着这么一个地方。有人说它是外来世界，有人则称之为未知空间。事实上，了解的人都知道这个地方叫做虚空世界。虽然名为虚空世界，但这里并非一片荒芜。这里生活着无法形容的生物，笼罩着人类无法想象的恐惧。科加斯就是虚空世界的产物之一，他本性邪恶，提起他的名字都令人毛骨悚然。他的同伴们试图挖通维度边墙，进入符文之地。那里是他们的天堂，可以尽情享受无上的恐惧。他们名为虚空来客，来自古代的可怕生物，所以历史并没有记载。据说，虚空来客曾经在其他世界指挥大量无法形容的生物组成军队，他们曾被强大的魔法驱逐出符文之地，而这种魔法现已不复存在。如果这个传说是真的，那么以下的传说也同样属实。据说有一天，虚空来客将会回归。现在，暗物质在艾卡西亚涌动，妨碍了联盟的召唤仪式，召唤出了科加斯。这是一只充满仇恨又暴力的野兽，他让很多人陷入到恐惧中，除了最顽强的人可以不受恐惧。科加斯以掠夺为生，吞下食物之后，他的体型也越来越庞大。更糟糕的是，他很聪明，非常聪明，有许多人想知道这只野兽到底能长多大。幸运的是，联盟的召唤能量把科加斯的活动限制在了英雄联盟。在这里，召唤师们利用科加斯虚空来客的能力，协助他们决定符文之地的命运。当科加斯厌倦了联盟的生活，灾难随之而来。"
  },
  {
    id: "brand",
    title: "复仇焰魂",
    name: "布兰德",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big63000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big63001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big63002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big63003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big63004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big63005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big63006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big63007.jpg"
    ],
    tags: ["远程", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small63000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small63001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small63002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small63003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small63004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small63005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small63006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small63007.jpg"
    ],
    Ability: {
      life: "40",
      physical: "20",
      magic: "80",
      difficulty: "70"
    },
    story: "''这个地方早晚会被烧成灰烬，焚毁它的不是风中飞烬，而是我的复仇之手。''在遥远的洛克法，有个叫基根丶诺和的海上掠夺者。和洛克法的其他人一样，基根和他的船员到处航行，掠夺那些倒霉蛋的财物。对某些人而言，他掠夺财物，是个魔头。但对另外一些人而言，他和大众一样只是个平凡的强盗。某个夜晚，他们正驶过北冰洋时，发现冰冻废土上闪动着奇光。"
  },
  {
    id: "vi",
    title: "皮城执法官",
    name: "蔚",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big254000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big254001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big254002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big254003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big254004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big254005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big254011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big254012.jpg"
    ],
    tags: ["打野", "突进"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small254000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small254001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small254002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small254003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small254004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small254005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small254011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small254012.jpg"
    ],
    Ability: {
      life: "80",
      physical: "50",
      magic: "30",
      difficulty: "50"
    },
    story: "''先打脸，打的时候再问话。''对于蔚来说，所有问题都只是一道墙壁，一道可以用她的巨型海克斯科技拳套一拳打穿的墙壁而已。尽管她的成长过程总是伴随着违法乱纪，但现在，蔚将她的犯罪本领用来为皮尔特沃夫警方服务。蔚的傲慢态度、粗俗幽默和公然抗命，经常会激怒她那循规蹈矩的搭档，凯特琳。但即使是皮城女警也无法否认，在与犯罪团伙的斗争中，蔚是一个无价之宝。蔚的童年时代在皮尔特沃夫的一个不受法律约束的郊区度过。为了生存下去，她学会了抢劫和诈骗。通过偷窃并拆散海克斯科技硬件，她掌握了熟练的机械技术。..."
  },
  {
    id: "karma",
    title: "天启者",
    name: "卡尔玛",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big43000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big43001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big43002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big43003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big43004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big43005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big43006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big43007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big43008.jpg"
    ],
    tags: ["法师", "远程"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small43000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small43001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small43002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small43003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small43004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small43005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small43006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small43007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small43008.jpg"
    ],
    Ability: {
      life: "10",
      physical: "70",
      magic: "80",
      difficulty: "50"
    },
    story: "''灵性这种东西，外人无法从你身上剥离。要明智地使用它。''卡尔玛是一位有着不屈意志和无拘灵力的女性。她是显灵的艾欧尼亚之魂，战场上的精神支柱，保护友军击退来犯之敌。卡尔玛是一个强大的领袖，在传统和革新之间艰难地探寻着保卫艾欧尼亚和平局面的方式——迫不得已时，也会动用武力。卡尔玛看见了第三条道路，这条道路将艾欧尼亚在战争中发现的实力与这个国家仍然看重的和平传统结合在一起。现在，她正为了能让她支离破碎的祖国重新回到持久的和平状态而不停探求着。"
  },
  {
    id: "blitzcrank",
    title: "蒸汽机器人",
    name: "布里茨",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big53000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big53001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big53002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big53003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big53004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big53005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big53006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big53007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big53011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big53020.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big53021.jpg"
    ],
    tags: ["近战", "辅助"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small53000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small53001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small53002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small53003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small53004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small53005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small53006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small53007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small53011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small53020.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small53021.jpg"
    ],
    Ability: {
      life: "88",
      physical: "45",
      magic: "45",
      difficulty: "70"
    },
    story: "布里茨是科技学院的奇迹，他是个慢速的金属拳手，很难被打倒。当布里茨处于致命危险时，他会自动使用法力电池制造一层保护网。"
  },
  {
    id: "vayne",
    title: "暗夜猎手",
    name: "薇恩",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big67000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big67001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big67002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big67003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big67004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big67005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big67006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big67010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big67011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big67012.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big67013.jpg"
    ],
    tags: ["物理", "射手"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small67000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small67001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small67002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small67003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small67004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small67005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small67006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small67010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small67011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small67012.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small67013.jpg"
    ],
    Ability: {
      life: "70",
      physical: "80",
      magic: "0",
      difficulty: "70"
    },
    story: "''我闻到了黑魔法的味道。''这个世界并没有人们想象中那么文明，还是有一些人愿意追随横行符文之地的暗黑魔法，并因此堕落腐败,肖娜薇恩对此了如指掌。作为德玛西亚精英家族的掌上明珠，薇恩的父亲一直让她相信她处于警卫队的保卫下。"
  },
  {
    id: "mordekaiser",
    title: "铁铠冥魂",
    name: "莫德凯撒",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big82000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big82001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big82002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big82003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big82004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big82005.jpg"
    ],
    tags: ["法师", "战士"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small82000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small82001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small82002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small82003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small82004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small82005.jpg"
    ],
    Ability: {
      life: "50",
      physical: "30",
      magic: "70",
      difficulty: "40"
    },
    story: "“万物皆有一死……唯我可得永生。”名叫莫德凯撒的恶毒怨灵是萦绕于暗影岛上的一个最为可怖和可憎的灵体。被埋葬在古代铠甲中的冥魂之主据说是第一个不死灵体，甚至还是一个在暗影岛被改造前就存在的怨魂。他扭曲的灵魂，因他的苦痛和他对其他人施加的痛苦而增长着。那些胆敢在战争中直面莫德凯撒的人，将遭到可怕的诅咒：他会奴役被害者的灵魂，并让他们成为毁灭的工具。"
  },
  {
    id: "ziggs",
    title: "爆破鬼才",
    name: "吉格斯",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big115000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big115001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big115002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big115003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big115004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big115005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big115006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big115007.jpg"
    ],
    tags: ["远程", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small115000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small115001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small115002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small115003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small115004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small115005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small115006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small115007.jpg"
    ],
    Ability: {
      life: "50",
      physical: "30",
      magic: "80",
      difficulty: "50"
    },
    story: "''吉格斯？不可理喻，危险无比，对，没错。但确实才华横溢！''吉格斯生来就有着捣鼓机械的天赋，但他自由散漫、过度亢奋的天性在约德尔科学家当中实属罕见。怀着成为黑默丁格那样的伟大发明家的雄心壮志，他很快凭借着狂躁的激情描绘出了一个个野心勃勃的工程蓝图，并且靠着他的那些充满争议的失败和前无古人的发现来为自己加油鼓劲。"
  },
  {
    id: "garen",
    title: "德玛西亚之力",
    name: "盖伦",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big86000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big86001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big86002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big86003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big86004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big86005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big86006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big86010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big86011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big86013.jpg"
    ],
    tags: ["近战", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small86000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small86001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small86002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small86003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small86004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small86005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small86006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small86010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small86011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small86013.jpg"
    ],
    Ability: {
      life: "90",
      physical: "70",
      magic: "20",
      difficulty: "10"
    },
    story: "在瓦洛兰大陆，虽然人们对德玛西亚的军纪存在争议，但是相同点是所有人都尊敬它。平民和士兵都严格遵守着“零容忍”的准则。这意味着在战斗中徳玛西亚军队永远不会找借口托辞、逃跑、或者投降。至高的军队领袖们强力地执行着这些原则。盖伦——拥有“德玛西亚之力”头衔的英勇勇士，就是军队的模范。成千上万的英雄在德玛西亚和诺克萨斯（德玛西亚的敌对阵营）战场上浴血奋战，战死沙场。在军旗下，盖伦遇到了旗鼓相当的对手——刀锋女王卡特琳娜。那些参与战争且幸存下来的士兵们认为，盖伦和卡特琳娜的对战不像是在打斗，而像跳舞。盖伦是德玛西亚军队的骄傲，是无畏先锋军团的领袖。生平第一次气喘吁吁地从战场归来，尽管有人认为他并非因为实力悬殊才输掉战斗。那时候流言甚嚣尘上。此后，盖伦会抓住每次和刀锋女王切磋的机会来证明自己。作为德玛西亚的道德模范，盖伦从不理会这些传言，因为他知道别人是无法理解他的。对真正的勇士而言，寻找一个旗鼓相当的对手是他的动力。如此美丽、与众不同的对手证明了他存在的价值。盖伦的前线战略——“杀敌的最好方法就是连他身边的人一起砍翻。”"
  },
  {
    id: "maokai",
    title: "扭曲树精",
    name: "茂凯",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big57000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big57001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big57002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big57003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big57004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big57005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big57006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big57007.jpg"
    ],
    tags: ["近战", "坦克", "控制"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small57000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small57001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small57002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small57003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small57004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small57005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small57006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small57007.jpg"
    ],
    Ability: {
      life: "70",
      physical: "40",
      magic: "50",
      difficulty: "40"
    },
    story: "“藐视自然规律，必将自食其果。”——茂凯暗影岛上的那些受折磨的阴影们犹如飞蛾扑火一般涌向茂凯体内的生命精华。茂凯奋力守护着生命之种，不让它落入无情的亡灵手中，但茂凯知道，他无法永远地挡住他们。他得逃离这个曾经是家园的亡者之地，因此他把自己投入大海之中，并坚信大自然会把他带到一个生机盎然的地方。他希望能在那个地方找到驱逐亡灵势力的方法，并让生命重回暗影岛。"
  },
  {
    id: "corki",
    title: "英勇投弹手",
    name: "库奇",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big42000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big42001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big42002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big42003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big42004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big42005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big42006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big42007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big42008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big42018.jpg"
    ],
    tags: ["物理", "远程"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small42000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small42001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small42002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small42003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small42004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small42005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small42006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small42007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small42008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small42018.jpg"
    ],
    Ability: {
      life: "30",
      physical: "80",
      magic: "60",
      difficulty: "70"
    },
    story: '库奇是"尖啸之蛇"里最具盛名的，不单因为他无与伦比的勇气，还有他面对威胁时冷静的头脑。在加入联盟之前，库奇也效力过其他组织，他经常主动接受任务，深入敌后，在危险地带收集情报或传递信息，他在危险中成长。早晨来一场激烈的空战便是他的最高享受。'
  },
  {
    id: "leesin",
    title: "盲僧",
    name: "李青",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big64000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big64001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big64002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big64003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big64004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big64005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big64006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big64010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big64011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big64012.jpg"
    ],
    tags: ["近战", "打野", "突进"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small64000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small64001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small64002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small64003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small64004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small64005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small64006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small64010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small64011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small64012.jpg"
    ],
    Ability: {
      life: "70",
      physical: "70",
      magic: "10",
      difficulty: "80"
    },
    story: "李青用自焚的方式抗议诺克萨斯对艾欧尼亚的侵占。当人们往李青身上泼水，想扑灭火时，他的眼睛却被烧伤了。还好他没有被烧死，尽管忍受了几个星期的烧伤痛苦。但他的行动为联盟的比赛铺平了道路。"
  },
  {
    id: "katarina",
    title: "不祥之刃",
    name: "卡特琳娜",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big55000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big55001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big55002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big55003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big55004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big55005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big55006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big55007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big55008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big55009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big55010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big55012.jpg"
    ],
    tags: ["远程", "法术"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small55000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small55001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small55002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small55003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small55004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small55005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small55006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small55007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small55008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small55009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small55010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small55012.jpg"
    ],
    Ability: {
      life: "70",
      physical: "50",
      magic: "90",
      difficulty: "90"
    },
    story: "卡特琳娜生于诺克萨斯的权贵之家，从小就接受匕首的训练。现在那位火爆任性的小姑娘已经长大，美丽而致命。对家族的责任和忠诚缓和了火爆的性格。事实早已证明，在自我与责任之间出现分歧时，卡特琳娜火爆的激情就会变成一把双刃剑，伤人伤己。作为诺克萨斯将军的女儿，卡特琳娜生性自由奔放，年幼的卡特琳娜在各方面都得到了最好的照顾。在战斗中，她发现自己被刀刃所吸引，而她的天赋也展现出来。卡特琳娜在诺克萨斯军队里接受成为最致命刺客的训练，让整个家族都为之骄傲。很快，导师就认为卡特琳娜已经可以接受试炼，前去刺杀一名出色的德玛西亚士兵。匍匐于黑暗的军营中，卡特琳娜急于证明自己。当一名将军在没有保镖陪同下经过时，冲动的卡特琳娜毫无声息的割断了他的喉咙。随后卡特琳娜消失在黑夜中，对自己的杰作心满意足。不过第二天她的喜悦很快就消散了。真正的目标带领部队伏击了毫无准备的诺克萨斯军队。卡特琳娜冲入战场，试图弥补自己犯下的错误，激烈的搏斗在她左眼留下了永恒的伤疤。虽然最后卡特琳娜最终完成了任务，但伤害已然造成，家族的声誉也受损。从那一天开始，卡特琳娜发誓绝不再让冲动控制自己，她将为诺克萨斯和家族带来荣誉。平衡责任和欲望成了卡特琳娜一生的挑战。对这个世界而言，卡特琳娜就是诺克萨斯爱国精神的象征。“永远不要质疑我的忠诚，你不会了解我为之忍受的一切。”——卡特琳娜"
  },
  {
    id: "rammus",
    title: "披甲龙龟",
    name: "拉莫斯",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big33000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big33001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big33002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big33003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big33004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big33005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big33006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big33007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big33008.jpg"
    ],
    tags: ["近战", "战士"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small33000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small33001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small33002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small33003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small33004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small33005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small33006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small33007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small33008.jpg"
    ],
    Ability: {
      life: "85",
      physical: "40",
      magic: "55",
      difficulty: "55"
    },
    story: "披甲龙龟-拉莫斯瘟疫之地上蔓延的危险魔法影响了该地区的所有生灵，拉莫斯就是一个例子。"
  },
  {
    id: "twisted",
    title: "卡牌大师",
    name: "崔斯特",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big4000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big4001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big4002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big4003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big4004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big4005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big4006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big4007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big4008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big4009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big4010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big4011.jpg"
    ],
    tags: ["法师", "刺客"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small4000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small4001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small4002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small4003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small4004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small4005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small4006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small4007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small4008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small4009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small4010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small4011.jpg"
    ],
    Ability: {
      life: "20",
      physical: "60",
      magic: "60",
      difficulty: "70"
    },
    story: "崔斯特是一名声名狼藉的纸牌老千和诈骗惯犯，世界上任何有人烟的地方都有他施展魅力和赌艺的足迹，让那些富人和痴人既羡慕又嫉恨。他很少会认真起来干一件事，总是用一抹轻蔑的微笑和一副漫不经心的随性面对每一天。无论做任何事情，崔斯特永远都会在袖子里藏一张王牌。"
  },
  {
    id: "galio",
    title: "正义巨像",
    name: "加里奥",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big3000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big3001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big3002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big3003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big3004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big3005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big3006.jpg"
    ],
    tags: ["坦克", "法术"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small3000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small3001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small3002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small3003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small3004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small3005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small3006.jpg"
    ],
    Ability: {
      life: "80",
      physical: "0",
      magic: "70",
      difficulty: "50"
    },
    story: "''嘚~~~''“这个世上没有赎罪，只有忏悔。”虽然今日早已明令禁止向傀儡假人灌输思想，但在以前，很多工匠专家却觉得这种行为再正常不过，法师们很早就对创造人造生命进行试验。有这样一位充满幻想的德玛西亚工匠，杜朗，他制作人造生物的手艺无与伦比。杜朗为他挚爱的城邦周边的小镇设计了不知疲倦的卫士，保护他们免受诺克萨斯的侵犯。杜朗则留着杰作加里奥保护自己。这个强大的造物确保了杜朗旅途的安全，让他无畏那些对他家园充满敌意的人，全心全意完成自己重要的工作。然而，这最终激怒了诺克萨斯的最高指挥部。当杜朗和他的杰作一起穿过嚎叫湿地时，遭受了大批诺克萨斯暗杀者的袭击。暗杀者切断加里奥的能量来源，迅速地杀死了杜朗，然后消失在丛林中。这让寡不敌众、不知所措加里奥很惊恐，被剥夺了生存理由的加里奥陷入了绝望。多年来，他独自隐居，守护着他无法保护的主人的尸骨——一块纪念自己永恒羞耻的文字碑。有一天，一个伤心但坚强的约德尔女孩在巨大的雕像附近休息。她戴着巨大的德玛西亚王冠，隐藏着的加里奥清楚地看到她，并研究着这个孤独的约德尔人。她似乎也承受着巨大的负担。她安静且坚韧地来到这里，朝着德玛西亚的方向前进。和约德尔女孩的邂逅让加里奥看见了光芒，想起死去了的主人，加里奥从沉默的涤罪中觉醒，紧紧跟随着这个勇敢的女孩。他获得了全新的生命目标：为德玛西亚的意志而战。"
  },
  {
    id: "shen",
    title: "暮光之眼",
    name: "慎",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big98000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big98001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big98002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big98003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big98004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big98005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big98006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big98015.jpg"
    ],
    tags: ["近战", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small98000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small98001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small98002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small98003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small98004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small98005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small98006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small98015.jpg"
    ],
    Ability: {
      life: "90",
      physical: "40",
      magic: "40",
      difficulty: "40"
    },
    story: "艾欧尼亚岛上有一个上古教派，致力于维护万物平衡。他们认为，规则与混乱、光明与黑暗，万物必须和谐共存，这才是宇宙的真理。这个教派名为均衡教派，而他们维护世界平衡的神圣使命则由三个暗影战士来执行。慎就是这三名暗影战士中一员，他肩负着观星的神圣职责——不偏不倚地执行裁决。慎出生于名门望族，该家族世世代代都致力于彰显平衡教派的荣耀。从出生起，慎便是为了要成为暮光之眼，从而公正无私地采取行动来维持平衡。在他最终荣升成为暮光之眼时，他被迫参加了塔卡奴仪式。他眼睁睁看着父亲备受折磨，以此来检验他的决心与能力。慎的任何杂念都会让他立即丧失资格，但他自始至终都没有转移他的视线，甚至连眼睛都没眨一下。作为暮光之眼，慎的使命就是为了平衡的目的而摒弃一切情感。现在他与同伴阿卡丽及凯南一起携手合作来加强瓦洛兰的平衡。这个神圣的使命自然而然地将这三位暗影战士领进了正义之地。“暮光之眼看不到受害者的绝望，只看到万物平衡和谐的典雅。”"
  },
  {
    id: "malzahar",
    title: "虚空先知",
    name: "玛尔扎哈",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big90000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big90001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big90002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big90003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big90004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big90005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big90006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big90007.jpg"
    ],
    tags: ["法师", "刺客"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small90000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small90001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small90002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small90003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small90004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small90005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small90006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small90007.jpg"
    ],
    Ability: {
      life: "20",
      physical: "20",
      magic: "80",
      difficulty: "50"
    },
    story: "大部分人在恕瑞玛烈日的眩光下变得疯癫，而玛尔扎哈却在暗夜的拥抱中失去了心智。玛尔扎哈天生便是一位预言家。尽管他的才能尚未达到炉火纯青的境界，但他的能力却是符文之地的最大恩惠。由于他对命运的复杂多变有着强烈的感知，致使一些不受欢迎的事物趁虚而入，逐渐地侵蚀着他的潜意识。在他的梦里，隔离之纱最薄弱的地方，一个邪灵正在召唤他。起初，玛尔扎哈尚能抵御这强烈的蛊惑，然而随着时间的流逝，召唤之声越来越强烈，直到玛尔扎哈再也无法抗拒。在某种妖艳魔符的引诱下，玛尔扎哈不带任何补给便只身探入沙漠。他的目的地是东方的一处没落的文明——古籍记载为埃卡西亚的地方。很少有人相信这个地方曾经存在过，而那些坚信其存在的人也认为埃卡西亚一定是被漫天黄沙所吞噬了。就在玛尔扎哈双腿再也支撑不住时，他发现自己竟跪立在一座坍塌的奇异方尖碑面前。方尖碑周围是已经被毁坏的外星城池，以及腐蚀的暗黑凶灵的巨像。他的眼睛看到了普通人不该看到的东西，因而充满了虚空。曾经，他对未来的预知幻像是起伏不定的，然而此刻他却清晰地看到了瓦洛兰将会被虚空生物围困的场景。屹立于风沙荡漾的沙丘中，他不由自主的从嘴里迸出四个字：英雄联盟。现在，玛尔扎哈浑身上下充满着虚空的能量，前往北方寻找自己的命运。"
  },
  {
    id: "yi",
    title: "无极剑圣",
    name: "易",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big11000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big11001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big11002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big11003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big11004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big11005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big11009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big11010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big11011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big11017.jpg"
    ],
    tags: ["刺客", "战士"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small11000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small11001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small11002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small11003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small11004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small11005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small11009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small11010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small11011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small11017.jpg"
    ],
    Ability: {
      life: "100",
      physical: "20",
      magic: "40",
      difficulty: "40"
    },
    story: "过远古的无极之道，易大师调节身体并磨练心智，直至心神合一。尽管他将暴力作为不得已的选择手段，他优雅迅速的舞剑速度却能让他快速解决问题。作为无极之道最后的门徒，易大师将生命奉献于找寻可以继承这份财富的弟子。"
  },
  {
    id: "fiddlesticks",
    title: "末日使者",
    name: "费德提克",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big9000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big9001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big9002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big9003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big9004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big9005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big9006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big9007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big9008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big9009.jpg"
    ],
    tags: ["远程", "物理"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small9000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small9001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small9002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small9003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small9004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small9005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small9006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small9007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small9008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small9009.jpg"
    ],
    Ability: {
      life: "30",
      physical: "20",
      magic: "90",
      difficulty: "50"
    },
    story: "那个时候，召唤师峡谷没有代表祖安的英雄。重复敲打召唤室大门得到的只有寂静。第一个进去的学徒马上就被神秘镰刀杀死。少数跟随且存活下来的人却被恐惧吓疯了，只剩下人的躯壳，语无伦次地说着群鸦和死亡。"
  },
  {
    id: "nasus",
    title: "沙漠死神",
    name: "内瑟斯",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big75000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big75001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big75002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big75003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big75004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big75005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big75006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big75010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big75011.jpg"
    ],
    tags: ["近战", "战士"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small75000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small75001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small75002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small75003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small75004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small75005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small75006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small75010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small75011.jpg"
    ],
    Ability: {
      life: "60",
      physical: "50",
      magic: "40",
      difficulty: "30"
    },
    story: "这个被称为内瑟斯的神秘生物从遥远的世界来到联盟，并且是庞大博学的沙漠帝国的一部分。"
  },
  {
    id: "alistar",
    title: "牛头酋长",
    name: "阿利斯塔",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big12000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big12001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big12002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big12003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big12004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big12005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big12006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big12007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big12008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big12009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big12010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big12019.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big12020.jpg"
    ],
    tags: ["近战", "辅助"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small12000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small12001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small12002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small12003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small12004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small12005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small12006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small12007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small12008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small12009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small12010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small12019.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small12020.jpg"
    ],
    Ability: {
      life: "85",
      physical: "30",
      magic: "70",
      difficulty: "55"
    },
    story: "作为牛头人部落里最强大的勇士，阿利斯塔一直保护着自己的部落远离瓦罗然大陆上的各种危险，直至诺克苏斯军队的到来！"
  },
  {
    id: "kennen",
    title: "狂暴之心",
    name: "凯南",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big85000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big85001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big85002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big85003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big85004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big85005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big85006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big85007.jpg"
    ],
    tags: ["刺客", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small85000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small85001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small85002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small85003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small85004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small85005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small85006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small85007.jpg"
    ],
    Ability: {
      life: "30",
      physical: "50",
      magic: "80",
      difficulty: "40"
    },
    story: "艾欧尼亚岛上存在一个上古教派，致力于维护均衡。规则与混乱、光明与黑暗——万物必须和谐共存，这就是宇宙的真理。该教派名为均衡教派，维护世界均衡的神圣使命则由三个暗影战士来执行。凯南便是这三名暗影战士中一员，肩负着逐日的神圣职责--不知疲倦地宣扬着均衡教派的正义。凯南出生在班德尔城，他从娘胎里快速蹦出来，然后又闪速般挣脱接生婆的手。他父母原以为他精力有限，不料随着他慢慢成熟，不仅精力旺盛，速度也惊人。尽管他天赋异禀，却默默无闻（或者说他暂时未因顽皮而被抓）。直到有一天在一次挑战中，他直接翻越了普雷斯帝的外墙。当消息传到均衡教派时，凯南迅速名声大振。他发现狂暴之心的角色很适合他，于是竭力地四处传递均衡教派的旨意、执行均衡教派的惩罚。凯南现在和同伴阿卡丽还有慎一起维持着瓦洛兰大陆的稳定。他们神圣的追求毫无疑问地将他们领向正义之地。"
  },
  {
    id: "karthus",
    title: "死亡颂唱者",
    name: "卡尔萨斯",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big30000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big30001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big30002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big30003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big30004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big30005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big30009.jpg"
    ],
    tags: ["法师", "远程"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small30000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small30001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small30002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small30003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small30004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small30005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small30009.jpg"
    ],
    Ability: {
      life: "20",
      physical: "20",
      magic: "100",
      difficulty: "70"
    },
    story: "“死亡不是旅程的终点，而是起点……”卡尔萨斯是湮灭的使者，狂热地投入到死亡的美丽与清晰中。在他年轻时，他就完全沉迷于死亡的魅力中，并在追求他的黑暗欲望时变得越来越无情。渴望着与死亡合为一体的卡尔萨斯前往暗影岛，并欣然将自己献身于亡灵。卡尔萨斯转变成了死亡颂唱者，一个世间仅存的可怕巫妖，派发着受湮灭祝福的礼物。"
  },
  {
    id: "teemo",
    title: "迅捷斥候",
    name: "提莫",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big17000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big17001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big17002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big17003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big17004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big17005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big17006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big17007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big17008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big17014.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big17018.jpg"
    ],
    tags: ["魔法", "射手"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small17000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small17001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small17002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small17003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small17004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small17005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small17006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small17007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small17008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small17014.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small17018.jpg"
    ],
    Ability: {
      life: "30",
      physical: "50",
      magic: "70",
      difficulty: "40"
    },
    story: "Teemo还有个隐藏被动技能，就是长了个全球嘲讽脸。每次团战必然会被敌方坦克和刺客类英雄集火，你的工作就是要用蘑菇风筝每一个攻击你的人，保持活着，有可能的话顺便杀个人。"
  },
  {
    id: "sona",
    title: "琴瑟仙女",
    name: "娑娜",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big37000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big37001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big37002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big37003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big37004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big37005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big37007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big37009.jpg"
    ],
    tags: ["远程", "法师", "辅助"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small37000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small37001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small37002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small37003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small37004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small37005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small37006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small37007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small37009.jpg"
    ],
    Ability: {
      life: "50",
      physical: "30",
      magic: "60",
      difficulty: "40"
    },
    story: "她的旋律动人心魄，她的静默刹人肺腑。她从小随着神秘古琴“叆华”在艾欧尼亚孤儿院长大，之后被名叫乐斯塔拉布维尔的德玛西亚贵妇人领养并训练琴技。"
  },
  {
    id: "soraka",
    title: "众星之子",
    name: "索拉卡",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big16000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big16001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big16002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big16003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big16004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big16005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big16006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big16007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big16008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big16009.jpg"
    ],
    tags: ["远程", "辅助"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small16000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small16001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small16002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small16003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small16004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small16005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small16006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small16007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small16008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small16009.jpg"
    ],
    Ability: {
      life: "60",
      physical: "30",
      magic: "70",
      difficulty: "40"
    },
    story: "索卡拉是爱欧尼亚大陆第一个被称作星灵之子的高阶女祭司。尽管瓦罗然大陆上有很多研习魔法的祭祀，然而她是第一个真正接触到宇宙魔法的人。"
  },
  {
    id: "kassadin",
    title: "虚空行者",
    name: "卡萨丁",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big38000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big38001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big38002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big38003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big38004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big38005.jpg"
    ],
    tags: ["法师", "爆发"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small38000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small38001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small38002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small38003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small38004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small38005.jpg"
    ],
    Ability: {
      life: "50",
      physical: "30",
      magic: "80",
      difficulty: "80"
    },
    story: "我要用何等华丽的语言，才能形容出卡萨丁纵横虚空的飘逸灵动。倘若你我也能如他一般打开虚空而穿梭，是不是就不会因他如鬼魅般的身影而疯狂？！卡萨丁是法系中数一数二的杀手中期游戏当之无愧的爆发之王，但是想用好他却不容易。"
  },
  {
    id: "kindred",
    title: "永猎双子",
    name: "千珏",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big203000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big203001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big203002.jpg"
    ],
    tags: ["远程", "射手"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small203000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small203001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small203002.jpg"
    ],
    Ability: {
      life: "30",
      physical: "80",
      magic: "30",
      difficulty: "40"
    },
    story: "“再跟我说一次，小羔羊，哪些东西是我们要拿走的？”“所有东西，亲爱的恶狼。”各成一体但永不分离的千珏代表着死亡的双生本质。羊灵的箭矢是为那些接受命运的人们所提供的一次迅速释放。狼灵则会捕猎那些想要从自身寿命终点逃离的人们，并在他的血盆大口内为他们献上暴力的结局。尽管符文之地各个地方对千珏天性的解释不尽相同，但每个凡间生灵都必须选择自身死亡的真实面目。"
  },
  {
    id: "ashe",
    title: "寒冰射手",
    name: "艾希",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big22000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big22001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big22002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big22003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big22004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big22005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big22006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big22007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big22008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big22009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big22011.jpg"
    ],
    tags: ["法师", "远程"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small22000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small22001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small22002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small22003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small22004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small22005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small22006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small22007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small22008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small22009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small22011.jpg"
    ],
    Ability: {
      life: "15",
      physical: "80",
      magic: "40",
      difficulty: "20"
    },
    story: "“艾希能够一箭射中五只鸟，这值得大肆宣传。” ——泰达米尔。弗雷尔卓德美女艾希是英雄联盟召唤师长期以来的最爱之一。作为阿瓦罗萨的直系后代，艾希是传奇三姐妹之一。她们各自宣称统治着居住在瓦洛兰大陆北部冻苔原地带的散乱部落。艾希继承了祖先精通的箭术，因此也继承了阿瓦罗萨“寒冰射手”的称号。"
  },
  {
    id: "lux",
    title: "光辉女郎",
    name: "拉克丝",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big99000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big99001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big99002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big99003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big99004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big99005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big99006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big99007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big99014.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big99015.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big99016.jpg"
    ],
    tags: ["远程", "法师", "控制"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small99000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small99001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small99002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small99003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small99004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small99005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small99006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small99007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small99008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small99014.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small99015.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small99016.jpg"
    ],
    Ability: {
      life: "40",
      physical: "20",
      magic: "60",
      difficulty: "60"
    },
    story: '拉克丝天生就属于显赫的皇冠卫队，出自蒂玛西亚的模范家庭她注定要成就一番伟业。"她的指引之光让敌人精力憔悴，但他们更应该担心光明消逝之时"-盖伦·蒂玛西亚之力"。'
  },
  {
    id: "cassiopeia",
    title: "魔蛇之拥",
    name: "卡西奥佩娅",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big69000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big69001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big69002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big69003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big69004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big69008.jpg"
    ],
    tags: ["远程", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small69000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small69001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small69002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small69003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small69004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small69008.jpg"
    ],
    Ability: {
      life: "30",
      physical: "20",
      magic: "80",
      difficulty: "70"
    },
    story: "当她的姐姐卡特琳娜成为最家喻户晓的英雄时，DuCouteau家族已经为诺克萨斯鞠躬尽瘁多年。DuCouteau将军最小的女儿卡西奥佩娅不像她的姐们们天性好杀，而以庄严优雅而闻名。"
  },
  {
    id: "singed",
    title: "炼金术士",
    name: "辛吉德",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big27000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big27001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big27002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big27003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big27004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big27005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big27006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big27007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big27008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big27009.jpg"
    ],
    tags: ["近战", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small27000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small27001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small27002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small27003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small27004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small27005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small27006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small27007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small27008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small27009.jpg"
    ],
    Ability: {
      life: "80",
      physical: "20",
      magic: "60",
      difficulty: "60"
    },
    story: "''我最为致命的药剂将附上牺牲品的名字！''吉德是祖安备受尊敬的炼金世家的后裔。即使在年轻之时，他调制药剂的天赋便远在同龄人之上，很快他便在化学同道中鹤立鸡群。因此他被臭名昭著的沃里克收为徒弟也就不足为奇了。沃里克当时是诺克萨斯和艾欧尼亚对战时的军队雇佣药剂师。"
  },
  {
    id: "rumble",
    title: "机械公敌",
    name: "兰博",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big68000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big68001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big68002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big68003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big68004.jpg"
    ],
    tags: ["近战", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small68000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small68001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small68002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small68003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small68004.jpg"
    ],
    Ability: {
      life: "60",
      physical: "20",
      magic: "80",
      difficulty: "80"
    },
    story: "''呃，能不能别把你的脸贴在我的装备上!''虽然出生在身材矮小的约德尔家族，但兰博矮小的身材却无比刺眼，因此在成长过程中他经常被欺负。为了生存，他必须比同龄人更好斗，更机智。这也产生了他锱铢必较的坏脾气，不管谁得罪了他，他都有仇必报。"
  },
  {
    id: "vladimir",
    title: "猩红收割者",
    name: "弗拉基米尔",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big8000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big8001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big8002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big8003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big8004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big8005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big8006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big8007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big8008.jpg"
    ],
    tags: ["远程", "法术"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small8000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small8001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small8002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small8003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small8004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small8005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small8006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small8007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small8008.jpg"
    ],
    Ability: {
      life: "80",
      physical: "0",
      magic: "70",
      difficulty: "50"
    },
    story: "''嘚~~~''在诺克萨斯和暴风平原间的群山中有座寺庙，寺庙里藏着许多骇人听闻的巫术秘密。寺庙附近尸横遍野，这些尸体都属于那些误闯寺庙而被吸干血的人。无血干尸勾起了年轻的弗拉基米尔的好奇心。从诺克萨斯逃跑期间，他艰苦跋涉，穿过一座又一座的大山。一天前，十几岁的弗拉基米尔残暴地杀死了两个和他年纪相仿的男孩，纯粹因为他很享受观看鲜血喷涌而出的快感。弗拉基米尔很快就意识到自己杀戮的欲望再也无法抑制，如果继续留在诺克萨斯，他早晚会因此而受到处罚，因此，他毫不犹豫地离开了城邦，前往南方。弗拉基米尔靠沿路的尸体追踪到了这个破碎的石庙，寺庙里有个老僧，他那血色双眼上下打量着弗拉基米尔。弗拉基米尔用热诚的眼神回望老僧的邪恶凝视，这让老僧感到很惊讶。在了解了眼前这个男孩对邪恶的渴望后，老僧决定教弗拉基米尔如何掌控身体里的血液。过往的旅客则成为了弗拉基米尔练功的目标。当弗拉基米尔学到最后一课时，老僧发出警告，如果这次失败，下场将是死亡。弗拉基米尔没有失败，但这成功却带来可怕的惊喜。在这次仪式中，从老僧身上流淌出的每一滴血都注入了弗拉基米尔的身体，血液的灌输给他带来智者的魔法精华和之前血术师们的魔法。独自一人的弗拉基米尔顿时失去了目标，他决定回到诺克萨斯，并请求加入英雄联盟，以此证明自己至高无上的技能。当诺克萨斯高级议会知道宫殿守卫的可怕命运后，他们就顺水推舟地将这个拥有天赋的年轻人推荐进英雄联盟。"
  },
  {
    id: "ekko",
    title: "时间刺客",
    name: "艾克",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big245000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big245001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big245002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big245003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big245011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big245012.jpg"
    ],
    tags: ["法术", "突进"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small245000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small245001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small245002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small245003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small245011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small245012.jpg"
    ],
    Ability: {
      life: "60",
      physical: "30",
      magic: "80",
      difficulty: "90"
    },
    story: "''我们要以困难的方式搞定他。''艾克是一名来自祖安不良街区的奇才。他可以操纵时间，从而让任何处境都变得对自己有利。通过使用他自己的发明——Z型驱动——他可以对现实的其它分支的可能性进行探索。在不断试验多维或然率的同时，艾克还将他的时间花费在与祖安的其他走失儿童一起撒野上。尽管他酷爱这种自由自在，但只要他的朋友们遇到了威胁，他就会不顾一切地去保护他们。对于毫不知情的观测者来说，艾克总是在一次又一次且轻而易举地完成着不可能的事情。"
  },
  {
    id: "taric",
    title: "瓦洛兰之盾",
    name: "塔里克",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big44000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big44001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big44002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big44003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big44004.jpg"
    ],
    tags: ["战士", "近战"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small44000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small44001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small44002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small44003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small44004.jpg"
    ],
    Ability: {
      life: "90",
      physical: "60",
      magic: "65",
      difficulty: "55"
    },
    story: "塔里克的父亲是镇子上的一位医者，他从小就开始对自己父亲从事的事业十分感兴趣。当塔里克阅读完了父亲图书馆里所有的书籍后，开始了自己的闯荡生涯。"
  },
  {
    id: "mundo",
    title: "祖安狂人",
    name: "蒙多医生",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big36000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big36001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big36002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big36003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big36004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big36005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big36006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big36007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big36008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big36009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big36010.jpg"
    ],
    tags: ["近战", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small36000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small36001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small36002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small36003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small36004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small36005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small36006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small36007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small36008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small36009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small36010.jpg"
    ],
    Ability: {
      life: "90",
      physical: "60",
      magic: "65",
      difficulty: "45"
    },
    story: "''说教无益。折断的骨头是更好的课本。''俄洛伊的体格强横无比，却唯独会在她的坚定信仰面前屈身。作为大海兽的先知，她挥舞着一个巨大的金色神像，将敌人的灵魂抽离体外，将他们对现实的感知完全击毁。所有对“娜伽卡波洛丝的真者”发起挑战的人，很快就会发现，俄洛伊从来不单打独斗——蟒行群岛的众神会与她并肩作战。"
  },
  {
    id: "haimdinger",
    title: "大发明家",
    name: "黑默丁格",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big74000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big74001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big74002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big74003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big74004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big74005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big74006.jpg"
    ],
    tags: ["法师", "远程"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small74000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small74001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small74002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small74003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small74004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small74005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small74006.jpg"
    ],
    Ability: {
      life: "20",
      physical: "10",
      magic: "80",
      difficulty: "40"
    },
    story: "在班德尔城之外，鲜有人能看到约德尔人的踪影，然而黑默丁格却抵挡不了科学的诱惑。在他获得第三个博士学位的时候，他已经成为约德尔人最伟大的科学家，而他的家也几乎没有他的容身之地了。远在北方的皮特沃夫的大学院向他抛出了橄榄枝，希望他能在进步之城做出自己的成就来。黑默丁格深知离开自己的种族便难以成功，于是他召集了志同道合的约德尔人加入他，现在这些人都成了著名的约德尔科学和发展学院的中流砥柱。从那以后，黑默丁格成为了当代最受尊敬的科学家之一，而他的学院也成了整个瓦洛兰的出类拔萃的学院之一。黑默丁格是许多新科学成就的先驱者，并且不断深入探索科技魔法领域。现今许多城市街道随处可见的照明星光棒便是由他发明的。然而，这个大科学家却有点怪异。为了扩展知识面，他对自己进行了一项实验，为了让他可以同时使用更大的脑容量。实验当然是较为成功的，但黑默丁格却也为此付出了巨大代价——他的脑子变大了，而他的头也随之改变。这名伟大的科学家看起来像是一个有着巨大脑袋的约德尔人。现在，黑默丁格将他的注意力转向了瓦洛兰目前的战况，并努力矫正他所不能接受的局面。他相信，科学才是拯救世界的关键。而且，他已经蓄势待发，要以英雄联盟成员的身份来证实他的信条——毫无疑问，他是联盟中最聪明的英雄！"
  },
  {
    id: "sejuani",
    title: "北地之怒",
    name: "瑟庄妮",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big113000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big113001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big113002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big113003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big113004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big113005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big113006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big113007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big113008.jpg"
    ],
    tags: ["突进", "打野"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small113000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small113001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small113002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small113003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small113004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small113005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small113006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small113007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small113008.jpg"
    ],
    Ability: {
      life: "70",
      physical: "30",
      magic: "50",
      difficulty: "30"
    },
    story: "''我造之以寒冰，形之以风雪，固之以寒冷。''瑟庄妮自小就习惯于苦难，崇尚于残暴。在其他人屈从于弗雷尔卓德的艰难险阻之时，她却视之为磨练，直到痛苦成为力量，饥饿成为鼓励，冰霜化身淘汰弱者的盟友。通过考验，她学会了要想在永冬之中成长，就必须变得冷酷无情。在瑟庄妮眼中，她的追随者们要么拥有忍耐的勇气，要么拥有赴死的权利。一旦她征服了弗雷尔卓德，她知道幸存者们便会建立一个让人畏惧国度。"
  },
  {
    id: "urgot",
    title: "无畏战车",
    name: "厄加特",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big6000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big6001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big6002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big6003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big6009.jpg"
    ],
    tags: ["战士", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small6000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small6001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small6002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small6003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small6009.jpg"
    ],
    Ability: {
      life: "80",
      physical: "70",
      magic: "10",
      difficulty: "80"
    },
    story: "“厄加特曾一度是诺克萨斯强大的处刑人，但这个让他为之杀人如麻的帝国，最后却背叛了他。铁链束缚着他，并迫使他在一个新的地方懂得了力量的真正意义 ——祖安地下深处的监牢矿坑——“沉钩”。”"
  },
  {
    id: "sivir",
    title: "战争女神",
    name: "希维尔",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big15000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big15001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big15002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big15003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big15004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big15005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big15006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big15007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big15008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big15009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big15010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big15016.jpg"
    ],
    tags: ["远程", "物理"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small15000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small15001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small15002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small15003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small15004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small15005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small15006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small15007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small15008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small15009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small15010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small15016.jpg"
    ],
    Ability: {
      life: "30",
      physical: "90",
      magic: "10",
      difficulty: "30"
    },
    story: '"希维尔用一次又一次的胜利证实了她无愧于"战争女神"的称号"——贾克斯。希维尔在战斗中积累无数经验和技巧，她不仅能预判敌人的战术做出反应，还能增加友军的攻击和移动速度，代领他们走向胜利。'
  },
  {
    id: "olaf",
    title: "狂战士",
    name: "奥拉夫",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big2000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big2001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big2002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big2003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big2004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big2005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big2006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big2015.jpg"
    ],
    tags: ["近战", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small2000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small2001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small2002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small2003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small2004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small2005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small2006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small2015.jpg"
    ],
    Ability: {
      life: "80",
      physical: "70",
      magic: "10",
      difficulty: "40"
    },
    story: "大多数人会说，死亡是一件可怕的事情；这些人中肯定没有奥拉夫。这个狂战士只为战争的怒吼和钢铁的交鸣而活。对荣誉的渴求和无名之死的虚无诅咒驱使着奥拉夫，让他一往无前地投入每一场战斗。奥拉夫听从他血脉深处的嗜血欲望的摆布，并且他只有在鬼门关外拼杀时才真正活着。洛克法是一块沿海半岛，位于弗雷尔卓德最为荒蛮的地区当中。在那里，怒火是唯一一种能让冻僵的骨头变暖的火焰，血液是唯一一种能够自由流动的液体，并且没有什么事情，能比变老、变弱和被遗忘更加糟糕的了。奥拉夫曾是一名洛克法的战士，不缺过人荣耀，也不吝与人分享。某个傍晚，当他和族人在一个刚被夷平的村庄的余烬里大吹大擂时，一名年长的战士对奥拉夫的吹牛产生了厌倦。这名老战士用激将法，让奥拉夫去卜一卦，看看他的命运是否符合他的沾沾自喜。这个挑战给奥拉夫壮了胆。他嘲弄了那个年长的战士，然后将已死野兽的肘骨投出，好预测他的死亡是否能达到荣誉的巅峰。在族人们阅读预言时，所有欢笑都汇聚在了一起：根据卦象，奥拉夫会很长寿，并且一生都波澜不惊。感到愤怒的奥拉夫冲进了夜幕中，并决定通过找到并杀死洛克法可怕的怪兽，冰霜之蛇，来证明预言是错误的。这头怪兽已经在它漫长的生命里吞吃了数以千计的人类和舰船之类的东西，并且对于所有战士来说，只要想迎来生命的终点，都会去挑战这头怪兽。当奥拉夫让自己冲进它阴暗的胃部时，他的意识陷入了黑化状态。刺骨的冰水将他从黑暗中唤醒，而他的旁边漂浮着那头野兽满是伤痕的尸体。虽然很有挫败感，但奥拉夫没有死心，而是再次启程，前去猎杀每一头带有利爪和尖牙的传奇生物，并希望下一场战斗能成为他的在最后一战。每当他朝着梦寐以求的死亡进行猛冲时，都会受到狂暴之血的拯救，并把他带出死亡的边缘。奥拉夫断定，没有什么野兽能够让他死得符合战士的身份。他的解决方法是，去挑战弗雷尔卓德里最为可怕的部族：凛冬之爪。瑟庄妮被奥拉夫只身挑战她的战团的行为给逗乐了，但他的胆大妄为不会为他赢得任何怜悯之举。她让手下发起冲锋，并且准备为击倒奥拉夫的战士们记功。但他们一个接一个地倒下了，然后奥拉夫再次在嗜血欲望中迷失了自己，毫不费劲地砍出一条通向凛冬之爪首领的血路。瑟庄妮摇动冰川，而尽管奥拉夫看上去不可阻挡，瑟庄妮仍然与他战到筋疲力尽。当他们陷入僵局时，瑟庄妮的怒视穿透了奥拉夫的狂战阴霾，而在此之前没有任何武器能做到这点。他的狂暴消退了，而瑟庄妮终于可以对他提出建议：瑟庄妮发誓，她能带奥拉夫找到属于他的荣耀之死，但条件是，他和他的斧子要为她的征服之旅出力。从那时起，奥拉夫郑重宣告，他会将遗产刻入弗雷尔卓德。“当你们见到自己的祖先时，别忘了告诉他们，是奥拉夫送你们去的。”——奥拉夫"
  },
  {
    id: "veigar",
    title: "邪恶小法师",
    name: "维迦",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big45000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big45001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big45002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big45003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big45004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big45005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big45006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big45007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big45008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big45009.jpg"
    ],
    tags: ["远程", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small45000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small45001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small45002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small45003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small45004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small45005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small45006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small45007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small45008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small45009.jpg"
    ],
    Ability: {
      life: "40",
      physical: "20",
      magic: "80",
      difficulty: "70"
    },
    story: "''谁说恶魔一定要样貌可怖？''大多数人不会将约德尔人与令人惧怕的形象联想在一起。约德尔这个平易近人的迷你民族，虽说勇猛，但通常人们或多或少会认为他们是快乐的种族。他们那高八度的声音，以及天生的可爱外形，会激发出体型较大的民族内心深处的某种保护本能，或者至少会让他们的脑海中浮现出小孩扮大人的画面。"
  },
  {
    id: "zyra",
    title: "荆棘之兴",
    name: "婕拉",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big143000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big143001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big143002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big143003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg"
    ],
    tags: ["远程", "法师", "辅助"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small143000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small143001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small143002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small143003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small143004.jpg"
    ],
    Ability: {
      life: "40",
      physical: "40",
      magic: "80",
      difficulty: "80"
    },
    story: "''婕拉渴望掌控自己的命运。''婕拉渴望掌控自己的命运。这株垂垂老矣的古老植物，为了获得第二次生命，将她的意识转移到一具人类的躯体上。"
  },
  {
    id: "morgana",
    title: "堕落天使",
    name: "莫甘娜",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big25000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big25001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big25003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big25004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big25005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big25006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big25010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"
    ],
    tags: ["远程", "法师"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small25000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small25001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small25002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small25003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small25004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small25005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small25006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small25010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small25011.jpg"
    ],
    Ability: {
      life: "60",
      physical: "10",
      magic: "80",
      difficulty: "70"
    },
    story: "不是所有的姐妹都有一样的性格，莫甘娜和她的姐姐凯尔之间就有着明显的不同，甚至可以说是明显的对立。她对姐姐的恨意已经超越了一切，而对她来说她唯一的目标也就剩下姐姐了……"
  },
  {
    id: "gangplank",
    title: "海洋之灾",
    name: "普朗克",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big41000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big41001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big41002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big41003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big41004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big41005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big41006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big41007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big41008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big41014.jpg"
    ],
    tags: ["近战", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small41000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small41001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small41002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small41003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small41004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small41005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small41006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small41007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small41008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small41014.jpg"
    ],
    Ability: {
      life: "90",
      physical: "60",
      magic: "65",
      difficulty: "45"
    },
    story: "''说教无益。折断的骨头是更好的课本。''俄洛伊的体格强横无比，却唯独会在她的坚定信仰面前屈身。作为大海兽的先知，她挥舞着一个巨大的金色神像，将敌人的灵魂抽离体外，将他们对现实的感知完全击毁。所有对“娜伽卡波洛丝的真者”发起挑战的人，很快就会发现，俄洛伊从来不单打独斗——蟒行群岛的众神会与她并肩作战。"
  },
  {
    id: "ryze",
    title: "符文法师",
    name: "瑞兹",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big13000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big13001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big13002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big13003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big13004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big13005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big13006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big13007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big13008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big13009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big13010.jpg"
    ],
    tags: ["远程", "法术"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small13000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small13001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small13002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small13003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small13004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small13005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small13006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small13007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small13008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small13009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small13010.jpg"
    ],
    Ability: {
      life: "70",
      physical: "50",
      magic: "90",
      difficulty: "90"
    },
    story: "''我的能量，无穷无尽！''有很多住在符文之地的人被魔法或者新兴的魔法科技所吸引。对许多人而言，这些知识都是通过大学正式教育习得的。但传统的学习方式从来就不适合瑞兹，因为相较于那些试图教导他魔法的老顽固而言，瑞兹感受到符文之地更粗狂、更原始的魔法联系。年轻的他决定去寻找召唤他的东西。瑞兹环游世界，寻找着强大的隐士、女巫、和巫医的智慧。他追随着任何可以共享知识的人，当然，瓦洛兰大陆上教的东西除外。当他学会了所有的这些智慧，瑞兹开始寻找世上那些被遗失、被禁锢的知识，钻研其他人不敢进入的神秘世界。瑞兹对魔法知识孜孜不倦的寻找让其掌握了一种古老的法术——荆棘魔法。这种法术要求瑞兹将法术以刺青的形式纹在身上，永久将秘术能量注入到他的身体，最终让他和符文之地魔法能量融为一体。他的旅途也让他揭开了背上的巨型不灭画卷的秘密，画卷里雕刻的法术效用只有瑞兹才知道。他称画卷是邪物，必须由他亲自镇压以保护世界不受其伤害。这激怒了很多好奇的人，但是没有人知道如何把画卷和瑞兹分开，或者是否有可能战胜他，最后拿下画卷。瑞兹加入英雄联盟，研究在此战斗的魔法生物与力量强大的意志运行者，借以完成他对神秘符文之地的探索。“瑞兹不再只是一名法师，他本身已成为一种魔法生物”——高级议员拉力瓦什"
  },
  {
    id: "swain",
    title: "诺克萨斯统领",
    name: "斯维因",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big50000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big50001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big50002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big50003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big50004.jpg"
    ],
    tags: ["远程", "法师", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small50000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small50001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small50002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small50003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small50004.jpg"
    ],
    Ability: {
      life: "50",
      physical: "30",
      magic: "70",
      difficulty: "60"
    },
    story: "斯温在诺克苏斯最高指挥部不断升迁，经常有比他阶级更高的军官要求加入他手下。作为一名狡猾的战略家，斯温通常在战争前线蹒跚思考，并在每一场战斗后都获得授勋封赏。斯温的升迁似乎没有止境，直到进展缓慢的爱欧尼亚入侵-那场战争是官僚政治权利倾轧的混乱决策。"
  },
  {
    id: "kled",
    title: "暴怒骑士",
    name: "克烈",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big240000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big240001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big240002.jpg"
    ],
    tags: ["近战", "战士"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small240000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small240001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small240002.jpg"
    ],
    Ability: {
      life: "90",
      physical: "50",
      magic: "10",
      difficulty: "90"
    },
    story: "疯狂比勇气更靠得住广受喜爱的民间英雄、无畏无赖的凶猛战士、诺克萨斯的意志化身、帝国士兵的仰慕偶像、长官眼里的定时炸弹、贵族鄙夷的送死小卒……克烈身上的光环可谓数不胜数。诸如“伟大的轻骑兵”、“高阶少将元帅中士”和“山中大将”一类的逸闻可以一直追溯到帝国初建的时日。很多军士都说，克烈参与了有史以来军团所挑起的每一场征战，“获得”了军中的每一份头衔，而且从来没有却步于任何一次战斗。虽然传闻总是不可全信，但至少有一件事毋庸置疑：只要克烈骑着胆小的斯嘎尔冲进战场，他的战斗便是为了保住所拥有的一切……或是抢走他想要的一切。"
  },
  {
    id: "zilean",
    title: "时光守护者",
    name: "基兰",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big26000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big26001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big26002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big26003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big26004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big26005.jpg"
    ],
    tags: ["远程", "辅助"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small26000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small26001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small26002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small26003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small26004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small26005.jpg"
    ],
    Ability: {
      life: "36",
      physical: "31",
      magic: "85",
      difficulty: "60"
    },
    story: "基兰修理着他的钟表。成百上千的钟表塞满了他的车间，一些还能工作，大部分已经坏损。他沉溺于时间之中。对他来说，这既是幸福也是诅咒。"
  },
  {
    id: "annie",
    title: "黑暗之女",
    name: "安妮",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big1000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big1001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big1002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big1003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big1004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big1005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big1006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big1007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big1008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big1009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big1010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big1011.jpg"
    ],
    tags: ["法师", "远程"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small1000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small1001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small1002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small1003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small1004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small1005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small1006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small1007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small1008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small1009.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small1010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small1011.jpg"
    ],
    Ability: {
      life: "30",
      physical: "20",
      magic: "100",
      difficulty: "50"
    },
    story: '安妮的父母早就知道安妮有特别之处。两岁时，安妮神奇地用魔法驯服了来自树化石林的凶猛暗影熊，把它变成她的宠物。至今，她都把 "泰迪" 带在身边。安妮通常将它变成一个玩具熊，就像普通孩子的玩偶一样。'
  },
  {
    id: "tristana",
    title: "麦林炮手",
    name: "崔丝塔娜",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big18000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big18001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big18002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big18003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big18004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big18005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big18006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big18010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big18011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big18012.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big18024.jpg"
    ],
    tags: ["物理", "远程"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small18000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small18001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small18002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small18003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small18004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small18005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small18006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small18010.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small18011.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small18012.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small18024.jpg"
    ],
    Ability: {
      life: "20",
      physical: "100",
      magic: "30",
      difficulty: "30"
    },
    story: "当她受到战争学院的召唤的时候，她意识到是时候实现自己的梦想了。尽管她的心还在自己的小队这边，她还是响应了战争学院的召唤，现在她在英雄联盟里作为一名英雄来保护那里的人民。。"
  },
  {
    id: "jax",
    title: "武器大师",
    name: "贾克斯",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big24000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big24001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big24002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big24003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big24004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big24005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big24006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big24007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big24008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big24012.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big24013.jpg"
    ],
    tags: ["物理", "远程"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small24000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small24001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small24002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small24003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small24004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small24005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small24006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small24007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small24008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small24012.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small24013.jpg"
    ],
    Ability: {
      life: "55",
      physical: "100",
      magic: "35",
      difficulty: "55"
    },
    story: "除了贾克斯，很少有英雄的评价来自加入联盟后的行为。贾克斯是目前战争学院最多产的联赛战士。在加入联盟之前，贾克斯只是个平凡的雇佣士兵。贾克斯被放在了联盟裁决候选人名单的首位。"
  },
  {
    id: "amumu",
    title: "殇之木乃伊",
    name: "阿木木",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big32000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big32001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big32002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big32003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big32004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big32005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big32006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big32007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big32008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big32017.jpg"
    ],
    tags: ["法师", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small32000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small32001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small32002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small32003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small32004.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small32005.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small32006.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small32007.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small32008.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small32017.jpg"
    ],
    Ability: {
      life: "20",
      physical: "60",
      magic: "80",
      difficulty: "30"
    },
    story: "''阿木木哭的时候，事情会变得糟糕，但是当他生气的时候，事情会更糟糕。''阿木木是一个矮小、好动的活尸，在世界各地游历，想要找到他的真实身份。阿木木或许是英雄联盟中最古老的英雄之一。他加入英雄联盟前的身世无人知晓，连自己也不知道。阿木木跪下来，在绷带内哭泣。无论做什么，他都无法停止哭泣、停止悲伤。最后，他站起来，决定处闯荡，寻找他的过去。"
  },
  {
    id: "udyr",
    title: "兽灵行者",
    name: "乌迪尔",
    bgs: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big77000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big77001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big77002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big77003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/big77004.jpg"
    ],
    tags: ["近战", "坦克"],
    bgs_thumbnail: [
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small77000.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small77001.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small77002.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small77003.jpg",
      "http://ossweb-img.qq.com/images/lol/web201310/skin/small77004.jpg"
    ],
    Ability: {
      life: "80",
      physical: "60",
      magic: "50",
      difficulty: "30"
    },
    story: "乌迪尔不只是一个人而已；他体内承载着四个原始兽灵的不羁能量。在与这些兽灵的野性进行心灵感应时，乌迪尔可以驾驭它们独特的力量：猛虎为他提供速度和凶猛，灵龟为他提供韧劲，巨熊为他提供蛮力，而凤凰为他提供它的永燃烈焰。结合它们的能量，乌迪尔就能击退那些妄图危害自然秩序的人。 在弗雷尔卓德里，有一支独特的族群在那些蛮荒之地的文明之外生活着。他们是自然界的监护人：兽灵行者。据说，一旦有小孩诞生于血红之月下，那么这个小孩就会生活在灵体世界和人类世界之间。这个小孩会被带到兽灵行者那里，来延续他们的萨满教义。乌迪尔曾经是这样的小孩，并且甚至在他学会先祖的语言之前，就听懂了冰原狼的咆哮。通过兽灵行者，乌迪尔终于听懂了灵体们在呼唤着什么，并且开始维持自然的平衡。兽灵行者经常告诉乌迪尔，还有更多考验在等着他。这些考验的数量，比他之前经历的那些还要多得多。因为弗雷尔卓德的灵体们变得越来越焦躁不安了，尽管这个现象的原因尚未查明。在严冬时，答案浮现了。乌迪尔和灵魂行者被一个可怕的人物给袭击了，这个人物的名字只在那些受过惊吓的人之间轻声相传：冰霜女巫。灵魂行者知道这个男孩会被她的邪恶魔法给轻松制服，因此以自己的生命为代价，保护这个孩子免收冰霜女巫的袭击。饱受悲痛折磨的乌迪尔开始怒吼，同时感到弗雷尔卓德在和他一起怒吼。在那个瞬间，这个孩子拥抱了兽灵的野性，并且自己也变成了野兽。在和它们的不羁能量一起追逐时，乌迪尔的怒吼让山顶也为之震动，并引发了一场猛烈的雪崩。当乌迪尔最终从冰雪里脱身时，冰霜女巫早已不见踪影。数年里，北部的部族们学会了回避这个野人，并且不要踏入他的领地。后来有一天，乌迪尔闻到了一个胆大包天的入侵者的气味。他决定在领地里抓到这个入侵者，并在小心翼翼的准备后对那个陌生人发起了攻击。这个野人的一次又一次地冲向那个入侵者，但每次都是无功而返。在战到脱力并被击败后，乌迪尔觉得自己的怒意消退了，于是嘶哑着嗓子对陌生人笨拙地说了句“谁”。李青原本是来寻找灵魂行者的指导，却找到了一个迷失了方向的人。盲僧承诺，他会纠正乌迪尔的道路，并指引他前往一个寺院。那个寺院被四个拥有强大能量和智慧的永恒兽灵所保护着。在那里，乌迪尔将找到调和之道。在乌迪尔欠了艾欧尼亚人很多人情。这个人情债，虽然从来没人让他还，但是他最终报答的恩情，要远远多于前者。在诺克萨斯的军队入侵，蛮横的诺克萨斯士兵压迫和平的艾欧尼亚人时，乌迪尔并没有袖手旁观——他还没有忘记野兽的作战方式。乌迪尔跳进诺克萨斯军队中，带着如同出笼猛虎一般的野性，让入侵者们对这个荒野心生恐惧。在树林里，他的无情利爪将诺克萨斯人碎尸万段；在河岸上，他的无穷蛮力让诺克萨斯人浮尸如洪，在旷野上，他的燎原野火把诺克萨斯人吞噬殆尽。只有当诺克萨斯人夹着尾巴逃跑后，乌迪尔的怒火才渐渐平息。和平，重回艾欧尼亚，但乌迪尔仍然感觉到有些东西在搅动着他的内心。弗雷尔卓德的灵体们在呼唤着他，并警告他，从寒冰里出现了一个不寻常的恶魔。乌迪尔知道，冰霜女巫，才是他的故乡的真正威胁：她只是先驱者，尾随她而来的，是一个即将席卷整个大陆的更为强大的黑暗力量。在神庙的强大兽灵们的跟随下，乌迪尔回到了弗雷尔卓德，想要守护这个自然世界，确保它的平衡不会被任何势力扰乱。"
  }
];
export default heroDetailArr