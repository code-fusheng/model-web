# model-web 个人论坛 | code-fusheng

> @Author : code-fusheng</br>
> @Time : 2020/7/26 ~ Now

## 开发记录

* Data: 2020/07/27 前台开发基础框架构建-添加了部分文件，修改了部分登录相关内容
* Data: 2020/07/31 前台开发首页登录交互逻辑，文章分类设计+完善登录
* Data: 2020/08/03 文章模块初步实现了文章的发表功能，提供了创作中心，存在个别错误（文章发表异常，路由激活异常，滚动条样式异常）
* Data: 2020/08/07 08:00 --- 10:19 code-fusheng 文章模块 解决了在发表文章时，选择分类不会自动配置对应文章类型封面的问题
* Data: 2020/08/10 12:00 --- 19:22 code-fusheng 文章模块 解决了路由刷新同步问题、路由跳转定向问题、添加文章阅读功能，初步完成文章模块的结构 
* Data: 2020/8/11 08:30 --- 2020/8/11 22:37 code-fusheng 前台开发 初步实现了前端的部分功能，优化了大量的UI界面设计，以及部分尺寸设计问题
* Data: 2020/8/12 07:43 --- 2020/8/12 23:44 code-fusheng 搜索中心 初步实现了文章模块的搜索功能（文章列表的状态存在一定的小BUG）
* Data: 2020/8/13 22:45 --- 2020/8/13 23:08 code-fusheng 添加个人中心路由，部分UI微调
* Data: 2020/8/13 12:00 --- 2020/8/14 18:31 code-fusheng 基本实现文章模块的点赞、收藏、多级评论
* Data: 2020/8/15 21:34 --- 2020/8/15 22:34 code-fusheng 添加了主页内容（原项目代码）
* 更新开发记录规范 --- Git Commit 个人开发规范
* (2020/08/16 14:56 --- 2020/08/16 16:40) feature : 音乐欣赏 --- 简单添加了一个音乐播放器（vue-aplayer）未与后端交互（数据字段不统一）
* (2020/08/20 06:41 --- 2020/08/20 20:11) feature : 文章模块 --- 实现了文本内容的编辑修改，对应不同的文本类型，tinymce和markdown，后端增加 editContent 编辑内容保存文章内容源码
* (2020/08/26 09:35 --- 2020/08/26 13:49) fix : 登录逻辑 --- 解决了未登录状态资源访问问题
* (2020/09/16 20:18 --- 2020/09/16 20:18) version : 版本发布 --- 前台UI阶段设计尝试（回滚存档点）PS:完善了多级评论的交互
* (2020/09/17 00:00 --- 2020/09/18 21:45) perf : UI优化 --- 重新设计首页UI,调整web前台适应性，风格目前简约压抑风
* (2020/09/18 22:00 --- 2020/09/19 00:50) perf : UI优化 --- 首页UI设计基本完善，图层有待选择更优秀的，中间推荐阅读跳转待实现，文章动态列表未实现
* (2020/09/19 09:00 --- 2020/09/19 21:00) perf : UI优化 --- 首页功能基本完成， 前台整体满足WEB端与移动端自适应
* (2020/09/20 22:00 --- 2020/09/20 23:45) perf : UI优化 --- 更换背景图，更换顶部导航和底部网站信息背景色
* (2020/09/22 12:00 --- 2020/09/22 15:49) feature : 消息通知 --- 新增消息通知功能，使用websocket建立长连接，目前基本实现近实时消息通知
* (2020/09/24 11:00 --- 2020/09/25 01:17) fix : 实现 mavon-editor 前台文章展示，代码高亮（Ps:通过自定义eslint语法规则解决驼峰冲突）
* (2020/10/05 08:10 --- 2020/10/05 04:28) fix : 优化主页设计、更换背景色、修复了导航栏图标不居中问题
* (2020/10/05 18:00 --- 2020/10/05 22:23) feature、fix : 主页动画 --- 新增导航菜单移动端上下滑动动画 touchMove, 修复了 web滚动条与移动端触摸不同步的问题 
* (2021/02/19 03:40 --- 2021/02/19 03:50) version : 软著版本切换开发版本,部分优化
* (2021/03/01 09:00 --- 2021/03/01 10:46) fix : 启用短信验证码登陆，修复原有Token无效问题
* (2022/11/17 10:00 --- 2022/11/17 23:51) fix : 样式修正 --- 调整统一 Eslint 代码质量 + Perttier 代码风格
## 项目模块

rsync -avz -e 'ssh -p 22221' --progress ./model-web root@42.192.222.62:/usr/share/nginx/model-web
