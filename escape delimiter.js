// TeXworksScript
// Title:  Escape delimiter
// Description: move cursor to end of next delimiter
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Esc


 var portion = TW.target.text;
// var lengthofdoc = portion.length;
// var chooseFrom = []; 
 var portion = TW.target.text.substr(TW.target.selectionStart)
//     portion = portion.substr(TW.target.selectionStart);
//     if (portion.length>100)
//     {
//          portion=portion.substring(0,100);
//     }
// var portionlength = portion.length;
 
 var endgp = portion.search(/\}/);
 var curly = portion.search(/\\\}/);
 var round = portion.search(/\)/);
 var squar = portion.search(/\]/);
 var endmA = portion.search(/\\\]/);
 var endmB = portion.search(/\$/);
 var rangl = portion.search(/\\rangle/);
 var verti = portion.search(/\|/);
 var VERTI = portion.search(/\\\|/);
 var newln = portion.search(/\n/);
 var amper = portion.search(/&/);

 var icoms = portion.search(/''/);
 var icomm = portion.search(/'/);

 if (endgp<0) {endgp=10000}
 if (curly<0) {curly=10000}
 if (round<0) {round=10000}
 if (squar<0) {squar=10000}
 if (endmA<0) {endmA=10000}
 if (endmB<0) {endmB=10000}
 if (rangl<0) {rangl=10000}
 if (verti<0) {verti=10000}
 if (VERTI<0) {VERTI=10000}
 if (newln<0) {newln=10000}
 if (amper<0) {amper=10000}

 if (icoms == icomm) {icomm=-1}
 if (icoms<0) {icoms=10000}
 if (icomm<0) {icomm=10000}

endgp+=1;
curly+=2;
round+=1;
squar+=1;
endmA+=2;
endmB+=1;
rangl+=7;
verti+=1;
VERTI+=2;
newln+=1;
amper+=1;

icomm+=1;
icoms+=2;

 var DIST=Math.min(endgp,curly,round,squar,endmA,
              endmB,rangl,verti,VERTI,newln,
              amper,icomm,icoms);
 if (DIST>10000)
  {DIST=0;}
 TW.target.selectRange(TW.target.selectionStart+DIST, 0);


/*
TW.target.insertText("\n");
TW.target.insertText("length   " + portionlength + "\n");
TW.target.insertText("}        " + endgp + "\n");
TW.target.insertText("\\}       "+ curly + "\n");
TW.target.insertText(")        " + round + "\n");
TW.target.insertText("]        " + squar + "\n");
TW.target.insertText("\\]       "+ endmA + "\n");
TW.target.insertText("$        " + endmB + "\n");
TW.target.insertText("\\rangle  "+ rangl + "\n");
TW.target.insertText("|        " + verti + "\n");
TW.target.insertText("\\|       "+ VERTI + "\n");
TW.target.insertText("new line " + newln + "\n");
TW.target.insertText("&        " + amper + "\n");
*/

 