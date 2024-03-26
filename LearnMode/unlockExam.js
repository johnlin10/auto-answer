/**
 * 用途：解除作答時段限制（老師可能限制某一時間段才能進入測試）
 * 使用範圍：進入 learnmode.net 課程中的章節選單介面後，看到 “測驗已結束” 就可以使用運行程式來解除
 * 使用方法：複製整段程式，在瀏覽器控制台底部輸入框中貼上，Enter 解除限制
 */
// 尋找按鈕
const unlockTest = document.querySelector(
  'section#Test > div > div > div > button'
)
if (unlockTest) {
  // 解除按鈕禁用
  unlockTest.disabled = false
}
