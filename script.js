// Homework 1

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((data) => {
      const h2 = document.createElement("h2");
      h2.textContent = data.title;
      document.querySelector("body").appendChild(h2);
    });
  });

// Homework 2

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => {
    const img = document.createElement("img");
    img.src = data.message;
    img.style.maxWidth = "900px";
    img.style.width = "100%";
    img.style.maxHeight = "900px";
    img.style.height = "100%";
    document.querySelector("body").appendChild(img);
  });
