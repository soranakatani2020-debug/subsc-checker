// localStorage に使うキー名
const STORAGE_KEY = "subscriptions";

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

  // 削除ボタンのイベント登録
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = Number(e.target.dataset.index);
      deleteSubscription(index);
    });
  });
}

// 追加ボタンのイベント
document.getElementById("addButton").addEventListener("click", addSubscription);

// 初期化
init();
