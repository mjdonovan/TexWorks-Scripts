// TeXworksScript
// Title:  Begin Environment
// Description: Starts a \begin{environment}
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+B, Alt+E, Alt+G
    
TW.target.insertText("\\begin{}\n");
TW.target.selectRange(TW.target.selectionStart-2, 0)
