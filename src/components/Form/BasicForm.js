import axios from "axios";
import useInput from "../hooks/useInput";

const isNotEmpty = (value) => value.trim() !== "";
// const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: PhoneValue,
    isValid: PhoneIsValid,
    hasError: PhoneHasError,
    valueChangeHandler: PhoneChangeHandler,
    inputBlurHandler: PhoneBlurHandler,
    reset: resetPhone,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (firstNameIsValid && PhoneIsValid && emailIsValid &&props.sum>0) {
    formIsValid = true;
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(firstNameValue, PhoneValue, emailValue);
    const res=await axios.post(
      "https://react-http-movies-e331b-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        name: firstNameValue,
        address: emailValue,
        phone: PhoneValue,
        items: props.cartItems
      }
    );
    console.log(res)
    resetFirstName();
    resetPhone();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const PhoneClasses = PhoneHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Please enter a first name.</p>
          )}
        </div>
        <div className={PhoneClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={PhoneValue}
            onChange={PhoneChangeHandler}
            onBlur={PhoneBlurHandler}
          />
          {PhoneHasError && (
            <p className="error-text">Please enter a last name.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Order</button>
      </div>
    </form>
  );
};

export default BasicForm;
