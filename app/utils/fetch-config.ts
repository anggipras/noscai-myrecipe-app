export const getData = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      next: { revalidate: 5 }, //function from nextjs for fetch in order to only get fresh data after certain times, before that it would use from cache
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

//add more fetch function with other method such as POST, DELETE, etc
