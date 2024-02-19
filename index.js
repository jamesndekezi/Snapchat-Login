
        const btnREf = document.getElementById('login-btn');

        const handleInput = () => {
            const passREf = document.getElementById('password');
            const usernameREf = document.getElementById('username');

            const passLREf = document.getElementById('password-label');
            const usernameLREf = document.getElementById('username-label');

            if (passREf.value !== '') {
                passLREf.style.top = '7px';
                passLREf.style.fontSize = '7px';
            } else {
                usernameLREf.style.top = '7px';
                usernameLREf.style.fontSize = '7px';
            }

            if (usernameREf.value !== '') {
                usernameLREf.style.top = '10px';
                usernameLREf.style.fontSize = '9px';
            } else {
                usernameLREf.style.top = '7px';
                usernameLREf.style.fontSize = '7px';
            }

            if (passREf.value !== '' && usernameREf.value !== '') {
                btnREf.style.background = 'yellow';
                btnREf.style.color = 'black';
            } else{
                btnREf.style.background = '#BBBBBB';
                btnREf.style.color = 'white';
            }
        }