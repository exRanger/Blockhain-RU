const math = require('mathjs')

const h = 1.06* 10**-27
let V = 24*10**9
let V_nakachki = 24 // GHz
let T1 = 4.2 // K
let T2 = 0.5 // K
let k = 1.38 * 10**-16

let S = 0.5
let Ys_2pi = 3.78 * 10**6

let x = 0.3/(9.4/24)**5 
console.log('x', x)
let one_div_T1e_4and2K = x * math.coth(h*V*6.28/ (2*k*T1)) + 6.3 * 10**9 * Math.E**(-47/4.2) 

console.log('1/T1e:4.2K', one_div_T1e_4and2K)


let one_div_T1e_0and5 = x * math.coth(h*V*6.28/ (2*k*T2)) + 6.3 * 10**9 * Math.E**(-47/T2)
console.log('1/T1e: 4.2K', one_div_T1e_0and5)



let Ho = V / (Ys_2pi)
let deltaHn = 6.28 * 4.26 * 10**3 * 1.06*10**-27*5.68*10**22


console.log('Ho', Ho)
console.log('delta Hn', deltaHn)

console.log('delta Hn/Ho', (deltaHn/Ho))

//4.2
let one_delT0n = (8*3.14/5) * (S*(S+1)/3)  * (deltaHn/Ho)**2 * (2.37*10**19 / (5.68*10**22)) *(3.78*10**6/ (4.26*10**3)) * one_div_T1e_4and2K
//0.5
let one_delT0n_2 = (8*3.14/5) * (S*(S+1)/3)  * (deltaHn/Ho)**2 * (2.37*10**19 / (5.68*10**22)) *(3.78*10**6/ (4.26*10**3)) * one_div_T1e_0and5

console.log('1/T0n_4.2', one_delT0n)
console.log('1/T0n_0.5', one_delT0n_2)


console.log('3)')

let sqrtM = 6.28 * (3.78* 10**6) * (6.28 *(3.78*10**6)*(1.06*10**-27)*(2.37*10**19))

console.log('scrtM', sqrtM/ 10**4)

let g = 1 /  (2.5* sqrtM * 10**4)

let Volume = g * (3.14/2) * (3.78**2) * (10**12) * (6.28**2) * 10**-2
let V2 = (3.14/2) * (6.1*10**-8) * 2.576* 2.576 * 10**12 * 6.28**2 * 10**-2
console.log('g', g)
console.log('Vol', Volume)






let T1e_4K = 1/ one_div_T1e_4and2K
let T1e_05K = 1/ one_div_T1e_0and5 


let S1 = Volume * T1e_4K
let S2 = Volume * T1e_05K 
console.log('S:4.2',S1)
console.log('S:0.5',S2)
 
let Po = math.tanh((h*24*6.28*10**9)/(2.138*4.2*10**-16))
let Po2 = math.tanh((h*24*6.28*10**9)/ (2.138*0.5*10**-16))

console.log('po 4.2', Po)
console.log('po 0.5', Po2)


let PnS_4_2 = (S1* Po) / (1+S1 - (Po**2))
let PnS_0_5 = (S1* Po) / (1+S2- (Po**2))

console.log('PnS_4_2', PnS_4_2)
console.log('PnS_0_5', PnS_0_5)



let Vpol = 2.567 * 10**6 * Ho

// console.log('Vpol',toString(Vpol).length) // 18 знаков

console.log('Vpol', Vpol)

//5
console.log('5)')
let x_n = 2.4 * (16.29/9.4)**5
console.log('x_n', x_n)

let one_del_t1e = x_n * math.coth(((1.06*10**-27)*6.28*16.29*10**9)/(2.138*10**-16*4.2)) + 2.7 * 10**9*Math.E**(-34/4.2)
let one_del_t2e = x_n * math.coth(((1.06*10**-27)*6.28*16.29*10**9)/(2.138*10**-16*0.5)) + 2.7 * 10**9*Math.E**(-34/0.5)
console.log('one_del_t1e', one_del_t1e)
console.log('one_del_t2e', one_del_t2e)

let new_Po = Math.tan(6.28*h*16.42*10**9)/(2*k*4.2)

console.log('new_Po_4.2', new_Po )

let one_delit_T1n_4_2 = ((8*3.14)/5)* ((S*(S+1))/3)*((deltaHn/Ho)**2)* ((1.184*10**18)/(5.68*10**22)) *((2.576*10**6)/(4.26*10**3)) * (1/one_del_t1e) * (1-new_Po**2)

console.log('1/T1n 4.2' ,one_delit_T1n_4_2)

let new_Po_05 = Math.tan(6.28*h*16.42*10**9)/(2*k*0.5)

console.log('new_Po_05',new_Po_05)

let one_delit_T1n_0_5 = ((8*3.14)/5)* (S*(S+1)/3)*((deltaHn/Ho)**2)*((1.184*10**18)/(5.68*10**22))*(2.576*10**6/(4.26*10**3)) * (1/one_del_t2e) * (1-new_Po_05**2)

console.log('1/T1n 0.5', one_delit_T1n_0_5 )

let T1n_4_2 = 1 / one_delit_T1n_4_2
let T1n_0_5= 1 / one_delit_T1n_0_5

console.log('T1n_4_2', T1n_4_2)
console.log('T1n_0_5', T1n_0_5)

//




//Фактор утечки 

let F_4_2 = T1e_4K/T1n_4_2

console.log('F_4.2', F_4_2)



let F_0_5 = T1e_05K/T1n_0_5

console.log('F_0.5', F_0_5)


let one_delit_tau_4_2 = (1+S1+F_4_2-new_Po**2)/T1e_4K

console.log('1/Tau', one_delit_tau_4_2)

let newPns_4_2 = (S1*new_Po)/ (1+S1+F_4_2-new_Po**2)

console.log('Pns 4.2', newPns_4_2)


let one_delit_tau_0_5 = (1+S2+F_0_5* new_Po_05**2)/T1e_05K

console.log('1/Tau', one_delit_tau_0_5)

let newPns_0_5 = (S2*new_Po)/ (1+S2+F_0_5-new_Po**2)

console.log('Pns 0.5', newPns_0_5)