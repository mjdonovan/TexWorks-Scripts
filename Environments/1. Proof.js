// TeXworksScript
// Title:  1. Proof
// Description: Starts a proof
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+1
    
TW.target.insertText("\\begin{proof}\n\n\\end{proof}\n");
TW.target.selectRange(TW.target.selectionStart-13, 0)
