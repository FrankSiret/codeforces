#include <bits/stdc++.h>
using namespace std;

template <typename A, typename B>
ostream &operator<<(ostream &os, const pair<A, B> &p) { 
    return os << '(' << p.first << ", " << p.second << ')'; 
}

template <typename T_container, typename T = typename enable_if<!is_same<T_container, string>::value, typename T_container::value_type>::type>
ostream &operator<<(ostream &os, const T_container &v) {
    os << '{';
    string sep;
    for (const T &x : v)
        os << sep << x, sep = ", ";
    return os << '}';
}

template <size_t i, typename T>
ostream &print_tuple_utils(ostream &os, const T &tup) {
    if constexpr (i == tuple_size<T>::value)
        return os << ")";
    else
        return print_tuple_utils<i + 1, T>(os << (i ? ", " : "(") << get<i>(tup), tup);
}

template <typename... T>
ostream &operator<<(ostream &os, const tuple<T...> &t) { 
    return print_tuple_utils<0, tuple<T...>>(os, t); 
}

void dbg_out() { 
    cerr << endl; 
}

template <typename Head, typename... Tail>
void dbg_out(Head H, Tail... T) {
    cerr << ' ' << H;
    dbg_out(T...);
}

#define dbg(...) cerr << "(" << #__VA_ARGS__ << "):", dbg_out(__VA_ARGS__)
