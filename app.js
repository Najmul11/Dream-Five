let count=0
function buttonHandle(id1,id2,id3) {
   if (count<5) {
    const getName=document.getElementById(id1);
    const nameText=getName.innerText;
    const ol=document.getElementById(id2);
    const setName=document.createElement('li');
    setName.classList.add('px-3','py-1')
    setName.innerText=nameText;
    ol.appendChild(setName);
    const btn=document.getElementById(id3);
    btn.disabled=true;
    btn.style.backgroundColor='gray';
    btn.style.border='none';
    count++;
   } else {
    alert('Already 5 players selected');
   }
}
