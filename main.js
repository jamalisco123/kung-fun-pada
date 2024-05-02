// KF Panda Search

// Button Event Listner
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();

  //If statement - Test the Input
  if (name === "Po") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML = s;
    ("Buddy,I am the Dragon Warrior! ");
    document.getElementById("char-img").src = "Img/po.png";
  } else if (name === "tigress") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML = "That was hardcore! ";
    document.getElementById("char-img").src = "Img/tigress.png";
  } else if (name === "mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML = "Fear the Bug! ";
    document.getElementById("char-img").src = "Img/mantis.png";
  } else if (name === "monkey") {
    document.getElementById("char-name").innerHTML = "monkey";
    document.getElementById("char-quote").innerHTML =
      "Monkey looks into a mirror! ";
    document.getElementById("char-img").src = "Img/Monkey.png";
  } else if (name === crane) {
    document.getElementById("char-name").innerHTML = "crane";
    document.getElementById("char-quote").innerHTML = "Egrets in body shape! ";
    document.getElementById("char-img").src = "Img/crane.png";
  } else if (name === shifu) {
    document.getElementById("char-name").innerHTML = "shifu";
    document.getElementById("char-quote").innerHTML =
      "you will never be better than you are! ";
    document.getElementById("char-img").src = "Img/shifu.png";
  } else if (name === shen) {
    document.getElementById("char-name").innerHTML = "shen";
    document.getElementById("char-quote").innerHTML =
      "you are right then i choose this! ";
    document.getElementById("char-img").src = "Img/shen.png";
  } else if (namwe === boss - wolf) {
    document.getElementById("char-name").innerHTML = "boss-wolf";
    document.getElementById("char-quote").innerHTML =
      "The panda ? that's immpossible! ";
    document.getElementById("char-img").src = "Img/boss-wolf.png";
  } else if (name === croc) {
    document.getElementById("char-name").innerHTML = "croc";
    document.getElementById("char-quote").innerHTML = "That was hardcore! ";
    document.getElementById("char-img").src = "Img/croc.png";
  } else if (name === favicon) {
    document.getElementById("char-name").innerHTML = "favicon";
    document.getElementById("char-quote").innerHTML =
      "black and yellow warrior! ";
    document.getElementById("char-img").src = "Img/favicon.png";
  } else if (name === kai) {
    document.getElementById("char-name").innerHTML = "kai";
    document.getElementById("char-quote").innerHTML = "That was hardcore! ";
    document.getElementById("char-img").src = "Img/kai.png";
  } else if (name === mr - ping) {
    document.getElementById("char-name").innerHTML = "mr-ping";
    document.getElementById("char-quote").innerHTML =
      "the secret ingredient is! ";
    document.getElementById("char-img").src = "Img/ping.png";
  } else if (name === oogway) {
    document.getElementById("char-name").innerHTML = "oogway";
    document.getElementById("char-quote").innerHTML = "That was hardcore! ";
    document.getElementById("char-img").src = "Img/oogway.png";
  } else if (name === soothsayer) {
    document.getElementById("char-name").innerHTML = "soothsayer";
    document.getElementById("char-quote").innerHTML =
      "a person who predicts the future! ";
    document.getElementById("char-img").src = "Img/soothsayer.png";
  } else if (name === storming - ox) {
    document.getElementById("char-name").innerHTML = "storming-ox";
    document.getElementById("char-quote").innerHTML = "That was hardcore! ";
    document.getElementById("char-img").src = "Img/storming-ox.png";
  } else if (name === tai - lung) {
    document.getElementById("char-name").innerHTML = "tai-lung";
    document.getElementById("char-quote").innerHTML = "That was hardcore! ";
    document.getElementById("char-img").src = "Img/tail-lung.png";
  } else if (name === viper) {
    document.getElementById("char-name").innerHTML = "viper";
    document.getElementById("char-quote").innerHTML = "That was hardcore! ";
    document.getElementById("char-img").src = "Img/viper.png";
  } else {
    document.getElementById("char-name").innerHTML = "??????";
    document.getElementById("char-quote").innerHTML = "------------- ";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}
