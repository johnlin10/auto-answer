/**
 * 用途：快速隨機作答
 * 使用範圍：exam.chwa.com.tw 試題
 * 使用方法：複製整段程式，在控制台底部輸入框貼上，Enter 後開始運行
 */
/**
 * 如要停止此程式，請運行以下程式：
 * clearInterval(AutoAnswer);
 */
// 暫停所有計時器（用於讓交卷按鈕保持啟用）
var AutoAnswer = setInterval(function () {
  // 保持啟用交卷按鈕（用於可隨時交卷）
  const sendAnsBtn = document.querySelector('button#sendAns')
  const sendAnsBtn2 = document.querySelector('button#sendAns2')
  if (sendAnsBtn) sendAnsBtn.style.display = 'block'
  if (sendAnsBtn2) sendAnsBtn2.style.display = 'none'

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

    // 下一題是第二個按鈕
    nextButton.click()

    // 如可重考，可使用以下 if 程式
    // if (nextButton.classList.contains('ng-hide')) {
    //   // 如果包含 'ng-hide'，點擊ㄋ sendAnsBtn
    //   setTimeout(() => {
    //     // 提交答案
    //     sendAnsBtn.click()
    //     setTimeout(() => {
    //       // 重考
    //       buttonSection[2].click()
    //     }, 100)
    //   }, 100)
    // }
  }, 100)
}, 200) // 如果運行時有漏題，建議提高運行延遲，預設為 200
