const form = document.querySelector('.quiz-form');
const quizCorrectAnswers = ['B', 'B', 'B', 'B'];
const result = document.querySelector('.result');
const spanResult = document.querySelector('.percentage'); 

form.addEventListener('submit', e => {
    e.preventDefault();

    //collecting answers from user
    let score =0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check for validation of answers

    userAnswers.forEach((answer, index) => {
        if(answer === quizCorrectAnswers[index]){
        score += 25
        };
    })
    //using window object so you can scroll to the top on sunbm,it
    scrollTo(0,0);
    // spanResult.textContent = `${score}%`;      
    result.style.display ='block';
    // console.log(score);

    // animating your result

    let output = 0;
    const animate = setInterval(() => {
        spanResult.textContent = `${output}%`;      
        if (output === score) {
            clearInterval(animate);
        } else{
            output++;
        }
    }, 10);
});

