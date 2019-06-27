function initializeGoogleAPI() {
  let gapi = window.gapi;
  return new Promise((resolve) => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        apiKey: "AIzaSyCwmdmI3DVrOD-Tdromu8N-J-gXWqvcBe4",
        clientId: "795253427550-e7lvvtbellcidlur1p2kjvesle8tt7vl.apps.googleusercontent.com",
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scope: "https://www.googleapis.com/auth/calendar.events.readonly"
      }).then(() => {
        this.setState({
          currentUserProfile: null,
          authenticated: false
        })
        resolve()
      })
    })
  })
}
export default initializeGoogleAPI
