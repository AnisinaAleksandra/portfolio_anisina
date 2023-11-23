export const makePostRequest = (
  url: string,
  details: { chat_id: string; parse_node: string; text: string }
) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  }).then((response) => response.json());
};
