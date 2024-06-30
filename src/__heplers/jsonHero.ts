import open from "open";

const jsonHero = async (json: Record<string, unknown>, title = "title") => {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content: json,
    }),
  };

  const response = await fetch(`https://jsonhero.io/api/create.json`, options);
  const jsonResponse = await response.json();

  await open(jsonResponse.location);
};

export default jsonHero;
