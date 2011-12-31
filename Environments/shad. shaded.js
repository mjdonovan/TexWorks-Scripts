// TeXworksScript
// Title:  shaded
// Description: Starts a shaded environment
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+S,Alt+H,Alt+A,Alt+D

var textBlock =  TW.target.selection;
var putAtStart = "\\begin{shaded}\n";
var putAtEnd = "\n\\end{shaded}\n";
var INSERTME = putAtStart + textBlock + putAtEnd;
var moveBackIfEmpty = putAtEnd.length;

TW.target.insertText(INSERTME);
if (textBlock.length==0) {
     TW.target.selectRange(TW.target.selectionStart-moveBackIfEmpty, 0);
}