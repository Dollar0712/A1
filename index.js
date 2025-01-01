/**
 * Reset viewport position
 */
    window.onload = () => {
        window.scrollTo(0, 0);
    };
    window.addEventListener('scroll', () => {
        window.scrollTo(0, 0);
    });


/**
 * Password check
 */
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const confirmPasswordIcon = document.getElementById('confirm-password-icon');

    // Check if confirm password matches password
    confirmPasswordInput.addEventListener('input', () => {
        if (confirmPasswordInput.value === '') {
            confirmPasswordIcon.style = '0'; // hide icon
        } else if (confirmPasswordInput.value === passwordInput.value) {
            confirmPasswordInput.setCustomValidity("");
            
        } else {
            confirmPasswordInput.setCustomValidity("Invalid field.");
        }
    });

    // recheck confirm password while password changed
    passwordInput.addEventListener('input', () => {
        if (confirmPasswordInput.value !== '') {
            confirmPasswordInput.dispatchEvent(new Event('input'));
        }
    });

/**
 * Cap max date of birth not exceeding to future
 */
    const birthdayInput = document.getElementById('birthday-input');

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const maxDate = `${yyyy}-${mm}-${dd}`;

    birthdayInput.setAttribute('max', maxDate);

/**
 * video volumeSlider
 */
    const video = document.getElementById('video');
    const volumeSlider = document.getElementById('volumeSlider');
    
    // Initialize Volume
    video.volume = 0;
    
    // Adjusting the volume
    volumeSlider.addEventListener('input', (e) => {
        video.volume = e.target.value;
    });