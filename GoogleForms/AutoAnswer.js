/**
 * 用途：快速隨機作答
 * 使用範圍：Google 表單（試題），單選、複選、下拉選單、簡答、詳答
 * 使用方法：複製整段程式，在控制台底部輸入框貼上，Enter 後開始運行
 *
 * ! 此程式只會運行一次，如要重新隨機作答，再進行一次以上的「使用方法」
 */

/**
 * 主函式
 */
async function AutoAnswer() {
  await RadioQuestion()
  await CheckboxQuestion()
  await SelectQuestion()
  await TextQuestion()
  await TextAreaQuestion()
}

/**
 * 摋選出指定結構的 element
 * @param {String} filterCallback - 欲篩選的結構
 * @returns {Element} - 摋選出的 element
 */
function filterQueryFormElements(filterCallback) {
  return Array.from(
    document.querySelectorAll('form > div > div > div > div')
  ).filter((td) => td.querySelector(filterCallback) !== null)
}

/**
 * 隨機選擇 element，用於對其進行操作
 * @param {Element} elements - 欲隨機選擇的 elements
 * @returns
 */
function selectRandomElement(elements) {
  const randomIndex = Math.floor(Math.random() * elements.length)
  return elements[randomIndex]
}

/**
 * 單選題 隨機點選 選項
 */
function RadioQuestion() {
  // 篩選出全部單選題題
  const options = filterQueryFormElements(
    'div > div > div > div > div > div > span > div > div > label'
  )
  // 循環每個單選題
  options.forEach((optionGroup) => {
    // 題中的選項
    const option = optionGroup.querySelectorAll(
      'div > div > div > div > div > div > span > div > div > label'
    )
    // 隨機選擇隨機個選項
    if (option.length > 0) {
      const selectedOption = selectRandomElement(option)
      // 模擬點擊選項
      selectedOption.click()
    }
  })
}

/**
 * 複選題 隨機點選 隨機個 選項
 */
function CheckboxQuestion() {
  // 篩選出全部複選題
  const optionsGroup = filterQueryFormElements(
    'div > div > div > div > div > div[role="list"] > div'
  )
  // 循環每個複選題
  optionsGroup.forEach((option) => {
    // 題中的選項
    const options = option.querySelectorAll(
      'div > div > div > div > div > div[role="list"] > div > label'
    )
    // 隨機選擇 隨機個 選項
    if (options.length > 0) {
      // 隨機選擇幾個選項
      const numberOfOptionsToSelect =
        Math.floor(Math.random() * options.length) + 1
      // 打亂選項順序以隨機選擇
      const shuffledOptions = Array.from(options).sort(
        () => 0.5 - Math.random()
      )
      // 選擇指定數量的選項
      for (let i = 0; i < numberOfOptionsToSelect; i++) {
        const optionToSelect = shuffledOptions[i]
        // 模擬點擊選項
        optionToSelect.click()
      }
    }
  })
}

/**
 * 等待 下拉式選項 彈出
 * @param {Element} optionGroup - 下拉式選單單題 element
 * @returns {Promise}
 */
async function waitForOptions(optionGroup) {
  return new Promise((resolve, reject) => {
    const observer = new MutationObserver((mutations, obs) => {
      const options = optionGroup.querySelectorAll(
        'div > div > div > div > div[role="listbox"] > div'
      )
      if (options.length > 1) {
        obs.disconnect()
        resolve()
      }
    })
    observer.observe(optionGroup, {
      childList: true,
      subtree: true,
    })
  })
}

/**
 * 下拉式選單 隨機點選 選項
 */
async function SelectQuestion() {
  // 篩選出全部下拉式選單題
  const optionsGroups = filterQueryFormElements(
    'div > div > div > div > div[role="listbox"]'
  )

  // 循環每個下拉式選單題
  for (const optionGroup of optionsGroups) {
    // 下拉式選單按鈕
    const selection = optionGroup.querySelector(
      'div > div > div > div > div[role="listbox"] > div > div'
    )
    // 點選開啟選單
    if (selection) selection.click()
    // 等待選項列表彈出
    await waitForOptions(optionGroup)
    // 獲取所有選項卡： options[1]
    const options = optionGroup.querySelectorAll(
      'div > div > div > div > div[role="listbox"] > div'
    )
    // 隨機選擇選項
    if (options.length > 0) {
      // 過濾掉前兩個非選項 div 元素
      const option = options[1].querySelectorAll('div > div:nth-child(n+3)')
      // 隨機選擇
      const selectedOption = selectRandomElement(option)
      selectedOption.click()
    }
  }
}

function fillText(content, element) {
  element.value = content
  element.dispatchEvent(new Event('input', { bubbles: true })) // 觸發 input 事件
  element.dispatchEvent(new Event('change', { bubbles: true })) // 觸發 change 事件
}

/**
 * 簡答題 隨機點選 選項
 */
function TextQuestion() {
  // 篩選出全部簡答題
  const textInputsQuestions = filterQueryFormElements(
    'div > div > div > div > div > div > div > div > input[type="text"]'
  )
  // 循環每個簡答題
  for (const textInputsQuestion of textInputsQuestions) {
    // 獲取輸入框
    const textInput = textInputsQuestion.querySelector(
      'div > div > div > div > div > div > div > div > input[type="text"]'
    )
    // 輸入預設內容，並觸發 input 及 change 觸發更新
    if (textInput) {
      fillText(' ', textInput)
    }
  }
}

/**
 * 詳答題 隨機點選 選項
 */
function TextAreaQuestion() {
  // 篩選出全部詳答題
  const textInputsQuestions = filterQueryFormElements(
    'div > div > div > div > div > div > div > textarea'
  )
  // 循環每個詳答題
  for (const textInputsQuestion of textInputsQuestions) {
    // 獲取輸入框
    const textarea = textInputsQuestion.querySelector(
      'div > div > div > div > div > div > div > textarea'
    )
    if (textarea) {
      fillText(' ', textarea)
    }
  }
}

AutoAnswer()
