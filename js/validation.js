
  const form = document.querySelector('form');
  const emailInput = document.getElementById('email');

  // Create error message element
  const emailError = document.createElement('p');
  emailError.style.color = 'red';
  emailError.style.fontSize = '12px';
  emailError.style.marginTop = '4px';
  emailError.textContent = '';
  emailInput.parentNode.insertBefore(emailError, emailInput.nextSibling);

  // Validate on input
  emailInput.addEventListener('input', () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value === '') {
      emailInput.style.borderColor = '';
      emailError.textContent = '';
    } else if (!emailPattern.test(emailInput.value)) {
      emailInput.style.borderColor = 'red';
      emailError.textContent = 'Please enter a valid email e.g. name@example.com';
    } else {
      emailInput.style.borderColor = '#3aaa20';
      emailError.textContent = '';
    }
  });

  // Validate on submit
  form.addEventListener('submit', (e) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
      e.preventDefault();
      emailInput.style.borderColor = 'red';
      emailError.textContent = 'Please enter a valid email e.g. name@example.com';
      emailInput.focus();
    }
  });