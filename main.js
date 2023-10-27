console.log("baglantı kontrol ");

const placeholder = document.querySelector(".placeholder");
//console.log(placeholder)
const editableInput = document.querySelector(".editable");
//console.log(editableInput)

const counter = document.getElementById("counter");
const tweetbutton = document.querySelector(".button");

const readonly = document.querySelector(".readonly");
//console.log(readonly)


//Tıklama olayını dinler    
editableInput.addEventListener("click", () => {

    // placeholder (span) rengını değişir 
  placeholder.style.color = "#98a5b1";
});


  // Inputun odagını disariya tıklanınca kaldırıyor
editableInput.onblur = () => {
  placeholder.style.color = "#333 ";
};
  // Klavyenın basılma olayını dinliyor 
editableInput.onkeypress = (e) => {
  placeholder.style.display = "none";

  inputvalidate(e.target.innerText);
};
// Klavyeden parmagımızı cektıgımız ani dinliyor
editableInput.onkeyup = (e) => {
  placeholder.style.display = "none";

  inputvalidate(e.target.innerText);
};

  // Yazılan tweetın karakter kontrolü 
const inputvalidate = (tweet) => {
    // Dısarıdan gelen ınput verısınin uzunluğunu  verir
  const tweetlength = tweet.length;

//tweeetımın limiti

  const tweetlimit = 35;


    // Kala  n karakter limiti
  const currentlimit = tweetlimit - tweetlength;

  if (tweetlength <= 0) {
    placeholder.style.display = "block";
    tweetbutton.classList.remove("active");
    counter.style.display = "none";
  } else {
    tweetbutton.classList.add("active");
    counter.style.display = "block";
    counter.innerText = currentlimit;
  }

  let newTweet;
  if (tweetlength > tweetlimit) {
    let overTweet = tweet.substr(tweetlimit, tweetlength);

    let overTweetElement = `<span class = 'overTweet'>${overTweet}</span>`;

    newTweet = tweet.substr(0, tweetlimit) + overTweetElement;

    readonly.style.zIndex='1';
    counter.style.color = "red";
    tweetbutton.classList.remove("active");
  } else {
    counter.style.color = "#333";
    readonly.style.zIndex='-5 ';

  }

  readonly.innerHTML = newTweet;
};
