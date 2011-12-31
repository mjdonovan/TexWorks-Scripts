// TeXworksScript
// Title:  \{\} - Braces - extensible
// Description: inserts braces
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Shift+F10
    
var textBlock =  TW.target.selection;
var putAtStart = "\\left\\{";
var putAtEnd = "\\right\\}";
var INSERTME = putAtStart + textBlock + putAtEnd;
var moveBackIfEmpty = putAtEnd.length;

TW.target.insertText(INSERTME);
if (textBlock.length==0) {
     TW.target.selectRange(TW.target.selectionStart-moveBackIfEmpty, 0);
}