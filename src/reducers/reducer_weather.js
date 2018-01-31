// @flow

import { FETCH_WEATHER } from '../actions/index';

export default function(state: Array<Object> = [], action: string => Object) {
    switch (action.type) {
        case FETCH_WEATHER:
            if (action.payload.data) {
                return [action.payload.data, ...state];
            } else {
                return state;
            }
        default:
            return state;
    }
}
