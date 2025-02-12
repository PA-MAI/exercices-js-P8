const myButton = document.getElementById('myButton');
        
        // événement de clic 
        myButton.addEventListener('click', () => {
            
            //le message existe?
            if (!document.getElementById('errorMessage')) {
            // Créer le message 
            const message = document.createElement('div');
            message.classList.add('message');
            message.id = 'errorMessage';
            message.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
            
            // Ajoute le message au conteneur 
            myButton.parentNode.insertBefore(message, myButton.nextSibling);
            }
        });