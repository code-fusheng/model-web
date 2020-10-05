/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}

var EventUtil = {
  addHandler: function(element, type, handler) {
    if (element.addEventListener) { element.addEventListener(type, handler, false) } else if (element.attachEvent) { element.attachEvent('on' + type, handler) } else { element['on' + type] = handler }
  },
  removeHandler: function(element, type, handler) {
    if (element.removeEventListener) { element.removeEventListener(type, handler, false) } else if (element.detachEvent) { element.detachEvent('on' + type, handler) } else { element['on' + type] = handler }
  },
  /**
   * 监听触摸的方向
   * @param target            要绑定监听的目标元素
   * @param isPreventDefault  是否屏蔽掉触摸滑动的默认行为（例如页面的上下滚动，缩放等）
   * @param upCallback        向上滑动的监听回调（若不关心，可以不传，或传false）
   * @param rightCallback     向右滑动的监听回调（若不关心，可以不传，或传false）
   * @param downCallback      向下滑动的监听回调（若不关心，可以不传，或传false）
   * @param leftCallback      向左滑动的监听回调（若不关心，可以不传，或传false）
   */
  listenTouchDirection: function(target, isPreventDefault, upCallback, rightCallback, downCallback, leftCallback) {
    this.addHandler(target, 'touchstart', handleTouchEvent)
    this.addHandler(target, 'touchend', handleTouchEvent)
    this.addHandler(target, 'touchmove', handleTouchEvent)
    var startX
    var startY
    function handleTouchEvent(event) {
      switch (event.type) {
        case 'touchstart':
          startX = event.touches[0].pageX
          startY = event.touches[0].pageY
          break
        case 'touchend':
          var spanX = event.changedTouches[0].pageX - startX
          var spanY = event.changedTouches[0].pageY - startY

          if (Math.abs(spanX) > Math.abs(spanY)) { // 认定为水平方向滑动
            if (spanX > 30) { // 向右
              if (rightCallback) { rightCallback() }
            } else if (spanX < -30) { // 向左
              if (leftCallback) { leftCallback() }
            }
          } else { // 认定为垂直方向滑动
            if (spanY > 30) { // 向下
              if (downCallback) { downCallback() }
            } else if (spanY < -30) { // 向上
              if (upCallback) { upCallback() }
            }
          }

          break
        case 'touchmove':
          // 阻止默认行为
          if (isPreventDefault) { event.preventDefault() }
          break
      }
    }
  }
}

EventUtil.listenTouchDirection(document, true)
