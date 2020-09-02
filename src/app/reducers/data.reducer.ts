// app/counter.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { getData } from '../actions/data.actions';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

export const initialState = null;

const dataReducerTemp = createReducer(
  initialState,
  on(getData, (state) => state)
);

export function dataReducer(state, action) {
  console.log({ state, action });
  switch (action.type) {
    case 'Login Loaded Success':
      return {
        ...state,
        data: action.data,
      };
    case 'Home Loaded Success':
      return {
        ...state,
        data: action.data,
      };
    case 'CBDC Loaded Success':
      return {
        ...state,
        data: action.data,
      };
    case 'Dashboard Bank Treasury Loaded Success':
      return {
        ...state,
        data: action.data,
      };
    case 'Request History Loaded Success':
      return {
        ...state,
        data: action.data,
      };
    case 'Dashboard Central Bank Loaded Success':
      return {
        ...state,
        data: action.data,
      };
    case 'Dashboard Central Bank User Loaded Success':
      return {
        ...state,
        data: action.data,
      };
    case 'Dashboard Central Bank Customer Loaded Success':
      return {
        ...state,
        data: action.data,
      };
    case 'Dashboard Bank Operation User Loaded Success':
      return {
        ...state,
        data: action.data,
      };
    case 'Payment Request List Data Loaded Success':
      return {
        ...state,
        data: action.data,
      };
    case 'Queue History Data Loaded Success':
      return {
        ...state,
        data: action.data,
      };
    case 'Add New Bank':
      console.log({ actionData: action.payload });
      return {
        ...state,
        data: {
          ...state.data,
          bankData: {
            ...state.data.bankData,
            summary: {
              ...state.data.bankData.summary,
              total: state.data.bankData.summary.total + 1,
            },
            list: [
              {
                shortName: (() => {
                  let initials = [];
                  initials = action.payload.name.split(' ');
                  return `${initials[0][0]}${initials[1][0]}`;
                })(),
                name: action.payload.name,
                number: action.payload.number,
                status: 'Active',
              },
              ...state.data.bankData.list,
            ],
          },
        },
      };
    case 'Edit Bank':
      console.log({ actionData: action.payload });
      return {
        ...state,
        data: {
          ...state.data,
          bankData: {
            ...state.data.bankData,
            list: [
              ...state.data.bankData.list.slice(0, action.payload.index),
              {
                shortName: (() => {
                  let initials = [];
                  initials = action.payload.data.name.split(' ');
                  return `${initials[0][0]}${initials[1][0]}`;
                })(),
                name: action.payload.data.name,
                number: action.payload.data.number,
                status: 'Active',
              },

              ...state.data.bankData.list.slice(action.payload.index + 1),
            ],
          },
        },
      };
    case 'Remove Bank':
      return {
        ...state,
        ...state,
        data: {
          ...state.data,
          bankData: {
            ...state.data.bankData,
            list: [
              ...state.data.bankData.list.filter(
                (bank) => bank.number != action.payload
              ),
            ],
          },
        },
      };
    case 'Update Bank Status':
      return {
        ...state,
        ...state,
        data: {
          ...state.data,
          bankData: {
            ...state.data.bankData,
            list: [
              ...state.data.bankData.list,
              ...(state.data.bankData.list.find(
                (bank) => bank.number == action.payload.number
              ).status = action.payload.status),
            ],
          },
        },
      };
    default:
      return state;
  }
}
