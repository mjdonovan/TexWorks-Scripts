// TeXworksScript
// Title:  Postnikov Tower
// Description: inserts a Postnikov tower
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+P, Alt+O, Alt+S, Alt+T
    
TW.target.insertText("\n%%%%%%%%%%%%% BEGIN %%%%%%%%%%%%%\n\n\\[\\xymatrix{\nK(\\pi_2X,2)\\ar[r]&\\ar[d]P_2X\\\\\nK(\\pi_1X,1)\\ar[r]&\\ar[d]P_1X\\\\\nX\\ar[r]\\ar[ru]\\ar[ruu]&P_0X\n}\n\\qquad \\qquad \\qquad \n\\xymatrix{\n&\\ar[d]P_2X\\\\\n&\\ar[d]P_1X\\\\\nX\\ar[r]\\ar[ru]\\ar[ruu]&P_0X\n}\\]\n\n\\[\\xymatrix{\nX\\ar[r]\\ar@{=}[d]&\\ar[d]P_2X&\\ar[l]K(\\pi_2X,2)\\\\\nX\\ar[r]\\ar@{=}[d]&\\ar[d]P_1X&\\ar[l]K(\\pi_1X,1)\\\\\nX\\ar[r]&P_0X\n}\\qquad \\qquad \n\\xymatrix{\nX_{\\langle 2\\rangle}\\ar[r]&X\\ar[r]\\ar@{=}[d]&\\ar[d]P_2X\\\\\nX_{\\langle 1\\rangle}\\ar[r]&X\\ar[r]\\ar@{=}[d]&\\ar[d]P_1X\\\\\n&X\\ar[r]&P_0X\n}\n\\]\n\n\\[\\pi_*(X)\\overset{\\sim}{\\to} \\pi_*(P_nX)\\textup{\\quad for $*\\leq n$,\\quad }\\pi_*(P_nX)=0\\textup{\\quad for $*>n$.}\\]\n\n%%%%%%%%%%%%% END %%%%%%%%%%%%%\n");

