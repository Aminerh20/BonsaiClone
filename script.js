
    const item = document.getElementById('item');
    const dropdown = document.getElementById('dropdown');
    const chevron = document.getElementById('chevron');
    const dropdownTwo = document.getElementById('dropdown-two');
    const toggle = document.querySelector('.toggle');
    const toggleButton = document.querySelector('.toggle-button');
    const checkButton = document.getElementById('check');
    const spanElementOne = document.getElementById('spanElementOne');
    const spanElementTwo = document.getElementById('spanElementTwo');
    const hr = document.querySelector('.hr');
    const hrTwo = document.querySelector('.hrTwo');
    const moneyOne = document.getElementById('moneyOne');
    const moneyTwo = document.getElementById('moneyTwo');
    const option = document.getElementById('option');
    const edit = document.querySelector('.edit')
    const hideOne = document.querySelector('.hiddeOne');
    const hideTwo = document.querySelector('.hiddeTwo');
    const hideThree = document.querySelector('.hiddeThree');
    const hideFour = document.querySelector('.hiddeFour');
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const tree = document.getElementById('tree');
    const four = document.getElementById('four');
    const question = document.querySelectorAll('.question')
    const container = document.querySelectorAll('.containerOne');
    const menu = document.getElementById('menu');
    const menuButton = document.getElementById('menuButton');
    const cancelButton = document.getElementById('cancelButton');


    function changeButton(){
        let isChecked = menu.checked;
        if(isChecked){
            menuButton.style.display = 'none'
            cancelButton.style.display = 'block'
        } 
        else if(!isChecked){
            menuButton.style.display = 'block'
            cancelButton.style.display = 'none'

        }
    }

    container.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle('showup')
        })
    })

 

    question.forEach(quest => {
        quest.addEventListener('click', () => {
            quest.classList.toggle('active')
        })
    })


    option.addEventListener('mouseenter', function(){
        edit.style.display = 'block';
    })
    option.addEventListener('mouseleave', function(){
        edit.style.display = 'none';
    })


    let isDropdownHovered = false; // Flag to track if dropdown is hovered

    item.addEventListener('mouseenter', function() {
        dropdown.style.display = 'block';
    });

    item.addEventListener('mouseleave', function(event) {
        // Delay hiding dropdown to check if mouse moved to dropdown
        setTimeout(function() {
            if (!isDropdownHovered) {
                dropdown.style.display = 'none';
            }
        }, 200); // Adjust delay as needed
    });

    dropdown.addEventListener('mouseenter', function() {
        isDropdownHovered = true;
    });

    dropdown.addEventListener('mouseleave', function() {
        isDropdownHovered = false;
        dropdown.style.display = 'none';
    });

    dropdownTwo.addEventListener('mouseenter', function(){
        chevron.style.opacity = 1;
    });
    dropdownTwo.addEventListener('mouseleave', function(){
        chevron.style.opacity = 0;
    })
spanElementOne.classList.add('fw');
function changeContent(){
    let isChecked = checkButton.checked;
    if(isChecked){
        spanElementOne.classList.add('fw');
        spanElementTwo.classList.remove('fw');
        hr.style.display = 'none';
        hrTwo.style.display = 'none';
        moneyOne.innerText = "17$";
        moneyTwo.innerText = "32$";
    }
    else if(!isChecked){
        spanElementTwo.classList.add('fw');
        spanElementOne.classList.remove('fw');
        hr.style.display = 'block';
        hrTwo.style.display = 'block';
        moneyOne.innerText = "30$";
        moneyTwo.innerText = "60$";
    }

}

