//pour chaque li quand il est cliqué, on applique la fonction sur lui
document.querySelectorAll("li").forEach(element =>{
    element.addEventListener('click', function(){
        //d'abord on actualise la tab active
        document.querySelectorAll("li").forEach(self =>{
            self.classList.remove("tab-active");
        })
        this.classList.add("tab-active");

        //ensuite on actualise le texte correspondant
        document.querySelectorAll("div").forEach(self =>{
            self.classList.remove("active");
        })
        if(this.classList.contains("tab-form")){
            document.getElementById("data").classList.add("active");
        }
        if(this.classList.contains("tab-lorem")){
            document.getElementById("lorem").classList.add("active");
        }
        if(this.classList.contains("tab-ipsum")){
            document.getElementById("ipsum").classList.add("active");
        }
    })
})

//quand le form est envoyé, on rentre dans cette fonction
document.getElementById('form').addEventListener('submit',function(event) {
    event.preventDefault();
    //initialisation des variables
    let pseudo = document.getElementById('pseudo');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirm = document.getElementById('confirm');
    let passcheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?])");
    let errorContainer = document.getElementById("errorContainer");
    let successContainer = document.getElementById("successContainer");
    let success = true;
    //cache les messages de retour
    errorContainer.classList.remove('visible');
    successContainer.classList.remove('visible');
    //supprime la liste d'erreurs
    while(errorContainer.firstChild){
        errorContainer.removeChild(errorContainer.firstChild);
    }

    if(pseudo.value.length < 6) {
        //actualise la classe du pseudo
        pseudo.classList.add('incorrect');
        pseudo.classList.remove('success');
        //les erreurs deviennent visible si il y a une erreur
        errorContainer.classList.add('visible');
        //on ajoute l'erreur à la liste d'erreur
        let err = document.createElement('li');
        err.innerText = "Nickname must contain at least 6 characters";
        errorContainer.appendChild(err);
        //si il y a une erreur le succes est impossible
        success = false;
    } else {
        //actualise la classe du pseudo
        pseudo.classList.add('success');
        pseudo.classList.remove('incorrect');
    }
    if(email.value == '') {
        //actualise la classe de l'email
        email.classList.add('incorrect');
        email.classList.remove('success');
        //les erreurs deviennent visible si il y a une erreur
        errorContainer.classList.add('visible');
        //on ajoute l'erreur à la liste d'erreur
        let err = document.createElement('li');
        err.innerText = "Email can't be empty";
        errorContainer.appendChild(err);
        //si il y a une erreur le succes est impossible
        success = false;
    } else {
        //actualise la classe de l'email
        email.classList.add('success');
        email.classList.remove('incorrect');
    }
    if (password.value.length < 8 || passcheck.test(password.value) == false) {
        //actualise la classe du mot de passe
        password.classList.add('incorrect');
        password.classList.remove('success');
        //les erreurs deviennent visible si il y a une erreur
        errorContainer.classList.add('visible');
        //on ajoute l'erreur à la liste d'erreur
        let err = document.createElement('li');
        err.innerText = "Password must contain at least 8 characters, a lower case letter, a capital letter, a digit and a special character";
        errorContainer.appendChild(err);
        //si il y a une erreur le succes est impossible
        success = false;
    } else {
        //actualise la classe du mot de passe
        password.classList.add('success');
        password.classList.remove('incorrect');
    }
    if (confirm.value == password.value) {
        //actualise la classe de la confirmation de mot de passe
        confirm.classList.add('success');
        confirm.classList.remove('incorrect');
    } else {
        //actualise la classe de la confirmation de mot de passe
        confirm.classList.add('incorrect');
        confirm.classList.remove('success');
        //les erreurs deviennent visible si il y a une erreur
        errorContainer.classList.add('visible');
        //on ajoute l'erreur à la liste d'erreur
        let err = document.createElement('li');
        err.innerText = "Password and password confirmation must be the same";
        errorContainer.appendChild(err);
        //si il y a une erreur le succes est impossible
        success = false;
    }
    //si il n'y a eu aucune erreur alors afficher que le formulaire a été envoyé
    if (success) {
        successContainer.classList.add('visible');
        successContainer.innerText = "Form sent !";
    }
})

//fonction appelée quand on clique sur le bouton du dark mode
function dark() {
    let dark = document.getElementById('dark');
    if(dark.textContent == "Dark") {
        //toggle le texte du bouton en Light
        dark.textContent = "Light"
        //change le style en Dark
        document.body.style.color = "white";
        document.body.style.backgroundColor = "black";
    } else {
        //toggle le texte du bouton en Dark
        dark.textContent = "Dark"
        //change le style en Light
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";
    }
}