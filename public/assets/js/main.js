let questions = [{
        id: 1,
        question: "Pensez-vous avoir eu de la fièvre ces derniers jours",
        current_answers: "",
        possible_answers: ["Oui", "Non"],
        dontknow: 'OUI'

    },
    {
        id: 2,
        question: "quelle est votre température",
        current_answers: "",
        possible_answers: []

    },
    {
        id: 3,
        question: "Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?",
        current_answers: "",
        possible_answers: ["Oui", "Non"],


    },
    {
        id: 4,
        question: "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours?",
        current_answers: "",
        possible_answers: ["Oui", "Non"]

    },
    {
        id: 5,
        question: "Avez-vous un mal de gorge apparu ces derniers jours ?",
        current_answers: "",
        possible_answers: ["Oui", "Non"]

    },
    {
        id: 6,
        question: "Avez-vous de la diarrhée ces dernières 24 heures(au moins 3 selles molles) ?",
        current_answers: "",
        possible_answers: ["Oui", "Non"]

    },
    {
        id: 7,
        question: "Avez-vous une fatigue inhabituelle ces derniers jours ?",
        current_answers: "",
        possible_answers: ["Oui", "Non"]

    },
    {
        id: 8,
        question: "Si oui cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée?",
        current_answers: "",
        possible_answers: ["Oui", "Non"]

    },
    {
        id: 9,
        question: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h",
        current_answers: "",
        possible_answers: ["Oui", "Non"]

    },
    {
        id: 10,
        question: "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?",
        current_answers: "",
        possible_answers: ["Oui", "Non"]

    },
    {
        id: 11,
        question: "Comment vous sentez-vous ? Bien/Assez bien/mal/très mal",
        current_answers: "",
        possible_answers: ['MAL', 'TRES MAL']

    },
    {
        id: 12,
        question: "Avez-vous d’autre symptôme ? ",
        current_answers: "",
        possible_answers: []

    },
    {
        id: 13,
        question: "Quel est votre âge?",
        current_answers: "",
        possible_answers: []

    },
    {
        id: 14,
        question: "Quel est votre poids ? ",
        current_answers: "",
        possible_answers: []

    },
    {
        id: 15,
        question: "Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
        current_answers: "",
        possible_answers: ["Oui", "Non"],
        dontknow: "Oui"
    },
    {
        id: 16,
        question: "Quelle est votre taille ?",
        current_answers: "",
        possible_answers: []

    },
    {
        id: 17,
        question: "Êtes-vous diabétique ?",
        current_answers: "",
        possible_answers: ["Oui", "Non"]

    },
    {
        id: 18,
        question: "Avez-vous ou avez-vous eu un cancer ?",
        current_answers: "",
        possible_answers: ["Oui", "Non"]

    },
    {
        id: 19,
        question: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
        current_answers: "",
        possible_answers: ["Oui", "Non"]

    },
    {
        id: 20,
        question: "Avez-vous une insuffisance rénale chronique dialysée ?",
        current_answers: "",
        possible_answers: ["Oui", "Non"]

    },
    {
        id: 21,
        question: "Avez-vous une maladie chronique du foie ?",
        current_answers: "",
        possible_answers: ["Oui", "Non"]

    },
    {
        id: 22,
        question: "Êtes-vous enceinte ? ",
        current_answers: "",
        possible_answers: ["Oui", "Non"]

    },
    {
        id: 23,
        question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ",
        current_answers: "",
        possible_answers: ["Oui", "Non"],
        dontknow: "Non"


    },
    {
        id: 24,
        question: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive) ",
        current_answers: "",
        possible_answers: ["Oui", "Non"]

    }
];
const questionNumber = document.querySelector('#questionNumber');
const question = document.querySelector("#question");
const answers = document.querySelector(".answers")
const previous = document.querySelector("#previous")
const next = document.querySelector("#next")
const inputnbr = document.querySelector("#inputnbr");
const submitnbr = document.querySelector("#submitnbr");
const oui = document.querySelector("#oui");
const non = document.querySelector("#non");
const idk = document.querySelector('#idk')
const prev_next = document.querySelector(".prev_next");
next.addEventListener('click', e => {
    let obj = questions.filter(e => e.id == questionNumber.textContent);
    let objs = questions.filter(e => e.id <= questionNumber.textContent);
    if (questionNumber.textContent == 1) {
        previous.disabled = true;
    } else {
        previous.disabled = false;
    }
    if (questionNumber.textContent == 1 && questions[questionNumber.textContent - 1].current_answers == "NON") questionNumber.textContent++;
    if (questionNumber.textContent <= 23) {
        questionNumber.textContent++;
    }
    if (questionNumber.textContent == 24) {
        window.location.replace("./result.html");
    }

})
previous.addEventListener("click", e => {
    if (questionNumber.textContent >= 1) {
        questionNumber.textContent--;
    }
    next.disabled = false
})
prev_next.addEventListener("click", e => {

    let obj = questions.filter(e => e.id == questionNumber.textContent);
    if (obj[0].current_answers == '') {
        next.disabled = true;
    }
    if (questions[questionNumber.textContent - 1].hasOwnProperty('dontknow')) {
        idk.classList.remove('hide');
    } else {
        idk.classList.add('hide');

    }
    question.textContent = obj[0].question;
    if (obj[0].possible_answers.length == 2) {
        inputnbr.classList.add("hide");
        submitnbr.classList.add("hide");
        oui.classList.remove("hide");
        non.classList.remove("hide");

    } else {
        inputnbr.classList.remove("hide");
        submitnbr.classList.remove("hide");
        oui.classList.add("hide");
        non.classList.add("hide");
    }
})

oui.addEventListener("click", e => {
    questions[questionNumber.textContent - 1].current_answers = "OUI";
    next.disabled = false;
    console.log(questions[questionNumber.textContent - 1]);
})
non.addEventListener("click", e => {
    questions[questionNumber.textContent - 1].current_answers = "NON";
    next.disabled = false;
    console.log(questions[questionNumber.textContent - 1]);
})
idk.addEventListener("click", e => {
    questions[questionNumber.textContent - 1].current_answers = questions[questionNumber.textContent - 1].dontknow;
    next.disabled = false;
    console.log(questions[questionNumber.textContent - 1]);
})
submitnbr.addEventListener('click', e => {
    switch (questionNumber.textContent) {
        case '2':
            if (inputnbr.value >= 30 && inputnbr.value <= 45) {
                questions[questionNumber.textContent - 1].current_answers = inputnbr.value;
                inputnbr.value = '';
                next.disabled = false;
                console.log(questions[questionNumber.textContent - 1]);
            }
            break;
        case '12':
            if (inputnbr != '') {
                questions[questionNumber.textContent - 1].current_answers = inputnbr.value;
                inputnbr.value = '';
                next.disabled = false;
                console.log(questions[questionNumber.textContent - 1]);
            }
            break;
        case '13':
            if (inputnbr.value >= 15) {
                questions[questionNumber.textContent - 1].current_answers = inputnbr.value;
                inputnbr.value = '';
                next.disabled = false;
                console.log(questions[questionNumber.textContent - 1]);
            }
            break;
        case '14':
            if (inputnbr.value >= 30 && inputnbr.value <= 595) {
                questions[questionNumber.textContent - 1].current_answers = inputnbr.value;
                inputnbr.value = '';
                next.disabled = false;
                console.log(questions[questionNumber.textContent - 1]);
            }
            break;
        case '16':
            if (inputnbr.value >= 50 && inputnbr.value <= 300) {
                questions[questionNumber.textContent - 1].current_answers = inputnbr.value;
                inputnbr.value = '';
                next.disabled = false;
                console.log(questions[questionNumber.textContent - 1]);
            }
            break;
    }


})