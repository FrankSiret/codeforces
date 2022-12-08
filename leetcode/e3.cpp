#include <bits/stdc++.h>
using namespace std;

#ifdef franks
#include "..\debug.h"
#else
#define dbg(...)
#endif

// 1705. Maximum Number of Eaten Apples
class Solution {
public:
    typedef tuple<int,int> t;
    int eatenApples(vector<int>& apples, vector<int>& days) {
        priority_queue<t, vector<t>, greater<t>> q;
        int ans = 0;
        int n = apples.size();

        for(int i=0; i<n || !q.empty(); i++) {

            if(i < n && days[i] != 0 && apples[i] != 0) 
                q.push({i+days[i], i});
            
            if(!q.empty()) {
                int first, second;
                tie(first, second) = q.top();
                ans ++;
                if(apples[second] > 1 && i + 1 < first)
                    apples[second]--;
                else q.pop();
            }

            while(!q.empty() && get<0>(q.top()) < i + 2) q.pop();
        }

        return ans;
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
    vector<int> apples = {1,10,17,10,12,6,20,8,8,22,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,5,2,1,0,0,0,0,0,0,23};
    apples = {3,1,1,0,0,2};
    vector<int> days = {19999,11,18,22,5,2,14,5,20,7,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,1,4,2,7,0,0,0,0,0,0,1};
    days = {3,1,1,0,0,2};

    Solution s;
    cout << s.eatenApples(apples, days);

	return 0;
}