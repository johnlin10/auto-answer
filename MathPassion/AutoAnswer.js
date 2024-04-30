/**
 * 用途：快速隨機作答
 * 使用範圍：mcad.dtmctest.net 數學 Passion 測驗
 * 使用方法：『必須使用瀏覽器擴展程式來運行此程式』
 */
/**
 * 如要停止此程式，請運行以下程式：
 * clearInterval(AutoAnswer);
 */
var AutoAnswer = setInterval(function () {
  // 選項題目
  const radioInput = document.querySelectorAll('div.radioDiv > div > input')
  // 隨機選擇選項
  const randomIndex = Math.floor(Math.random() * radioInput.length)
  const selectedElement = radioInput[randomIndex]
  // 點擊隨機選項
  if (selectedElement) {
    selectedElement.click()
  }

  // 輸入框題目
  const textInput = document.querySelector('input[type="text"]')
  if (textInput) {
    textInput.value = '0' // 輸入內容
  }

  // 等待一小段時間，點擊下一題
  setTimeout(() => {
    const buttonSection = document.querySelector('a#btnNext')

    // 下一題是第二個按鈕
    buttonSection.click()
  }, 700)
}, 1000)
