
emailjs.init('Totb1qcZqBoqXK54y'); // Replace 'YOUR_USER_ID' with your actual User ID


function sendEmail() {
    // Prepare the data you want to send (dynamic values)
    const templateParams = {
      to_name: 'Recipient Name',  // Placeholder for recipient's name
      from_name: 'Sender Name',   // Placeholder for sender's name
      message: 'This is a test message from Email.js',  // Message content
      reply_to: 'sender@example.com',  // Sender's email address
    };
  
    // Send the email using Email.js
    emailjs.send("service_a63ipqc","template_6tp3b5g",templateParams)
      .then(function(response) {
        console.log('Email sent successfully:', response);
      }, function(error) {
        console.log(templateParams)
        console.error('Error sending email:', error);
      });

    
  }
  