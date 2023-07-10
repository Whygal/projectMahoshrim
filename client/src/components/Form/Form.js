import { useState } from "react";
import React from "react";
import StrengthPwd from "../StrongPwd/StrongPwd";

const Form = () => {
    const [pwdInput, initValue] = useState(
        {password: "", 
        
        });
    const [isError, setError] = useState(null);
    const [isStrong, initRobustPassword] = useState("");

    const onChange = (e) => {
      let password = e.target.value;

      initValue({
        ...pwdInput,
        password: password,
        });

      // Error Handler
      setError(null);
      let caps, small, num, specialSymbol;

      if (password.length <= 4) {
        setError("הסיסמה חייבת להיות ארוכה יותר");
        return;
      } else {
        caps = (password.match(/[A-Z]/g) || []).length;
        small = (password.match(/[a-z]/g) || []).length;
        num = (password.match(/[0-9]/g) || []).length;
        specialSymbol = (password.match(/\W/g) || []).length;
        if (caps < 1) {
          setError("Must add one UPPERCASE letter");
          return;
        } else if (small < 1) {
          setError("Must add one lowercase letter");
          return;
        } else if (num < 1) {
          setError("Must add one number");
          return;
        } else if (specialSymbol < 1) {
          setError("Must add one special symbol: @$! % * ? &");
          return;
        }
      }
    };

    // To use Next on the the components as yor need...
    const initPwdInput = async (childData) => {
      initRobustPassword(childData);
    };

    const onSubmit = async (e) => {
      try {
        e.preventDefault();
        e.persist();
      } catch (error) {
        throw error;
      }
    };

    return (
      <div className="center">
        <form onSubmit={onSubmit}>
          <label>
            <strong>Password</strong>
          </label>
          {isError !== null && <p className="errors"> - {isError}</p>}
          <input
            type="password"
            id="password"
            name="password"
            onChange={onChange}
            required
          />
          <StrengthPwd 
          password={pwdInput.password} 
          actions={initPwdInput}
           />
          {isStrong === "strong" ? <button type="submit"> Register </button> : <div></div>}
          <button onClick={()=>console.log(isStrong)}>test</button>
        </form>
      </div>
    );
  };
  export default Form;
