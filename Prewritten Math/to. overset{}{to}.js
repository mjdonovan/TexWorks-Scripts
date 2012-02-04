// TeXworksScript
// Title:  overset{}{\to}
// Description: \overset{}{\to}
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+T, Alt+O
    
TW.target.insertText("\\overset{\u25BA}{\\to}\u2590\u258C");
TW.target.selectRange(TW.target.selectionStart-9, 0)
