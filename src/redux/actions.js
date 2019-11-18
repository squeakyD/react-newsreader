//import { GET_SOURCES, GET_HEADLINES } from './actionTypes';
import fetch from 'cross-fetch';

export const REQUEST_SOURCES = "REQUEST_SOURCES";
export const REQUEST_HEADLINES = "REQUEST_HEADLINES";
export const RECEIVE_SOURCES = "RECEIVE_SOURCES";
export const RECEIVE_HEADLINES = "RECEIVE_HEADLINES";

const requestSources = () => ({
  type: REQUEST_SOURCES,
  payload: null
});

const receiveSources = json => ({
    type: RECEIVE_SOURCES,
    payload: json
});

const requestHeadlines = sourceId => ({
  type: REQUEST_HEADLINES,
  sourceId
});

const receiveHeadlines = json => ({
  type: RECEIVE_HEADLINES,
  payload: json
});

export function fetchSources() {
  return function(dispatch) {
    dispatch(requestSources());

    fetch("https://newsapi.org/v2/sources?language=en", {
      headers: {
        "X-Api-Key": "ac4c679286fe4d65a49acbae84c2cde7"
      }
    })
      .then(resp => {
        if (resp.status > 400) {
          console.log("Bad response from server", resp);

          // TOOD: Need better error handling strategy
          throw new Error("Bad response from server");
        }
        return resp.json();
      })
      .then(json => dispatch(receiveSources(json.sources)));
  };
}


export function fetchHeadlinesIfNeeded(sourceId) {
  return (dispatch, getState) => {
    if (shouldFetchHeadlines(getState(), sourceId)) {
      return dispatch(fetchHeadlines(sourceId));
    }
  }
}

function shouldFetchHeadlines(state, sourceId) {
  const headlines = state.headlines;
  if (!headlines.items) {
    return true;
  } else if (headlines.isFetching) {
    return false;
  } else {
    const existsForSource = headlines.items.find(i => i.source.id === sourceId) !== undefined;
    if (!existsForSource) {
      return true;
    }

    const secondsDiff = (Date.now() - headlines.lastUpdated) / 1000;
    const expired = secondsDiff > 600; // 10 mins

    if (expired) {
      console.log('Fetching headlines as timeout expired')
    }

    return expired;
  }
}

function fetchHeadlines(sourceId) {
  return function (dispatch) {
    dispatch(requestHeadlines(sourceId));

      fetch("https://newsapi.org/v2/top-headlines?language=en", {
        headers: {
          "X-Api-Key": "ac4c679286fe4d65a49acbae84c2cde7"
        }
      })
        .then(resp => {
          if (resp.status > 400) {
            console.log("Bad response from server", resp);

            // TOOD: Need better error handling strategy
            throw new Error("Bad response from server");
          }
          return resp.json();
        })
        .then(json => dispatch(receiveHeadlines(json.articles)));
  };
}
