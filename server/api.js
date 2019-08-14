import fetch from "node-fetch";
require("dotenv").config();

exports.handler = async (event, context, callback) => {
  try {
    const response = await fetch(
      `https://sandbox-api.brewerydb.com/v2/beers/?key=${process.env.API_KEY}`,
      {
        method: "GET",
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    );

    if (!response.ok) {
      return { statusCode: response.status, body: response.statusText };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 400,
      body: err.message
    };
  }
};
