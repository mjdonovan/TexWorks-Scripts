// TeXworksScript
// Title:  i.e.
// Description:  inserts (i.e.\ )
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+I,Alt+E
    
TW.target.insertText("(i.e.\\ )");
TW.target.selectRange(TW.target.selectionStart-1, 0)
