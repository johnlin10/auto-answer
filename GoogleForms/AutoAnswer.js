/**
 * 用途：快速隨機作答
 * 使用範圍：Google 表單（試題）
 * 使用方法：複製整段程式，在控制台底部輸入框貼上，Enter 後開始運行
 */
/**
 * 此程式只會運行一次，如要重新隨機作答，再進行一次以上的「使用方法」
 */
function AutoAnswer() {
  // 找到每題的選項區塊
  const questions = Array.from(
    document.querySelectorAll('form > div > div > div > div')
  ).filter(
    (td) =>
      td.querySelector(
        'div > div > div > div > div > div > span > div > div > label'
      ) !== null
  )

  questions.forEach((optionGroup) => {
    // 每題中的所有選項
    const option = optionGroup.querySelectorAll(
      'div > div > div > div > div > div > span > div > div > label'
    )

    // 如果存在選項則隨機選擇一個
    if (option.length > 0) {
      const randomIndex = Math.floor(Math.random() * option.length)
      const selectedOption = option[randomIndex]

      // 模擬點擊選項
      selectedOption.click()
    }
  })
}

AutoAnswer()
