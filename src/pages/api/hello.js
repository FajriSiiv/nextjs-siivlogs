// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      waktu: "3 Jam yang lalu",
    },
    {
      waktu: "2 Hari yang lalu",
    }
  );
}
