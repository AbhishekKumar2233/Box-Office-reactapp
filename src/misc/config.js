const Api_base_url = `https://api.tvmaze.com`;

export async function apiGet(queryString) {
  const response = await fetch(`${Api_base_url}${queryString}`).then((result) =>
    result.json()
  );

  return response;
}
// Api fetch using await and asyc func
