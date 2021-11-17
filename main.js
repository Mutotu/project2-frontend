//we will be fetching event data here




//fetch
function apiGrab(){
    const url = 'https://app.ticketmaster.com/discovery/v2/events.json?postalCode=10001&&size=50&apikey=HVHkGyCe9F51oWTGX75Ifxj1nyo8knMX'
    fetch(url).then(response => {
    console.log('the fetch is completed')
    console.log(response)
    response.json().then(data => {
        console.log(data)
  })})}