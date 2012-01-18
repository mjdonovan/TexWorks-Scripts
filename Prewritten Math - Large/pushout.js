// TeXworksScript
// Title: Pushout square
// Description: inserts a pushout square
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+P,Alt+U,Alt+S,Alt+H
    
var StartingText="\\[\\xymatrix{\n\u00BF\u25BA %Top Left\n\\ar[r]^-{\u0416\u25BA}   %Top arrow\n\\ar[d]_-{\u0416\u25BA}   %Left arrow\n\\ar@{}[rd]|{\\textup{p.o.}}&\n\u00BF\u25BA %Top Right\n\\ar[d]^-{\u0416\u25BA}\\\\ %Right arrow\n\u00BF\u25BA %Bottom Left\n\\ar[r]_-{\u0416\u25BA}&  %Bottom arrow\n\u00BF  %Bottom right\n}\\]\n";
	
TW.target.insertText(StartingText);
TW.target.selectRange(TW.target.selectionStart-1, 1);
TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+13, 1);