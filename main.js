const submitButton = document.getElementById("upload")
const travelogueText = document.getElementById("travel")
const userText = document.getElementById("user")

function uploadTravelogue  (evt){
    evt.preventDefault()
    let upload ={
        user: userText.value,
        travelText: travelogueText.value
    }
    console.log(upload)
    axios.post("/submit", upload)
    .then( (res) => {
        console.log(res.data)
    })
    .catch((err) => {
        alert(err)
    })
}




submitButton.addEventListener("click",uploadTravelogue)