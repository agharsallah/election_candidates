import {
  AUTH_USER,
  USER_ROLE,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_BASIC_CSO_DASHBOARD,
  FETCH_BASIC_ADMIN_DASHBOARD
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case USER_ROLE:
      return { ...state, role:action.payload };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_BASIC_CSO_DASHBOARD:
      return { ...state, csoInfo: action.payload };
    case FETCH_BASIC_ADMIN_DASHBOARD:
      return { ...state, adminInfo: action.payload };

  }

  return state;
}
