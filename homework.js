
let posts = [
  {
    title: 'Title 1',
    author: 'Author 1',
    content: 'Content 1',
  },
  {
    title: 'Title 2',
    author: 'Author 2',
    content: 'Content 2',
  },
  {
    title: 'Title 3',
    author: 'Author 3',
    content: 'Content 3',
  },
]

const listPosts = () => {
  return new Promise((resolve, reject) => {
    if (posts) {
      posts.map((post) => {
        console.log(post.title, post.author, post.content)
      })
      resolve(posts)
    } else {
      reject('Bir hata oluştu.')
    }
  })
}

// addPosts() metthod create the use Promise and resolve, reject arguments. 

const addPost = (newPost) => {
  return new Promise((resolve, reject) => {
    if (newPost) {
      posts.push(newPost)
      resolve(posts)
    } else {
      reject('Bir hata oluştu.')
    }
  })
}


// async and await uses the showPosts() method create.

const showPosts = async () => {
  try {
    await addPost({
      title: 'Post 4',
      author: 'Author 4',
      content: 'Content 4',
    })
    console.log(await listPosts())
  } catch (error) {
    console.error(error)
  }
}
showPosts();
