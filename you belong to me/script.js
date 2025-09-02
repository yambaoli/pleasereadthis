const message = `i just wanted to say a proper goodbye. i’m not here to make you stay because it’s clear to me that you really want us to end. i know you’re having a great time with your new life and it’s time for me to try to do the same.

i hope that you won’t find love in the wrong places because you know damn well that you can always come back to me and be loved the right way. thank you for giving me three beautiful years, memories that i will forever carry in my heart. if you don’t want to reply i completely understand. i just needed you to know that i’m sorry for the times i hurt you and that i’m also grateful for the happiness you gave me. i hope you’ll remember me as someone who loved you deeply.

remember the moments we laughed, the nights we talked until 4am, the corny jokes, the flowers, the food trips, the travels, the cuddles, the tears and the comfort, the songs i played on my guitar, the way we always found our way back to each other. we could’ve written a whole book with the story we had. maybe our story ends here but every chapter will always mean something to me.

please keep the rings. the promise ring was my way of telling you that i would love you forever, no matter what. the engagement ring was my way of showing you that i wanted us to be together in the future, to build a life side by side. don’t sell them, they were never about money, they were symbols of my love and my hope for us. hug the giant stuffed toy that we won in the arcade whenever you miss me. and please remember my family too, especially nanay, who cared for us as her own.

i’m sorry for the times i failed you and i hope one day you can forgive me. thank you for staying as long as you did, even on the hardest days. if you ever need someone to talk to don’t be afraid to reach out. for now i’ll take a break from relationships and focus on healing.

i will forever remember you ling, i still love you but i just couldn’t let you leave without me saying goodbye.

always remember you are very very beautiful, the most gorgeous girl in my eyes. i love you yel. please remember me and us.

goodbye.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
