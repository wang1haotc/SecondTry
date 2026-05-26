# SecondTry

这是一个纯静态文字冒险小游戏项目。

## 开始

直接用浏览器打开 `index.html` 即可游玩。

## 自定义场景

场景文字、选项、属性变化和图片路径都放在 `scenes/scenes.js`。

- 当前剧情为 5 幕，每幕 3 个选项，总完整路径数为 `3^5 = 243`。
- 第一幕直接使用 `rounds[0].options`。
- 第二幕开始，每一幕会根据上一幕选项里的 `branch` 读取 `variants.research`、`variants.empathy` 或 `variants.ambition`。
- 修改每个 `variants` 里的 `title`、`description`、`image` 和 `options`，就能让下一幕跟上一选择连贯。
- 修改 `endings` 可以增加或调整结局。`type` 可标记为 `good`、`bad`、`mixed` 或 `neutral`。
- 结局条件支持 `min` 和 `max`：例如 `{ min: { ambition: 10 }, max: { integrity: 3 } }` 表示野心很高但操守很低时触发。
- 结局按数组顺序优先匹配，坏结局可以放在前面，用来覆盖极端失衡的人物属性。
- 替换或新增 `scenes/images/` 里的图片，可以自定义每一格画面，支持 `.jpg`、`.jpeg`、`.png`、`.webp`、`.gif`、`.avif`、`.svg`。
- 如果配置里写的是 `scenes/images/childhood.svg`，但你把图片替换成了 `childhood.jpg` 或 `childhood.png`，页面会在 `.svg` 加载失败后自动尝试同名的常见图片后缀。

如果图片路径失效，页面会尝试使用 `scenes/images/default.svg` 作为兜底画面。

## Repository

Remote: https://github.com/zhanghao95hc/SecondTry.git
