function reverseWords(str) {
  return str.split(" ").map(
          function(a) {return a.split("").reverse().join("")}
         ).join(" ");
}

reverseWords('всегда много путей достичь цель есть'); // "есть цель достичь путей много всегда"
reverseWords('испробовать их все должны вы'); // "вы должны все их испробовать"
