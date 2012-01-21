// TeXworksScript
// Title:  smash (big)
// Description:  a \bigwedge
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+Shift+S,Alt+Shift+M
    
TW.target.insertText("\\bigwedge_{\u06F7\u25BA}^{\u06F8}");
TW.target.selectRange(TW.target.selectionStart-7, 1)