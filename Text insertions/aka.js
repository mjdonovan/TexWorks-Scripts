// TeXworksScript
// Title:  a.k.a.
// Description:  inserts (a.k.a.\ )
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+A,Alt+K,Alt+A
    
TW.target.insertText("(a.k.a.\\ )");
TW.target.selectRange(TW.target.selectionStart-1, 0)
