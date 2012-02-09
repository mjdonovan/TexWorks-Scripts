// TeXworksScript
// Title:  \mathsf{}
// Description:  inserts \mathsf{}
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+S,Alt+F

if (TW.target.selection.length==1 && TW.target.selection.search(/[\u1FAE\u1FAF\u00BF\u25D9\u06F7\u06F8\u0416\u03E2\u25CF\u1F40\u1F41\u1F42\u1F43\u1F44\u1F45\u1F46\u1F47\u1F48\u1F49\u1F4A\u1F4B\u1F4C\u1F4D\u1F80\u1F81\u1F82\u1F83\u1F84\u1F85\u1F86\u1F87\u1F88\u1F89\u1F8A\u1F8B\u1F8C\u1F8D\u1F8E\u1F8F]/)==0)
{TW.target.insertText("");}

var textBlock =  TW.target.selection;
var putAtStart = "\\mathsf{";
var putAtEnd = "}";
var INSERTME = putAtStart + textBlock + putAtEnd;
var moveBackIfEmpty = putAtEnd.length;

TW.target.insertText(INSERTME);
if (textBlock.length==0) {
     TW.target.selectRange(TW.target.selectionStart-moveBackIfEmpty, 0);
}