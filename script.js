const fortunes = [
  "大吉",
  "中吉",
  "小吉",
  "吉",
  "末吉",
  "凶",
  "謎吉"
];

const messages = [
  "勢いで始めたことが、意外と形になる日。",
  "思いついたことは、忘れる前にメモすると吉。",
  "今日はセーブを忘れないようにしましょう。",
  "一度休憩してから再挑戦すると、うまくいきます。",
  "謎の自信が湧いてきます。根拠はありません。"
];

const luckyItems = [
  "長すぎるLANケーブル",
  "焼きマシュマロ",
  "USB Type-Cケーブル",
  "猫の画像",
  "ネキ"
];

const form = document.getElementById("fortune-form");
const result = document.getElementById("result");

function createHash(text) {
  let hash = 0;

  for (const character of text) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  }

  return hash;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const today = new Date().toLocaleDateString("ja-JP");
  const hash = createHash(name + today);

  document.getElementById("result-name").textContent =
    `${name}さんの今日の運勢`;

  document.getElementById("fortune").textContent =
    fortunes[hash % fortunes.length];

  document.getElementById("message").textContent =
    messages[hash % messages.length];

  document.getElementById("lucky-item").textContent =
    luckyItems[hash % luckyItems.length];

  result.classList.add("show");
});