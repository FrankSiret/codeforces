#include <bits/stdc++.h>
using namespace std;

// http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2016/p0200r0.html
template<class Fun> class y_combinator_result {
    Fun fun_;
public:
    template<class T> explicit y_combinator_result(T &&fun): fun_(std::forward<T>(fun)) {}
    template<class ...Args> decltype(auto) operator()(Args &&...args) { return fun_(std::ref(*this), std::forward<Args>(args)...); }
};
template<class Fun> decltype(auto) y_combinator(Fun &&fun) { return y_combinator_result<std::decay_t<Fun>>(std::forward<Fun>(fun)); }

#ifdef franks
#include "debug.h"
#else
#define dbg(...)
#endif

using ll = long long;
using ld = long double;
using str = string;
using cd = complex<ld>;

using pi = pair<int,int>;
using pl = pair<ll,ll>;
using pd = pair<ld,ld>;
using ti = tuple<int,int,int>;

using vi = vector<int>;
using vb = vector<bool>;
using vl = vector<ll>;
using vd = vector<ld>;
using vs = vector<str>;
using vpi = vector<pi>;
using vpl = vector<pl>;
using vpd = vector<pd>;

template<class T> using pqg = priority_queue<T, vector<T>, greater<T>>;

#define fornm(i,n,m) for (int i=n; i<=(m); i++)
#define for0n(i,n) for (int i=0; i<(n); i++)
#define formn(i,m,n) for (int i = (m)-1; i >= n; i--)
#define forn0(i,n) for (int i = (n)-1; i >= 0; i--)
#define forat(i,x) for (auto& i : x)
#define forit(i,x) for (auto i=(x).begin(); i != (x).end(); i++)
#define CASET int ___T; cin >> ___T; fornm(cs,1,___T)

#define f first
#define s second
#define mt make_tuple
#define mp make_pair
#define pb push_back
#define eb emplace_back
#define ins insert
#define lb lower_bound
#define ub upper_bound

#define sz(x) int((x).size())
#define bg(x) begin(x)
#define all(x) bg(x), end(x)
#define rall(x) x.rbegin(), x.rend()
#define sor(x) sort(all(x))
#define TA(x,y) partial_sum(all(x), bg(y))

#define spc << ' ' << 
#define YN(x) cout << (x ? "YES\n" : "NO\n")

const int MOD = 1000000007;
const char nl = '\n';
const int MX = 2e5+5;
const ll INF = 1e18;
const ld PI = acos((ld)-1);
const int dx[4] = {1,0,-1,0}, dy[4] = {0,1,0,-1};
mt19937 rng((uint32_t)chrono::steady_clock::now().time_since_epoch().count());
template<class T> int lwb(vector<T>& a, const T& b) { return int(lb(all(a),b)-bg(a)); }
template<class T> int upb(vector<T>& a, const T& b) { return int(ub(all(a),b)-bg(a)); }
template<class t,class u> bool chmax(t&a,u b){if(a<b){a=b;return true;}else return false;}
template<class t,class u> bool chmin(t&a,u b){if(b<a){a=b;return true;}else return false;}
template<class T> void remDup(vector<T>& v) { sort(all(v)); v.erase(unique(all(v)),end(v)); }

int main()
{
#ifdef franks
    freopen("a.in", "r", stdin);
#else
    cin.tie(0)->sync_with_stdio(0);
    cin.exceptions(cin.failbit);
#endif

    ll n;
    CASET { // cs <= ___T
        
    }

	return 0;
}