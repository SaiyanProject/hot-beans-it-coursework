function sendEmail() {
  Email.send({
      SecureToken : "2970d32f-7372-4e91-b354-64a0768daeed",
      To : "mistalearts@gmail.com",
      From :  "mistalearts@gmail.com",
      Subject : "Contact Form Enquiry",
      Body : "Name: " + document.getElementById("name").value
          + "<br> Email: " + document.getElementById("email").value
          + "<br> Phone Number: " + document.getElementById("phone_number").value
          + "<br> Message: " + document.getElementById("message").value
  }).then(
    message => alert("Message Has Been Sent")
  );
}