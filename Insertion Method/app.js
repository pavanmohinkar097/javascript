let m=document.getElementsByTagName('div')[0]
let div=document.createElement('div')
div.innerHTML='<h1>Hello World!</h1>'
// m.append(div)
// m.prepend(div)
// m.before(div)
// m.after(div)
m.replaceWith(div)