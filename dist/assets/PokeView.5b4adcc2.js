import{u as d}from"./getData.a9b56a71.js";import{i as k,j as h,o as e,c as o,u as a,f as c,t as i,a as s,F as f}from"./index.b9a1037f.js";const g={key:0},y={key:1,class:"alert alert-danger"},b={key:2},v=["src"],V={key:3},P={__name:"PokeView",setup(B){const u=k(),l=h(),{getData:m,data:r,loading:p}=d(),_=()=>{u.push("/pokemons")};return m(`https://pokeapi.co/api/v2/pokemon/${l.params.name}`),(t,C)=>{var n;return e(),o(f,null,[a(p)?(e(),o("p",g,"Cargando informaci\xF3n....")):c("",!0),t.error?(e(),o("div",y,i(t.error),1)):c("",!0),a(r)?(e(),o("div",b,[s("img",{src:(n=a(r).sprites)==null?void 0:n.front_default,alt:""},null,8,v),s("h1",null,"Poke name:"+i(t.$route.params.name),1)])):(e(),o("h1",V,"No existe Pokemon")),s("button",{onClick:_,class:"btn btn-outline-primary"},"Volver")],64)}}};export{P as default};
