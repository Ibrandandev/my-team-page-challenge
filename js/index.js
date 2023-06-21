const team = [
  {
    imageUrl: "./assets/images/photo1.png",
    name: "Bill Mahoney",
    role: "Product owner",
  },
  {
    imageUrl: "./assets/images/photo2.png",
    name: "Saba Cabrera",
    role: "Art director",
  },
  {
    imageUrl: "./assets/images/photo3.png",
    name: "Shae Le",
    role: "Tech Lead",
  },
  {
    imageUrl: "./assets/images/photo4.png",
    name: "Skylah Lu",
    role: "UX Designer",
  },
  {
    imageUrl: "./assets/images/photo5.png",
    name: "Griff Richards",
    role: "Developer",
  },
  {
    imageUrl: "./assets/images/photo6.png",
    name: "Stan John",
    role: "Developer",
  },
];

const gallery = document.querySelector("#gallery");

team.forEach((person) => {
  gallery.innerHTML += `
  <article class="person">
    <div>
      <img src=${person.imageUrl} class="person__img">
      <p class="person__role">${person.role}</p>
    </div>
    <p class="person__name">${person.name}</p>
  </article>`;
});
