const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const clearBtn = document.getElementById("clearBtn");

let total = 0;
let completed = 0;

addBtn.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") {
    alert("Please enter a todo!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const actions = document.createElement("div");
  actions.className = "todo-actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";

  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
    if (li.classList.contains("completed")) {
      completed++;
    } else {
      completed--;
    }
    completedCount.textContent = completed;
  });

  deleteBtn.addEventListener("click", () => {
    if (li.classList.contains("completed")) {
      completed--;
      completedCount.textContent = completed;
    }
    total--;
    totalCount.textContent = total;
    li.remove();
  });

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(actions);
  list.appendChild(li);

  total++;
  totalCount.textContent = total;
  input.value = "";
});

clearBtn.addEventListener("click", () => {
  list.innerHTML = "";
  total = 0;
  completed = 0;
  totalCount.textContent = 0;
  completedCount.textContent = 0;
});
/* Motivation Quotes */
const quotes = [
  "I have a dream, to build things that matter.",
  "Small steps today, unstoppable momentum tomorrow.",
  "Code. Break. Learn. Repeat.",
  "Discipline beats motivation when motivation fades.",
  "One line of code closer to the future."
];


const quoteEl = document.getElementById("quote");
let quoteIndex = 0;

setInterval(() => {
  quoteEl.style.opacity = 0;

  setTimeout(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteEl.textContent = `"${quotes[quoteIndex]}"`;
    quoteEl.style.opacity = 0.85;
  }, 500);

}, 5000);
