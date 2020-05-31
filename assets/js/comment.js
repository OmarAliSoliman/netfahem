var textareaWordNumber = document.querySelector("#text-comment-word");
var btnSubmitComment = document.querySelector(".btn-comment");
var commentForm = document.querySelector("#comment-form");
var number500 = document.querySelector("#number500");

var number = parseInt(number500.textContent);
console.log(typeof number);
var wordsNumber;
numberWords = (val) => {
  if (textareaWordNumber.value === "") {
    number500.textContent = 500;
    wordsNumber = 0;
    number = parseInt(number500.textContent);
  }
  // else {
  //   // console.log(val);
  //   // var wordsNumber = textareaWordNumber.value.split(" ").length;
  //   // console.log(wordsNumber);
  //   // number = number - 1;
  //   // number500.textContent = number;
  // }
};

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  wordsNumber = textareaWordNumber.value.split(" ").length;
  if (wordsNumber > 500) {
    number500.textContent = number-wordsNumber;
    alert("no");
  } else {
    number = number - wordsNumber;
    number500.textContent = number;
    console.log(number);
    number = 500;
  }
});
