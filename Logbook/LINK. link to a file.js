// TeXworksScript
// Title:  link to file
// Description: add a link to a file
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+L,Alt+I,Alt+N,Alt+K

var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()

var strrr="";
var StartingText=strrr+
"\\fileLink{filename\u25BA}{\u2590folder\u258C\u25BA}{\u2590text\u258C}"
	
TW.target.insertText(StartingText);
TW.target.selectRange(TW.target.selectionStart-1, 1);
TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+10+strrr.length, 8);
