$(document).ready(function () {

    // id="signinbut"
    if (JSON.parse(localStorage.getItem('logsucc')) == 'true') {
        $('#signinbut').html('SIGN OUT');
    }

    let path = window.location.pathname;
    let pagename = path.split("/").pop().split(".")[0];
    // console.log('Page Name is', pagename);

    if (pagename == 'login' | pagename == 'register' | pagename == 'forgetpassword') {
        localStorage.setItem('logsucc', JSON.stringify('false'));
        localStorage.setItem('loguser', JSON.stringify(''));
        $('#signinbut').html('SIGN IN');
    }

    // redirect if not logged in
    
    // else if (pagename == 'express' | pagename == 'market' | pagename == 'visacard' && (JSON.parse(localStorage.getItem('logsucc')) == 'false' | !JSON.parse(localStorage.getItem('logsucc')))) {
    //     window.location.href = 'login.html'
    // }

    else if (pagename == 'index') {
        if (JSON.parse(localStorage.getItem('logsucc')) == 'false' | !JSON.parse(localStorage.getItem('logsucc'))) {
            localStorage.setItem('logsucc', JSON.stringify('false'));
        }
    }

    //initialising animation library
    AOS.init({
        once: true,
    });

    //Register form validation
    $("#registerForm").validate({
        rules: {
            regEmail: {
                required: true,
                email: true
            },
            accountNumber: {
                required: true,
                rangelength: [14, 14]
            },
            regPassword: {
                required: true,
                minlength: 6,
                maxlength: 10
            },
            regConfirmPassword: {
                required: true,
                equalTo: "#regpass"
            },
        },
        messages: {
            regEmail: {
                required: "*Required",
                email: "*Please enter a valid email address"
            },
            accountNumber: {
                required: "*Required",
                rangelength: "*Bank Account Number must contain 14 Digits",
            },
            regPassword: {
                required: "*Required",
                minlength: "Password must be alteast 6 characters long ",
                maxlength: "Password must be atmost 10 characters long "

            },
            regConfirmPassword: {
                required: "*Required",
                equalTo: "Please enter the same password as above",
            }
        }
    })

    // Login form validation

    $("#loginForm").validate({
        rules: {
            loginemail: {
                required: true,
                email: true

            },
            loginpwd: {
                required: true,
                minlength: 6,
                maxlength: 10
            },
        },
        messages: {
            loginemail: {
                required: "*Required",
                email: "*Please enter a valid email address"
            },
            loginpwd: {
                required: "*Required",
                minlength: "Password must be alteast 6 characters long ",
                maxlength: "Password must be atmost 10 characters long "

            },
        }
    })

    // Forgot Password form validation

    $("#forgotForm").validate({
        rules: {
            foremail: {
                required: true,
                email: true

            },
            forpwd: {
                required: true,
                minlength: 6,
                maxlength: 10
            },
            newConfirmPassword: {
                required: true,
                equalTo: "#newpass"
            }
        },
        messages: {
            foremail: {
                required: "*Required",
                email: "*Please enter a valid email address"
            },
            forpwd: {
                required: "*Required",
                minlength: "Password must be alteast 6 characters long ",
                maxlength: "Password must be atmost 10 characters long "

            },
            newConfirmPassword: {
                required: "*Required",
                equalTo: "Please enter the same password as above",

            }
        }
    })

    //SUBSCRIBE FORM VALIDATE
    $("#subscribe").validate({
        rules: {
            email: {
                required: true,
                email: true

            }
        },
        messages: {
            email: {
                required: "Email is Required*",
                email: "Please enter a valid email address*"
            }
        }

    })


    // Loader
    setTimeout(() => {
        $('.loader').remove();
    }, 2000);

    // Tabs
    $("#tabs").tabs();

    $('#tabs a').on('click', function(){
        $('#tabs .active').removeClass('active');
        $(this).addClass('active');
      });


    // Accordion
    $("#accordion").accordion({
        collapsible: true,
        icon: true,
        active: false
    });


    // Social Share

    $("#share-bar").share();

    // Slider
    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
    })

    // Set the date we're counting down to
    var countDownDate = new Date("August 10, 2022 12:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('.days').html(days);
        $('.hours').html(hours);
        $('.minutes').html(minutes);
        $('.seconds').html(seconds);

    }, 1000);

    // REGISTERATION FORM

    let registered_users = [];
    let regemail, regpwd, regnum;
    $("#registerForm").submit(function (event) {
        event.preventDefault();
        regemail = $("#regemail").val();
        regpwd = $("#regpass").val();
        regnum = $("#regaccnum").val();

        curuser = {
            'email': regemail, 'password': regpwd, 'accNum': regnum,
            'dollarbalance': 10000, 'ethbal': 0, 'btcbal': 0
        }
        if((regemail != '' && regemail != null) && (regpwd != '' && regpwd != null)){
            registered_users.push(curuser);

            if (!localStorage.getItem('users')) {
                localStorage.setItem('users', JSON.stringify(registered_users));
                $("#regmsg").html('Registration Successful');
                $("#registerForm").trigger("reset");
            }
            else {
                let userex = false;
                let test = JSON.parse(localStorage.getItem('users'));
                for (let index = 0; index < test.length; index++) {
                    if (test[index]['email'] == regemail) {
                        $("#regmsg").html('This email already exists');
                        userex = true;
                    }
                }
                if (!userex) {
                    registered_users = JSON.parse(localStorage.getItem('users'));
                    registered_users.push(curuser);
                    localStorage.setItem('users', JSON.stringify(registered_users));
                    $("#regmsg").html('Registration Successful');
                    $("#registerForm").trigger("reset");
                }

            }
        }
    });

    // LOGIN ID

    let loginemail;
    let loginpwd;
    $("#loginForm").submit(function (event) {

        event.preventDefault();

        loginemail = $("input[name=loginemail]").val();
        loginpwd = $("input[name=loginpwd]").val();
        let logsucc;
        let loguser;
        let pwdcorr = true;
        let registered_users = JSON.parse(localStorage.getItem('users'));

        for (let index = 0; index < registered_users.length; index++) {
            if (registered_users[index]['email'] == loginemail && registered_users[index]['password'] == loginpwd) {

                $("#logmsg").html('Login Successful');
                logsucc = true;
                loguser = registered_users[index]
            }
            else if (registered_users[index]['email'] == loginemail && registered_users[index]['password'] !== loginpwd) {
                $("#logmsg").html('Incorrect Password');
                logsucc = false;
                pwdcorr = false;
            }
        }

        if (!logsucc && pwdcorr) {

            $("#logmsg").html('Login Unsuccessful. Did you sign up?');
            $("#loginForm").trigger("reset");
        }

        if (logsucc) {
            localStorage.setItem('logsucc', JSON.stringify('true'));
            localStorage.setItem('loguser', JSON.stringify(loguser));
            window.location.href = 'express.html'
        }



    });

    // FORGOT PASSWORD


    let foremail;
    let forpwd;
    $("#forgotForm").submit(function (event) {
        event.preventDefault();
        foremail = $("input[name=foremail]").val();
        forpwd = $("input[name=forpwd]").val();
        console.log(foremail, forpwd);
        let registered_users = JSON.parse(localStorage.getItem('users'));
        for (let index = 0; index < registered_users.length; index++) {
            if (registered_users[index]['email'] == foremail) {
                registered_users[index]['password'] = forpwd;
                localStorage.setItem('users', JSON.stringify(registered_users));
            }
        }
        $("#forgotForm").append('<span class="success">New password successfully set.</span>');
        window.location.href = 'login.html'
    });


    // SCRIPT BUY-SELL

    if (pagename == 'express' && (JSON.parse(localStorage.getItem('logsucc')) == 'true')) {

        let loguser = JSON.parse(localStorage.getItem('loguser'));
        // window.alert('Logged In')
        console.log(loguser)
        function loguser2reguser(myuser) {
            let registered_users = JSON.parse(localStorage.getItem('users'));

            for (let index = 0; index < registered_users.length; index++) {
                if (registered_users[index]['email'] == myuser['email']) {
                    registered_users[index] = myuser;
                }
                localStorage.setItem('users', JSON.stringify(registered_users));
            }
        }
        // let user = loguser['email'];
        // let balance = loguser['dollarbalance'];
        // let ecoins = loguser['ethbal'];
        // let bcoins = loguser['btcbal'];
        let ethrate = 25;
        let btcrate = 50;
        // let cansell = false;
        $('#balance').html(loguser['dollarbalance'])
        $('#ecoins').html(loguser['ethbal'])
        $('#bcoins').html(loguser['btcbal'])
        $('#erate').html(ethrate)
        $('#brate').html(btcrate)
        $('#welcome-user').html(loguser['email'])

        $("#eb").keyup(function (event) {
            let val = parseInt($('#eb').val())
            let total = val * ethrate
            $('#edol').html(total)

        });

        $("#es").keyup(function (event) {
            let val = parseInt($('#es').val())
            let total = val * ethrate
            $('#esdol').html(total)
        });

        $("#bb").keyup(function (event) {
            let val = parseInt($('#bb').val())
            let total = val * btcrate
            $('#bdol').html(total)

        });

        $("#bs").keyup(function (event) {
            let val = parseInt($('#bs').val())
            let total = val * btcrate
            $('#bsdol').html(total)
        });

        $('#ebuy').submit(function (e) {
            e.preventDefault();
            let val = parseInt($('#eb').val())
            let total = val * ethrate

            if (total <= loguser['dollarbalance']) {

                loguser['ethbal'] += val;
                $('#ecoins').html(loguser['ethbal'])

                loguser['dollarbalance'] = loguser['dollarbalance'] - total;
                $('#balance').html(loguser['dollarbalance'])

                // cansell = true;
                window.alert('Transaction Successful')
            }
            else {
                window.alert('You cannot buy over limit');
            }
            
            localStorage.setItem('loguser', JSON.stringify(loguser));
            loguser2reguser(loguser)
            $('#edol').html('')
            this.reset();
        })

        $('#esell').submit(function (e) {
            e.preventDefault();
            let val = parseInt($('#es').val())
            let total = val * ethrate



            if (val <= loguser['ethbal']) {

                loguser['ethbal'] -= val;
                $('#ecoins').html(loguser['ethbal'])

                loguser['dollarbalance'] = loguser['dollarbalance'] + total;
                $('#balance').html(loguser['dollarbalance'])

                // cansell = true;
                window.alert('Transaction Successful')
            }

           /*  else if (val == loguser['ethbal']) {

                loguser['ethbal'] -= val;
                $('#ecoins').html(loguser['ethbal'])

                loguser['dollarbalance'] = loguser['dollarbalance'] + total;
                $('#balance').html(loguser['dollarbalance'])

                // cansell = false;
            } */

            else if (val > loguser['ethbal']) {
                window.alert('You do not have enough coins to sell');
            }
            localStorage.setItem('loguser', JSON.stringify(loguser));
            $('#esdol').html('')
            this.reset();

        })

        $('#bbuy').submit(function (e) {
            e.preventDefault();
            let val = parseInt($('#bb').val())
            let total = val * btcrate

            if (total <= loguser['dollarbalance']) {

                loguser['btcbal'] += val;
                $('#bcoins').html(loguser['btcbal'])

                loguser['dollarbalance'] = loguser['dollarbalance'] - total;
                $('#balance').html(loguser['dollarbalance'])

                // cansell = true;
                window.alert('Transaction Successful')
            }
            else {
                window.alert('You cannot buy over limit');
            }
            
            localStorage.setItem('loguser', JSON.stringify(loguser));
            loguser2reguser(loguser)
            $('#bdol').html('')
            this.reset();
        })

        $('#bsell').submit(function (e) {
            e.preventDefault();
            let val = parseInt($('#bs').val())
            let total = val * btcrate



            if (val <= loguser['btcbal']) {

                loguser['btcbal'] -= val;
                $('#bcoins').html(loguser['btcbal'])

                loguser['dollarbalance'] = loguser['dollarbalance'] + total;
                $('#balance').html(loguser['dollarbalance'])

                // cansell = true;
                window.alert('Transaction Successful')
            }

           /*  else if (val == loguser['btcbal']) {

                loguser['btcbal'] -= val;
                $('#bcoins').html(loguser['btcbal'])

                loguser['dollarbalance'] = loguser['dollarbalance'] + total;
                $('#balance').html(loguser['dollarbalance'])

                // cansell = false;
            } */

            else if (val > loguser['btcbal']) {
                window.alert('You do not have enough coins to sell');
            }
            localStorage.setItem('loguser', JSON.stringify(loguser));
            $('#bsdol').html('')
            this.reset();

        })


    }
})



