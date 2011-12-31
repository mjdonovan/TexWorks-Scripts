// TeXworksScript
// Title:  7. Lemma
// Description: Starts a lemma
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+7
    
TW.target.insertText("\\begin{lem*}\n\n\\end{lem*}\n");
TW.target.selectRange(TW.target.selectionStart-12, 0)
