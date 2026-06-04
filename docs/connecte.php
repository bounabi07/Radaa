<?php

$host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "radaa_db";

$conn = new mysqli($host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$message = ""; 


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    

    if (isset($_POST['register'])) {
        $username = $conn->real_escape_string(trim($_POST['username']));
        $email = $conn->real_escape_string(trim($_POST['email']));
        $password = trim($_POST['password']);
        
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        
        $check = $conn->query("SELECT id FROM users WHERE email='$email' OR username='$username'");
        if ($check->num_rows > 0) {
            $message = "<p class='error-msg'>⚠️ Username or Email already exists!</p>";
        } else {
            $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashed_password')";
            if ($conn->query($sql) === TRUE) {
                $message = "<p class='success-msg'>🎉 Account created successfully! Please login below.</p>";
            } else {
                $message = "<p class='error-msg'>❌ Error: " . $conn->error . "</p>";
            }
        }
    }
    
 
    if (isset($_POST['login'])) {
        $email = $conn->real_escape_string(trim($_POST['email']));
        $password = trim($_POST['password']);
        
        $result = $conn->query("SELECT * FROM users WHERE email='$email'");
        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            if (password_verify($password, $user['password'])) {
                
                header("Location: index.html");
                exit();
            } else {
                $message = "<p class='error-msg'>⚠️ Incorrect password!</p>";
            }
        } else {
            $message = "<p class='error-msg'>⚠️ No account found with this email!</p>";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Radaa - Secure Access</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <style>
        .success-msg { color: #2ecc71; text-align: center; font-weight: bold; margin: 10px 0; }
        .error-msg { color: #e74c3c; text-align: center; font-weight: bold; margin: 10px 0; }
        .auth-fieldset { direction: ltr !important; text-align: left !important; }
        .form-group { display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 15px; width: 100%; }
        .form-group label { display: flex; align-items: center; gap: 6px; font-weight: bold; font-size: 14px; }
        .form-group input { width: 100%; padding: 10px; box-sizing: border-box; }
        button { display: inline-flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 12px; cursor: pointer; }
    </style>
</head>
<body>
    <header>
        <div class="header-title">
            <i class="fa-solid fa-shield-halved"></i> 
            <span>welcome to Radaa</span>
        </div>
        <hr>
    </header>

    <nav class="nav-bar">

        <a href="about.html"><i class="fa-solid fa-info-circle"></i> <span>About</span></a> 
        
    </nav>

    <?php echo $message; ?>

    <div id="loginContainer">
        <fieldset class="auth-fieldset">
            <legend><i class="fa-solid fa-right-to-bracket"></i> Secure Login</legend>
            <form method="post" action="connecte.php">
                <input type="hidden" name="login" value="1">
                
                <div class="form-group">
                    <label for="email"><i class="fa-solid fa-at"></i> EMAIL:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required>
                </div>
                
                <div class="form-group">
                    <label for="password"><i class="fa-solid fa-lock"></i> PASSWORD:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required>
                </div>
                
                <button type="submit" id="loginBtn"><i class="fa-solid fa-unlock-keyhole"></i> Login to Terminal</button>
            </form>
        </fieldset>
        <p class="switch-page">New to the platform? <a href="#" onclick="showRegister(event)">Create Secure Account</a></p>
    </div>

    <div id="registerContainer" style="display: none;">
        <fieldset class="auth-fieldset">
            <legend><i class="fa-solid fa-user-plus"></i> Create Secure Account</legend>
            <form method="post" action="connecte.php">
                <input type="hidden" name="register" value="1">
                
                <div class="form-group">
                    <label for="username"><i class="fa-solid fa-user"></i> USERNAME:</label>
                    <input type="text" id="username" name="username" placeholder="Enter username" required>
                </div>
                
                <div class="form-group">
                    <label for="regPassword"><i class="fa-solid fa-lock"></i> PASSWORD:</label>
                    <input type="password" id="regPassword" name="password" placeholder="Enter strong password" required>
                </div>
                
                <div class="form-group">
                    <label for="regEmail"><i class="fa-solid fa-at"></i> EMAIL ADDRESS:</label>
                    <input type="email" id="regEmail" name="email" placeholder="name@example.com" required>
                </div>
                
                <button type="submit" id="submitBtn"><i class="fa-solid fa-key"></i> Create Account</button>
            </form>
        </fieldset>
        <p class="switch-page">Already secured? <a href="#" onclick="showLogin(event)">Access Terminal (Login)</a></p>
    </div>

    <script src="js/script.js"></script>
</body>
</html>