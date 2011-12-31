// TeXworksScript
// Title:  \langle \rangle - Double angle brackets
// Description: inserts Angle brackets
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+Shift+,

var textBlock =  TW.target.selection;
var putAtStart = "\\langle ";
var putAtEnd = "\\rangle";
var INSERTME = putAtStart + textBlock + putAtEnd;
var moveBackIfEmpty = putAtEnd.length;

TW.target.insertText(INSERTME);
if (textBlock.length==0) {
     TW.target.selectRange(TW.target.selectionStart-moveBackIfEmpty, 0);
}