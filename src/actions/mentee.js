import axios from 'axios';

export const menteeChosen = (mentee_id) => dispatch => {
    //Once you chose the mentee this sets the current mentee to be that one
    dispatch({type: 'MENTEE_CHOSEN', payload: mentee_id})
}


export const flushMenteeList = () => dispatch => {
    //When the user logs out we will no longer be needing this list of mentees so we'd want to get rid of it
    dispatch({ type: 'FLUSH_MENTEE_LIST' })
  }

export const createMentee = (mentee_info) => dispatch => {
    //Add a new mentee to your list of mentees
    axios.post("http://localhost:3001/mentees", {name: mentee_info.name, user_id: mentee_info.user_id})
    .then(resp => {
        dispatch({type: 'CREATE_MENTEE', payload: resp.data})
    })
}

export const changeMentee = () => dispatch => {
    //When the user clicks the button to change the current mentee
    dispatch({ type: 'CHANGE_MENTEE' })
  }