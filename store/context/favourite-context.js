import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

const FavouriteContextProvider = ({ children }) => {
  const [favouriteIds, setFavouriteIds] = useState([]);

  const addFavourite = (id) => setFavouriteIds((current) => [...current, id]);
  const removeFavourite = (id) =>
    setFavouriteIds((current) => current.filter((mealId) => mealId != id));

  const value = {
    ids: favouriteIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
