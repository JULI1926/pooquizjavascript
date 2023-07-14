
class Question {

    constructor(text, choices, answer){

        this.text = text;
        this.choices = choices;
        this.answer = answer;

    }

    correctAnswer(choice){
        return choice == this.answer
    }

}



const question = new Question('Cual es un Lenguaje',['java','html'],'java')

console.log(question.correctAnswer('java'))