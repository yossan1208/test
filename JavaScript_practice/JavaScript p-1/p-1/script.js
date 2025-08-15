// ============================
// 1

document.write("問１<br>")

for (let i = 0; i < 5; i++){
  document.write("★");
}



// ============================
// 2
document.write("<br>");
document.write("問2<br>");



for(let i = 0; i < 2; i++){
  for(let j = 0; j < 3; j++){
    document.write("★");
  }
  document.write("<br>");
}



// =======================
// 3
document.write("<br>");
document.write("問3<br>");


for(let i = 0; i < 2; i++){
  for(let j = 0; j < 5; j++){
    document.write("⭐︎");
  }
  document.write("<br>");
};





// ========================
// 4
document.write("<br>");
document.write("問4<br>")


for(let i = 0; i < 4; i++){
  for(let j = 0; j < 5; j++){
    document.write("★");
  }
  document.write("<br>");
}



// =====================
// 5
document.write("<br>");
document.write("問5<br>");


for(let i = 0; i < 4; i++){
  for(let j = 0; j < 3; j++){
    document.write("★");
  }
  document.write("<br>");
}



// ===========================
// 6
document.write("<br>");
document.write("問6<br>");


for(let i = 0; i < 3; i++){
  for(let j = 0; j < 3; j++){
    if(j % 2 == 0){
      document.write("★");
    } else {
      document.write("⭐︎");
    }
  }
  document.write("<br>");
}


// ===========================
// 7
document.write("<br>");
document.write("問7<br>");

for(let i = 0; i < 4; i++){
  for(let j = 0; j < 5; j++){
    if(j % 2 == 0){
      document.write("★");
    } else {
      document.write("⭐︎");
    }
  }
  document.write("<br>");
}


// ===========================
// 8
document.write("<br>");
document.write("問8<br>");




for(let i = 0; i < 5; i++) {
  let star = "";
  for(let j = 0; j <= i; j++) {
    star += "★";
  }
  document.write(star);
  document.write("<br>");
}