import fs from "fs";
import dotenv from "dotenv";
import OpenAI, { toFile } from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.API_TOKEN,
});

// 훈련 파일 업로드 (jsonl 파일)
// await openai.files.create({
//   file: fs.createReadStream("dataSet_cognitive_1(20240110).jsonl"),
//   purpose: "fine-tune",
// });

// Fine Tuning 시작 - 기존 Fine Tuning 완료 모델을 이어서 학습 가능
// const fineTune = await openai.fineTuning.jobs.create({
//   training_file: "file-TDNFjA8QJEkLvUKz9RBcKnxs", // 훈련 파일. 공홈 File 태그의 ID
//   model: "ft:gpt-3.5-turbo-1106:personal::8f03oYHL", // 훈련 모델. Fine Tuning 태그의 모델 ID
// });

// 모델 리스트
// let page = await openai.fineTuning.jobs.list({ limit: 10 });
// console.log(page.data);

// 모델 삭제
// let model = await openai.models.delete("모델명(id 아님)");
