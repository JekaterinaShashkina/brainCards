import { createElement } from "../helper/createElement.js";

export const createCategory = (app) => {
  const category = createElement("section", {
    className: "category section-offset",
  });

  const container = createElement("div", {
    className: "container",
  });
  category.append(container);

  const categoryList = createElement("ul", {
    className: "category__list",
  });

  container.append(categoryList);

  const createCategoryCard = (data) => {
    const item = createElement("li", {
      className: "category__item",
    });

    item.dataset.id = data.id;

    const button = createElement("button", {
      className: "category__card",
    });

    const title = createElement("span", {
      className: "category__title",
      textContent: data.title,
    });
    const pairs = createElement("span", {
      className: "category__pairs",
      textContent: `${data.length} пар`,
    });

    button.append(title, pairs);

    const categoryEdit = createElement("button", {
      className: "category__btn category__edit",
    });
    const categoryDelete = createElement("button", {
      className: "category__btn category__del",
    });

    item.append(button, categoryEdit, categoryDelete);
    return item;
  };

  const mount = (data) => {
    categoryList.textContent = "";
    app.append(category);
    const cards = data.map(createCategoryCard);
    categoryList.append(...cards);
  };

  const unmount = () => {
    category.remove();
  };
  return { mount, unmount, categoryList };
};

`      <section class="category section-offset">
        <div class="container">
        <ul class="category__list">
            <li class="category__item" data-id="bc2iv1cwi6ht">
            <button class="category__card">
                <span class="category__title">Косвенные местоимения</span>
                <span class="category__pairs">7 пар</span>
            </button>
            <button
                class="category__btn category__edit"
                aria-label="редактировать"
            ></button>
            <button
                class="category__btn category__del"
                aria-label="удалить"
            ></button>
            </li>    
        </ul>
        </div>
    </section>`;
