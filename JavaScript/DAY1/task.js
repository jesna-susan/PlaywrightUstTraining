function validateLogin() {
    const username = document.getElementById('username').value.toString();
    const password = document.getElementById('password').value.toString();
  
    /*
    // Username pattern: only lowercase letters, numbers, . and _
    const usernamePattern = /^[a-z0-9._]+$/;
  
    // Password pattern: at least 8 characters, one capital letter, one number
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    //if doing with regular expression then usernamePattern.test(username) inside if loop to check if it matches with the regular expression
    */

    function isValidUsername(username) {
        for (let i = 0; i < username.length; i++) {
          const char = username[i];
          if (
            !(
              (char >= 'a' && char <= 'z') ||
              (char >= '0' && char <= '9') ||
              char === '.' ||
              char === '_'  
            )
          ) {
            return false;
          }
        }
        return username.length > 0; // at least one character
    }

      
    function isValidPassword(password) {
        if (password.length < 8) return false;
        
        let hasCapital = false;
        let hasNumber = false;
        
        for (let i = 0; i < password.length; i++) {
            const char = password[i];
            if (char >= 'A' && char <= 'Z') {
                hasCapital = true;
            } else if (char >= '0' && char <= '9') {
                hasNumber = true;
            }
        }
        
        return hasCapital && hasNumber;
    }
      
  
    if (!isValidUsername(username)) {
      alert('Login failed - Invalid username! Use lowercase letters, numbers, . or _ only.')
    }
    else if (!isValidPassword(password)) {
      alert('Login failed - Invalid password! Minimum 8 chars, at least 1 capital and 1 number.')
    }
    else{
        alert('Login Success!');
    }
  
  }
  