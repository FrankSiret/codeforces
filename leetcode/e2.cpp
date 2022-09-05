// https://leetcode.com/problems/n-ary-tree-level-order-traversal/
#include <bits/stdc++.h>
using namespace std;

#ifdef franks
#include "..\debug.h"
#else
#define dbg(...)
#endif

// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};

class Solution {
public:
    vector<vector<int>> levelOrder(Node* root) {
        vector<vector<int>> sol;
        map<Node*, bool> mark;
        if(root == nullptr) return sol;
        queue<pair<Node*, int>> q;
        q.push({root, 1});
        vector<int> temp;
        temp.push_back(root->val);
        sol.push_back(temp);
        temp.clear();
        while(!q.empty()) {
            Node *u = q.front().first;
            int l = q.front().second;
            mark[u] = true;
            q.pop();
            for(int i=0; i<u->children.size(); i++) {
                temp.push_back(u->children[i]->val);
                if(!mark[u->children[i]]) {
                    q.push({u->children[i], l+1});
                }
            }
            if(!temp.empty()) {
                if(sol.size() < l+1)
                    sol.push_back(temp);
                else {
                    for(int it: temp)
                        sol[l].push_back(it);
                }
            }
            temp.clear();
        }
        return sol;
    }
};

int main() {
    Solution s;
    // [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
    // vector<Node*> c14{new Node(14)};
    // vector<Node*> c13{new Node(13)};
    // vector<Node*> c12{new Node(12)};
    // vector<Node*> c11{new Node(11, c14)};
    // vector<Node*> c9{new Node(9, c13), new Node(10)};
    // vector<Node*> c8{new Node(8, c12)};
    // vector<Node*> c6{new Node(6), new Node(7, c11)};
    // vector<Node*> c2{new Node(2), new Node(3, c6), new Node(4, c8), new Node(5, c9)};
    // Node* tree = new Node(1, c2);
    // s.levelOrder(tree);

    return 0;
}

/*
                       1
             2     3      4        5
             -   6   7    8     9     10 
                     11   12    13  
                     14

*/