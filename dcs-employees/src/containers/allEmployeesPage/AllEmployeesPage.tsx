import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Employee from "../../components/Employee/Employee";
import styles from "./AllEmployeesPage.module.scss";

const AllEmployeesPage = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/employees")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error:", error);
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <p>"Loading..."</p>;
  if (error) return <p>"There was an error loading the data"</p>;

  const handleAddClick = () => {
    navigate("/employees/create");
  };

  return (
    <>
      <div className={styles.AllEmployees_Header}>
        <h1>Employees' list</h1>
      </div>
      <div className={styles.AllEmployees_Body}>
        <div className={styles.AllEmployees_Body_Subject}>
          <p>Please click on 'Edit' to find more details of each employee</p>
          <button onClick={handleAddClick}>Add employee</button>
        </div>
        <div className={styles.AllEmployees_Body_List}>
          {data.map((employee: any) => {
            return <Employee key={employee.id} employeeDetails={employee} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AllEmployeesPage;
