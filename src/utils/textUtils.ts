export function extractContent(str) {
  if (str === null || str === "") return false;
  else str = str.toString();

  // Regular expression to identify HTML tags and replace them with an empty string
  str = str.replace(/(<([^>]+)>)/gi, "");

  // Regular expression to identify common HTML entities and replace them with their corresponding characters
  const entities = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&apos;": "'",
    // Add more entities as needed
  };

  for (const [entity, character] of Object.entries(entities)) {
    str = str.replace(new RegExp(entity, "gi"), character);
  }

  return str.replace(/(\r\n|\n|\r){2,}/g, "\n");
}
