import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useSnack } from "../../providers/SnackbarProvider";
import { getCards } from "../services/cardApiService";

export default function useCards() {
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useAxios();
  const snack = useSnack();
  const handleGetCards = async () => {
    setLoading(true);
    try {
      let data = await getCards();
      setLoading(false);
      setCards(data);
      snack("success", "All the cards are here!");
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return {
    cards,
    isLoading,
    error,
    handleGetCards,
  };
}
