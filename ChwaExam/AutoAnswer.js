/**
 * 用途：快速隨機作答
 * 使用範圍：exam.chwa.com.tw 試題
 * 使用方法：複製整段程式，在控制台底部輸入框貼上，Enter 後開始運行
 */
/**
 * 此程式只會運行一次，如要重新隨機作答，再進行一次以上的「使用方法」
 */
var id = window.setInterval(function () {}, 0)
while (id--) {
  window.clearInterval(id)
}

var AutoAnswer = setInterval(function () {
  const sendAnsBtn = document.querySelector('button#sendAns')
  const sendAnsBtn2 = document.querySelector('button#sendAns2')
  if (sendAnsBtn) {
    sendAnsBtn.style.display = 'block'
  }
  if (sendAnsBtn2) {
    sendAnsBtn2.style.display = 'none'
  }
  // 找到選項列表內的選項
  const elements = document.querySelectorAll(
    'div#testArea > div > div:not(.ng-hide) > div > input'
  )

  // 隨機選擇選項
  const randomIndex = Math.floor(Math.random() * elements.length)
  const selectedElement = elements[randomIndex]

  // 點擊隨機選項
  selectedElement.click()

  // 等待一小段時間，點擊下一題
  setTimeout(() => {
    const buttonSection = document.querySelectorAll(
      'div.taketest > div > div.pull-right > button.btn'
    )
    const nextButton = buttonSection[1]

    // 下一題是第二個按鈕，最後一題時會變成繳交
    nextButton.click()
  }, 100)
}, 200)
