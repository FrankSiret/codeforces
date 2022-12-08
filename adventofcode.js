import fetch from 'node-fetch';
import { abort } from 'process';
import { COOKIE } from './secret.js'

// day 1.2
const q12 = async () => {
  await fetch('https://adventofcode.com/2022/day/1/input', { headers: { cookie: COOKIE } })
    .then(response => response.text())
    .then(data => {
      console.log('DAY 1.2')
      const l = data.split('\n');
      let sum = 0;
      let max = 0;
      const p = []
      for (let i of l) {
        if (i === '') {
          max = Math.max(max, sum)
          p.push(sum)
          // console.log(max)
          sum = 0
        }
        else {
          sum += +i
        }
      }
      p.push(sum)
      p.sort();
      p.reverse();
      console.log(p[0] + p[1] + p[2]);
    });
}

//day 2
const q2 = async () => {
  await fetch('https://adventofcode.com/2022/day/2/input', { headers: { cookie: COOKIE } })
    .then(response => response.text())
    .then(data => {
      console.log('DAY 2')
      const l = data.split('\n');
      let sum = 0;
      for (let i of l) {
        if (!i) continue
        const [a, b] = i.split(' ')
        if (b == 'X') sum += 1;
        else if (b == 'Y') sum += 2;
        else if (b == 'Z') sum += 3;
        if (a == 'A' && b == 'X') sum += 3;
        else if (a == 'B' && b == 'Y') sum += 3;
        else if (a == 'C' && b == 'Z') sum += 3;
        else if (a == 'A' && b == 'Y') sum += 6;
        else if (a == 'B' && b == 'Z') sum += 6;
        else if (a == 'C' && b == 'X') sum += 6;
      }
      console.log(sum)
    });
}

//day 2.2
const q22 = async () => {
  await fetch('https://adventofcode.com/2022/day/2/input', { headers: { cookie: COOKIE } })
    .then(response => response.text())
    .then(data => {
      console.log('DAY 2.2')
      const l = data.split('\n');
      let sum = 0;
      for (let i of l) {
        if (!i) continue
        const [a, b] = i.split(' ')
        if (b == 'Y') {
          sum += 3;
          if (a == 'A') sum += 1;
          else if (a == 'B') sum += 2;
          else if (a == 'C') sum += 3;
        }
        else if (b == 'Z') {
          sum += 6;
          if (a == 'A') sum += 2;
          else if (a == 'B') sum += 3;
          else if (a == 'C') sum += 1;
        }
        else {
          if (a == 'A') sum += 3;
          else if (a == 'B') sum += 1;
          else if (a == 'C') sum += 2;
        }
      }
      console.log(sum)
    });
}

//day 3
const q3 = async () => {
  await fetch('https://adventofcode.com/2022/day/3/input', { headers: { cookie: COOKIE } })
    .then(response => response.text())
    .then(data => {
      console.log('DAY 3')
      const l = data.split('\n');
      let sum = 0;
      for (let i of l) {
        if (!i) continue
        const t = i.split('');
        const m1 = {}, m2 = {};
        for (let k = 0; k < t.length / 2; k++) {
          if (!m1[t[k]]) m1[t[k]] = 1;
          else m1[t[k]]++;
        }
        for (let k = t.length / 2; k < t.length; k++) {
          if (!m2[t[k]]) m2[t[k]] = 1;
          else m2[t[k]]++;
        }
        for (let key of Object.keys(m1)) {
          if (m2[key]) {
            const char = key.charCodeAt(0)
            if (char >= 'a'.charCodeAt(0)) {
              sum += char - 'a'.charCodeAt(0) + 1
            }
            else {
              sum += char - 'A'.charCodeAt(0) + 26 + 1
            }
          }
        }
      }
      console.log(sum);
    });
}

//day 3.2
const q32 = async () => {
  await fetch('https://adventofcode.com/2022/day/3/input', { headers: { cookie: COOKIE } })
    .then(response => response.text())
    .then(data => {
      console.log('DAY 3')
      const l = data.split('\n');
      let sum = 0;
      for (let _i=0; _i < l.length-1; _i+=3) {
        let i = l[_i];
        let t = i.split('');
        const m1 = {}, m2 = {}, m3 = {};
        for (const element of t) {
          if (!m1[element]) m1[element] = 1;
          else m1[element]++;
        }
        i = l[_i+1];
        t = i.split('');
        for (const element of t) {
          if (!m2[element]) m2[element] = 1;
          else m2[element]++;
        }
        i = l[_i+2];
        t = i.split('');
        for (const element of t) {
          if (!m3[element]) m3[element] = 1;
          else m3[element]++;
        }
        for (let key of Object.keys(m1)) {
          if (m2[key] && m3[key]) {
            const char = key.charCodeAt(0)
            if (char >= 'a'.charCodeAt(0)) {
              sum += char - 'a'.charCodeAt(0) + 1
            }
            else {
              sum += char - 'A'.charCodeAt(0) + 26 + 1
            }
          }
        }
      }
      console.log(sum);
    });
}

//day 4
const q4 = async () => {
  await fetch('https://adventofcode.com/2022/day/4/input', { headers: { cookie: COOKIE } })
    .then(response => response.text())
    .then(data => {
      console.log('DAY 4')
      const l = data.split('\n');
      let sum = 0;
      for (let _i=0; _i < l.length-1; _i++) {
        let i = l[_i];
        const [a, b] = i.split(',');
        const [a1, a2] = a.split('-');
        const [b1, b2] = b.split('-');
        if((+a1 >= +b1 && +a2 <= +b2) || (+b1 >= +a1 && +b2 <= +a2)) {
          sum ++;
        }
      }
      console.log(sum);
    });
}

//day 4.2
const q42 = async () => {
  await fetch('https://adventofcode.com/2022/day/4/input', { headers: { cookie: COOKIE } })
    .then(response => response.text())
    .then(data => {
      console.log('DAY 4.2')
      const l = data.split('\n');
      let sum = 0;
      for (let _i=0; _i < l.length-1; _i++) {
        let i = l[_i];
        const [a, b] = i.split(',');
        const [a1, a2] = a.split('-');
        const [b1, b2] = b.split('-');
        if((+a1 <= +b2 && +a2 >= +b1) || (+b1 <= +a2 && +b2 >= +a1)) {
          sum ++;
        }
      }
      console.log(sum);
    });
}

//day 8
const q8 = async () => {
  await fetch('https://adventofcode.com/2022/day/8/input', { headers: { cookie: COOKIE } })
    .then(response => response.text())
    .then(data => {
      console.log('DAY 8')
      const l = data.split('\n');
      const v = [];
      const mark = [];
      for (let _i=0; _i < l.length-1; _i++) {
        let i = l[_i];
        const vi = i.split('');
        v.push(vi);
        // console.log(vi)
        mark.push(Array(vi.length).fill(false))
      }
      const n = v.length;
      const m = v[0].length;
      let sol = 0;

      for(let i = 0; i < n; i++) {
        mark[i][0] = mark[0][i] = mark[i][m-1] = mark[n-1][i] = true;
      }

      for(let i = 1; i < n-1; i++) {
        let p = v[i][0];
        for(let j = 1; j < m-1; j++) {
          if(v[i][j] > p) {
            mark[i][j] = true;
            p = v[i][j];
          }
        }
      }

      for(let j = 1; j < m-1; j++) {
        let p = v[0][j];
        for(let i = 1; i < n-1; i++) {
          if(v[i][j] > p) {
            mark[i][j] = true;
            p = v[i][j];
          }
        }
      }

      for(let i = 1; i < n-1; i++) {
        let p = v[i][m-1];
        for(let j = m-2; j > 0; j--) {
          if(v[i][j] > p) {
            mark[i][j] = true;
            p = v[i][j];
          }
        }
      }
      
      for(let j = 1; j < m-1; j++) {
        let p = v[n-1][j];
        for(let i = n-2; i > 0; i--) {
          if(v[i][j] > p) {
            mark[i][j] = true;
            p = v[i][j];
          }
        }
      }

      
      // console.log(mark);
      
      for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
          sol += mark[i][j] ? 1 : 0;
        }
      }
      
      console.log(sol);
    });
}

//day 8.2
const q82 = async () => {
  await fetch('https://adventofcode.com/2022/day/8/input', { headers: { cookie: COOKIE } })
    .then(response => response.text())
    .then(data => {
      console.log('DAY 8.2')
      const l = data.split('\n');
      const v = [];
      const mark = [];
      const score = [];
      for (let _i=0; _i < l.length-1; _i++) {
        let i = l[_i];
        const vi = i.split('');
        v.push(vi);
        // console.log(vi)
        mark.push(Array(vi.length).fill(false))
        score.push(Array(vi.length).fill(0))
      }
      const n = v.length;
      const m = v[0].length;
      let sol = 0;

      for(let i = 0; i < n; i++) {
        mark[i][0] = mark[0][i] = mark[i][m-1] = mark[n-1][i] = true;
      }

      for(let i = 1; i < n-1; i++) {
        let p = v[i][0];
        for(let j = 1; j < m-1; j++) {
          if(v[i][j] > p) {
            mark[i][j] = true;
            p = v[i][j];
          }
        }
      }

      for(let j = 1; j < m-1; j++) {
        let p = v[0][j];
        for(let i = 1; i < n-1; i++) {
          if(v[i][j] > p) {
            mark[i][j] = true;
            p = v[i][j];
          }
        }
      }

      for(let i = 1; i < n-1; i++) {
        let p = v[i][m-1];
        for(let j = m-2; j > 0; j--) {
          if(v[i][j] > p) {
            mark[i][j] = true;
            p = v[i][j];
          }
        }
      }
      
      for(let j = 1; j < m-1; j++) {
        let p = v[n-1][j];
        for(let i = n-2; i > 0; i--) {
          if(v[i][j] > p) {
            mark[i][j] = true;
            p = v[i][j];
          }
        }
      }

      
      // console.log(mark);
      
      for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
          sol += mark[i][j] ? 1 : 0;
        }
      }
      
      console.log(sol);
    });
}

q82()