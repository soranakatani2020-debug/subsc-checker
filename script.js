// localStorage に使うキー名
const STORAGE_KEY = "subscriptions";
const LIMIT_KEY = "yearlyLimit";

// サブスク一覧
let subscriptions = [];

/**
 * 初期化処理
 */
function init() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    subscriptions = JSON.parse(saved);
  }

  const savedLimit = localStorage.getItem(LIMIT_KEY);
  if (savedLimit) {
    document.getElementById("limitInput").value = savedLimit;
  }

  render();
}

/**
 * サブスク追加
 */
function addSubscription() {
  const nameInput = document.getElementById("nameInput");
  const priceInput = document.getElementById("priceInput");

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  if (!name || price <= 0) return;

  subscriptions.push({ name, price });

  save();
  render();

  nameInput.value = "";
  priceInput.value = "";
}

/**
 * サブスク削除
 */
function deleteSubscription(index) {
  subscriptions.splice(index, 1);
  save();
  render();
}

/**
 * 保存処理
 */
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(subscriptions));
}

/**
 * 画面描画
 */
function render() {
  const list = document.getElementById("list");
  const totalEl = document.getElementById("total");
  const yearlyEl = document.getElementById("yearlyTotal");
  const warningEl = document.getElementById("warning");
  const limitInput = document.getElementById("limitInput");

  list.innerHTML = "";

  let monthlyTotal = 0;

  subscriptions.forEach((sub, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${sub.name}</span>
      <span>
        ¥${sub.price.toLocaleString()}
        <button class="delete-btn" data-index="${index}">×</button>
      </span>
    `;

    list.appendChild(li);
    monthlyTotal += sub.price;
  });

  const yearlyTotal = monthlyTotal * 12;

  totalEl.textContent = monthlyTotal.toLocaleString();
  yearlyEl.textContent = yearlyTotal.toLocaleString();

  // 警告判定
  const limit = Number(limitInput.value);
  if (limit > 0 && yearlyTotal > limit) {
    warningEl.style.display = "block";
    yearlyEl.classList.add("over-limit");
  } else {
    warningEl.style.display = "none";
    yearlyEl.classList.remove("over-limit");
  }

  // 削除ボタン
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = Number(e.target.dataset.index);
      deleteSubscription(index);
    });
  });
}

// イベント登録
document.getElementById("addButton").addEventListener("click", addSubscription);

document.getElementById("limitInput").addEventListener("input", (e) => {
  localStorage.setItem(LIMIT_KEY, e.target.value);
  render();
});

// 初期化
init();
