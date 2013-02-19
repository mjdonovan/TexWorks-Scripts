// TeXworksScript
// Title:  Lecture series
// Description: start a series of lectures
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: 
    
var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()

var strrr="% entered " + day + "/" + month + "/" + year+"\n";
var StartingText=strrr+
"\\lectureSeries{lecturer\u25BA}%\n{\u2590semester\u258C\u25BA}%\n{\u2590series title\u258C}%\n{}%abstract\n{}%summary\n{}%new lectures here\n\n"

TW.target.insertText(StartingText);
TW.target.selectRange(TW.target.selectionStart-1, 1);
TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+15+strrr.length,8);
