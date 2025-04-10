const main = async () => {
  const searchParams = new URLSearchParams(window.location.search);
  console.log(searchParams.get("id"));
  const id = searchParams.get("id");

  const $content = document.querySelector(".single_content");
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const responseData = await response.json();

  console.log(responseData);

  $content.innerHTML = `
        <h1>
            ${responseData.name}
        </h1>
        <img src="${responseData.image}" alt="${responseData.name}"/>
            <h3>Ingredients</h3>
        <ul class="ingredients">
        ${responseData.ingredients
          .map((ingredient) => `<li>${ingredient}</li>`)
          .join("")}
        </ul>
        <h2>Instructions</h2>
        <ul class="instrucciones">
        ${responseData.instructions
          .map((instruction) => `<li>${instruction}</li>`)
          .join("")
        }
        </ul>
    `;
};

main();
