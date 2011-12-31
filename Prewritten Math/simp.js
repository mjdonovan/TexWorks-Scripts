// TeXworksScript
// Title:  Insert simplicial object
// Description: Inserts a simplicial object
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+S, Alt+I, Alt+M, Alt+P

TW.target.insertText("\\[\\xymatrix@C=2.5cm{\nX_0\n\\ar@<-.5ex>[r]_{s_0}&\\ar@2{->}@<-.5ex>[l]_{d_0,d_1}\nX_1\n\\ar@2{->}@<-.7ex>[r]_{s_0,s_1}&\nX_2\\makebox[0cm][l]{\\,\\ \\ $\\cdots$}\n\\ar@3{->}@<-.7ex>[l]_{d_0,d_1,d_2}\n}\n\%\\qquad\\qquad\\text{a simplicial object.}\n\\]\n");
