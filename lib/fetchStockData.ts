export async function getNSEIndices() {
  const res = await fetch("https://www.nseindia.com/api/allIndices", {
    headers: {
      "User-Agent": "Mozilla/5.0",
      Accept: "application/json",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch indices");
  return res.json();
}
