// TeXworksScript
// Title:  subsubsection
// Description: Starts a subsubsection
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+Shift+S, Alt+Shift+S
    
TW.target.insertText("\\subsubsection*{}\n");
TW.target.selectRange(TW.target.selectionStart-2, 0)
