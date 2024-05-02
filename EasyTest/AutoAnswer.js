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

    // 下一題是第二個按鈕
    buttonSection.click()
  }, 100)
}, 200)
