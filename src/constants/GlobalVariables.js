// export const $storeTitles = "Coop";
export const $storeTitles = ["Coop", "Migros"];

export const LIST_TYPE = {
  USER: "userList",
  STORE: "storeList",
};

export const ERROR_MSG = {
  LOCAL_STORAGE: "Local Storage Error: Could not access local storage",
  GROC_LOCAL_REMOVE:
    "Local Storage Error: Could not remove grocery list from local storage",
  FAV_LOCAL_REMOVE:
    "Local Storage Error: Could not remove favorites list from local storage",
  DB_CONNECT: "Error: Could not get data from database",
  FETCH_PROD:
    "Connection Error: Mock products being displayed are to test page functionality. Category selection will be limited.",
};

export const STORE_INFO = {
  COOP: { storeTitle: "Coop", storeLink: "https://www.coop.ch/de/" },
  MIGROS: { storeTitle: "Migros", storeLink: "https://www.migros.ch/de" },
};
