// TeXworksScript
// Title:  new savebox
// Description: Start a new savebox
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+Shift+S,Alt+Shift+B


var sbname = "\\savebox";
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for( var i=0; i < 3; i++ )
{
	sbname += possible.charAt(Math.floor(Math.random() * possible.length));
}


var textBlock =  TW.target.selection;
var putAtStart = "%%% BEGIN: \\usebox{"+sbname+"}\n\\newsavebox{"+sbname+"}\n\\sbox{"+sbname+"}{\n";
var putAtEnd = "\n}"+"%%% END:  \\usebox{"+sbname+"}\n";
if (TW.target.text[TW.target.selectionStart-1]!="\n")
{
	putAtStart="\n"+putAtStart;
}
var INSERTME = putAtStart + textBlock + putAtEnd;
var moveBackIfEmpty = putAtEnd.length;

TW.target.insertText(INSERTME);
if (textBlock.length==0) {
     TW.target.selectRange(TW.target.selectionStart-moveBackIfEmpty, 0);
}

