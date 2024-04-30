/**
 * 用途：快速隨機作答
 * 使用範圍：smartreading.net DACC 測驗
 * 使用方法：複製整段程式，在控制台底部輸入框貼上，Enter 後開始運行
 */
/**
 * 如要停止此程式，請運行以下程式：
 * clearInterval(AutoAnswer);
 */
var AutoAnswer = setInterval(function () {
  // 題目列表
  const questionGroup = document.querySelectorAll('div.div_text_item')

  // 循環題目列表，並隨機選擇選項
  questionGroup.forEach((optionGroup) => {
    // 每題中的所有選項
    const options = optionGroup.querySelectorAll(
      'div > div.div_text_option > div.radio > input'
    )

    // 如果存在選項則隨機選擇一個
    if (options.length > 0) {
      const randomIndex = Math.floor(Math.random() * options.length)
      const selectedOption = option[randomIndex]

      // 模擬點擊選項
      selectedOption.click()
    }
  })

  // 等待一小段時間，點擊下一題
  setTimeout(() => {
    const nextButton = document.querySelector('button')

    // 下一題是第二個按鈕
    nextButton.click()
  }, 700)
}, 1000)
