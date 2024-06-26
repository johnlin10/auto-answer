/**
 * 用途：快速隨機作答
 * 使用範圍：mosme.net 試題
 * 使用方法：複製整段程式，在控制台底部輸入框貼上，Enter 後開始運行
 */
/**
 * 此程式只會運行一次，如要重新隨機作答，再進行一次以上的「使用方法」
 */
function AutoAnswer() {
  // 清除每題的選項
  const optionsRefresh = document.querySelectorAll('button.refresh')
  optionsRefresh.forEach((optionRefresh) => {
    optionRefresh.click()
  })

  // 找到每題的選項區塊
  const questions = document.querySelectorAll('div.options')
  questions.forEach((optionGroup) => {
    // 每題中的所有選項
    const option = optionGroup.querySelectorAll('div.option')

    // 如果存在選項則隨機選擇一個
    if (option.length > 0) {
      const randomIndex = Math.floor(Math.random() * option.length)
      const selectedOption = option[randomIndex]

      // 模擬點擊選項
      selectedOption.click()
    }
  })

  // 收尾動作
  setTimeout(() => {
    // 點擊交卷
    const submitBtn = document.querySelector('div.submitexam')
    submitBtn.click()

    // 確認交卷
    setTimeout(() => {
      const confirmSubmit = document.querySelector(
        'div#FinishExamModal > div > div > div > button.btn-primary'
      )
      confirmSubmit.click()

      // 關閉報表
      setTimeout(() => {
        const closeRetruns = document.querySelector(
          'div.check-modal div.modal-footer > button#btnCloseReport'
        )
        closeRetruns.click()

        // 結束考試
        setTimeout(() => {
          const over = document.querySelector(
            'div.mainmenu-bar > div.mainmenu-submit'
          )
          over.click()
        }, 100)
      }, 100)
    }, 100)
  }, 100)
}

AutoAnswer()
