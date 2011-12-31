// TeXworksScript
// Title:  3. Theorem
// Description: Starts a thm*
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+3
    
TW.target.insertText("\\begin{thm*}\n\n\\end{thm*}\n");
TW.target.selectRange(TW.target.selectionStart-12, 0)
