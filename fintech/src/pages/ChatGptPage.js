import React from "react";
import openai from "openai";

const ChatGptPage = async () => {
  const configuration = new Configuration({
    organization: "org-zHvw5dLfHxbthqZbSdgbCIvV",
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.listEngines();

  return <div>ChatGptPage</div>;
};

export default ChatGptPage;
