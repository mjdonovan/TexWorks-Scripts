// TeXworksScript
// Title:  Exact Couple
// Description: inserts an exact couple
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut:
    
TW.target.insertText("\\[\\xymatrix{\n\\cdots\\ar[r]&\nX_2\\ar[r]\\ar[d]&\nX_1\\ar[r]\\ar[d]&\nX_0\\ar@{=}[r]\\ar[d]&\nX_0\\ar@{=}[r]\\ar[d]&\n\\cdots\\\\\n&\nK_2\\ar@{~>}[ul]&\nK_1\\ar@{~>}[ul]&\nK_0\\ar@{~>}[ul]&\n\\ast\\ar@{~>}[ul]&\n}\\]\n\\[\\xymatrix{\n\\cdots\\ar[r]&\n\\pi_*X_2\\ar[r]\\ar[d]&\n\\pi_*X_1\\ar[r]\\ar[d]&\n\\pi_*X_0\\ar@{=}[r]\\ar[d]&\n\\pi_*X_0\\ar@{=}[r]\\ar[d]&\n\\cdots\\\\\n&\n\\pi_*K_2\\ar@{~>}[ul]&\n\\pi_*K_1\\ar@{~>}[ul]&\n\\pi_*K_0\\ar@{~>}[ul]&\n0\\ar@{~>}[ul]&\n}\n\\]\n\\[E^1_{st}=\\pi_{s+t}K_s\\implies \\pi_{s+t}(X_0)\\textup{\\qquad (when there are \\textit{no ancients}).}\\]");

