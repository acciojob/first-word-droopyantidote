function firstWord(s) {
  if (s === "" || s.indexOf(" ") === -1) {
    return s;
  } else {
    return s.substring(0, s.indexOf(" "));
  }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s.trim())); // Use trim() to remove leading and trailing whitespace
