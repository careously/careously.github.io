
const body = document.getElementById('body');
const addNewBtn = document.getElementById('addNewBtn');
const addBookBtn = document.getElementById('addBookBtn');

const closeBtn = document.getElementById('closeBtn');

const postContainer = document.getElementById('container');

/* reveal new book form */
addNewBtn.addEventListener('click', function() {
    document.getElementById('myForm').style.display = 'block';
    body.style.opacity = '0.5'

    console.log('you opened new book thing');
});

/* close new book form */
closeBtn.addEventListener('click', function() {
  document.getElementById('myForm').style.display = 'none';
  body.style.opacity = '1';  
});

/* add new book form */
addBookBtn.addEventListener('click', function(event) {
  
    /* values of user input */
    const newTitle = document.getElementById('newTitle').value;
    const newAuthor = document.getElementById('newAuthor').value;
    const newReview = document.getElementById('newReview').value;

    /* prevent default */
    event.preventDefault();
    if (newTitle === '' || newAuthor === '' || newReview === '') {
      alert('Please fill out all fields');
      return;
  }

    /* create new post element */
    const newPost = document.createElement('div');
        newPost.className = 'container';
        newPost.innerHTML = `
        <div class="header">
          <img class="book-cover" />
          <div class="book-info">
            <h3 class="book-title title">${newTitle}</h3>
            <p class="author font">${newAuthor}</p>
          </div>
        </div>
        <div class="rating">
          <div>
            <i class="bx bxs-star bx-sm"></i>
            <i class="bx bxs-star bx-sm"></i>
            <i class="bx bxs-star bx-sm"></i>
            <i class="bx bxs-star bx-sm"></i>
            <i class="bx bxs-star bx-sm"></i>
          </div>
          <p class="final-rating font">/ 5</p>
        </div>
        <p class="review font">${newReview}</p>
        `;

    body.insertBefore(newPost, body.firstChild);

    /* star rating system */
    
    document.getElementById('myForm').style.display = 'none';
    body.style.opacity = '1'

    
});
