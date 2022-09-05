// https://leetcode.com/problems/generate-parentheses/
#include <bits/stdc++.h>
using namespace std;

#ifdef franks
#include "..\debug.h"
#else
#define dbg(...)
#endif

class Solution {
public:
    void rec(string str, int open, int close, vector<string> &sol) {
        if(open == 0 && close == 0) {
            sol.push_back(str);
            return;
        }
        if(open > 0) {
            rec(str+"(", open-1, close, sol);
        }
        if(open < close) {
            rec(str+")", open, close-1, sol);
        }
    }

    vector<string> generateParenthesis(int n) {
        vector<string> sol;
        rec("", n, n, sol);
        dbg(sol);
        return sol;
    }
};

int main() {
    Solution s;
    s.generateParenthesis(8);

    return 0;
}

/*
                       1
             2     3      4        5
             -   6   7    8     9     10 
                     11   12    13  
                     14

*/