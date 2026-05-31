window.Y6_SCENE_DATA = {
  title: "Y6 的长线选择",
  home: {
    image: "scenes/images/home-pro.png",
    title: "Y6 的长线选择",
    description: "从福建珑烟市的安静少年，到天天大学、清北大学业勒老师项目组，再到维娜盒欣公司的长期人生。你将陪 Y6 处理学业、科研、师门、职场和感情纠葛：什么时候坚持，什么时候表达，什么时候放下，什么时候走向真正稳定的关系。"
  },
  maxTrait: 16,
  routeCount: "13 幕，每幕最多 4 个选项，含条件分支与多结局",
  traitLabels: {
    research: "科研",
    courage: "胆识",
    empathy: "共情",
    ambition: "抱负",
    integrity: "操守",
    confidence: "自信",
    communication: "表达",
    clarity: "清醒",
    yanAttachment: "颜执念",
    shaoTrust: "邵信任",
    mentorDependence: "师门依赖",
    peerTrust: "同伴信任"
  },
  rounds: [
    {
      age: "0-12 岁",
      title: "珑烟市的窗边",
      image: "scenes/images/longyan-study-pro.png",
      description: "Y6 出生在福建珑烟市。小时候他总坐在窗边看书，能把一道题想一整个下午，也能因为一句重话沉默很久。家里人发现他爱学习，却也担心他太习惯一个人待着。",
      options: [
        { branch: "research", title: "躲进题本", text: "把不安都交给演算。", effects: { research: 2, confidence: 1, communication: -1 }, scene: "Y6 在练习册边角写下密密麻麻的小字，世界变安静了，他也更不容易开口。" },
        { branch: "communication", title: "参加朗读小组", text: "试着让声音被听见。", effects: { communication: 2, confidence: 1, courage: 1 }, scene: "第一次站起来读课文时，他手心发冷，但还是把最后一个字念完了。" },
        { branch: "empathy", title: "帮同桌补课", text: "把会的题讲给别人。", effects: { empathy: 2, peerTrust: 1, research: 1 }, scene: "他发现讲清楚一道题比自己做出来更难，也更像是在和人建立一座桥。" },
        { branch: "courage", title: "面对被取笑", text: "不再把委屈全部吞下。", effects: { courage: 2, confidence: 1, integrity: 1 }, scene: "他没有吵赢所有人，但终于说出一句：我不喜欢你们这样叫我。" }
      ]
    },
    {
      age: "15 岁",
      title: "县赛前的晚自习",
      image: "scenes/images/classroom-pro.png",
      description: "高中以后，Y6 的成绩越来越稳。老师建议他参加理科竞赛，同学也开始把他当成“会做题的人”。他喜欢这种确定感，却仍然害怕被太多人看见。",
      options: [
        { branch: "research", title: "报名竞赛", text: "用题目证明自己。", effects: { research: 2, ambition: 1, confidence: 1 }, scene: "他把报名表夹进书里，像把自己小心翼翼地放进更大的赛场。" },
        { branch: "peer", title: "组建学习小组", text: "让同学一起往前走。", effects: { peerTrust: 2, empathy: 1, communication: 1 }, scene: "晚自习下课后，几个人围在他桌边，问题不再只是题目，也包括彼此的焦虑。" },
        { branch: "courage", title: "向老师争取名额", text: "把想要说出口。", effects: { courage: 2, confidence: 1, ambition: 1 }, scene: "他在办公室门口站了很久，最后敲门进去，说自己想试一次。" },
        { branch: "integrity", title: "拒绝抄答案", text: "不靠捷径换名次。", effects: { integrity: 2, peerTrust: 1, courage: 1 }, scene: "有人说他死板，他没有反驳，只把草稿纸翻回空白页重新算。" }
      ]
    },
    {
      age: "18 岁",
      title: "天天大学录取通知书",
      image: "scenes/images/tiantian-campus-pro.png",
      description: "Y6 考上天天大学本科，第一次真正离开珑烟市。新校园很大，机会很多，连孤独都比过去宽阔。他要决定自己如何开始大学生活。",
      options: [
        { branch: "research", title: "泡在图书馆", text: "把基础打到更深。", effects: { research: 2, clarity: 1, communication: -1 }, scene: "他在书架间找到安全感，也慢慢意识到安全感不能只靠躲起来获得。" },
        { branch: "peer", title: "加入科创社", text: "和别人一起做项目。", effects: { peerTrust: 2, communication: 1, courage: 1 }, scene: "第一次组会很混乱，他不太会插话，却认真记下每个人的想法。" },
        { branch: "ambition", title: "盯准保研排名", text: "把目标写在床头。", effects: { ambition: 2, research: 1, mentorDependence: 1 }, scene: "排名表像一张地图，他开始相信只要足够努力，就能离更高的地方更近。" },
        { branch: "confidence", title: "主动竞选班委", text: "训练自己的表达。", effects: { communication: 2, confidence: 1, courage: 1 }, scene: "他的演讲没有华丽句子，但句句具体，反而让人记住了这个安静的男生。" }
      ]
    },
    {
      age: "20 岁",
      title: "本科实验室的门卡",
      image: "scenes/images/undergrad-lab-pro.png",
      description: "大二结束时，Y6 拿到实验室门卡。导师说他适合做长期问题，师兄却提醒他：会做事之外，还要学会和人协作。",
      options: [
        { branch: "research", title: "独自攻课题", text: "把最难的模块接下来。", effects: { research: 3, confidence: 1, peerTrust: -1 }, scene: "他连续几晚盯着数据跑通模型，却差点忘了告诉队友自己改了接口。" },
        { branch: "peer", title: "写共享文档", text: "让协作不靠猜。", effects: { communication: 2, peerTrust: 2, integrity: 1 }, scene: "文档一开始没人看，但后来每个人都在上面留下了自己的注释。" },
        { branch: "ambition", title: "申请清北夏令营", text: "提前触碰更高平台。", effects: { ambition: 2, research: 1, courage: 1 }, scene: "申请材料寄出去那天，他在邮件发送页面停了三秒，像把未来按下确认。" },
        { branch: "clarity", title: "记录压力日记", text: "弄清楚自己为什么害怕。", effects: { clarity: 2, confidence: 1, integrity: 1 }, scene: "他写下：我不是不想和人靠近，我只是总怕自己说错。" }
      ]
    },
    {
      age: "22 岁",
      title: "清北大学的保送名单",
      image: "scenes/images/qingbei-yale-group-pro.png",
      description: "凭借优异成绩，Y6 保送到清北大学读博士，进入业勒老师项目组。业勒老师很强，也很忙，他的公司维娜盒欣已经开始把项目推向产业。",
      options: [
        { branch: "mentor", title: "紧跟业勒老师", text: "先学会顶级项目怎么运转。", effects: { mentorDependence: 2, ambition: 1, research: 1 }, scene: "Y6 把业勒老师的每句批注都整理成清单，像在学习一套通往强大的语法。" },
        { branch: "research", title: "确定博士主线", text: "把问题边界钉牢。", effects: { research: 2, clarity: 1, integrity: 1 }, scene: "他没有急着追热点，而是把课题拆成可以被验证的几层。" },
        { branch: "peer", title: "认识同门同学", text: "不让自己只活在工位上。", effects: { peerTrust: 2, communication: 1, empathy: 1 }, scene: "茶水间的闲聊让他知道，每个优秀的人都有不敢说出口的紧张。" },
        { branch: "confidence", title: "第一次组会发言", text: "把想法完整讲出来。", effects: { communication: 2, confidence: 1, courage: 1 }, scene: "投影亮起时他还是结巴了两句，但那张图终于替他说完了大半。" }
      ]
    },
    {
      age: "24 岁",
      title: "业勒组的深夜灯",
      image: "scenes/images/yale-night-lab-pro.png",
      description: "博士第二年，项目组开始卷进论文、合作和公司转化。Y6 的结果不错，却也被节奏推着走。他必须选择自己在组里的位置。",
      options: [
        { branch: "research", title: "死磕核心实验", text: "让成果经得起复现。", effects: { research: 2, integrity: 2, ambition: 1 }, scene: "他把漂亮图表暂时放下，一遍遍检查最朴素的实验记录。" },
        { branch: "mentor", title: "接导师公司任务", text: "提前进入维娜盒欣节奏。", effects: { mentorDependence: 2, ambition: 2, research: 1 }, scene: "公司的会议比实验室更快，他第一次感到业勒老师的世界不只属于论文。" },
        { branch: "peer", title: "帮同门挡压力", text: "让合作别变成互耗。", effects: { empathy: 2, peerTrust: 2, courage: 1 }, scene: "他在群里把责任拆清楚，语气仍旧温和，却比过去更有分量。" },
        { branch: "clarity", title: "和导师谈边界", text: "确认博士成果属于谁。", effects: { clarity: 2, integrity: 1, confidence: 1, mentorDependence: -1 }, scene: "谈话很紧张，但业勒老师第一次发现，这个学生不是只会点头。" }
      ]
    },
    {
      age: "25 岁",
      title: "颜同学的白板笔",
      image: "scenes/images/yan-whiteboard-pro.png",
      description: "颜同学加入合作课题。她聪明、明亮，也能很快看懂 Y6 沉默背后的逻辑。Y6 开始暗恋她，却不知道该把这份心情放在哪里。",
      options: [
        { branch: "yan", title: "默默帮她改模型", text: "把喜欢藏进细节。", effects: { yanAttachment: 3, research: 1, communication: -1 }, scene: "他把修好的代码发过去，只写了两个字：好了。屏幕暗下去后，他盯着对话框看了很久。" },
        { branch: "communication", title: "约她讨论课题", text: "用正常方式靠近。", effects: { communication: 2, yanAttachment: 1, confidence: 1, peerTrust: 1 }, scene: "他们在白板前争论一个变量，Y6 第一次觉得喜欢也可以不那么慌张。" },
        { branch: "clarity", title: "先问清合作边界", text: "别让情绪污染项目。", effects: { clarity: 2, integrity: 1, peerTrust: 1 }, scene: "他把任务分工写进文档，也把不该越界的期待写进心里。" },
        { branch: "avoid", title: "故意保持距离", text: "怕暴露心事。", effects: { yanAttachment: 1, clarity: -1, communication: -1, confidence: -1 }, scene: "他开始错开她出现的时间，结果心里反而被她占得更多。" }
      ]
    },
    {
      age: "26 岁",
      title: "多角关系的组会后",
      image: "scenes/images/relationship-crossroads-pro.png",
      description: "颜同学身边也有其他同学靠近。项目合作、同门友谊和暧昧传闻混在一起，Y6 越想保持体面，越容易被沉默推向误会。",
      options: [
        { branch: "yan", title: "冲动表白", text: "把所有压抑一次说完。", effects: { courage: 2, yanAttachment: 2, peerTrust: -2, clarity: -1 }, scene: "话说出口时很痛快，空气安静下来后，他才意识到自己把对方也推到了尴尬处境。" },
        { branch: "peer", title: "维护同门关系", text: "不把项目组拖进私人情绪。", effects: { peerTrust: 3, empathy: 1, integrity: 1, yanAttachment: -1 }, scene: "他把争议拉回任务本身，承认自己的情绪，但没有让别人为它买单。" },
        { branch: "clarity", title: "找颜同学坦诚谈一次", text: "确认彼此真实想法。", effects: { communication: 2, clarity: 2, yanAttachment: -1, confidence: 1 }, scene: "谈话并不浪漫，却很清楚。Y6 第一次明白，清楚有时比靠近更温柔。" },
        { branch: "avoid", title: "把自己埋进论文", text: "用工作逃过关系。", effects: { research: 2, yanAttachment: 2, communication: -2, empathy: -1 }, scene: "他把论文写得更快，却越来越害怕在走廊里听见熟悉的声音。" }
      ]
    },
    {
      age: "27 岁",
      title: "放弃颜同学的傍晚",
      image: "scenes/images/yan-farewell-pro.png",
      description: "博士后期，Y6 终于意识到自己对颜同学的喜欢夹杂着投射、孤独和不甘。毕业压力逼近，他要决定如何给这段心事收尾。",
      options: [
        { branch: "clarity", title: "体面放下", text: "把祝福和距离都说清楚。", effects: { clarity: 3, integrity: 2, yanAttachment: -3, communication: 1 }, scene: "他说谢谢，也说以后会把重心放回自己的人生。颜同学点点头，故事没有戏剧性，却终于结束。" },
        { branch: "yan", title: "保留最后幻想", text: "不承认已经没有可能。", effects: { yanAttachment: 3, clarity: -2, shaoTrust: -1 }, scene: "他删掉又恢复聊天记录，仿佛只要不彻底放下，某个平行人生就还在。" },
        { branch: "research", title: "完成博士论文", text: "用成果穿过混乱。", effects: { research: 2, integrity: 1, confidence: 1 }, scene: "论文定稿那晚，他没有庆祝，只是把所有版本归档，像给青春做一次备份。" },
        { branch: "peer", title: "向同门道歉", text: "修补被情绪影响的关系。", effects: { peerTrust: 2, empathy: 2, communication: 1, yanAttachment: -1 }, scene: "有些关系回不到从前，但一句迟来的道歉让空气终于松了一点。" }
      ]
    },
    {
      age: "28 岁",
      title: "维娜盒欣的实习工牌",
      image: "scenes/images/vena-internship-pro.png",
      description: "毕业前后，Y6 到业勒老师的公司维娜盒欣实习。公司节奏更快，问题更现实。也是在这里，他遇见了邵同学：直接、可靠，能看见他没说出口的疲惫。",
      options: [
        { branch: "shao", title: "和邵同学搭项目", text: "在真实工作里彼此了解。", effects: { shaoTrust: 3, communication: 1, peerTrust: 1, yanAttachment: -1 }, scene: "邵同学把需求拆得很利落，也会在深夜提醒他先吃饭。Y6 感到一种不需要猜的安心。" },
        { branch: "mentor", title: "继续围着业勒老师转", text: "抓住留用机会。", effects: { mentorDependence: 2, ambition: 2, shaoTrust: -1 }, scene: "他拿到更多任务，却也越来越像业勒老师日程表上的一个延伸。" },
        { branch: "research", title: "把博士成果产品化", text: "让技术真的可用。", effects: { research: 2, ambition: 1, integrity: 1 }, scene: "从论文到产品的距离比想象更长，他开始学会为用户而不是审稿人解释。" },
        { branch: "clarity", title: "告诉邵同学过去", text: "不把旧心事藏成雷。", showIf: { min: { communication: 4 } }, effects: { shaoTrust: 2, clarity: 2, yanAttachment: -2, integrity: 1 }, scene: "他说起颜同学时有些笨拙，但邵同学听完后只问：那现在的你想往哪里走？" }
      ]
    },
    {
      age: "29 岁",
      title: "留在维娜盒欣",
      image: "scenes/images/vena-office-pro.png",
      description: "维娜盒欣给了 Y6 正式 offer。业勒老师希望他留下，邵同学也逐渐成为他生活里稳定的部分。事业、师门和亲密关系第一次同时向他要答案。",
      options: [
        { branch: "shao", title: "认真经营关系", text: "把邵同学放进未来计划。", effects: { shaoTrust: 3, communication: 2, clarity: 1, ambition: -1 }, scene: "他们不再只聊项目，也聊城市、家庭和普通日子的安排。Y6 发现承诺不是束缚，而是共同校准方向。" },
        { branch: "ambition", title: "争取核心岗位", text: "进入公司最重要的项目。", effects: { ambition: 2, research: 1, confidence: 1, shaoTrust: -1 }, scene: "新的权限意味着新的压力，他开始频繁推迟约会，也频繁对自己说以后会补上。" },
        { branch: "clarity", title: "减少师门依附", text: "建立自己的判断。", effects: { clarity: 2, confidence: 2, mentorDependence: -2, integrity: 1 }, scene: "他仍尊重业勒老师，却不再把每个决定都交给导师背书。" },
        { branch: "yan", title: "偶尔回看颜同学动态", text: "让旧执念偷偷续命。", effects: { yanAttachment: 2, shaoTrust: -2, clarity: -1 }, scene: "他只是看了一眼，却在邵同学发来消息时心虚地锁了屏。" }
      ]
    },
    {
      age: "32 岁",
      title: "项目危机与求婚计划",
      image: "scenes/images/project-crisis-pro.png",
      description: "维娜盒欣的关键项目出现风险，业勒老师要求团队压缩验证周期。与此同时，Y6 和邵同学谈到了结婚。人生突然要求他同时成熟。",
      options: [
        { branch: "integrity", title: "坚持完整验证", text: "不让速度越过底线。", effects: { integrity: 3, research: 1, courage: 1, ambition: -1 }, scene: "他顶住会议室里的沉默，把风险写进报告。那一刻他知道自己已经不是只会执行的学生。" },
        { branch: "shao", title: "和邵同学共同决策", text: "把压力摊开讲。", effects: { shaoTrust: 3, communication: 2, empathy: 1 }, scene: "邵同学没有替他做决定，只陪他把每个代价看清楚。Y6 第一次觉得亲密关系也能让人更独立。" },
        { branch: "mentor", title: "听从业勒老师安排", text: "先保住公司窗口期。", effects: { mentorDependence: 2, ambition: 2, integrity: -2, courage: -1 }, scene: "项目推进得很快，Y6 却在签字后盯着自己的名字看了很久。" },
        { branch: "avoid", title: "逃进加班", text: "暂时不谈结婚。", effects: { research: 1, shaoTrust: -2, communication: -2, clarity: -1 }, scene: "他把日程排满到没有缝隙，仿佛只要足够忙，就不用回答真正的问题。" }
      ]
    },
    {
      age: "35 岁",
      title: "自己的名字",
      image: "scenes/images/own-name-pro.png",
      description: "Y6 已经在维娜盒欣站稳脚跟。有人仍把他叫作业勒老师的学生，有人开始把他当成独立负责人。邵同学也在等他给未来一个清楚答案。",
      options: [
        { branch: "family", title: "向邵同学求婚", text: "选择真实而长期的陪伴。", showIf: { min: { shaoTrust: 6, clarity: 4 } }, effects: { shaoTrust: 3, confidence: 1, yanAttachment: -2, empathy: 1 }, scene: "戒指没有藏得很好，邵同学一眼就看出来了。她笑着说，幸好你这次没有把话留到明天。" },
        { branch: "leader", title: "成为技术负责人", text: "用自己的判断带团队。", effects: { confidence: 2, communication: 2, research: 1, mentorDependence: -1 }, scene: "他把团队目标写在白板上，终于不再只是复述业勒老师的想法。" },
        { branch: "research", title: "回到长期研究", text: "在产业里保留问题意识。", effects: { research: 2, integrity: 2, ambition: -1 }, scene: "他申请成立基础研究小组，让产品之外仍有人愿意追问为什么。" },
        { branch: "yan", title: "仍被过去牵动", text: "在重要关口犹豫。", showIf: { min: { yanAttachment: 5 } }, effects: { yanAttachment: 2, shaoTrust: -3, clarity: -2 }, scene: "旧名字再次出现时，他没有做什么出格的事，却让邵同学看见了他的迟疑。" }
      ]
    }
  ],
  endings: [
    {
      id: "lost_in_yan",
      type: "bad",
      title: "坏结局：困在颜同学的影子里",
      test: { min: { yanAttachment: 9 }, max: { clarity: 5, shaoTrust: 5 } },
      image: "scenes/images/yan-farewell-pro.png",
      description: "Y6 没有真正走向颜同学，也没有完整走向邵同学。他把许多没说完的话留在心里，最后让过去变成了衡量一切关系的影子。事业仍在继续，但他知道自己错过的不是某个人，而是清醒选择当下的能力。"
    },
    {
      id: "broken_trust",
      type: "bad",
      title: "坏结局：多角关系后的失信",
      test: { min: { yanAttachment: 7 }, max: { peerTrust: 3, communication: 4 } },
      image: "scenes/images/relationship-crossroads-pro.png",
      description: "博士期间的沉默、误会和冲动逐渐伤到同门关系。Y6 后来明白，喜欢一个人不是错，但把不成熟的情绪交给周围所有人承担，会让最珍贵的信任一点点碎掉。"
    },
    {
      id: "mentor_shadow",
      type: "bad",
      title: "坏结局：活成导师的影子",
      test: { min: { mentorDependence: 8 }, max: { confidence: 5, clarity: 5 } },
      image: "scenes/images/yale-night-lab-pro.png",
      description: "Y6 留在维娜盒欣，也做成了不少事，但每个关键判断都绕不开业勒老师的影子。别人说他可靠，他却知道自己很少真正独立决定过方向。"
    },
    {
      id: "relationship_burnout",
      type: "bad",
      title: "坏结局：把加班当成逃避",
      test: { min: { ambition: 8 }, max: { shaoTrust: 4, communication: 4 } },
      image: "scenes/images/project-crisis-pro.png",
      description: "项目一个接一个成功，Y6 却习惯用忙碌推迟所有难谈的话。邵同学最终不再等他下班后才想起生活。那天他坐在亮着屏幕的会议室里，第一次觉得胜利也会很空。"
    },
    {
      id: "risky_company_man",
      type: "bad",
      title: "坏结局：窗口期里的代价",
      test: { min: { ambition: 9, mentorDependence: 6 }, max: { integrity: 4 } },
      image: "scenes/images/risky-company-pro.png",
      description: "为了维娜盒欣的窗口期，Y6 一次次压低风险提示。项目短期冲上去了，后来的事故却让他明白：不是所有速度都值得被叫作成长。"
    },
    {
      id: "shao_partner",
      type: "good",
      title: "好结局：与邵同学相伴的长期人生",
      test: { min: { shaoTrust: 9, clarity: 6, communication: 6 }, max: { yanAttachment: 5 } },
      image: "scenes/images/shao-proposal-pro.png",
      description: "Y6 没有一夜之间变成外向的人，但他学会把重要的话及时说出来。邵同学成为他的女朋友，也成为后来一起面对生活的人。他终于明白，稳定的爱不是替他逃避世界，而是陪他更清楚地走进世界。"
    },
    {
      id: "independent_leader",
      type: "good",
      title: "好结局：维娜盒欣的独立技术负责人",
      test: { min: { research: 9, confidence: 7, communication: 6, integrity: 6 }, max: { mentorDependence: 7 } },
      image: "scenes/images/own-name-pro.png",
      description: "Y6 从业勒老师项目组走出，却没有永远停在学生的位置。他在维娜盒欣建立自己的技术判断，也带出一支愿意讲真话、敢于验证的团队。"
    },
    {
      id: "clear_scholar",
      type: "good",
      title: "好结局：清醒的长期研究者",
      test: { min: { research: 10, clarity: 7, integrity: 7 } },
      image: "scenes/images/clear-scholar-pro.png",
      description: "Y6 仍然喜欢一个人钻研，但他不再把独处当成逃避。他把博士训练、公司经验和自己的长期问题接在一起，做出扎实而持续的成果。"
    },
    {
      id: "warm_builder",
      type: "good",
      title: "好结局：会协作的安静建设者",
      test: { min: { peerTrust: 7, empathy: 6, communication: 6, integrity: 5 } },
      image: "scenes/images/warm-builder-pro.png",
      description: "Y6 没有变成最会说漂亮话的人，却成为别人愿意合作的人。他能钻进问题深处，也能在需要时走出来，把复杂的事讲给同伴听。"
    },
    {
      id: "career_first_mixed",
      type: "mixed",
      title: "灰色结局：事业先到，关系迟到",
      test: { min: { ambition: 8, research: 7 }, max: { shaoTrust: 6 } },
      image: "scenes/images/career-first-pro.png",
      description: "Y6 在维娜盒欣拿到了很重要的位置，也终于拥有了更大的平台。只是有些消息没有及时回，有些晚饭没有及时赴约，有些人后来只能变成通讯录里安静的名字。"
    },
    {
      id: "gentle_farewell",
      type: "mixed",
      title: "灰色结局：体面放下，也独自前行",
      test: { min: { clarity: 8, integrity: 6 }, max: { shaoTrust: 5, yanAttachment: 4 } },
      image: "scenes/images/yan-farewell-pro.png",
      description: "Y6 放下了颜同学，也没有急着把空出来的位置交给任何人。他变得清醒、安静、可靠，只是偶尔仍会想起珑烟市窗边那个不太会表达的自己。"
    },
    {
      id: "ordinary_growth",
      type: "neutral",
      title: "结局：慢慢长大的普通人",
      test: {},
      image: "scenes/images/ordinary-growth-pro.png",
      description: "Y6 没有抵达某个耀眼的标签，但他比过去更了解自己：知道何时钻研，何时表达，何时放下，何时珍惜眼前人。对一个曾经性格偏弱、习惯独处的人来说，这已经是一条很长的路。"
    }
  ]
};
