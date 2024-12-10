document.getElementById('testForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Получение ответов
    let q1 = document.getElementById('q1').value.toLowerCase();
    let q2 = document.getElementById('q2').value.toLowerCase();
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');
    let q6 = document.querySelector('input[name="q6"]:checked');

    // Подсчет правильных ответов
    let correctAnswers = 0;
    if (q1 === '/') correctAnswers++;
    if (q2 === 'rm -rf') correctAnswers++;
    if (q3 && q3.value === 'ls') correctAnswers++;
    if (q4 && q4.value === '/etc/network/interfaces') correctAnswers++;
    if (q5 && q5.value === 'apt-get install') correctAnswers++;
    if (q6 && q6.value === 'reboot') correctAnswers++;

    // Показ результатов
    document.getElementById('results').innerHTML = `
        <p>Имя: ${document.getElementById('name').value}</p>
        <p>Дата рождения: ${document.getElementById('dob').value}</p>
        <p>Пол: ${document.querySelector('input[name="gender"]:checked').value}</p>
        <p>Вы ответили на ${correctAnswers} из 6 вопросов верно.</p>
    `;

    // Переход на третий слайд
    document.getElementById('slide2').style.display = 'none';
    document.getElementById('slide3').style.display = 'block';
});

// Обработчик кнопки "Вернуться" на втором слайде
document.getElementById('backToSlide1').addEventListener('click', function() {
    document.getElementById('slide2').style.display = 'none';
    document.getElementById('slide1').style.display = 'block';
});

// Обработчик кнопки "Повторить" на третьем слайде
document.getElementById('retry').addEventListener('click', function() {
    document.getElementById('slide3').style.display = 'none';
    document.getElementById('slide1').style.display = 'block';
    
    // Сброс формы
    document.getElementById('authForm').reset();
    document.getElementById('testForm').reset();
    document.getElementById('results').innerHTML = '';
 
    // Сброс ошибок
    document.getElementById('nameError').textContent = '';
    document.getElementById('dobError').textContent = '';
    document.getElementById('genderError').textContent = '';
});








