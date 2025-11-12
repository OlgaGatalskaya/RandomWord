const btn = document.querySelector("#showWord");
const posSelect = document.querySelector("#filter");
const wordOutput = document.querySelector("#word");

let allWords = [];

const loadWords = async () => {
  try {
    const res = await fetch("https://c00dc7b81f01c8c5.mokky.dev/words");
    allWords = await res.json();
  } catch (e) {
    wordOutput.textContent = "Ошибка при загрузке данных";
  }
};

posSelect.addEventListener("change", () => {
  wordOutput.textContent = "";
});

btn.addEventListener("click", () => {
  if (!allWords.length) {
    wordOutput.textContent = "Данные еще не загружены";
    return;
  }

  const pos = posSelect.value;
  const filter = allWords.filter((word) => word.pos === pos);

  const randomIndex = Math.floor(Math.random() * filter.length);

  wordOutput.textContent = filter[randomIndex].word;
});

loadWords();
