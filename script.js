function checkEmailMatch() {
    const emailInput = document.getElementById('email');
    const confEmailInput = document.getElementById('confEmail');
  
    if (emailInput.value === confEmailInput.value) {
      console.log('Email inputs match');
    } else {
      console.log('Email inputs do not match');
      window.alert("Email addresses do not match.");
    }
  }

  // Call the function when the second email input loses focus
document.getElementById('confEmail').addEventListener('blur', checkEmailMatch);