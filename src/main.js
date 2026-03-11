import axios from "axios";

const quoteText = document.querySelector("#quote");
const button = document.querySelector("#newQuote");

// Функция для получения случайного совета
async function getQuote() {
    try {
        const response = await axios.get("https://api.adviceslip.com/advice");
        quoteText.textContent = response.data.slip.advice;
    } catch (error) {
        console.error(error);
        quoteText.textContent = "Failed to load advice";
    }
}

// Обработчик кнопки
button.addEventListener("click", getQuote);

// Загрузка первой цитаты сразу при старте
getQuote();