// TeXworksScript
// Title:  0. Alignat
// Description: Starts an alignat*
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+0
    
TW.target.insertText("\\begin{alignat*}{2}\n&=\%&\\qquad&\\text{()}\n\%\\\\&=\%&\\qquad&\\text{()}\n\%\\\\&=\%&\\qquad&\\text{()}\n\%\\\\&=\%&\\qquad&\\text{()}\n\%\\\\&=\%&\\qquad&\\text{()}\n\\end{alignat*}\n");
TW.target.selectRange(TW.target.selectionStart-132, 0)
