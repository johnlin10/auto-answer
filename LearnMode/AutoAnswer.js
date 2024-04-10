/**
 * 用途：快速隨機作答
 * 使用範圍：learnmode.net 課程中的章節試題
 * 使用方法：複製整段程式，點選題目到第一題，在控制台底部輸入框貼上，Enter 後開始運行
 */
/**
 * 如要停止此程式，請運行以下程式：
 * clearInterval(AutoAnswer);
 */
var AutoAnswer = setInterval(function () {
  // 找到選項列表內的選項
  const elements = document.querySelectorAll(
    'ul[data-v-204f78ad] > span > label'
  )

  // 隨機選擇選項
  const randomIndex = Math.floor(Math.random() * elements.length)
  const selectedElement = elements[randomIndex]

  // 點擊隨機選項
  selectedElement.click()

  // 等待一小段時間，點擊下一題
  setTimeout(() => {
    const buttonSection = document.querySelector('div.button-section')
    const buttons = buttonSection.querySelectorAll('button')

    // 下一題是第二個按鈕，最後一題時會變成繳交
    buttons[1].click()
  }, 100)
}, 200)
