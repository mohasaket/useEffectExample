import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //خوب این هوک مشخصه که برای ذخیره دیتا
  const [data, setData] = useState([]);
  //این یکی هم برای اینکه بخواد مدیریت لود دیتا کنه
  const [loading, setLoading] = useState(true);

  // برای انجام effect جانبی
  useEffect(() => {
    //  فانکشن" برای گرفتن داده‌ها از API"

    const fetchData = async () => {
      setLoading(true);
      try {
        // گرفتن داده‌ها از API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        // به‌روزرسانی حالت داده‌ها با داده‌های گرفته شده
        setData(result);
      } catch (error) {
        console.error(" نمایش خطا:", error);
      }
      //بعد از گرفتن داده‌ها،
      //setLoading(false) برای به‌روزرسانی حالت بارگذاری فراخوانی می‌شود.
      setLoading(false);
    };
    //تابع fetchData از fetch برای گرفتن داده‌ها از https://jsonplaceholder.typicode.com/posts استفاده می‌کند.
    //سپس پاسخ را به JSON تبدیل کرده و حالت data را به‌روز می‌کند.

    fetchData();
  }, []); // "آرایه dependency" خالی به این معناست که
  //effect
  // فقط یک بار بعد از رندر اولیه اجرا می‌شود

  // اگر loading درست باشد،
  //کامپوننت یک پیام "Loading..." را برمی‌گرداند.
  if (loading) {
    return <div>منتظر بمانید...</div>;
  }
  //  رندر داده‌های گرفته شده
  return (
    <div>
      <h1>اطلاعات گرفته شده</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
