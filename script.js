async function loadPosts() {
    document.querySelector('#posts').innerHTML = 'Carregando'

    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let res = await req.json();

    montarBlog(res)
    
    
    /*
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado) {
            return resultado.json();
        })
        .then(function(res) {
            montarBlog(res);
        })
        .catch(function(error) {
            console.log('Deu algum erro!');
        })*/
}   


function montarBlog(blog) {
    let html = '';

    for(let i in blog) {
        html += `<h3 ${blog[i].title} </h3>`;
        html += `${blog[i].body} <br/>`;
        html += '<hr/>';
    }

    document.querySelector('#posts').innerHTML = html;
}