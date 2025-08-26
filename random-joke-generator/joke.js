
import axios from "axios";  // import axios

async function getJoke() {
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/jokes/random");
    const joke = response.data;
    console.log(`${joke.setup}\n ${joke.punchline}`);
  } catch (error) {
    console.error("Could not fetch a joke:", error.message);
  }
}

getJoke();
