// TeXworksScript
// Title:  \[...\]
// Description:  inserts \[\]
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+\,Alt+[
    
TW.target.insertText("\\[\\]\n");
TW.target.selectRange(TW.target.selectionStart-3, 0)
