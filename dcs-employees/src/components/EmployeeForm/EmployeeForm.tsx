import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./EmployeeForm.module.scss";

interface Params {
  formParams: {
    crudMethod: string;
    fetchUrl: string;
  };
}

type Inputs = {
  firstName: string;
  middleName: string;
  lastName: string;
  emailAddress: string;
  mobNumber: number;
  resAddress: string;
  empStatus: string;
  startDate: Date;
  endDate: Date | null;
  workBasis: string;
  hrsPerWeek: number;
  onGoing: boolean;
};

const EmployeeForm = ({ formParams }: Params) => {
  const navigate = useNavigate();

  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (employeeDetails: Inputs) => {
    fetch(`http://localhost:8080/${formParams.fetchUrl}`, {
      method: formParams.crudMethod,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employeeDetails),
    }).then((res) => res.json());
    alert(
      `${employeeDetails.firstName} ${
        employeeDetails.lastName
      }'s details have been ${
        formParams.crudMethod == "POST" ? "added to" : "updated in"
      } the employee register.`
    );
    navigate("/employees");
  };

  if (formParams.crudMethod == "PUT") {
    useEffect(() => {
      fetch(`http://localhost:8080/${formParams.fetchUrl}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error:", error);
          setError(error);
        })
        .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <p>"Loading..."</p>;
    if (error) return <p>"There was an error loading the data"</p>;
  }

  const isOnGoing = watch("onGoing");

  if (isOnGoing) {
    setValue("endDate", null);
  }

  const handleCancel = () => {
    navigate("/employees");
  };

  return (
    <form className={styles.Form_Body} onSubmit={handleSubmit(onSubmit)}>
      <h2>Personal information</h2>
      <div className={styles.Form_Break}>
        <label className={styles.Form_Label} htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          defaultValue={data.firstName || ""}
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <small className={styles.Form_Validation}>
            This field is required
          </small>
        )}
      </div>
      <div className={styles.Form_Break}>
        <label className={styles.Form_Label} htmlFor="middleName">
          Middle Name (if applicable)
        </label>
        <input
          type="text"
          defaultValue={data.middleName || ""}
          {...register("middleName")}
        />
      </div>
      <div className={styles.Form_Break}>
        <label className={styles.Form_Label} htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          defaultValue={data.lastName || ""}
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <small className={styles.Form_Validation}>
            This field is required
          </small>
        )}
      </div>
      <div className={styles.Form_Breaker}>
        <h2>Contact details</h2>
      </div>
      <div className={styles.Form_Break}>
        <label className={styles.Form_Label} htmlFor="emailAddress">
          Email address
        </label>
        <input
          defaultValue={data.emailAddress || ""}
          type="email"
          {...register("emailAddress", { required: true })}
        />
        {errors.emailAddress && (
          <small className={styles.Form_Validation}>
            This field is required
          </small>
        )}
      </div>
      <div className={styles.Form_Break}>
        <label className={styles.Form_Label} htmlFor="mobNumber">
          Mobile number
        </label>
        <small className={styles.Break}>Must be an Australian number</small>
        <input type="button" value="+61" />
        <input
          type="tel"
          defaultValue={data.mobNumber || ""}
          {...register("mobNumber", {
            required: true,
            valueAsNumber: true,
            min: 9,
          })}
        />
        {/* pattern: /[4]{1}[0-9]{8}/, */}
        {errors.mobNumber && (
          <small className={styles.Form_Validation}>
            This field is required
          </small>
        )}
      </div>
      <div className={styles.Form_Break}>
        <label className={styles.Form_Label} htmlFor="resAddress">
          Residential address
        </label>
        {/* <small>Start typing to search</small> */}
        <input
          id="form-address"
          type="text"
          defaultValue={data.resAddress || ""}
          {...register("resAddress", { required: true })}
        />
        {errors.resAddress && (
          <small className={styles.Form_Validation}>
            This field is required
          </small>
        )}
      </div>
      <div className={styles.Form_Breaker}>
        <h2>Employee status</h2>
      </div>
      <div className={styles.Form_Break}>
        <p className={styles.Form_Label}>What is contract type?</p>
        <input
          id="nsw-checkbox"
          defaultChecked={data.empStatus == "Permanent"}
          type="radio"
          {...register("empStatus", { required: true })}
          value="Permanent"
        />
        <label htmlFor="permanent">Permanent</label>
        <div className={styles.Break}>
          <input
            id="nsw-checkbox"
            defaultChecked={data.empStatus == "Contract"}
            type="radio"
            {...register("empStatus")}
            value="Contract"
          />
          <label htmlFor="contract">Contract</label>
        </div>
        {errors.empStatus && (
          <small className={styles.Form_Validation}>
            This option is required
          </small>
        )}
      </div>
      <div className={styles.Form_Break}>
        <label className={styles.Form_Label} htmlFor="startDate">
          Start Date
        </label>
        <input
          defaultValue={data.startDate || ""}
          type="date"
          {...register("startDate", { required: true })}
        />
        {errors.startDate && (
          <small className={styles.Form_Validation}>
            This field is required
          </small>
        )}
      </div>
      {!isOnGoing && (
        <>
          <div className={styles.Form_Break}>
            <label className={styles.Form_Label} htmlFor="endDate">
              Finish Date
            </label>
            <input
              defaultValue={data.endDate || ""}
              type="date"
              {...register("endDate", {
                required: !isOnGoing,
              })}
            />
            {errors.endDate && (
              <small className={styles.Form_Validation}>
                This field is required if not On-going
              </small>
            )}
            {/* CAN HAVE VALIDATION FOR FINISH DATE CANNOT BE LESS THAN STARTING DATE. */}
          </div>
        </>
      )}
      <div className={styles.Form_Break}>
        <input
          defaultChecked={data.onGoing}
          id="nsw-checkbox"
          type="checkbox"
          {...register("onGoing")}
        />
        <label htmlFor="onGoing">On-going</label>
      </div>
      <div className={styles.Form_Break}>
        <label htmlFor="workBasis"></label>
        <p className={styles.Form_Label}>
          Is this on a full-time or part-time basis?
        </p>
        <input
          defaultChecked={data.workBasis == "Full-time"}
          id="nsw-checkbox"
          type="radio"
          {...register("workBasis", { required: true })}
          value="Full-time"
        />
        <label htmlFor="fullTime">Full-time</label>
        <div className={styles.Break}>
          <input
            id="nsw-checkbox"
            defaultChecked={data.workBasis == "Part-time"}
            type="radio"
            {...register("workBasis")}
            value="Part-time"
          />
          <label htmlFor="partTime">Part-time</label>
        </div>
        {errors.workBasis && (
          <small className={styles.Form_Validation}>
            This option is required
          </small>
        )}
      </div>
      <div className={styles.Form_Break}>
        <label className={styles.Form_Label} htmlFor="hrsPerWeek">
          Hours per week
        </label>
        <input
          type="number"
          defaultValue={data.hrsPerWeek || ""}
          {...register("hrsPerWeek", {
            required: true,
            min: 1,
            valueAsNumber: true,
          })}
        />
        {errors.hrsPerWeek && (
          <small className={styles.Form_Validation}>
            Your hours need to be greater than 0
          </small>
        )}
      </div>
      <div className={styles.Form_Breaker}>
        <button type="submit">Save</button>{" "}
        <button className={styles.Form_SecButton} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
