// TeXworksScript
// Title:  claim
// Description: Starts a claim
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+C,Alt+L,Alt+A,Alt+I
    
TW.target.insertText("\\begin{claim}\n\n\\end{claim}\n");
TW.target.selectRange(TW.target.selectionStart-13, 0)
