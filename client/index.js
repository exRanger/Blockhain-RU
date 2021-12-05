const math = require('mathjs')

let x = 0.3/(9.4/24)**5
console.log('x', x)
const h = 1.06* 10**-27
let w2 = 743
let w = 24*10**9
let rad = 6.28 
let temperature = 4.2 // K 
let kT_4K = 2*1.138*4.2*10**-16 
let kt_05K =2*1.138*0.5*10**-16


let division_4K = h*w*rad/kT_4K
let division_05K =h*w*rad/kt_05K


let right_e_4K = 6.3*10**9*Math.E**(-34/4.2)
let right_e_05 = 6.3*10**9*Math.E**(-34/0.5)

let tensix = 10**6
let T1e, T1e2;



let result = x * math.coth(division_4K) + right_e_4K // 4.2K
let div_T1e = result/tensix
console.log('1/T1e',div_T1e)

T1e = 1/div_T1e
console.log('T1e',T1e )


let result2 = x * math.coth(division_05K) + right_e_05 // 0.5K
let div_T2e = result2


T2e = 1/div_T2e
 
console.log('1/T2e', div_T2e)
console.log('T2e', T2e)


let one_div_tn = (8*3.14)/5*(1/4)*((1.6/(18.63*10**3))**2)*(2.37*10**19)/(5.68*10**22)*(2.576*10**6)/(4.26*10**3)*1.92*10**6

let one_div_tn2 = (8*3.14)/5*(1/4)*((1.6/(18.63*10**3))**2)*(2.37*10**19)/(5.68*10**22)*(2.576*10**6)/(4.26*10**3)*36.72

console.log('1/T1n 4K', one_div_tn*10**3)

let T1n = 1/(4.48*10**-3)


console.log('T1n', 1/(4.48*10**-3))


console.log('T1e 0.5', one_div_tn2)
console.log('1/T1e 0.5', 1/(one_div_tn2))


let V = 250.63*10**3

let S_4K = V* T1e * 10**-6
let S_05 = V* T2e 
console.log('S при 4K', S_4K)
console.log('S при 0.5K', S_05)

let Po_4k = math.tan(division_4K)
let Po_05k= math.tan(division_05K)
console.log('Po_4k', Po_4k )
console.log('Po_0.5k', Po_05k)

let Pns_4k = S_4K * Po_4k / (1+S_4K-Po_4k)
let Pns_05k = S_05 * Po_05k / (1+S_05-Po_05k) 

console.log('Pns_4k', Pns_4k)
console.log('Pns_05k', Pns_05k)

let divTau_4K = (1+S_4K-Po_4k) / T1n

let divTau_05 = (1+S_05-Po_05k) /  (1/(one_div_tn2))

console.log('1/Tau: 4.2K', divTau_4K)
console.log('1/Tau: 4.2K', divTau_05)

//Ce

 
let T = 4.2 


let onedivT1e = w2 * math.coth((h*6.28*35*10**9*10**16)/4.4*1.38) + right_e_4K

console.log('Ce4K', onedivT1e)

let onedivT2e = w2 * math.coth((h*6.28*35*10**9*10**16)/2*1.38) + right_e_05

console.log('Pn', 0.29/(1+0.13+2.84*10**-5-0.16**2))

console.log('pn2', (1+6823+(0.345*10**-3)-5.94**2)/30*10**4)