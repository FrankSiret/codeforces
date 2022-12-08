import fetch from 'node-fetch';
import HEADERS from './headers.js'

// day 1
await fetch('https://adventofcode.com/2022/day/1/input', HEADERS)
    .then(response => response.text())
    .then(data => {
        console.log('DAY 1')
        const l = data.split('\n');
        let sum = 0;
        let max = 0;
        const p = []
        for(let i of l) {
            if(i === '') {
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
        console.log(p[0]+p[1]+p[2]);
    });

//day 2
await fetch('https://adventofcode.com/2022/day/2/input', HEADERS)
    .then(response => response.text())
    .then(data => {
        console.log('DAY 2')
        const l = data.split('\n');
        let sum = 0;
        for(let i of l) {
            if(!i) continue
            const [a, b] = i.split(' ')
            if(b=='X')sum+=1;
            else if(b=='Y')sum+=2;
            else if(b=='Z')sum+=3;
            if(a=='A'&& b=='X') sum+=3;
            else if(a=='B'&& b=='Y') sum+=3;
            else if(a=='C'&& b=='Z') sum+=3;
            else if(a=='A'&& b=='Y') sum+=6;
            else if(a=='B'&& b=='Z') sum+=6;
            else if(a=='C'&& b=='X') sum+=6;
        }
        console.log(sum)
    });