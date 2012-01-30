// TeXworksScript
// Title:  8. Itemize
// Description: Starts an itemize
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Ctrl+8
    
TW.target.insertText("\\begin{itemize}\\squishlist\n\\item \n\\end{itemize}");
TW.target.selectRange(TW.target.selectionStart-14, 0)
