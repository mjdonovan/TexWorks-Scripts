// TeXworksScript
// Title:  log a personal document
// Description: add a personal document to the log
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+P,Alt+E,Alt+R,Alt+S

var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()

var strrr="% entered " + day + "/" + month + "/" + year+"\n";
var StartingText=strrr+
"\\personal{filename\u25BA}%\n{\u2590"+day+"\u258C/"+month+"/"+year+"\u25BA}%\n{\u2590description\u258C\u25BA}%\n{\u2590not retained\u258C}\n\n"

TW.target.insertText(StartingText);
TW.target.selectRange(TW.target.selectionStart-1, 1);
TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+10+strrr.length, 8);
