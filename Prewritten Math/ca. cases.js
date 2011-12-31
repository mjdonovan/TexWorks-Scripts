// TeXworksScript
// Title:  cases
// Description: insert \begin{cases}.....
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+C,Alt+A
    
TW.target.insertText("\\begin{cases}\n,&\\textup{if };\\\\\n,&\\textup{if }.\n%\\\\,&\\textup{if }\n%\\\\,&\\textup{if }\n%\\\\,&\\textup{if }\n\\end{cases}");
TW.target.selectRange(TW.target.selectionStart-99, 0)
