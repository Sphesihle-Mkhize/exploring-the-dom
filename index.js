document.addEventListener('DOMContentLoaded', function() {
    const myMessage = document.querySelector('.myMessage');
    const showMessageButton = document.querySelector('.showMessageButton');
    const removeMessageButton = document.querySelector('.removeMessageButton');
    const newFruitInput = document.querySelector('.newFruitInput');
    const addFruitButton = document.querySelector('.addFruitButton');
    const fruitList = document.querySelector('.fruits');

    // Show message in myMessage div
    showMessageButton.addEventListener('click', function() {
        myMessage.innerText = 'Send me money,I will send it back!';
    });

    // Remove message from DOM
    removeMessageButton.addEventListener('click', function() {
        myMessage.innerText = '';
    });

    // Add new fruit to the list
    addFruitButton.addEventListener('click', function() {
        const newFruit = newFruitInput.value.trim();
        if (newFruit.length > 0) {
            const li = document.createElement('li');
            li.innerText = newFruit;
            fruitList.appendChild(li);
            newFruitInput.value = ''; // Clear input after adding
        }
    });

    // Example: Adding initial message after 3 seconds
    setTimeout(function(){
        myMessage.innerText = 'I want to fly to Cape Town!';
    }, 4000);
});