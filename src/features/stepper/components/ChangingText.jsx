// ChangingText.jsx
const texts = [
  "Яаж ийм хөөрхөн байдаг байна аа?",
  "Чи миний өдрийн хамгийн гоё хэсэг болчихжээ",
  "Өөрөө их хөөрхөн юм аа",
  "Чи ер нь өөрийгөө ямар хөөрхөн гэдгийг мэддэг үү?",
  "Энэ сайтыг хийж байхдаа хүртэл чамайг бодоод байлаа",
  "My fav notification",
];

export default function ChangingText({ index }) {
  return (
    <div className="text-xl font-bold h-32 w-62 p-5 text-center ">
      {texts[index % texts.length]}
    </div>
  );
}
