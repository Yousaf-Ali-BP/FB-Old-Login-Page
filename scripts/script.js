$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:2,
                maxlength:20
            },
            lname:{
                required:true,
                minlength:2,
                maxlength:50
            },
            Email:{
                required:true,
                email:true
            },
            reEmail:{
                required:true,
                email:true,
                equalTo:"#Email"
            },
            Pass:{
                required:true,
                minlength:8,
                maxlength:16
            },
            month:{
                required:true
            },
            day:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
          fname:{
              required:"Please enter your first name",
              minlength:"Your first name must contain at least 2 characters",
              maxlength:"Your first name can't exceed 20 characters"
          }, 
          lname:{
              required:"Please enter your last name",
              minlength:"Your last name must contain at least 2 characters",
              maxlength:"Your last name can't exceed 50 characters"
          },
          Email:{
              required:"Please enter your email address",
              email:"Please enter a valid email address"
          },
          reEmail:{
              required:"Please confirm your email address",
              email:"Please enter a valid email address",
              equalTo:"Email addresses do not match"
          },
          Pass:{
              required:"Please create a password",
              minlength:"Your password must be at least 8 characters long",
              maxlengtg:"Your password can't exceed 16 characters"
          },
          month:{
              required:"Please select your birth month"
          },
          day:{
              required:"Please select your birth day"
          },
          year:{
              required:"Please select your birth year"
          },
          gender:{
              required:"Please select your gender"
          }  
        },
        errorClass:"message"
    })
})

