// Action
interface Action {

    type: string;
    payload?: any;

}

// Reducer
const reducer = (state = 10, action: Action) => {
    switch (action.type) {
        case 'INCREMENTAR':
            return ++state;
        case 'DECREMENTAR':
            return --state;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        default: return state;
    }
}

// Implementation
const incrementadorAccion: Action = {
    type: 'INCREMENTAR'
};

console.log(reducer(10, incrementadorAccion));

const decrementadorAccion: Action = {
    type: 'DECREMENTAR'
};

console.log(reducer(10, decrementadorAccion));

const multiplicarAccion: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};

console.log(reducer(10, multiplicarAccion));

const dividirAccion: Action = {
    type: 'DIVIDIR',
    payload: 2
};

console.log(reducer(10, dividirAccion));