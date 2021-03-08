export const optionsForSelectPrice = [
  { label: "Цена по возрастанию", value: "asc" },
  { label: "Цена по убыванию", value: "desc" },
];
export const labelForPriceSelect = "Сортировать по:";

export const optionsForSelectMaterial = [
  { label: "Не выбрано", value: 0 },
  { label: "Дерево", value: 1 },
  { label: "Металл", value: 2 },
];
export const labelForMaterialSelect = "Материал";

export const findItem = (id) => {
  if (localStorage.getItem(id)) {
    return true;
  }
  return false;
};

export const addItemToStorage = (item) => {
  localStorage.setItem(item, item.name);
};

export const removeItemFromStorage = (item) => {
  localStorage.removeItem(item);
};
