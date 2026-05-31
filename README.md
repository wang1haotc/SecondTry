# SecondTry

这是一个纯静态中文文字冒险小游戏项目，当前版本为《Y6 的长线选择》。

故事从福建珑烟市开始，讲述 Y6 从爱学习、习惯独处、性格偏弱的少年，进入天天大学本科，再保送到清北大学业勒老师项目组读博，毕业后留在业勒老师公司维娜盒欣工作的成长经历。新版本加入了博士期间对颜同学的暗恋和多角关系纠葛，以及实习后遇见邵同学并走向稳定关系的感情线。

## 开始 

直接用浏览器打开 `index.html` 即可游玩。

## 自定义场景

场景文字、选项、属性变化和图片路径都放在 `scenes/scenes.js`。

- 当前剧情为 13 幕，每幕最多 4 个选项，包含条件分支和多结局。
- 首页文案和背景图在 `home` 字段里配置，当前背景是 `scenes/images/home-pro.png`。
- 每幕使用 `rounds[n].options`，选项可以通过 `showIf` 设置条件显示。
- 修改每幕里的 `title`、`description`、`image` 和 `options`，即可调整剧情流程。
- 选项里的 `effects` 会改变人物属性，支持正负数。
- 当前属性包括科研、胆识、共情、抱负、操守、自信、表达、清醒、颜执念、邵信任、师门依赖和同伴信任。
- 例如 `{ showIf: { min: { communication: 4 } } }` 表示表达能力达到 4 后才显示该选项。
- 新增的剧情专用图包括珑烟市学习、天天大学校园、清北业勒组、颜同学白板、多角关系、维娜盒欣实习/办公室和邵同学长期关系等场景；当前优先使用 `*-pro.png` 专业生成图。
- 修改 `endings` 可以增加或调整结局。`type` 可标记为 `good`、`bad`、`mixed` 或 `neutral`。
- 结局条件支持 `min` 和 `max`：例如 `{ min: { ambition: 10 }, max: { integrity: 3 } }` 表示野心很高但操守很低时触发。
- 结局按数组顺序优先匹配，坏结局可以放在前面，用来覆盖极端失衡的人物属性。
- 替换或新增 `scenes/images/` 里的图片，可以自定义每一格画面，支持 `.jpg`、`.jpeg`、`.png`、`.webp`、`.gif`、`.avif`、`.svg`。
- 如果配置里写的是 `scenes/images/childhood.svg`，但你把图片替换成了 `childhood.jpg` 或 `childhood.png`，页面会在 `.svg` 加载失败后自动尝试同名的常见图片后缀。
- 首页背景同样支持替换为 jpg、png、webp 等格式；改文件名或替换同名图片即可。

如果图片路径失效，页面会尝试使用 `scenes/images/default.svg` 作为兜底画面。

## Repository

Remote: https://github.com/zhanghao95hc/SecondTry.git
