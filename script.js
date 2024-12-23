document.getElementById('authForm').addEventListener('submit', function(event) {
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
        // Если ошибок нет, переходим на другую страницу
        event.preventDefault(); // Отменяем отправку формы
        window.location.href = 'links/description/description.html'; // Переход на нужную страницу
    }
});
