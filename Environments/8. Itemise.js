// TeXworksScript
// Title:  8. Itemise
// Description: Starts an itemise
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+8
    
TW.target.insertText("\\begin{itemise}\n\\item \n\\end{itemise}\n");
TW.target.selectRange(TW.target.selectionStart-15, 0)
