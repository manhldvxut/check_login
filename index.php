<!DOCTYPE html>
<html lang="en"> 
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Template Manhld</title>
    <!--link css-->
    <link rel="stylesheet" type="text/css" title="" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" title="" href="css/font-awesome.css">
    <link rel="stylesheet" type="text/css" title="" href="css/animate.css">
    <link rel="stylesheet" type="text/css" title="" href="css/style-top.css">
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>

    <script type="text/javascript" src="js/jquery.min.js"></script>
</head>
<body> 
    <header>
    </header> 
<main>
    <section id="form_top">
        <div class="container">
            <div class="header">
                <h2>Đăng ký Form</h2>
                <div><i style='font-size:24px' class='fas'>&#xf2bd;</i></div>
            </div>
                <form action="" method="get" id="form" class="main-form" onsubmit="return login()">
                    <div class="form">
                        <label for="">Username</label>
                        <input type="text" placeholder="Enter your username" id="username" autocomplete="off">
                        <i class="fas sucess">&#xf058;</i>
                        <i class="fas error">&#xf06a;</i>
                        <small class="message">error message</small>
                    </div>
                    <div class="form">
                        <label for="">Email</label>
                        <input type="email" placeholder="Enter your valid email" id="email" autocomplete="off">
                        <i class="fas sucess">&#xf058;</i>
                        <i class="fas error">&#xf06a;</i>
                        <small class="message">error message</small>
                    </div>
                    <div class="form">
                        <label for="">Password</label>
                        <input type="password" placeholder="Enter your password" id="password1" autocomplete="off">
                        <i class="fas sucess">&#xf058;</i>
                        <i class="fas error">&#xf06a;</i>
                        <small class="message">error message</small>
                    </div>
                    <div class="form">
                        <label for="">Password check</label>
                        <input type="password" placeholder="Please re-enter your password" id="password2" autocomplete="off">
                        <i class="fas sucess">&#xf058;</i>
                        <i class="fas error">&#xf06a;</i>
                        <small class="message">error message</small>
                    </div>
                    <div class="form">
                        <label for="">facebook</label>
                        <input type="facebook" placeholder="Enter your facebook" id="facebook" autocomplete="off">
                    </div>
                    <button type="submit" form="form">submit</button> 
                </form>
        </div>
    </section>
    <section id="conf_form">
        <div class="container">
            <div class="header">
                <h2>Confirm thành công</h2>
                <div><i style='font-size:24px' class='fas'>&#xf2bd;</i></div>
            </div>
            <div class="con_fix p-5">
                <div class="form">
                    <label for="">Username</label>
                    <p id="username_conf"></p>
                </div>
                <div class="form">
                    <label for="">Email</label>
                    <p id="email_conf"></p>
                </div>
                <div id="face_style" class="form">
                    <label for="">Facebook</label>
                    <p id="face_conf"></p>
                </div>
                <button>send</button>
            </div>
        </div>
    </section>

</main>
<footer id="footer">


</footer>
<!--Link js-->
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/wow.min.js"></script>
<script type="text/javascript" src="js/private.js"></script>

</body>
</html>
