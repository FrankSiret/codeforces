#include <bits/stdc++.h>
using namespace std;

#ifdef franks
#include "..\debug.h"
#else
#define dbg(...)
#endif

// Longest Substring Without Repeating Characters
class Solution1 {
public:
    int lengthOfLongestSubstring(string s) {
        int n = s.size();
        int c = 0;
        int res = 0;
        map<char,int> mp;
        for(int i=0; i < n; i++) {
            if(!mp[s[i]]) {
                mp[s[i]] = i+1;
                c++;
                res = max(res, c);
            } else {
                c = min(c + 1, i + 1 - mp[s[i]]);
                res = max(res, c);
                mp[s[i]] = i + 1;
            }
        }
        return res;
    }
};

// Longest Palindromic Substring
class Solution2 {
public:
    string longestPalindrome(string s) {
        int n = s.size();
        vector<int> rad(2*n);
        // string manacher
        for (int i=0, j=0, k; i < 2*n; i += k, j = max(j-k, 0)) {
            for (; i >= j && i + j + 1 < 2*n && s[(i - j) / 2]==s[(i + j + 1) / 2]; ++j);
            rad[i] = j;
            for (k=1; i>=k && rad[i] >= k && rad[i-k]!=rad[i]-k; ++k)
                rad[i + k] = min(rad[i - k], rad[i] - k);
        }
        int mp = max_element(rad.begin(), rad.end()) - rad.begin();
        int mp_2 = mp / 2;
        int len = rad[mp];
        int len_2 = len / 2;
        dbg(rad);
        if(mp & 1) {
            return s.substr(mp_2 - len_2 + 1, len);
        }
        return s.substr(mp_2 - len_2, len);
    }
};

// Zigzag Conversion
class Solution3 {
public:
    string convert(string s, int numRows) {
        string res;
        int n = s.size();
        for(int i=0; i < numRows; i++) {
            for(int j=i; j < n; j+=2*(numRows-1)) {
                res += s[j];
                if(i != 0 && i != numRows-1 && j+2*(numRows-i-1) < n) {
                    res += s[j+2*(numRows-i-1)];
                }
            }
        }
        return res;
    }
};

// Reverse Integer
class Solution {
public:
    int reverse(int x) {
        bool neg = false;
        if(x < 0) {
            x *= -1;
            neg = true;
        }
        string r = to_string(x);
        std::reverse(r.begin(), r.end());
        long long k = std::stoll(r);
        if(neg) k *= -1;
        if(k < -(1LL << 31) || k > (1LL << 31) - 1) k = 0;
        return (int)k;
    }
};

int main()
{
#ifdef franks
    freopen("a.in", "r", stdin);
#else
    cin.tie(0)->sync_with_stdio(0);
    cin.exceptions(cin.failbit);
#endif

    // ll n;
    // CASET { // cs <= ___T
        
    // }

    Solution s;
    cout << s.reverse(-483618);

	return 0;
}