// TeXworksScript
// Title:  add file to seminar
// Description: add a scanned file to a seminar series
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+S,Alt+E,Alt+M,Alt+F

var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()

var StartingText=
"\\semf{speaker\u25BA}{\u2590filename\u258C\u25BA}{\u2590"+day+"\u258C/"+month+"/"+year+"\u25BA}{\u2590title\u258C\u25BA}{\u2590abstract\u258C\u25BA}{\u2590overview\u258C}\n"
	
TW.target.insertText(StartingText);
TW.target.selectRange(TW.target.selectionStart-1, 1);
TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+6, 7);
