export default function TabBar(active='home'){
  const tabs=[
    {id:'home',label:'Inicio',to:'/home'},
    {id:'abogado',label:'Mi Abogado',to:'/abogado'},
    {id:'contratos',label:'Contratos',to:'/contratos'},
    {id:'cursos',label:'Cursos',to:'/cursos'},
    {id:'planes',label:'Planes',to:'/planes'},
  ];
  return `<nav class="tabbar"><div class="wrap">
    ${tabs.map(t=>`<a class="btn ${active===t.id?'primary':''}" href="#${t.to}" style="text-align:center;padding:10px 8px;border-radius:12px">${t.label}</a>`).join('')}
  </div></nav>`;
}