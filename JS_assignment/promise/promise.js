var btn=document.getElementById("displayPhotos");
btn.addEventListener('click',getUsers);

function getUsers() {
    var url = 'https://jsonplaceholder.typicode.com/photos';

    fetch(url)
  .then(function(response) {
    return response.json();
    // updateUserList(Json.parse(response));
  })
  .then(function(myJson) {
    //   console.log(myJson);
    updateUserList(myJson);
  });

}

function updateUserList(response) {
    for(var i = 0; i < response.length;i++) {
        var album = response[i];
        let userElement = document.createElement('div');
        userElement.className = 'album';
        var id = document.createElement('p');
        id.innerHTML = album.id;
        var title = document.createElement('p');
        title.innerHTML = album.title;
        var image = document.createElement('img');
        //var src = album.url;
        //image.innerHTML = album.thumbnailUrl;
        image.setAttribute('src',album.thumbnailUrl);
        var linebreak = document.createElement('br');

        userElement.appendChild(id);
        userElement.appendChild(title);
        userElement.appendChild(image);
        userElement.appendChild(linebreak);

        document.getElementById('user-list').appendChild(userElement);
    }
}
