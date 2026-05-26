window.Y6_SCENE_DATA = {
  title: "Y6 的五十年选择",
  home: {
    image: "scenes/images/home.png",
    title: "Y6 的五十年选择",
    description: "这是一段关于好奇心、选择、羁绊与长期坚持的文字冒险。你将陪伴 Y6 走过五个关键年龄，在科研、胆识、共情、抱负、操守与情感之间留下自己的轨迹。愿每一次选择，都让他更接近那个清醒、坚定，并终有一天能够当选院士的自己。"
  },
  maxTrait: 12,
  routeCount: 243,
  traitLabels: {
    research: "科研",
    courage: "胆识",
    empathy: "共情",
    ambition: "抱负",
    integrity: "操守",
    bond: "羁绊"
  },
  rounds: [
    {
      age: "0-8 岁",
      title: "木箱里的星空",
      image: "scenes/images/childhood.jpeg",
      description: "Y6 出生在一座临河小城。八岁那年，父亲带回一只坏掉的收音机，里面的线圈像一团安静的星云。隔壁女孩苏晓抱着一本破旧星图来找他，家人也问他：这个周末，你想做什么？",
      options: [
        {
          branch: "research",
          title: "拆开收音机",
          text: "弄懂声音从哪里来。",
          effects: { research: 2, courage: 1 },
          scene: "Y6 把螺丝排成一行，第一次相信世界可以被拆开，也可以被重新理解。"
        },
        {
          branch: "empathy",
          title: "陪苏晓看星图",
          text: "她说，长大后要去看真正的天文台。",
          effects: { empathy: 1, research: 1, bond: 2 },
          resultImage: "scenes/images/sx_stargazing.svg",
          scene: "两个人趴在窗台边，把星座连成秘密地图。Y6 第一次发现，探索世界也可以是两个人的约定。"
        },
        {
          branch: "ambition",
          title: "跟商队去县城",
          text: "看看更大的世界。",
          effects: { courage: 2, ambition: 1 },
          scene: "县城的灯牌在车窗上倒流，Y6 心里第一次出现“远方”这个词。"
        }
      ]
    },
    {
      age: "12 岁",
      variants: {
        research: {
          title: "拆开之后的报名表",
          image: "scenes/images/contest.png",
          description: "收音机被修好的消息传到学校，物理老师把竞赛报名表放到 Y6 桌上，说他应该去看看更精密的世界。苏晓把一张写着鼓励的便签夹进他的练习册里。",
          options: [
            { branch: "research", title: "报名竞赛", text: "把好奇心交给题目检验。", effects: { research: 2, ambition: 1 }, scene: "他在旧教室里刷题到深夜，纸页边缘沾着铅笔灰。" },
            { branch: "empathy", title: "和苏晓互写长信", text: "题目、诗句和心事被夹进同一本笔记。", effects: { empathy: 1, research: 1, bond: 2 }, resultImage: "scenes/images/sx_letters.svg", scene: "Y6 在公式旁写下她的句子，忽然懂得理性并不排斥温柔。" },
            { branch: "ambition", title: "申请去机械厂参观", text: "想知道公式能不能落到钢铁上。", effects: { courage: 1, research: 1, ambition: 1 }, scene: "机床的震动穿过掌心，他开始把公式想象成会发热的零件。" }
          ]
        },
        empathy: {
          title: "雨巷后的座位",
          image: "scenes/images/classroom.png",
          description: "邻居病好后送来一盏旧台灯。Y6 把它带到教室，老师注意到他总愿意把难题讲给旁边的人听。苏晓常坐在窗边听他讲题，偶尔递来一块橡皮。",
          options: [
            { branch: "empathy", title: "成立互助小组", text: "让落下的人也能跟上。", effects: { empathy: 2, integrity: 1 }, scene: "他把课间变成小小讲台，发现帮助别人也会反过来照亮自己。" },
            { branch: "research", title: "修好苏晓的台灯", text: "把一盏灯留给晚自习的人。", effects: { research: 1, empathy: 1, bond: 2 }, resultImage: "scenes/images/sx_letters.svg", scene: "台灯重新亮起时，苏晓抬头笑了。Y6 忽然觉得，被需要也是一种很具体的光。" },
            { branch: "ambition", title: "竞选班干部", text: "试着承担更多人的秩序。", effects: { ambition: 1, empathy: 1, courage: 1 }, scene: "他第一次站在全班面前说话，声音发抖，但没有退回座位。" }
          ]
        },
        ambition: {
          title: "县城灯牌下的题",
          image: "scenes/images/city.png",
          description: "县城的霓虹让 Y6 意识到小城之外还有许多可能。回到学校后，他不再满足于只把课本读完，也开始害怕有一天自己走得太快，把重要的人落在身后。",
          options: [
            { branch: "ambition", title: "报名市级竞赛", text: "把自己放到更大的名单里。", effects: { ambition: 2, research: 1 }, scene: "报名表交上去时，他还不知道对手是谁，只知道不能一直站在原地。" },
            { branch: "research", title: "泡在图书室", text: "先把底子补得更深。", effects: { research: 2, integrity: 1 }, scene: "图书室的尘埃在阳光里漂浮，他一本本抄下看不懂的公式。" },
            { branch: "empathy", title: "帮苏晓准备朗诵", text: "把见过的世界讲给她听。", effects: { empathy: 1, courage: 1, bond: 2 }, resultImage: "scenes/images/sx_letters.svg", scene: "他学着描述县城的街道，也学着听见她声音里的向往和不安。" }
          ]
        }
      }
    },
    {
      age: "22 岁",
      variants: {
        research: {
          title: "实验室门口的四封信",
          image: "scenes/images/lab.png",
          description: "多年竞赛和自学把 Y6 推到大学实验室门口。毕业前，他收到几封邀请，每一封都像一条不同的研究路径。苏晓也拿到北京的录取通知，问他：未来能不能不只写在论文里？",
          options: [
            { branch: "research", title: "进入基础研究", text: "继续追问最慢的问题。", effects: { research: 3, integrity: 1 }, scene: "实验室的灯一直亮到凌晨，只剩他的谱线还在屏幕上跳动。" },
            { branch: "ambition", title: "加入创业团队", text: "把论文变成可用的产品。", effects: { ambition: 2, courage: 2 }, scene: "他在白板上画出第一条产品曲线，风险像风一样灌进会议室。" },
            { branch: "empathy", title: "和苏晓去同一座城", text: "承认事业之外，也有想守住的人。", effects: { empathy: 1, integrity: 1, bond: 3 }, resultImage: "scenes/images/sx_shared_room.svg", scene: "他们租下很小的房间，窗边堆着论文和稿纸。日子紧，却有人在深夜给他留一盏灯。" }
          ]
        },
        empathy: {
          title: "很多人等他回答",
          image: "scenes/images/mountain.png",
          description: "互助小组的经历让 Y6 习惯把选择和别人联系在一起。毕业季，他面对的不只是工作，而是要把能力带到哪里。苏晓说，真正的亲密不是拴住彼此，而是知道对方为什么出发。",
          options: [
            { branch: "empathy", title: "去西部支教", text: "把知识带到更远的课堂。", effects: { empathy: 3, integrity: 1 }, scene: "高原教室的窗户漏风，孩子们却把问题问得很热。" },
            { branch: "research", title: "和苏晓异地约定", text: "每周写一封认真回信。", effects: { research: 1, empathy: 1, bond: 3 }, resultImage: "scenes/images/sx_letters.svg", scene: "车站分别时，他们没有许诺永远，只约好每周讲一件真实发生的小事。" },
            { branch: "ambition", title: "加入公益基金会", text: "把小组经验放大成项目。", effects: { ambition: 2, empathy: 1 }, scene: "第一次项目会很嘈杂，但他终于能让更多课桌亮起灯。" }
          ]
        },
        ambition: {
          title: "更大的系统",
          image: "scenes/images/industry.png",
          description: "县城灯牌、竞赛名单和一次次公开表达，让 Y6 更早意识到平台的重要。毕业时，他想进入真正运转的大系统，也想弄明白自己是否有能力同时承担远方和牵挂。",
          options: [
            { branch: "ambition", title: "接受外企 offer", text: "先见识成熟工业体系。", effects: { ambition: 2, research: 1 }, scene: "巨大的生产线像一条发光河流，Y6 学会了标准与效率。" },
            { branch: "research", title: "进入工程研究院", text: "在规模化之前打磨技术。", effects: { research: 2, courage: 1 }, scene: "他把样机拆了又装，知道可靠性不是口号。" },
            { branch: "empathy", title: "陪苏晓回乡办训练营", text: "让小城孩子也能看见远方。", effects: { empathy: 1, ambition: 1, bond: 3 }, resultImage: "scenes/images/sx_shared_room.svg", scene: "他们把县城见闻做成课程，教室里有人第一次说想去更远的地方。" }
          ]
        }
      }
    },
    {
      age: "35 岁",
      variants: {
        research: {
          title: "数据没有照他说谎",
          image: "scenes/images/data.png",
          description: "长期研究让 Y6 拿到关键项目，却也让他面对连续失败。异常数据摆在屏幕上，团队等他决定该不该公开。与此同时，苏晓的事业也来到关键期，家里的餐桌常常只剩一盏冷掉的灯。",
          options: [
            { branch: "research", title: "公开失败数据", text: "用真实结果换下一次机会。", effects: { integrity: 3, research: 1 }, scene: "他把失败曲线投到大屏上，会议室安静得能听见笔帽落地。" },
            { branch: "empathy", title: "向苏晓坦白脆弱", text: "不再把沉默误认为承担。", effects: { empathy: 2, integrity: 1, bond: 3 }, resultImage: "scenes/images/sx_confession.svg", scene: "他终于说出害怕失败，也听见她说：我不是来旁观你成功的。那一晚，他们重新成为彼此的队友。" },
            { branch: "ambition", title: "重组攻关方向", text: "砍掉漂亮但无用的部分。", effects: { courage: 2, ambition: 1, research: 1 }, scene: "一半方案被划掉，留下的线条少了，却更像路。" }
          ]
        },
        empathy: {
          title: "一间教室变成许多间",
          image: "scenes/images/team.png",
          description: "无论支教、公益还是教育研究，Y6 都已经把自己放进了许多人的命运里。现在项目扩大，资源和人心同时紧张。苏晓提醒他：照顾很多人之前，也要允许一个人照顾你。",
          options: [
            { branch: "empathy", title: "保留一线课堂", text: "不让系统忘记具体的人。", effects: { empathy: 3, integrity: 1 }, scene: "他每月仍去听一节普通课，提醒团队数字背后有名字。" },
            { branch: "research", title: "和苏晓共同做访谈", text: "让善意经得起验证，也经得起倾听。", effects: { research: 1, empathy: 1, bond: 3 }, resultImage: "scenes/images/sx_confession.svg", scene: "她负责听见细节，他负责整理证据。两个人第一次把亲密变成一种工作方法。" },
            { branch: "ambition", title: "扩展到更多城市", text: "把经验复制出去。", effects: { ambition: 2, courage: 1 }, scene: "新城市的会议室灯火通明，规模让他兴奋，也让他警惕。" }
          ]
        },
        ambition: {
          title: "增长曲线的阴影",
          image: "scenes/images/capital.png",
          description: "平台、公司或项目都开始长大。Y6 站在增长曲线前，发现速度带来的不只是机会，还有被忽略的代价。苏晓问他：你想赢，还是想在赢的时候仍然像自己？",
          options: [
            { branch: "ambition", title: "继续快速扩张", text: "趁窗口期抢到位置。", effects: { ambition: 3, courage: 1 }, scene: "掌声很密，日程很满，Y6 发现速度也会制造盲区。" },
            { branch: "research", title: "停下来补技术债", text: "把根基修稳再往前。", effects: { research: 2, integrity: 1 }, scene: "他暂停几个耀眼项目，把工程日志一页页翻回去。" },
            { branch: "empathy", title: "和苏晓重建团队规则", text: "让增长不要吞掉人，也不要吞掉亲密。", effects: { empathy: 1, integrity: 1, bond: 3 }, resultImage: "scenes/images/sx_confession.svg", scene: "他把加班表和离职访谈摆在一起，也把错过的纪念日写进日程。速度终于学会让路。" }
          ]
        }
      }
    },
    {
      age: "50 岁",
      variants: {
        research: {
          title: "最后一份证据",
          image: "scenes/images/academy.png",
          description: "Y6 站在报告厅后台。多年选择把他带回证据本身：要不要把最完整、也最不讨巧的结果交给所有人。苏晓把那本旧星图放进他的文件夹，纸角已经磨白。",
          options: [
            { branch: "research", title: "坚持长期基础问题", text: "把十年数据完整公开。", effects: { research: 3, integrity: 2 }, scene: "他没有讲最热闹的概念，只讲最扎实的证据。" },
            { branch: "empathy", title: "把致谢留给同行与苏晓", text: "认真说出那些陪他走来的人。", effects: { empathy: 2, research: 1, bond: 2 }, resultImage: "scenes/images/sx_companion.svg", scene: "报告厅很大，他却看见第一排的苏晓。掌声响起时，他明白一生不是独自抵达。" },
            { branch: "ambition", title: "推动国家级平台", text: "把标准和设备一起做大。", effects: { ambition: 2, research: 1 }, scene: "他终于学会在宏大计划里保留一张实验台的位置。" }
          ]
        },
        empathy: {
          title: "许多人的回声",
          image: "scenes/images/teaching.png",
          description: "五十岁时，Y6 收到来自不同城市、学校和实验室的来信。那些被他帮助过的人，反过来构成了他的履历。苏晓把信一封封摊开，说：你看，被爱也是一种证据。",
          options: [
            { branch: "empathy", title: "退到一线教学", text: "把故事讲给下一代。", effects: { empathy: 3, integrity: 1 }, scene: "他把第一只收音机放在讲台上，教室里传来年轻的笑声。" },
            { branch: "research", title: "和苏晓整理来信", text: "让方法和心意都可以被保存。", effects: { research: 1, empathy: 1, bond: 2 }, resultImage: "scenes/images/sx_companion.svg", scene: "他们把课程、数据、失败案例和手写来信全部整理出来，留给看不见的学生。" },
            { branch: "ambition", title: "创办公共学院", text: "把小课堂变成制度。", effects: { ambition: 2, empathy: 1 }, scene: "一扇新门打开，后来许多人从这里走向自己的山峰。" }
          ]
        },
        ambition: {
          title: "掌声之前的选择",
          image: "scenes/images/vote.png",
          description: "Y6 的名字已经和项目、公司或平台绑在一起。最后一次关键投票前，他必须决定自己要把影响力投向哪里。苏晓没有劝他慢下来，只问他愿不愿意带着真实的人一起往前。",
          options: [
            { branch: "ambition", title: "接受资本扩张", text: "用规模追赶窗口期。", effects: { ambition: 3, courage: 1 }, scene: "掌声涌来时，他知道自己选择了最亮也最陡的路。" },
            { branch: "research", title: "推迟发布会陪苏晓过生日", text: "让增长重新服从问题，也服从生活。", effects: { research: 1, integrity: 1, bond: 2 }, resultImage: "scenes/images/sx_companion.svg", scene: "他把发布会推迟，重新打开那份被搁置的验证报告，也第一次准时出现在生日晚餐前。" },
            { branch: "empathy", title: "设立人才基金", text: "把机会交给更多后来者。", effects: { empathy: 2, ambition: 1 }, scene: "他没有只留下公司名字，还留下了一套让新人起跑的规则。" }
          ]
        }
      }
    }
  ],
  endings: [
    {
      id: "runaway_capital",
      type: "bad",
      title: "坏结局：失控扩张的代价",
      test: { min: { ambition: 10 }, max: { integrity: 3, empathy: 4 } },
      image: "scenes/images/capital.png",
      description: "Y6 把速度当成唯一答案，项目和资本一路膨胀，却没有留下足够的审查、伦理和照顾。五十岁那年，公司仍在发布会上闪闪发光，但几起事故让他明白：没有操守和共情托底的野心，会把成功也变成债务。"
    },
    {
      id: "cold_genius",
      type: "bad",
      title: "坏结局：孤岛里的天才",
      test: { min: { research: 10 }, max: { empathy: 3, integrity: 5 } },
      image: "scenes/images/lab.png",
      description: "Y6 的论文足够漂亮，数据也足够坚硬，可他越来越少听见别人说话。学生离开，合作者沉默，实验室像一座亮着灯的孤岛。后来有人引用他的成果，却很少有人愿意提起和他一起工作的日子。"
    },
    {
      id: "kindness_burnout",
      type: "bad",
      title: "坏结局：被耗尽的善意",
      test: { min: { empathy: 10 }, max: { ambition: 4, research: 5, integrity: 4 } },
      image: "scenes/images/teaching.png",
      description: "Y6 总是先回应别人的需要，却长期没有为自己的能力、边界和系统建设留下空间。他帮助了许多人，也被无数临时的求助拖垮。五十岁时，他仍被人感激，却已经很难再点亮自己。"
    },
    {
      id: "reckless_hero",
      type: "bad",
      title: "坏结局：勇气变成鲁莽",
      test: { min: { courage: 6, ambition: 7 }, max: { research: 5, integrity: 2 } },
      image: "scenes/images/crisis.png",
      description: "Y6 习惯在压力里拍板，也习惯把迟疑看成软弱。几次冒险确实让他冲出重围，直到一次没有被充分验证的决定击穿了底线。那之后，他才明白勇气如果不受证据和操守约束，只是另一种危险。"
    },
    {
      id: "stalled_life",
      type: "bad",
      title: "坏结局：迟迟没有抵达",
      test: { max: { research: 4, ambition: 3, courage: 3, integrity: 3 } },
      image: "scenes/images/river.png",
      description: "Y6 一直想选择更稳妥的路，却在关键时刻反复绕开难题。五十岁时，他没有犯下大错，也没有真正完成自己想做的事。河水仍旧流过小城，他终于承认：不选择，也是一种选择。"
    },
    {
      id: "academician",
      type: "good",
      title: "好结局：中国科学院院士",
      test: { min: { research: 10, integrity: 6 } },
      image: "scenes/images/academy.png",
      description: "Y6 因在基础科学领域做出系统性、原创性贡献，并长期坚持公开、严谨的学术规范，当选中国科学院院士。领奖那天，他想起八岁拆开的收音机：原来一生的回声，从那枚小小螺丝就开始了。"
    },
    {
      id: "public_scientist",
      type: "good",
      title: "好结局：公共科学的建设者",
      test: { min: { research: 6, empathy: 5, integrity: 5 } },
      image: "scenes/images/institute.png",
      description: "Y6 没有只追逐个人荣誉，而是把数据、课程和设备变成公共基础设施。许多年轻团队从他的开放平台起步，后来又把新的发现归还给更多人。"
    },
    {
      id: "founder",
      type: "good",
      title: "好结局：技术公司的掌舵者",
      test: { min: { ambition: 8, courage: 4, integrity: 1 } },
      image: "scenes/images/capital.png",
      description: "Y6 把研究经验转化成工程平台，创办的公司改变了一个行业。他没有获得最安静的书房，却在最喧闹的战场里保住了技术底线。"
    },
    {
      id: "mentor",
      type: "good",
      title: "好结局：改变许多人的老师",
      test: { min: { empathy: 8, integrity: 4 } },
      image: "scenes/images/teaching.png",
      description: "Y6 没有把名字刻在最高的奖杯上，却把方法、勇气和诚实交给了一批又一批年轻人。许多年后，有学生说：我的人生，是从听见他那句话开始转弯的。"
    },
    {
      id: "reformer",
      type: "good",
      title: "好结局：开放研究制度的改革者",
      test: { min: { research: 7, empathy: 6 } },
      image: "scenes/images/institute.png",
      description: "Y6 建起开放数据库和共享实验平台，让许多原本彼此独立的团队彼此看见。他的贡献不只是一篇论文，而是一种让知识流动的制度。"
    },
    {
      id: "starlit_companion",
      type: "good",
      title: "好结局：星图另一端的同行者",
      test: { min: { bond: 10, empathy: 4, integrity: 3 } },
      image: "scenes/images/sx_companion.svg",
      description: "Y6 和苏晓没有把彼此变成某种牺牲，也没有让事业吞掉生活。他们从一张旧星图走到五十岁，把争执、等待、理解和共同承担都留在同一条路上。后来 Y6 仍然继续研究，苏晓也继续写作；两个人都没有成为对方的附属，却一直是对方最可靠的坐标。"
    },
    {
      id: "balanced_builder",
      type: "good",
      title: "好结局：稳健的长期主义者",
      test: { min: { research: 5, empathy: 5, integrity: 3 } },
      image: "scenes/images/team.png",
      description: "Y6 没有在某一项属性上走到极端，却把研究、组织、共情和操守稳定地放在同一张桌上。他的成就不总是耀眼，但足够耐久，也足够让身边的人安心。"
    },
    {
      id: "famous_but_tired",
      type: "mixed",
      title: "灰色结局：盛名之下",
      test: { min: { ambition: 8 }, max: { empathy: 5 } },
      image: "scenes/images/vote.png",
      description: "Y6 得到了名声、平台和很多掌声，却越来越难分辨哪些关系还是真实的。他没有彻底失败，也没有真正轻松。人们说他成功，他自己却偶尔怀念那个还能慢慢修收音机的下午。"
    },
    {
      id: "quiet_scholar",
      type: "mixed",
      title: "灰色结局：安静的研究者",
      test: { min: { research: 7 }, max: { ambition: 5 } },
      image: "scenes/images/lab.png",
      description: "Y6 留在不太被看见的研究角落里，做出了一些扎实但传播有限的工作。他没有站上最高领奖台，也没有被潮水卷走。对他来说，这是一种遗憾，也是一种保全。"
    },
    {
      id: "ordinary",
      type: "neutral",
      title: "结局：清醒而普通的一生",
      test: {},
      image: "scenes/images/river.png",
      description: "Y6 没有站到聚光灯中央，但他保留了选择的能力：知道何时前进，何时停下，何时对一个具体的人负责。五十岁那年，他发现这也是一种完整。"
    }
  ]
};
