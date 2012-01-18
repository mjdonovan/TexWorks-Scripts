// TeXworksScript
// Title:  adjunction
// Description: insert adjunction
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+A,Alt+D,Alt+J

var putAtStart="\\[\\xymatrix@R=.3cm@C=2cm{\n\u25D9\u25BA  \\ar@<.6ex>[r]^{\u06F8\u25BA}&\n\u25D9\u25BA  \\ar@<.4ex>[l]^{\u06F8}\\\\\n%X \\ar@{|->}[r] & FX\\\\\n%GY             & Y \\ar@{|->}[l]\n}\\]\n";

if (TW.target.text[TW.target.selectionStart-1]!="\n")
{
	putAtStart="\n"+putAtStart;
}

TW.target.insertText(putAtStart);
TW.target.selectRange(TW.target.selectionStart-108, 1)
