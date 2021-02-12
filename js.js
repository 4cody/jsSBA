const sub = document.querySelector('#survey_submit')
const radioInputs = document.getElementsByName('own');
const favInput = document.getElementById('favorite')
const useInputs = document.querySelectorAll('.check_input')

let answerSet = {
    Owns: '',
    Favorite: '',
    Uses: []
}


sub.addEventListener('click', (e) => {
    e.preventDefault()

    for(let i = 0; i < radioInputs.length; i++) {
        if (radioInputs[i].checked) {
            answerSet.Owns = radioInputs[i].value
            break;
        }
    }

    answerSet.Favorite = favInput.value

    for(let i = 0; i< useInputs.length; i++) {
        if(useInputs[i].checked) {
            answerSet.Uses.push(useInputs[i].value)
        }
    }

    console.log(answerSet)
})