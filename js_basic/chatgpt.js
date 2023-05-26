import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
