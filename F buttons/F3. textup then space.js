// TeXworksScript
// Title:  \textup{}\,
// Description:  inserts \textup{}\,
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: F3

var textBlock =  TW.target.selection;
var putAtStart = "\\textup{";
var putAtEnd = "}\\,";
var INSERTME = putAtStart + textBlock + putAtEnd;
var moveBackIfEmpty = putAtEnd.length;

TW.target.insertText(INSERTME);
if (textBlock.length==0) {
     TW.target.selectRange(TW.target.selectionStart-moveBackIfEmpty, 0);
}