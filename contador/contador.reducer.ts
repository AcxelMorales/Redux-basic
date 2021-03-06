import { Action } from '../ngrx-fake/ngrx';

export const contadorReducer = (state = 10, action: Action) => {
    switch (action.type) {
        case 'INCREMENTAR':
            return ++state;
        case 'DECREMENTAR':
            return --state;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        case 'RESET':
            return state = 0;
        default: return state;
    }
};