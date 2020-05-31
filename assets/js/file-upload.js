var fileInput = document.querySelector('#file-input');
var fileName = document.querySelector('#file-name');
var fileNumber = document.querySelector('#number-file');
var deleteFile = document.querySelector('#delete-file');
fileInput.addEventListener('change', ()=>{
  // var nameOfFile = fileInput.value.replace(/.*[\/\\]/, '');
  // fileName.textContent = nameOfFile;
  // console.log(fileInput.value);
  var files = $('#file-input').prop("files");
  var names = $.map(files, function(val) { return val.name; });
  console.log(names.length);
  fileNumber.textContent = `${names.length} ملفات`
  for(var i=0; i<names.length; i++){
    fileName.textContent += ` ${names[i]} /`
  }
  deleteFile.innerHTML = `<i class="fas fa-times"></i>`;
})

deleteFile.addEventListener('click', ()=>{
  fileNumber.textContent = "";
  fileName.textContent = "";
  deleteFile.innerHTML = "";
})


var fileInputProto = document.querySelector('#file-input-proto');
var fileNameProto = document.querySelector('#file-name-proto');
fileInputProto.addEventListener('change', ()=>{
  var nameOfFile = fileInputProto.value.replace(/.*[\/\\]/, '');
  fileNameProto.textContent = nameOfFile;
  console.log(fileInputProto.value);
})