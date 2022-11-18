"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[897],{8897:function(n,e,r){r.r(e),r.d(e,{default:function(){return sn}});var t,a,o,i,s,d,c,p,l,u,x,m,b,h,f,g,Z,j=r(2791),v=r(9434),w=r(3634),k=function(n){return n.contacts.items},P=function(n){return n.contacts.isLoading},y=function(n){return n.contacts.error},C=r(5705),z=r(5984),A=r(7103),F=r(168),L=r(6444),N=L.ZP.p(t||(t=(0,F.Z)(["\n  width: 240px;\n  display: block;\n  color: red; ;\n"]))),_=r(3329),q=A.Ry().shape({name:A.Z_().min(2,"Too Short!").max(24,"Too Long!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,{message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}).required("Name is a required field"),number:A.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,{message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}).required("Number is a required field")}),I=function(n){var e=n.name;return(0,_.jsx)(C.Bc,{name:e,render:function(n){return(0,_.jsx)(N,{children:n})}})},S=(0,L.ZP)(C.l0)(a||(a=(0,F.Z)(["\n  margin-bottom: 70px;\n"]))),B=L.ZP.div(o||(o=(0,F.Z)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 10px;\n  justify-items: center;\n  align-items: stretch;\n  margin-bottom: 30px;\n"]))),J=L.ZP.label(i||(i=(0,F.Z)(["\n  color: #fff;\n  margin-bottom: 4px;\n  text-align: center;\n  align-items: center;\n"]))),K=(0,L.ZP)(C.gN)(s||(s=(0,F.Z)(["\n  display: block;\n  margin-top: 5px;\n  border: none;\n  color: #fff;\n  border-radius: 5px;\n  font-size: 1.1em;\n  outline: none;\n  width: 250px;\n  background-color: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  padding: 6px 15px;\n"]))),T=L.ZP.button(d||(d=(0,F.Z)(["\n  width: 200px;\n  height: 40px;\n  color: #fff;\n  background-color: #7a75a9;\n  border-radius: 5px;\n  padding: 10px 25px;\n  font-weight: 500;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  outline: none;\n  transition: all 0.3s ease-in-out;\n\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),V=(L.ZP.p(c||(c=(0,F.Z)(["\n  width: 240px;\n  display: block;\n  color: red; ;\n"]))),function(){var n=(0,z.x0)(),e=(0,z.x0)(),r=(0,v.I0)(),t=(0,v.v9)(k);return(0,_.jsx)(C.J9,{initialValues:{name:"",number:""},validationSchema:q,onSubmit:function(n,e){if(t.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})))alert("".concat(n.name," is already in contacts"));else{var a={name:n.name,number:n.number};r((0,w.uK)(a)),e.resetForm()}},children:(0,_.jsxs)(S,{autoComplete:"off",children:[(0,_.jsxs)(B,{children:[(0,_.jsxs)(J,{htmlFor:n,children:["Name",(0,_.jsx)(K,{type:"text",name:"name",id:n}),(0,_.jsx)(I,{name:"name"})]}),(0,_.jsxs)(J,{htmlFor:e,children:["Number",(0,_.jsx)(K,{type:"tel",name:"number",id:e}),(0,_.jsx)(I,{name:"number"})]})]}),(0,_.jsx)(T,{type:"submit",children:"Add contact"})]})})}),D=r(9135),E=L.ZP.li(p||(p=(0,F.Z)(["\n  border-radius: 4px;\n  position: relative;\n  background-color: rgba(255, 255, 255, 0.9);\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  background-image: url(http://www.transparenttextures.com/patterns/arches.png);\n  & + & {\n    margin-top: 30px;\n  }\n"]))),G=L.ZP.span(l||(l=(0,F.Z)(["\n  display: block;\n  font-size: 26px;\n  color: #1a7e76;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  background-color: rgba(0, 0, 0, 0.1);\n"]))),M=L.ZP.span(u||(u=(0,F.Z)(["\n  display: block;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 20px;\n"]))),R=L.ZP.button(x||(x=(0,F.Z)(["\n  position: absolute;\n  padding: 5px;\n  top: 5px;\n  right: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n\n  &:hover {\n    color: red;\n    scale: 1.1;\n  }\n"]))),U=function(n){var e=n.contact,r=(0,v.I0)();return(0,_.jsxs)(E,{id:e.id,children:[(0,_.jsxs)(G,{children:[e.name,(0,_.jsx)(R,{onClick:function(){return r((0,w.GK)(e.id))},children:(0,_.jsx)(D.AyY,{size:18})})]}),(0,_.jsx)(M,{children:e.number})]})},W=(0,r(6916).P1)([k,function(n){return n.filter.filterValue}],(function(n,e){var r=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))})),Y=function(){var n=(0,v.v9)(W);return(0,_.jsx)("ul",{children:n.map((function(n){return(0,_.jsx)(U,{contact:n},n.id)}))})},$=r(2606),H=r(1634),O=L.ZP.div(m||(m=(0,F.Z)(["\n  margin-top: 10px;\n  margin-bottom: 40px;\n"]))),Q=L.ZP.label(b||(b=(0,F.Z)(["\n  margin-right: 30px;\n  color: #fff;\n  font-size: 20px;\n"]))),X=L.ZP.input(h||(h=(0,F.Z)(["\n  border: none;\n  height: 30px;\n  color: #fff;\n  border-radius: 5px;\n  font-size: 1.1em;\n  outline: none;\n  width: 250px;\n  background-color: rgba(255, 255, 255, 0.2);\n  padding: 5px 15px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n"]))),nn=(L.ZP.svg(f||(f=(0,F.Z)([""]))),function(){var n=(0,v.I0)();return(0,_.jsxs)(O,{children:[(0,_.jsx)(Q,{htmlFor:"",children:"Find contacts by name"}),(0,_.jsx)(X,{type:"text",onChange:function(e){var r=e.target.value;n((0,H.x)(r))}})]})}),en=L.ZP.h2(g||(g=(0,F.Z)(["\n  color: red;\n"]))),rn=function(){var n=(0,v.v9)(y);return(0,_.jsxs)(en,{children:[n," :("]})},tn=r(8402),an=L.ZP.div(Z||(Z=(0,F.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n"]))),on=function(){var n=(0,v.v9)(P);return(0,_.jsx)(an,{children:(0,_.jsx)(tn.s5,{strokeColor:"#36d7b7",strokeWidth:"4",animationDuration:"0.75",width:"58",visible:n})})};function sn(){var n=(0,v.I0)(),e=(0,v.v9)(P),r=(0,v.v9)(y);return(0,j.useEffect)((function(){n((0,w.yF)())}),[n]),(0,_.jsxs)("div",{children:[(0,_.jsx)(V,{}),(0,_.jsx)($.Un,{children:"Contacts"}),(0,_.jsx)(nn,{}),e&&!r&&(0,_.jsx)(on,{}),r&&(0,_.jsx)(rn,{}),!e&&(0,_.jsx)(Y,{})]})}}}]);
//# sourceMappingURL=897.d76cb247.chunk.js.map