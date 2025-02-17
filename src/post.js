import { ref, set, database, push, onChildAdded } from "./config.js";
const { Client, Storage, ID } = Appwrite;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67a6f6540029c2859849");

const storage = new Storage(client);

const addPost = () => {
  const content = document.getElementById("content").value;
  const imageFile = document.getElementById("imageFile").files[0];

  const promise = storage.createFile(
    "67a6fd40000623fcaa53",
    ID.unique(),
    document.getElementById("imageFile").files[0]
  );

  promise.then(
    function (response) {
      console.log(response);
      const result = storage.getFileDownload(
        "67a6fd40000623fcaa53",
        response.$id
      );
      const postRef = ref(database, `Post/`);
      const uniqueIdRef = push(postRef);
      set(uniqueIdRef, {
        content,
        url: result,
      })
        .then((value) => {
          alert("Post added to Databasse");
        })
        .catch((error) => {
          console.log(error);
        });

      // console.log(content, imageFile);
    },
    function (error) {
      console.log(error); //Failure
    }
  );

  // console.log(result);
};

let postArr = [];
const getPosts = () => {
  const postRef = ref(database, `Post/`);
  onChildAdded(postRef, (snapshot) => {
    const data = snapshot.val();
    postArr.push(data);
    console.log(postArr);
    const postContainer = document.getElementById("posts");

    postArr.forEach((item, i) => {
      let html = `<div id="post">
<img width="100" height="100"
src=${item.url}
alt="">
<p>${item.content}</p>
</div>`;

      postContainer.innerHTML += html;
    });
  });
};
getPosts();

const button = document.getElementById("post-btn");
button.addEventListener("click", addPost);
