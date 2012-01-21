// TeXworksScript
// Title:  CONVERSATION
// Description:  inserts \CONVERSATION{}{}{}
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+C,Alt+O,Alt+N,Alt+V
    

var textBlock =  TW.target.selection;
var putAtStart = "\\CONVERSATION{";
var putAtEnd = "}{}{}";
var INSERTME = putAtStart + textBlock + putAtEnd;
var moveBackIfEmpty = putAtEnd.length;

TW.target.insertText(INSERTME);
if (textBlock.length==0) {
     TW.target.selectRange(TW.target.selectionStart-moveBackIfEmpty, 0);
}