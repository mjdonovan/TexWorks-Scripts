// TeXworksScript
// Title:  inverted commas ` '
// Description: inserts inverted commas
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+`
    
var textBlock =  TW.target.selection;
var putAtStart = "`";
var putAtEnd = "'";
var INSERTME = putAtStart + textBlock + putAtEnd;
var moveBackIfEmpty = putAtEnd.length;

var selstart = TW.target.selectionStart;

TW.target.insertText(INSERTME);

TW.target.selectRange(selstart+1, textBlock.length);