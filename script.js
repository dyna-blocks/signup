// Initialize users data (in a real application, you would use a server/database)
let users = JSON.parse(localStorage.getItem('users')) || [];

// Sign up functionality
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    if (users.find(user => user.username === username)) {
        alert('Username already exists!');
        return;
    }

    // Generate random profile picture
    const randomPFP = `https://dyna-blocks.github.io/website/images/Figures/Figure${Math.floor(Math.random() * 8) + 1}.png`;

    users.push({ username, password, profileImage: randomPFP });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created! You can now log in.');
    window.location.href = 'login.html';
});

// Login functionality
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials');
    }
});

// Display logged-in user info
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (currentUser) {
    document.getElementById('userNameDisplay')?.textContent = currentUser.username;
    document.getElementById('profileLink')?.addEventListener('click', function() {
        window.location.href = 'profile.html';
    });
}

// Load profile page
if (document.getElementById('profileUsername')) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        document.getElementById('profileUsername').textContent = currentUser.username;
        document.getElementById('profileImage').src = currentUser.profileImage;
    }
}
