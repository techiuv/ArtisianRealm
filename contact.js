function sendEmail(e) {
    e.preventDefault();
    emailjs.init('7NNjm9-vnOLpd-M03');
    
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let msg = document.getElementById('msg').value;
    
    
    let params = {
        from_name: name,
        Phone: number,
        email_id: email,
        message: msg,
    }

    emailjs.send("service_11chskb", "template_ivdtq9e", params)        
        .then((res) => {
            alert('Message sent successfully ' + res.status);
        })
        .catch((error) => {
            alert('Failed to send ' + error);
        });
}
