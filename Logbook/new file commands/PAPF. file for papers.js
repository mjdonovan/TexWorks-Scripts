// TeXworksScript
// Title:  add file to paper
// Description: add a scanned file to a paper
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+P,Alt+A,Alt+P,Alt+F

var StartingText=
"\\papf{filename\u25BA}{\u2590description\u258C}\n"
	
TW.target.insertText(StartingText);
TW.target.selectRange(TW.target.selectionStart-1, 1);
TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+6, 8);
