import fs from "fs";
// import fetch from "node-fetch";
import dotenv from "dotenv";
import OpenAI, { toFile } from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.API_TOKEN,
});

// 훈련 파일 업로드 (jsonl 파일)
// await openai.files.create({
//   file: fs.createReadStream("dataSet.jsonl"),
//   purpose: "fine-tune",
// });

// Fine Tuning 시작
const fineTune = await openai.fineTuning.jobs.create({
  training_file: "file-Trp8wJ4G0dtNBeAvXoxG7hWy", // 훈련 파일. 공홈 File 태그의 ID
  model: "ft:gpt-3.5-turbo-1106:personal::8UQytKPc", // 훈련 모델. Fine Tuning 태그의 모델 ID
});
