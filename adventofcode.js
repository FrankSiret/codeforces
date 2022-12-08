import fetch from 'node-fetch';
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

q32()