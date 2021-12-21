export async function loader({ request }) {
    try {
      const url = new URL(request.url);
      const search = new URLSearchParams(url.search);
      if (!search.get("city")) return redirect("/");
      const city = search.get("city");
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
      );
      console.log(res.data);
      return { city, type: res.data.weather[0].main, temp: res.data.main.temp };
    } catch (err) {
      console.error(err);
      redirect("/");
      return {};
    }
  }