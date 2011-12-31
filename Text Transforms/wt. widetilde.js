// TeXworksScript
// Title:  \widetilde{}
// Description:  inserts \widetilde{}
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+W,Alt+T
    
var textBlock =  TW.target.selection;
var putAtStart = "\\widetilde{";
var putAtEnd = "}";
var INSERTME = putAtStart + textBlock + putAtEnd;
var moveBackIfEmpty = putAtEnd.length;

TW.target.insertText(INSERTME);
if (textBlock.length==0) {
     TW.target.selectRange(TW.target.selectionStart-moveBackIfEmpty, 0);
}