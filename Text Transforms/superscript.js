// TeXworksScript
// Title:  ^{}
// Description:  inserts ^{}
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Ctrl+Shift+6
    
var textBlock =  TW.target.selection;
var putAtStart = "^{";
var putAtEnd = "}";
var INSERTME = putAtStart + textBlock + putAtEnd;
var moveBackIfEmpty = putAtEnd.length;

TW.target.insertText(INSERTME);
if (textBlock.length==0) {
     TW.target.selectRange(TW.target.selectionStart-moveBackIfEmpty, 0);
}