document.addEventListener('DOMContentLoaded', () => {
    const profileLogin = document.getElementById('profile-login');
    const profileTestResult = document.getElementById('profile-test-result');
    const logoutBtnProfile = document.getElementById('logout-btn-profile');
    const quizForm = document.getElementById('quizForm');
    const resultContent = document.getElementById('resultContent');
    const retryBtn = document.getElementById('retry');

    const storedLogin = localStorage.getItem('userLogin');
    const storedTestResult = localStorage.getItem('testResult');

    if (profileLogin) {
        profileLogin.textContent = storedLogin;
    }

    if (profileTestResult) {
        profileTestResult.textContent = storedTestResult;
    }

    if (logoutBtnProfile) {
        logoutBtnProfile.addEventListener('click', () => {
            localStorage.removeItem('userLogin');
            localStorage.removeItem('userDob');
            localStorage.removeItem('userGender');
            localStorage.removeItem('testResult');
            window.location.href = 'index.html';
        });
    }

    // Обработчик отправки формы теста
    if (quizForm) {
        quizForm.addEventListener('submit', function(event) {
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
            resultContent.innerHTML = `
                <h2>Результаты:</h2>
                <p>Вы ответили на ${correctAnswers} из 5 вопросов верно.</p>
            `;

            // Сохранение результата в localStorage
            localStorage.setItem('testResult', `Вы ответили на ${correctAnswers} из 5 вопросов верно.`);
        });
    }

    // Обработчик кнопки "Повторить"
    if (retryBtn) {
        retryBtn.addEventListener('click', function() {
            // Сброс формы
            quizForm.reset();
            
            // Сброс результатов на начальное значение
            resultContent.innerHTML = `
                <h2>Результаты:</h2>
                <p>Вы ответили на 0 из 5 вопросов верно.</p>
            `;
        });
    }
});
