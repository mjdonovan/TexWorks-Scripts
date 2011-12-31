// TeXworksScript
// Title:  \raisebox
// Description:  inserts \raisebox
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+R,Alt+A,Alt+I,Alt+S

var textBlock =  TW.target.selection;
var putAtStart = "\\raisebox{-6mm}{$";
var putAtEnd = "$}";
var INSERTME = putAtStart + textBlock + putAtEnd;
var moveBackIfEmpty = putAtEnd.length;

TW.target.insertText(INSERTME);
if (textBlock.length==0) {
     TW.target.selectRange(TW.target.selectionStart-moveBackIfEmpty, 0);
}