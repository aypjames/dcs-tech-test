import { Link, useNavigate } from "react-router-dom";
import { getEmploymentYears } from "../../utilities/utilities";
import styles from "../Employee/Employee.module.scss";

export interface IEmployeeProps {
  employeeDetails: {
    id: number;
    firstName: string;
    lastName: string;
    empStatus: string;
    emailAddress: string;
    startDate: Date;
    endDate: Date;
    onGoing: boolean;
  };
}

const Employee = ({ employeeDetails }: IEmployeeProps) => {
  const emp = employeeDetails;

  const handleRemove = () => {
    const confirmationMsg = `Are you sure you want to remove ${emp.firstName} ${emp.lastName} from the employee register?`;
    if (confirm(confirmationMsg) == true) {
      fetch(`http://localhost:8080/employees/${emp.id}`, {
        method: "DELETE",
      });
      location.reload();
    }
  };

  const getEmployeementPeriod = () => {
    if (emp.onGoing) {
      return "On-going";
    }
    return getEmploymentYears(emp.startDate, emp.endDate) + " yrs";
  };

  return (
    <div className={styles.Employee}>
      <div className={styles.Employee_Details}>
        <h4>{`${emp.firstName} ${emp.lastName}`}</h4>
        <p>{`${emp.empStatus} - ${getEmployeementPeriod()}`}</p>
        <p>{`${emp.emailAddress}`}</p>
      </div>
      <div className={styles.Employee_Links}>
        <Link to={`/employees/${emp.id}`}>Edit</Link> |{" "}
        <a className={styles.Employee_Remove} onClick={handleRemove}>
          Remove
        </a>
      </div>
    </div>
  );
};

export default Employee;
