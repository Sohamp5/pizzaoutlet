const rot1 = document.getElementById('rotated1')
const rot2 = document.getElementById('rotated2')

function rotatediv(){
    rot1.style.transform = 'rotateY(180deg)'
    rot1.style.visibility = 'hidden'
    rot2.style.transform = 'rotateY(0deg)'
    rot2.style.visibility = 'visible'
}
ar=[{usn:'admin',pwd:'123'},]

function log(){
    e=document.getElementById("em").value
    p=document.getElementById("ps").value
    for(let u of ar){
        if(e==u['usn'] && p==u['pwd']){
            location.href='https://github.com/Sohamp5/pizzaoutlet/blob/fb320429f4d401106db7aa3665c9bd32ed87c0c2/public/html/indx.html'
            alert("login successful")
        }
        else{
            alert("login unsuccessful")
        }
    }
}
