import{C as e,I as t,u as n,x as r}from"./style-D6ouPtde.js";import{E as i,vt as a,x as o}from"./runtime-core.esm-bundler-dOrpniSb.js";var s={prefix:Math.floor(Math.random()*1e4),current:0},c=Symbol(`elIdInjection`),l=()=>o()?i(c,s):s,u=i=>{let o=l();!e&&o===s&&t(`IdInjection`,`Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);let c=n();return r(()=>a(i)||`${c.value}-id-${o.prefix}-${o.current++}`)},d=Symbol(`formContextKey`),f=Symbol(`formItemContextKey`);export{l as i,f as n,u as r,d as t};