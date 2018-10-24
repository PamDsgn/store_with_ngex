import { Actions } from 'Ngex';

export function actions(state):Actions[]{
    return [
        {
            type:"GET_PRODUCTOS",
            action: (value:any) => state.productos = value
        }
    ]
}