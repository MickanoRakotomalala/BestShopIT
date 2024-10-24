// Fonction pour vérifier l'email via l'API Hunter
async function verifyEmail() {
    try {
        const email = document.getElementById("Email");
        const apiKey = '621f43d36b45bdcda11fed2762474144f584e318';  // Remplace par ta clé API Hunter
        const response = await fetch(`https://api.hunter.io/v2/email-verifier?email=${email.value}&api_key=${apiKey}`);
        const data = await response.json();

        // Message de Validation
        var MessageValidation = "";
        var Msg = document.getElementById("ValidateEmail");


        if (data.data.result === 'deliverable') {
             console.log("success");
            email.style.borderColor = "#4dffb8";
            Msg.innerHTML = " ";
        } else if (data.data.result === 'undeliverable') {
             console.log("invalid");
            email.style.borderColor = "#ec1839";
            MessageValidation = "Failed, your Email is not found!, Enter Email valid!";
            Msg.innerHTML = MessageValidation;
            Msg.style.display = "flex";
            Msg.style.justifyContent = "left";
            Msg.style.alignItems = "left";
            Msg.style.width = "94.5%";
            Msg.style.height = "34px";
            Msg.style.fontSize = "16px";
            Msg.style.color = "#ec1839";
            email.value = ' ';
      
            // console.log("false Sent");
        }
        return data;
    } catch (error) {
        console.error('Erreur lors de la vérification de l\'email:', error);
        throw error;
    }
}