import Menu from "../data/menu";

export const getMenu = () => {
    const m = window.localStorage.getItem("pizzaokmenu");
    if (!m) {
        saveMenu(Menu);
    }
    return m ? JSON.parse(m) : Menu;
};

export const getFavourites = () => {
    const m = getMenu();
    return m.filter(pizza => pizza.favourite);
};

export const saveFavourite = id => {
    toggleFav(id);
};

export const removeFavourite = id => {
    toggleFav(id);
};

const getPizza = (menu, id) => {
    let idx;
    menu.forEach((it, i) => {
        if (it.id === id) idx = i;
    });
    return menu[idx];
};

const toggleFav = id => {
    const m = getMenu();
    const pizza = getPizza(m, id);
    pizza.favourite = !pizza.favourite;
    saveMenu(m);
};

const saveMenu = menu => {
    return window.localStorage.setItem("pizzaokmenu", JSON.stringify(menu));
};
