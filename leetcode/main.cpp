// https://leetcode.com/problems/generate-parentheses/
#include <bits/stdc++.h>
using namespace std;

#ifdef franks
#include "..\debug.h"
#else
#define dbg(...)
#endif

class Solution1 {
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

class Solution2 {
public:
    string getLL(string s, int n) {
        string ret;
        int ind = -1;
        for(int i=0; i<n; i++) {
            if(s[i] == '-' || s[i] == '+' || (s[i] >= '0' && s[i] <= '9')) {
                ind = i;
                ret += s[i++];
                // cout << ret << endl;
                while(i < n && s[i] >= '0' && s[i] <= '9') {
                    ret += s[i];
                    // cout << ret << endl;
                    i++;
                }
                if(i == n || s[i] == ' ' || s[i] == '-' || s[i] == '.' || s[i] == '+') {
                    // cout << ret << endl;
                    return ret;
                }
                else return "0";
            }         
        }
        return "0";
    }
    int myAtoi(string s) {
        int n = s.size();
        string sLL = getLL(s, n);
        // cout << sLL << endl;
        if(sLL.size() > 15) return 0;
        long long sol = atoll(sLL.c_str());
        if(sol > (1LL << 31LL)-1) 
            return 0;
        if(sol < -(1LL << 31LL)) 
            return 0;
        return sol;
    }
};

class Solution {
    vector<int> pow10 = {1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000};
    vector<int> sol;
public:
    void rec(int n, int k, int ld, int num) {
        if(n==0) {
            sol.push_back(num);
            return;
        }
        if(ld+k <= 9)
            rec(n-1,k,ld+k,num+pow10[n-1]*(ld+k));
        if(ld-k >= 0)
            rec(n-1,k,ld-k,num+pow10[n-1]*(ld-k));
    }
    vector<int> numsSameConsecDiff(int n, int k) {
        for(int i=1; i<=9; i++)
            rec(n-1,k,i,pow10[n-1]*i);
        return sol;
    }
};

int main() {
    Solution s;
    dbg(s.numsSameConsecDiff(4,2));

    return 0;
}
