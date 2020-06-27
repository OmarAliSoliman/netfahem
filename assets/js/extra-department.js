var extraDepartments = document.querySelectorAll('.extra-department');
var cardDepartment = document.querySelectorAll('.card-department');
console.log(cardDepartment);
cardDepartment.forEach((dep, index)=>{
  dep.addEventListener('click', ()=>{
    // console.log(index);
    // console.log(extraDepartments[index].id)
    // console.log(`#extra-slider-${index}`);
    extraDepartments.forEach((extra)=>{
      extra.style.display = "none";
    })
    extraDepartments[index].style.display = "block";
    // document.querySelector(`#extra-slider-${index}`).style.display = 'block';
  })
})


closeExtraDepartment = document.querySelectorAll('.close-extra-department');
closeExtraDepartment.forEach((close, index)=>{
  close.addEventListener('click', ()=>{
    close.parentElement.style.display = "none";
    // console.log(close.parentElement);
  })
})