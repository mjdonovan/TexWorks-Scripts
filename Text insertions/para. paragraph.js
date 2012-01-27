// TeXworksScript
// Title:  paragraph
// Description: Starts a paragraph
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+P,Alt+A,Alt+R,Alt+A
    
TW.target.insertText("\\paragraph*{}\n");
TW.target.selectRange(TW.target.selectionStart-2, 0)
