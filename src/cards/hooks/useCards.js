import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useSnack } from "../../providers/SnackbarProvider";
import { deleteCard, getCards, getMyCards } from "../services/cardApiService";

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
      setCards(null);
      setError(error);
    }
  };

  const handleGetMyCards = async () => {
    setLoading(true);
    try {
      let data = await getMyCards();
      setLoading(false);
      setCards(data);
      snack("success", "Your cards are here!");
    } catch (error) {
      setLoading(false);
      setCards(null);
      setError(error);
    }
  };

  const handleDeleteCard = async (cardId) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      setLoading(false);
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
    handleGetMyCards,
    handleDeleteCard,
  };
}
