<template>
  <div>
    <aplayer :audio="audio" :lrc-type="1" />
  </div>
</template>

<script>
// import musicApi from '@/api/music/music'
export default {
  data() {
    return {
      page: {
        currentPage: 1,
        pageSize: 5,
        totalCount: 0,
        totalPage: 0,
        params: {},
        sortColumn: 'createdTime',
        sortMethod: 'desc',
        list: []
      },
      audio: [
        {
          id: 1,
          name: '听妈妈的话',
          artist: '周杰伦',
          url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_138243&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
          cover: 'http://img1.kuwo.cn/star/starheads/240/42/97/3914752958.jpg',
          lrc:
            '[00:11.64]小朋友 你是否有很多问号 \\n[00:14.26]为什么 别人在那看漫画 \\n[00:16.89]我却在学画画 对这钢琴说话 \\n[00:19.37]别人在玩游戏 我却靠在墙壁背我的ABC \\n[00:22.38]我说我要一架大大的飞机 \\n[00:24.91]我却得到一只旧旧螺旋机 \\n[00:27.48]为什么要听妈妈的话 \\n[00:29.79]长大后你就会开始懂得这段话 哼 \\n[00:32.26]长大后我开始明白 \\n[00:35.23]为什么我 跑得比别人快 \\n[00:36.64]飞得比别人高 \\n[00:37.88]将来大家看的都是我画的漫画 \\n[00:40.23]大家唱的都是 我写的歌 \\n[00:42.95]妈妈的辛苦 不让你看见 \\n[00:45.57]温暖的事都在她心里面 \\n[00:48.01]有空就得多摸摸她的手 \\n[00:50.70]把手牵着一起梦游 \\n[00:53.10]听妈妈的话 别让她受伤 \\n[01:03.14]想快快长大 才能保护她 \\n[01:12.93]美丽的白发 幸福中发芽 \\n[01:23.96]天使的魔法 温暖中慈祥 \\n[01:34.43]在你的未来 音乐是你的王牌 \\n[01:36.21]那王牌谈的恋爱 \\n[01:37.68]而我不想把你教坏 \\n[01:39.21]还是听妈妈的话吧 \\n[01:40.52]晚点在恋爱吧 \\n[01:41.96]我知道你未来的路 \\n[01:44.09]干嘛比我更清楚 \\n[01:45.40]你因为太多学习的同学 \\n[01:46.53]在这块写东写西 \\n[01:47.50]但我建议最好听妈妈 \\n[01:49.10]我会用功读书 \\n[01:50.23]用功读书怎么会从我嘴巴说出 \\n[01:52.34]不想你输所以要叫你用功读书 \\n[01:55.47]妈妈挑给你的毛病你要好好的收着 \\n[01:57.56]因为不知道是我要告诉她我还留着 \\n[01:59.91]对了 我会遇到了周润发 \\n[02:02.31]所以你可以跟同学炫耀 \\n[02:03.38]赌神未来是你爸爸 \\n[02:04.47]我找不到你写的情书 \\n[02:06.94]你喜欢的要承认 \\n[02:08.02]因为我会了解你会在操场上牵她 \\n[02:09.40]你会开始喜欢唱流行歌 \\n[02:12.81]因为张学友开始准备唱吻别 \\n[02:15.43]听妈妈的话 别让她受伤 \\n[02:26.22]想快快长大 才能保护她 \\n[02:36.16]美丽的白发 幸福中发芽 \\n[02:46.66]天使的魔法 温暖中慈祥 \\n[02:56.68]听妈妈的话 别让她受伤 \\n[03:07.46]想快快长大 才能保护她 \\n[03:17.27]长大后我开始明白 为什么我 \\n[03:20.81]跑得比别人快 飞得比别人高 \\n[03:22.56]将来大家看的都是我画的漫画 \\n[03:25.52]大家唱的都是我写的歌 \\n[03:28.31]妈妈的辛苦她不让你看见 \\n[03:30.72]温暖的事都在她心里面 \\n[03:33.31]有空就得多摸摸她的手 \\n[03:36.15]把手牵着一起梦游 \\n[03:38.34]听妈妈的话 别让她受伤 \\n[03:48.72]想快快长大 才能保护她 \\n[03:59.10]美丽的白发 幸福中发芽 \\n[04:09.32]天使的魔法 温暖中慈祥'
        },
        {
          id: 2,
          name: '以父之名',
          artist: '周杰伦',
          url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_28386348&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
          cover: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=ce3122aecb8065387beaa315afe6c679/d01373f082025aaff92dd92bfaedab64034f1a36.jpg',
          lrc:
            '\\n[00:18.80]以父之名 \\n[00:35.80]周杰伦 \\n[00:52.80]制作人：秋晓之 QQ：285552115 \\n[01:09.80] \\n[01:26.56]微凉的晨露沾湿黑礼服 \\n[01:29.67]石板路有雾父在低诉 \\n[01:32.52]无奈的觉悟只能更残酷 \\n[01:35.33]一切都为了通往圣堂的路 \\n[01:38.02]吹不散的雾隐没了意图 \\n[01:40.67]谁轻柔踱步停住 \\n[01:43.34]还来不及哭穿过的子弹就带走温度 \\n[01:47.15] \\n[01:48.69]我们每个人都有罪 \\n[01:50.44]犯着不同的罪 \\n[01:51.77]我能决定谁对 \\n[01:53.15]谁又该要沉睡 \\n[01:54.53]争论不能解决 \\n[01:55.76]在永无止境的夜 \\n[01:57.35]关掉你的嘴 \\n[01:58.69]唯一的恩惠 \\n[01:59.88]挡在前面的人都有罪 \\n[02:01.18]后悔也无路可退 \\n[02:02.64]以父之名判决 \\n[02:03.96]那感觉没有适合词汇 \\n[02:05.59]就像边笑边掉泪 \\n[02:07.04]凝视着完全的黑 \\n[02:08.42]阻挡悲剧蔓延的悲剧会让我沉醉 \\n[02:10.72]低头亲吻我的左手 \\n[02:12.17]换取被宽恕的承诺 \\n[02:13.50]老旧管风琴在角落 \\n[02:14.93]一直一直一直伴奏 \\n[02:16.25]黑色帘幕被风吹动 \\n[02:17.66]阳光无言地穿透 \\n[02:19.18]洒向那群被我驯服后的 兽 \\n[02:21.88]沉默地喊叫沉默地喊叫 \\n[02:23.55]孤单开始发酵 \\n[02:24.88]不停对着我嘲笑 \\n[02:26.29]回忆逐渐燃烧 \\n[02:27.66]曾经纯真的画面 \\n[02:28.77]残忍地温柔出现 \\n[02:30.21]脆弱时间到 \\n[02:31.33]我们一起来祷告 \\n[02:32.95]仁慈的父我已坠入 \\n[02:35.73]看不见罪的国度 \\n[02:38.77]请原谅我的自负 \\n[02:41.68] \\n[02:43.77]没人能说没人可说 \\n[02:46.59]好难承受 \\n[02:48.67]荣耀的背后刻着一道孤独 \\n[02:52.52] \\n[02:54.66]闭上双眼我又看见 \\n[02:57.67]当年那梦的画面 \\n[03:00.59]天空是蒙蒙的雾 \\n[03:03.56] \\n[03:05.76]父亲牵着我的双手 \\n[03:08.66]轻轻走过 \\n[03:10.67]清晨那安安静静的石板路 \\n[03:14.58] \\n[03:46.34]低头亲吻我的左手 \\n[03:47.88]换取被宽恕的承诺 \\n[03:49.21]老旧管风琴在角落 \\n[03:50.68]一直一直一直伴奏 \\n[03:52.21]黑色帘幕被风吹动 \\n[03:53.55]阳光无言地穿透 \\n[03:54.88]洒向那群被我驯服后的 兽 \\n[03:57.56]沉默地喊叫沉默地喊叫 \\n[03:59.21]孤单开始发酵 \\n[04:00.68]不停对着我嘲笑 \\n[04:01.77]回忆逐渐燃烧 \\n[04:03.33]曾经纯真的画面 \\n[04:04.54]残忍地温柔出现 \\n[04:05.69]脆弱时间到 \\n[04:06.88]我们一起来祷告 \\n[04:08.65]仁慈的父我已坠入 \\n[04:11.90]看不见罪的国度 \\n[04:14.58]请原谅我的自负 \\n[04:17.97] \\n[04:19.88]没人能说没人可说 \\n[04:22.85]好难承受 \\n[04:24.66]荣耀的背后刻着一道孤独 \\n[04:27.67] \\n[04:30.84]仁慈的父我已坠入 \\n[04:36.44]看不见罪的国度 \\n[04:42.07]请原谅我 我的自负 \\n[04:47.36]刻着一道孤独 \\n[04:52.74]仁慈的父我已坠入 \\n[04:55.56]看不见罪的国度 \\n[04:58.28]请原谅我的自负 \\n[05:01.75] \\n[05:03.58]没人能说没人可说 \\n[05:06.49]好难承受 \\n[05:08.66]荣耀的背后刻着一道孤独 \\n[05:12.29] \\n[05:14.32]那斑驳的家徽 我擦拭了一夜(闭上双眼我又看见) \\n[05:17.45]孤独的光辉 我才懂的感觉(当年那梦的画面) \\n[05:20.13]烛光 不 不 停的 摇晃(天空是蒙蒙的雾) \\n[05:22.41]猫头鹰在 窗棂上 对著远方眺望 \\n[05:25.50]通向 大厅的长廊 (父亲牵着我的双手) \\n[05:28.42]一样 说不出的沧桑(轻轻走过)'
        },
        {
          id: 3,
          name: 'Wayward One',
          artist: 'Jillian Rae',
          url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_72217588&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
          cover: 'https://p1.music.126.net/K0-IPcIQ9QFvA0jXTBqoWQ==/109951163636756693.jpg?param=300y300',
          lrc: '暂无歌词'
        },
        {
          id: 4,
          name: '无悔一生',
          artist: 'Beyond',
          url: 'http://sc1.111ttt.cn/2015/1/06/02/99021925549.mp3',
          cover: 'http://p1.music.126.net/n82_qxlHOmfgL9jILf72lg==/87960930223110.jpg?param=130y130',
          lrc:
            '\\n[00:00.00]歌手：Beyond \\n[00:00.00]歌名：无悔这一生 \\n[00:00.00]制作：mp3.5nd.com \\n[00:14.00] 阳光历次消散别去 \\n[00:21.00]无理冲击我心绪 \\n[00:29.00] 前景没法打算怎么 \\n[00:36.00] 谁会偷生远方里 \\n[00:45.00]每次记忆哭笑 \\n[00:49.00]将心意再变改 \\n[00:52.00] 一分一秒 \\n[00:57.00]无意对一切话别 \\n[01:02.00]无意却远走他方 \\n[03:12.00]\\n[02:43.00]\\n[01:06.00] 没有泪光风里劲闯 \\n[03:16.00]\\n[02:47.00]\\n[01:11.00]怀着心中新希望 \\n[03:19.00]\\n[02:51.00]\\n[01:14.00]能冲一次 \\n[03:21.00]\\n[02:52.00]\\n[01:16.00]多一次 \\n[03:23.00]\\n[02:54.00]\\n[01:18.00]不息自强 \\n[03:26.00]\\n[02:57.00]\\n[01:21.00]没有泪光风里劲闯 \\n[03:30.00]\\n[03:01.00]\\n[01:25.00] 重植根于小岛岸 \\n[03:34.00]\\n[03:05.00]\\n[01:29.00] 如天可变风可转 \\n[03:37.00]\\n[03:08.00]\\n[01:32.00]不息自强 \\n[03:40.00]\\n[01:35.00] 这方向 \\n[01:50.00]无奈静听不舍心声 \\n[01:58.00]和我偏偏正呼应 \\n[02:05.00]前方或会一生奔波 \\n[02:12.00]无悔这一生经过 \\n[02:21.00]纵有冷风飘过 \\n[02:25.00]将心绪再痛逼 \\n[02:28.00]紧守不变 \\n[02:34.00]无意对一切话别 \\n[02:37.00]无意再远走他方'
        },
        {
          id: 5,
          name: '7 years',
          artist: 'Lukas',
          url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_48912894&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
          cover: 'http://star.kuwo.cn/star/starheads/180/97/29/1971050202.jpg',
          lrc:
            "[00:00.14]7 Years - Lukas Graham \\n[00:01.08] \\n[00:20.50]Once I was seven years old my momma told me \\n[00:25.04]Go make yourself some friends or you'll be lonely \\n[00:28.43]Once I was seven years old \\n[00:31.29] \\n[00:36.80]It was a big big world but we thought we were bigger \\n[00:41.02]Pushing each other to the limits we were learning quicker \\n[00:45.06]By eleven smoking herb and drinking burning liquor \\n[00:49.01]Never rich so we were out to make that steady figure \\n[00:52.48]Once I was eleven years old my daddy told me \\n[00:57.02]Go get yourself a wife or you'll be lonely \\n[01:00.47]Once I was eleven years old \\n[01:02.93] \\n[01:08.91]I always had that dream like my daddy before me \\n[01:12.73]So I started writing songs I started writing stories \\n[01:16.85]Something about the glory just always seemed to bore me \\n[01:20.64]Cause only those I really love will ever really know me \\n[01:24.61]Once I was 20 years old my story got told \\n[01:29.27]Before the morning sun when life was lonely \\n[01:32.48]Once I was 20 years old \\n[01:35.19] \\n[01:35.97]Lukas Graham \\n[01:40.12] \\n[01:40.87]I only see my goals I don't believe in failure \\n[01:44.89]Cause I know the smallest voices they can make it major \\n[01:48.73]I got my boys with me at least those in favor \\n[01:52.81]And if we don't meet before I leave I hope I'll see you later \\n[01:56.51]Once I was 20 years old my story got told \\n[02:00.82]I was writing about everything I saw before me \\n[02:04.44]Once I was 20 years old \\n[02:07.49] \\n[02:12.52]Soon we'll be 30 years old our songs have been sold \\n[02:16.81]We've traveled around the world and we're still rolling \\n[02:20.48]Soon we'll be 30 years old \\n[02:23.22] \\n[02:28.76]I'm still learning about life \\n[02:30.72]My woman brought children for me \\n[02:32.68]So I can sing them all my songs \\n[02:34.62]And I can tell them stories \\n[02:36.72]Most of my boys are with me \\n[02:38.46]Some are still out seeking glory \\n[02:40.71]And some I had to leave behind \\n[02:42.78]My brother I'm still sorry \\n[02:44.52]Soon I'll be 60 years old my daddy got 61 \\n[02:48.93]Remember life and then your life becomes a better one \\n[02:52.71]I made the man so happy when I wrote a letter once \\n[02:56.74]I hope my children come and visit once or twice a month \\n[03:00.37]Soon I'll be 60 years old will I think the world is cold \\n[03:04.70]Or will I have a lot of children who can warm me \\n[03:08.35]Soon I'll be 60 years old \\n[03:11.44] \\n[03:16.52]Soon I'll be 60 years old will I think the world is cold \\n[03:20.80]Or will I have a lot of children who can warm me \\n[03:24.45]Soon I'll be 60 years old \\n[03:27.76] \\n[03:32.43]Once I was seven years old my momma told me \\n[03:36.88]Go make yourself some friends or you'll be lonely \\n[03:40.47]Once I was seven years old \\n[03:43.35] \\n[03:48.40]Once I was seven years old"
        }
      ]
    }
  },
  async created() {
    // await this.getMusicList()
  },
  methods: {
    // async getMusicList() {
    //   await musicApi.getByPage(this.page).then(res => {
    //     this.audio = res.data
    //   })
    // }
  }
}
</script>

<style></style>
