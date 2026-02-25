import "../css/Dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Dashboards = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const Dashboard = localStorage.getItem("Dashboard");
    if (Dashboard) {
      setUser(JSON.parse(Dashboard));
    } else {
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Dashboard");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <h2>داشبورد کاربری</h2>
      <div className="user-info">
        <h3>اطلاعات فرد:</h3>
        <p>
          <strong>نام:</strong> {user ? user.UserName : null}
        </p>
        <p>
          <strong>ایمیل:</strong> {user ? user.email : null}
        </p>
      </div>
      <button onClick={handleLogout} className="logout-btn">
        خروج از حساب
      </button>
    </div>
  );
};

export default Dashboards;
