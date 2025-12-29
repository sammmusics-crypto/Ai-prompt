const data = [
  "Instagram Reel Viral Prompt",
  "ChatGPT Business Idea Prompt",
  "AI Image Generator Prompt",
  "YouTube Shorts Script Prompt",
  "Gemini AI Prompt Example"
];

const box = document.getElementById("prompts");
const search = document.getElementById("search");

function show(list) {
  box.innerHTML = "";
  list.forEach(p => {
    box.innerHTML += `<div class="card">${p}</div>`;
  });
}

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  show(data.filter(p => p.toLowerCase().includes(value)));
});

show(data);
