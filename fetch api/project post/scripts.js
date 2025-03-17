function fetchdata(){
    fetch('https://dummyjson.com/posts')
    .then(response => response.json())
    .then(data=> {
        const postsContainer = document.getElementById('posts');
        data.posts.forEach(post => {
            console.log(post)
            const postsElement = document.createElement('div');
            postsElement.className = 'card';
            postsElement.innerHTML = `
                <div class="card-body">
                <h6 class="card-title">id:${post.id}</h6>
                 <h5 class="card-subtitle mb-2">${post.title}</h5>
                 <p class="card-text">${post.body}.</p>
                    </div>
                </div>
            `;
            postsContainer.appendChild(postsElement);
        });
    })
    .catch(error => console.error('Error fetching posts:',error));
}
fetchdata();