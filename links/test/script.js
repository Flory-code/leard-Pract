document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Вызов функции preventDefault

    // Получение ответов
    let q1 = document.getElementById('q1').value.toLowerCase();
    let q2 = document.getElementById('q2').value.toLowerCase();
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.getElementById('q5').value.toLowerCase();

    // Подсчет правильных ответов
    let correctAnswers = 0;
    if (q1 === 'wraith') correctAnswers++;
    if (q2 === 'medkit') correctAnswers++;
    if (q3 && q3.value === 'support') correctAnswers++;
    if (q4 && q4.value === 'scan') correctAnswers++;
    if (q5 === 'sniper') correctAnswers++;

    // Показ результатов
    document.getElementById('resultContent').innerHTML = `
        <h2>Результаты:</h2>
        <p>Вы ответили на ${correctAnswers} из 5 вопросов верно.</p>
    `;
});

// Обработчик кнопки "Повторить"
document.getElementById('retry').addEventListener('click', function() {
    // Сброс формы
    document.getElementById('quizForm').reset();
    
    // Сброс результатов на начальное значение
    document.getElementById('resultContent').innerHTML = `
        <h2>Результаты:</h2>
        <p>Вы ответили на 0 из 5 вопросов верно.</p>
    `;
});
