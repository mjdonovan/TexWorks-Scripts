// TeXworksScript
// Title:  where ...
// Description: where ...
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+W, Alt+H, Alt+E, Alt+R
    
TW.target.insertText("\\textup{\\quad where $$}");
TW.target.selectRange(TW.target.selectionStart-2, 0)
