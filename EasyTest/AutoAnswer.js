/**
 * 用途：快速隨機作答
 * 使用範圍：easytest.khvs.tc.edu.tw 單字測驗系統
 * 使用方法：複製整段程式，在控制台底部輸入框貼上，Enter 後開始運行
 */
/**
 * 如要停止此程式，請運行以下程式：
 * clearInterval(AutoAnswer);
 */
var AutoAnswer = setInterval(function () {
  // 選項題目
  const radioInput = document.querySelectorAll('tr > td > input')
  // 隨機選擇選項
  const randomIndex = Math.floor(Math.random() * radioInput.length)
  const selectedElement = radioInput[randomIndex]
  // 點擊隨機選項
  if (selectedElement) {
    selectedElement.click()
  }

  // 等待一小段時間，點擊下一題
  setTimeout(() => {
    const buttonSection = document.querySelector('img#image_next')

    // 下一題
    buttonSection.click()
  }, 100)
}, 300)
