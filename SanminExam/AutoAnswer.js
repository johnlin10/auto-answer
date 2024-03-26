/**
 * 用途：快速隨機作答
 * 使用範圍：exam.sanmin.com.tw 試題（目前不包含填充輸入題）
 * 使用方法：複製整段程式，在控制台底部輸入框貼上，Enter 後開始運行
 */
/**
 * 此程式只會運行一次，如要重新隨機作答，再進行一次以上的「使用方法」
 */
function AutoAnswer() {
  // 列點式選擇題
  // 找到每題的選項區塊，只選擇包含 input[type="radio"] 的 span
  const listQuestions = document.querySelectorAll(
    'tr > td > span:has(input[type="radio"])' // 將 tr 的 `.cssPrint` 選擇器去除（部分試卷內，這部分沒有這個選擇器），而這個結構已經足以精確選擇到題目選項
  )

  listQuestions.forEach((span) => {
    // 每題中的所有選項
    const inputs = span.querySelectorAll('input')

    // 如果存在選項則隨機選擇一個
    if (inputs.length > 0) {
      const randomIndex = Math.floor(Math.random() * inputs.length)
      const selectedInput = inputs[randomIndex]
      console.log(selectedInput)

      // 模擬點擊選項
      selectedInput.click()
    }
  })

  // 選項式選擇題
  // 找到試題群組
  const selectQuestions = document.querySelectorAll('table[useranswer]')

  selectQuestions.forEach((item) => {
    // 找到試題群組中的試題
    const selectQuestions = item.querySelectorAll(
      'tbody > tr > td > table > tbody > tr > td > input'
    )

    selectQuestions.forEach((question) => {
      question.click()

      // 找到彈出的選項選擇器
      const answerPicker = document.querySelector('span#AZPicker')
      // 找到選項選擇器的所有選項
      const answerPickerSelections = answerPicker.querySelectorAll('span')

      // 隨機選擇選項
      const randomIndex = Math.floor(Math.random() * 4) // 通常只有四個選項（ABCD）。如需要增加涵蓋的選項，可以更改數字，或使用 `answerPickerSelections.length` 來包含所有選項
      answerPickerSelections[randomIndex].click()
    })
  })
}

AutoAnswer()
