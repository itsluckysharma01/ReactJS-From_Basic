import useForm from "./useForm";
import validate from "./validate";

function Form() {
  const { values, errors, handleChange, handleSubmit } = useForm(
    { username: "", email: "", password: "" },
    validate
  );

  const submitForm = () => {
    alert("Form submitted successfully ✅");
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
