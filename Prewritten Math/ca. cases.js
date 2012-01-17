// TeXworksScript
// Title:  cases
// Description: insert \begin{cases}.....
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+C,Alt+A
    
var StartingText="\\begin{cases}\n\u00BF\u25BA,&\\textup{if }\u00BF\u25BA;\\\\\n\u00BF\u25BA,&\\textup{if }\u00BF.\n%\\\\,&\\textup{if }\n\\end{cases}\n"
	
TW.target.insertText(StartingText);
TW.target.selectRange(TW.target.selectionStart-1, 1);
TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+14, 1);
