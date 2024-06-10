import { useState } from "react";
const useSearchPlaces = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Place[]>([]);

  const searchPlaces = async (location: string): Promise<Place[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch("/data/fakePlaces.json")
          .then((response) => response.json())
          .then((data) => {
            const foundPlaces = data.filter((place: Place) =>
              place.location.toLowerCase().includes(location.toLowerCase())
            );
            resolve(foundPlaces);
          });
      }, 1500);
    });
  };

  const postRequest = async (location: string) => {
    try {
      setLoading(true);
      const places = await searchPlaces(location);
      console.log("Places:", places);
      setResult(places.slice(0, 20));
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setOpen(true);
      setLoading(false);
    }
  };

  return { result, postRequest, open, setOpen, loading };
};

export default useSearchPlaces;
