// TeXworksScript
// Title:  huge xymatrix
// Description: inserts a freestyle commuting diagram
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+X,Alt+X,Alt+Y, Alt+Y

             
//  eval(TW.app.getGlobal("helper_twPan")); //  Comment if NOT Needed - This includes PhpJs ($P), twConst, msgBox, twPan ($tw), string.toTitleCase() 
    
//TW.target.insertText("\\[\\xymatrix{\n\%1a& 2a& 3a& 4a& 5a& 6a\\\\\n\%1b& 2b& 3b& 4b& 5b& 6b\\\\\n 1c& 2c& 3c& 4c& 5c& 6c\\\\\n 1d& 2d& 3d& 4d& 5d& 6d\\\\\n\%1e& 2e& 3e& 4e& 5e& 6e\\\\\n\%1f& 2f& 3f& 4f& 5f& 6f\\\\\n}\\]\n");
TW.target.insertText("\\[\\xymatrix{\n\%a1& a2& a3& a4& a5& a6\\\\\n\%b1& b2& b3& b4& b5& b6\\\\\n c1& c2& c3& c4& c5& c6\\\\\n d1& d2& d3& d4& d5& d6\\\\\n\%e1& e2& e3& e4& e5& e6\\\\\n\%f1& f2& f3& f4& f5& f6\\\\\n}\\]\n");