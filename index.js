//styling related code
document.getElementById("copy").style.display = "none"
document.querySelectorAll("input").forEach(elm => elm.style.width = "500px")


//adding button press copy eventListenner
const cb = new ClipboardJS("#copy")

function copy(){
    //getting the command and transforming it
    let content = document.getElementById("INPUT").value;
    document.getElementById("command").value = "/execute in minecraft:the_nether run tp @s "+((Math.floor(content.split(" ")[6]))/8)+" "+((Math.floor(content.split(" ")[7])))+" "+((Math.floor(content.split(" ")[8]))/8);
    document.getElementById("copy").click()
}

//utility
document.getElementById("INPUT").addEventListener("keypress",event=>{
    if(event.charCode==13){
        document.querySelector('#gen').click()
    }
})