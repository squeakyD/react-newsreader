import {
  REQUEST_SOURCES,
  RECEIVE_SOURCES,
  REQUEST_HEADLINES,
  RECEIVE_HEADLINES,
  //SELECT_HEADLINE
} from "./actions";
import { combineReducers } from "redux";

// State:
const initState = {
  sources: {
    isFetching: false,
    lastUpdated: null,
    items: []
  },
  headlines: {
    isFetching: false,
    sourceId: null,
    lastUpdated: null,
    items: []
  }
};

function sources(state = initState, action) {
  switch (action.type) {
    case REQUEST_SOURCES:
      return Object.assign({}, { isFetching: true });
    case RECEIVE_SOURCES:
      return Object.assign({}, {
        isFetching: false,
        items: action.payload,
        lastUpdated: Date.now()
      }
      );

    default:
      return state;
    //break;
  }
}

function headlines(state = initState, action) {
  switch (action.type) {
    case REQUEST_HEADLINES:
      return Object.assign({}, { isFetching: true });
    case RECEIVE_HEADLINES:
      return Object.assign({}, {
        isFetching: false,
        items: action.payload,
        lastUpdated: Date.now()
      });

    // // Not sure if we need this
    // case SELECT_HEADLINE:
    //   break;

    default:
      return state;
    //break;
  }
}

const rootReducer = combineReducers({ sources, headlines });

export default rootReducer;