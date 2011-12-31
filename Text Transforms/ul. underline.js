// TeXworksScript
// Title:  \underline{}
// Description:  inserts \underline{}
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+U,Alt+L

var textBlock =  TW.target.selection;
var putAtStart = "\\underline{";
var putAtEnd = "}";
var INSERTME = putAtStart + textBlock + putAtEnd;
var moveBackIfEmpty = putAtEnd.length;

TW.target.insertText(INSERTME);
if (textBlock.length==0) {
     TW.target.selectRange(TW.target.selectionStart-moveBackIfEmpty, 0);
}