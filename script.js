document.addEventListener('DOMContentLoaded', () => {
    // Первая часть кода
    const profileLogin = document.getElementById('profile-login');
    const profileTestResult = document.getElementById('profile-test-result');
    const logoutBtnProfile = document.getElementById('logout-btn-profile');
    const quizForm = document.getElementById('quizForm');
    const resultContent = document.getElementById('resultContent');
    const retryBtn = document.getElementById('retry');
    const authForm = document.getElementById('authForm');
    const profileDob = document.getElementById('profile-dob'); // Элемент для отображения даты рождения
    const profileGender = document.getElementById('profile-gender'); // Элемент для отображения пола

    const storedLogin = localStorage.getItem('userLogin');
    const storedDob = localStorage.getItem('userDob'); // Получаем дату рождения
    const storedGender = localStorage.getItem('userGender'); // Получаем пол
    const storedTestResult = localStorage.getItem('testResult');

    if (profileLogin) {
        profileLogin.textContent = storedLogin;
    }

    if (profileDob) {
        profileDob.textContent = storedDob; // Отображаем дату рождения
    }

    if (profileGender) {
        profileGender.textContent = storedGender; // Отображаем пол
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

    // Обработчик отправки формы аутентификации
    if (authForm) {
        authForm.addEventListener('submit', function(event) {
            // Сброс ошибок
            document.getElementById('login-error').textContent = '';
            document.getElementById('dob-error').textContent = '';
            document.getElementById('gender-error').textContent = '';

            // Получение значений
            let login = document.getElementById('login').value;
            let dob = document.getElementById('dob').value;
            let gender = document.querySelector('input[name="gender"]:checked');

            // Массив для ошибок
            let errors = [];

            // Валидация логина
            if (!login.match(/^[а-яА-ЯёЁ0-9]{4,10}$/)) {
                errors.push('Логин должен состоять из символов русского алфавита и цифр, иметь количество символов от 4 до 10.');
                document.getElementById('login-error').textContent = errors[errors.length - 1]; // Выводим ошибку под логином
            }

            // Валидация даты рождения
            if (!dob) {
                errors.push('Дата рождения не может быть пустой.');
                document.getElementById('dob-error').textContent = errors[errors.length - 1]; // Выводим ошибку под датой рождения
            } else {
                let birthDate = new Date(dob);
                let today = new Date();
                if (birthDate > today) {
                    errors.push('Дата рождения должна быть не позже текущей даты.');
                    document.getElementById('dob-error').textContent = errors[errors.length - 1]; // Выводим ошибку под датой рождения
                }
            }

            // Валидация пола
            if (!gender) {
                errors.push('Выберите пол.');
                document.getElementById('gender-error').textContent = errors[errors.length - 1]; // Выводим ошибку под полом
            }

            // Если есть ошибки, отменяем отправку формы
            if (errors.length > 0) {
                event.preventDefault(); // Отменяем отправку формы
            } else {
                // Если ошибок нет, сохраняем данные в localStorage и переходим на другую страницу
                localStorage.setItem('userLogin', login);
                localStorage.setItem('userDob', dob);
                localStorage.setItem('userGender', gender.value);
                
                event.preventDefault(); // Отменяем отправку формы
                window.location.href = 'links/description/description.html'; // Переход на нужную страницу
            }
        });
    }
});
