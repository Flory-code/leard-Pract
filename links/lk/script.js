document.addEventListener('DOMContentLoaded', () => {
    const profileLogin = document.getElementById('profile-login');
    const profileDob = document.getElementById('profile-dob'); // Элемент для отображения даты рождения
    const profileGender = document.getElementById('profile-gender'); // Элемент для отображения пола
    const profileTestResult = document.getElementById('profile-test-result');
    const logoutBtnProfile = document.getElementById('logout-btn-profile');

    const storedLogin = localStorage.getItem('userLogin');
    const storedDob = localStorage.getItem('userDob'); // Получаем дату рождения
    const storedGender = localStorage.getItem('userGender'); // Получаем пол
    const storedTestResult = localStorage.getItem('testResult');

    // Отображение данных
    if (profileLogin) {
        profileLogin.textContent = storedLogin || 'Гость'; // Если логин не найден, показываем 'Гость'
    }

    if (profileDob) {
        profileDob.textContent = storedDob || 'Не указано'; // Если дата рождения не найдена
    }

    if (profileGender) {
        profileGender.textContent = storedGender || 'Не указано'; // Если пол не найден
    }

    if (profileTestResult) {
        profileTestResult.textContent = storedTestResult || 'Не выполнено'; // Если результат не найден
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
});