(function ($) {
    "use strict";

    $(document).ready(function($){
        
        // testimonial sliders
        $(".testimonial-sliders").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:false,
                    loop:true
                }
            }
        });

        // homepage slider
        $(".homepage-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    loop:true
                },
                600:{
                    items:1,
                    nav:true,
                    loop:true
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:true
                }
            }
        });

        $(".logo-carousel-inner").owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            margin: 30,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:false,
                    loop:true
                }
            }
        });

        if($('.time-countdown').length){
            $('.time-countdown').each(function() {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                var $this = $(this).html(event.strftime('' + '<div class="counter-column"><div class="inner"><span class="count">%D</span>Days</div></div> ' + '<div class="counter-column"><div class="inner"><span class="count">%H</span>Hours</div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%M</span>Mins</div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%S</span>Secs</div></div>'));
            });
         });
        }

        $(".product-filters li").on('click', function () {
            
            $(".product-filters li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');

            $(".product-lists").isotope({
                filter: selector,
            });
            
        });
        
        $(".product-lists").isotope();

        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // light box
        $('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
        });

        $(".homepage-slider").on("translate.owl.carousel", function(){
            $(".hero-text-tablecell .subtitle").removeClass("animated fadeInUp").css({'opacity': '0'});
            $(".hero-text-tablecell h1").removeClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.3s'});
            $(".hero-btns").removeClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.5s'});
        });

        $(".homepage-slider").on("translated.owl.carousel", function(){
            $(".hero-text-tablecell .subtitle").addClass("animated fadeInUp").css({'opacity': '0'});
            $(".hero-text-tablecell h1").addClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.3s'});
            $(".hero-btns").addClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.5s'});
        });

       

        // stikcy js
        $("#sticker").sticky({
            topSpacing: 0
        });

        $('.main-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "992"
        });
        
         // search form
        $(".search-bar-icon").on("click", function(){
            $(".search-area").addClass("search-active");
        });

        $(".close-btn").on("click", function() {
            $(".search-area").removeClass("search-active");
        });
    
    });


    jQuery(window).on("load",function(){
        jQuery(".loader").fadeOut(1000);
    });


}(jQuery));


window.onload = function() {
    document.getElementById("siginform").style.display = "flex";
};

document.getElementById("closeForm").addEventListener("click", function() {
    document.getElementById("siginform").style.display = "none";
});
document.getElementById("closeForm").addEventListener("click", function() {
    document.getElementById("siginform").style.display = "none";
});
document.getElementById("regBTN").addEventListener("click", function() {
    document.getElementById("siginform").style.display = "none";
    document.getElementById("signUpForm").style.display = "flex";
});
document.getElementById("backBtn").addEventListener("click", function() {
    document.getElementById("siginform").style.display = "flex";
    document.getElementById("signUpForm").style.display = "none";
});
document.getElementById("signBtn2").addEventListener("click", function() {
    const username = document.getElementById("exampleInputEmail3").value;
    const email = document.getElementById("exampleInputEmail4").value;
    const password = document.getElementById("exampleInputEmail5").value;
    const phone_number = document.getElementById("exampleInputEmail6").value;
    console.log(username, password, email, phone_number);


    $.ajax({
        url: 'http://localhost:8080/user/save',
        type: 'POST',
        data: JSON.stringify({
            username :username,
            email: email,
            password: password,
            phone_number:phone_number
        }),
        contentType: 'application/json',
        success: function(response) {
            console.log('Success:', response);
           document.getElementById("siginform").style.display = "flex";
           document.getElementById("signUpForm").style.display = "none";

        },
        error: function(xhr, status, error) {
            console.error('AJAX error:', status, error);
            alert("Retry filled information is Wrong Fertile")
        }
    });

});


document.getElementById("accIcon").addEventListener("click", function() {
    document.getElementById("siginform").style.display = "flex";
});
document.getElementById("accIcon2").addEventListener("click", function() {
    document.getElementById("siginform").style.display = "flex";
});


var userID;//save this in the localstorage when page reload


// Event listener for login form submission
document.getElementById("signBtn1").addEventListener("click", function() {
    const email = document.getElementById("exampleInputEmail1").value.trim();
    const password = document.getElementById("exampleInputEmail2").value.trim();

    // Basic validation for empty fields
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    $.ajax({
        url: 'http://localhost:8080/user/select',
        type: 'GET',
        success: function(response) {
            console.log("Response received:", response); // Log the full response to see its structure

            let loginSuccess = false;

            response.forEach(function(user) {
                console.log("Checking user:", user); // Log each user to ensure 'userid' exists

                // Check if email and password match
                if (email === user.email && password === user.password) {
                    document.getElementById("accounNameSet").innerText = user.username;
                    document.getElementById("siginform").style.display = "none"; // Hide sign-in form
                    document.getElementById("signUpForm").style.display = "none"; // Hide sign-up form

                    localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store user in localStorage

                    document.getElementById("logoutBtn").style.display = "flex";
                    document.getElementById("accIcon").style.display = "none"; // Hide the account icon

                    userID = user.userid; // Store the user ID for later use
                    console.log("Logged in User ID:", userID);
                    loginSuccess = true;
                }
            });

            if (!loginSuccess) {
                alert("Login Failed, check the data entered.");
            }
        },
        error: function(xhr, status, error) {
            alert("Login Failed, check the data entered.");
            console.error('AJAX error:', status, error);
        }
    });
});

// Event listener for product click (ensures user is logged in)
$(document).ready(function() {
    $(".defaultclick").on('click', function(event) {
        event.preventDefault();

        if (!checkIfLoggedIn()) return;  // Prevents function from proceeding if user is not logged in

        const productName = $(this).closest('.single-product-item').find('.nameTitleshop').text();
        const productPrice = $(this).closest('.single-product-item').find('.shop_price').text();

        console.log("Product Name:", productName);
        console.log("Product price:", productPrice);
        console.log("Product user:", userID);

        if (!userID) {
            alert("You must be logged in to save a product.");
            return;
        }

        $.ajax({
            url: 'http://localhost:8080/product/save',
            type: 'POST',
            data: JSON.stringify({
                productName: productName,
                price: productPrice,
                userid: userID // Even page reload user id comes
            }),
            contentType: 'application/json',
            success: function(response) {
                console.log('Success:', response);
            },
            error: function(xhr, status, error) {
                console.error('AJAX error:', status, error);
            }
        });

        getAll();
    });
});

function checkIfLoggedIn() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        alert("Please log in to the account");
        return false;
    }
    return true;
}
const getAll = () => {
    $.ajax({
        url: 'http://localhost:8080/product/select',
        type: 'GET',
        success: function(response) {
            response.forEach(function(product) {
                console.log(product.productName);
                console.log(product.price);
            });
        },
        error: function(xhr, status, error) {
            console.error('AJAX error:', status, error);
        }
    });
};

window.onload = function() {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        document.getElementById("accounNameSet").innerText = user.username;
        document.getElementById("siginform").style.display = "none"; // Hide sign-in form
        document.getElementById("signUpForm").style.display = "none"; // Hide sign-up form
        document.getElementById("logoutBtn").style.display = "flex"; // Show logout button
        document.getElementById("accIcon").style.display = "none"; // Hide account icon (since the user is logged in)

        userID = user.userid; // Set the userID from localStorage
        console.log("UserID restored from localStorage:", userID);
    } else {
        document.getElementById("logoutBtn").style.display = "none";
        document.getElementById("accIcon").style.display = "inline"; // Show account icon (for login)
    }
};

document.getElementById("logoutBtn").addEventListener("click", function() {
    localStorage.removeItem("loggedInUser");
    location.reload(); // Reload page to reset the state
    document.getElementById("accIcon").style.display = "flex";
});




















// Example of login button click (if needed)
/*
document.getElementById("loginBtn").addEventListener("click", function() {
    // Show login form or redirect to login page
    document.getElementById("siginform").style.display = "flex";
});
*/











/*
document.addEventListener('DOMContentLoaded', function () {
    // For desktop view account icon
    document.getElementById("accIcon").addEventListener("click", function () {
        document.getElementById("siginform").style.display = "flex";
    });

    // For mobile view account icon
    document.getElementById("accIcon2").addEventListener("click", function () {
        document.getElementById("siginform").style.display = "flex";
    });
});
*/

