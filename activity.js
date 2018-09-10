/*
Copyright (C) 2018 Alkis Georgopoulos <alkisg@gmail.com>.
SPDX-License-Identifier: CC-BY-SA-4.0
*/

console.clear();
var game = { level: 0, numLevels: 15 };
var descriptions = [
'<h2>Τερατάκι #0</h2><p>Εδώ μπαίνει η περιγραφή.</p><p>Είναι διαφορετική για κάθε τερατάκι.</p>',
'<h2>Τερατάκι #1</h2><p>Εδώ μπαίνει η περιγραφή.</p><p>Είναι διαφορετική για κάθε τερατάκι.</p>',
'<h2>Τερατάκι #2</h2><p>Εδώ μπαίνει η περιγραφή.</p><p>Είναι διαφορετική για κάθε τερατάκι.</p>',
'<h2>Τερατάκι #3</h2><p>Εδώ μπαίνει η περιγραφή.</p><p>Είναι διαφορετική για κάθε τερατάκι.</p>',
'<h2>Τερατάκι #4</h2><p>Εδώ μπαίνει η περιγραφή.</p><p>Είναι διαφορετική για κάθε τερατάκι.</p>',
'<h2>Τερατάκι #5</h2><p>Εδώ μπαίνει η περιγραφή.</p><p>Είναι διαφορετική για κάθε τερατάκι.</p>',
'<h2>Τερατάκι #6</h2><p>Εδώ μπαίνει η περιγραφή.</p><p>Είναι διαφορετική για κάθε τερατάκι.</p>',
'<h2>Τερατάκι #7</h2><p>Εδώ μπαίνει η περιγραφή.</p><p>Είναι διαφορετική για κάθε τερατάκι.</p>',
'<h2>Τερατάκι #8</h2><p>Εδώ μπαίνει η περιγραφή.</p><p>Είναι διαφορετική για κάθε τερατάκι.</p>',
'<h2>Τερατάκι #9</h2><p>Εδώ μπαίνει η περιγραφή.</p><p>Είναι διαφορετική για κάθε τερατάκι.</p>',
'<h2>Τερατάκι #10</h2><p>Εδώ μπαίνει η περιγραφή.</p><p>Είναι διαφορετική για κάθε τερατάκι.</p>',
'<h2>Τερατάκι #11</h2><p>Εδώ μπαίνει η περιγραφή.</p><p>Είναι διαφορετική για κάθε τερατάκι.</p>',
'<h2>Τερατάκι #12</h2><p>Εδώ μπαίνει η περιγραφή.</p><p>Είναι διαφορετική για κάθε τερατάκι.</p>',
'<h2>Τερατάκι #13</h2><p>Εδώ μπαίνει η περιγραφή.</p><p>Είναι διαφορετική για κάθε τερατάκι.</p>',
'<h2>Τερατάκι #14</h2><p>Εδώ μπαίνει η περιγραφή.</p><p>Είναι διαφορετική για κάθε τερατάκι.</p>',
];

function openPage(pageName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "Transparent";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = "#e6e6e6";
}

function onMenuHome(event) {
  window.history.back();
}

function onMenuHelp(event) {
  console.log(event);
  alert("Ακούστε ή διαβάστε την περιγραφή από το τερατάκι και προσπαθήστε να το ζωγραφίσετε. Στη συνέχεια δείτε την καρτέλα Αποτέλεσμα.");
}

function onMenuAbout(event) {
  window.open("credits/index_DS_II.html");
}

function onMenuPrevious(event) {
  initLevel(game.level - 1);
}

function onMenuNext(event) {
  initLevel(game.level + 1);
}

function initLevel(newLevel) {
  game.level = (newLevel + game.numLevels) % game.numLevels;
  document.getElementById('level').innerHTML = '#' + (game.level+1) + ' / 15';
  document.getElementById('defaultOpen').click();
  document.getElementById('narration').src = 'resource/narration' + game.level + '.mp3';
  document.getElementById('description').innerHTML = descriptions[game.level];
  //document.getElementById('monster').style.background = "white url('resource/monster0.svg') no-repeat center center";
  document.getElementById('monster').setAttribute('style', "    background: white url('resource/monster" + game.level + ".svg') no-repeat center center;    -webkit-background-size: contain;    -moz-background-size: contain;    -o-background-size: contain;    background-size: contain;    box-sizing: border-box;");
}
