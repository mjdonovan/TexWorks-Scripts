// TeXworksScript
// Title:  6. Definition
// Description: Starts a defn*
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+6
    
TW.target.insertText("\\begin{defn*}\n\n\\end{defn*}\n");
TW.target.selectRange(TW.target.selectionStart-13, 0)
