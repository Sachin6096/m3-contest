function OpeningCeremony(initialScores, callbackFnc) {
    console.log("Let the games begin!");
    setTimeout(() => {
      const scores = { ...initialScores };
      Race100M(scores, callbackFnc);
    }, 1000);
  }
  
  function Race100M(scores, callbackFnc) {
    console.log("Starting Race 100M...");
    const raceTimes = {
      red: Math.floor(Math.random() * 6) + 10,
      blue: Math.floor(Math.random() * 6) + 10,
      green: Math.floor(Math.random() * 6) + 10,
      yellow: Math.floor(Math.random() * 6) + 10,
    };
  
    const sortedColors = Object.keys(raceTimes).sort((a, b) => raceTimes[a] - raceTimes[b]);
    scores[sortedColors[0]] += 50;
    scores[sortedColors[1]] += 25;
  
    console.log("Race 100M completed!");
    console.log("Previous Scores:", scores);
    console.log("Winners: 1st", sortedColors[0], "2nd", sortedColors[1]);
  
    setTimeout(() => {
      callbackFnc(scores, LongJump);
    }, 1000);
  }
  
  function LongJump(scores, callbackFnc) {
    console.log("Starting Long Jump...");
    const chosenColor = ["red", "yellow", "green", "blue"][Math.floor(Math.random() * 4)];
    scores[chosenColor] += 150;
  
    console.log(`Long Jump Winner: ${chosenColor}`);
    console.log("Previous Scores:", scores);
  
    setTimeout(() => {
      callbackFnc(scores, HighJump);
    }, 2000);
  }
  
  function HighJump(scores, callbackFnc) {
    console.log("Starting High Jump...");
  
    const userInput = prompt("What colour secured the highest jump? (red/yellow/green/blue)");
  
    if (userInput) {
      const color = userInput.toLowerCase();
      if (scores[color] !== undefined) {
        scores[color] += 100;
        console.log(`${color} secured the highest jump!`);
      } else {
        console.log("Invalid input or colour not participating.");
      }
    } else {
      console.log("Event was cancelled.");
    }
  
    console.log("Previous Scores:", scores);
  
    setTimeout(() => {
      callbackFnc(scores, AwardCeremony);
    }, 1000);
  }
  
  function AwardCeremony(scores) {
    console.log("Final Scores:");
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    sortedScores.forEach((score, index) => {
      console.log(`${score[0]} came ${helper(index + 1)} with ${score[1]} points.`);
    });
  }
  

  function helper(num) {
    const suffixes = ["th", "st", "nd", "rd"];
    const remainder = num % 100;
    return num + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0]);
  }
  

  const initialScores = { red: 0, blue: 0, green: 0, yellow: 0 };
  

  OpeningCeremony(initialScores, Race100M);
  