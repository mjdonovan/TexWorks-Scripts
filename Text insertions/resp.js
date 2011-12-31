// TeXworksScript
// Title:  respectively
// Description:  inserts (resp.\ )
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+R,Alt+E,Alt+S,Alt+P
    
TW.target.insertText("(resp.\\ ) ");
TW.target.selectRange(TW.target.selectionStart-2, 0)
