const changableText = document.getElementById("api_changes")
const subtitle = document.getElementById("subtitle")

document.getElementById("btn").addEventListener("click", function() {
  changableText.classList.remove("api_changes")  
  subtitle.remove(subtitle)
  document.querySelector(".container").style.boxShadow = "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px";

  fetch("https://www.boredapi.com/api/activity/")
  .then(response => response.json())
  .then(data => {
    changableText.classList.add("api_changes")      
    changableText.textContent = data.activity 
    document.getElementById("title").textContent = "💡Look what I found💡"
    
  })
})

