// TeXworksScript
// Title: Epic pullback square
// Description: inserts a cartesian square
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut:
    
TW.target.insertText("\\[\\xymatrix@C+2em@R+2em{\nQ\n\\ar@/_10pt/[ddr]_{q_1}\n\\ar@/^10pt/[drr]^{q_2}\n\\ar@{-->}[dr]|*+<3pt,3pt>{\\scriptstyle u} & & \\\\\n& P \\ar[d]_(0.4){p_1} \\ar[r]^(0.4){p_2} \n& Y \\ar[d]^{g}\\\\\n& X \\ar[r]_{f}\n& Z\n}\\]");

