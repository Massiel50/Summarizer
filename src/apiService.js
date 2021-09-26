


export const startCall = (phone ) => { 


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


  const  requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({phone}),
    redirect: 'follow'
  };
  fetch("https://tadhack2021-user-service.herokuapp.com/start_session", requestOptions)
  .then(response => response.json())
}



export const fetchSessions = async () =>  {
  return fetch("https://tadhack2021-user-service.herokuapp.com/sessions/1").then(res => res.json())
}