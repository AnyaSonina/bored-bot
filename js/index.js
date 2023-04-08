const changableText = document.getElementById("api_changes")
const subtitle = document.getElementById("subtitle")

document.getElementById("btn").addEventListener("click", function() {
  changableText.classList.remove("api_changes")  
  subtitle.remove(subtitle)

  fetch("https://www.boredapi.com/api/activity/")
  .then(response => response.json())
  .then(data => {
    changableText.classList.add("api_changes")      
    changableText.textContent = data.activity 
    document.getElementById("title").textContent = "💡Look what I found💡"
    
  })
})