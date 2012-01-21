// TeXworksScript
// Title:  subsection
// Description: Starts a subsection
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+S, Alt+S
    
TW.target.insertText("\\subsection*{}\n");
TW.target.selectRange(TW.target.selectionStart-2, 0)
