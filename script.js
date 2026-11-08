document.addEventListener("DOMContentLoaded",function () {
    const contactform = document.getElementById(contactform);

    contactform.addEventListener("submit",function(event){
        //Prevent the oage from reloading 
        event.preventDefault();

        //show a simple pop-up alert message
        alert("Thank you for reaching out to Fantasys Food Hub! your message has been recieved")

        //Clear out the form fields 
        contactform.reset();
    }) ;
}) ;