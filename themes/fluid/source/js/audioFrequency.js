/** @type {HTMLCanvasElement} */
const parentElement = document.querySelector('#post .markdown-body')
const audioElement = document.querySelector('#audio')
const audioCanvas = document.querySelector('#audioCanvas')
const audioCtx = audioCanvas.getContext('2d')

function initCnavas() {
  const parentWidth = parentElement.clientWidth
  audioCanvas.width = parentWidth
  audioCanvas.height = 300
}
initCnavas()

let isInit = false
let dataArray
let analyser

// audio 播放事件
audioElement.onplay = function () {
  if (isInit) {
    return
  }
  // 初始化
  const audioContext = new(window.AudioContext || window.webkitAudioContext)() // 音频上下文
  const source = audioContext.createMediaElementSource(audioElement) // 音频源节点
  analyser = audioContext.createAnalyser()
  source.connect(analyser) // 连接分析器
  analyser.connect(audioContext.destination) // 连接音频设备
  analyser.fftSize = 512
  dataArray = new Uint8Array(analyser.frequencyBinCount)
  isInit = true
}

function draw() {
  requestAnimationFrame(draw)
  const { width, height } = audioCanvas
  audioCtx.clearRect(0, 0, width, height)
  if (!isInit) {
    return
  }
  analyser.getByteFrequencyData(dataArray)
  const bufferLength = dataArray.length
  const barWidth = width / bufferLength * 1.4
  audioCtx.fillStyle = '#09817D'
  for (var i = 0; i < bufferLength; i++) {
    const data = dataArray[i]
    const barHeight = data / 255 * height
    const x = i * barWidth
    const y = height - barHeight
    audioCtx.fillRect(x, y, barWidth - 2, barHeight)
  }

  // audioCtx.fillStyle = 'rgb(200, 200, 200)'
  // audioCtx.fillRect(0, 0, width, height)

  // audioCtx.lineWidth = 2
  // audioCtx.strokeStyle = 'rgb(0, 0, 0)'

  // audioCtx.beginPath()

  // var sliceWidth = width * 1.0 / bufferLength
  // var x = 0

  // for (var i = 0; i < bufferLength; i++) {

  //   var v = dataArray[i] / 128.0
  //   var y = v * height / 2

  //   if (i === 0) {
  //     audioCtx.moveTo(x, y)
  //   } else {
  //     audioCtx.lineTo(x, y)
  //   }

  //   x += sliceWidth
  // }

  // audioCtx.lineTo(width, height / 2)
  // audioCtx.stroke()
}

draw()