import React from "react"
import { navigate } from "gatsby"
import { useForm } from "react-hook-form"
import "./Form.css"

const slugify = require("slugify")

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const FormError = ({ error, required }) => (
  <p className="text-red-700 mt-2">
    {required ? "This field is required" : error}
  </p>
)

const FormInput = ({ field, errors, register }) => {
  const fieldName = slugify(field.label, "")

  if (field._type === "formTextInputField") {
    return (
      <>
        <input
          type="text"
          className={`${errors[fieldName] ? "has-error" : ""}`}
          name={fieldName}
          ref={register({ required: field.required })}
          placeholder={field.placeholder || ""}
        />
        {errors[fieldName] && <FormError required="true" />}
      </>
    )
  }
  if (field._type === "formEmailInputField") {
    return (
      <>
        <input
          type="email"
          className={`${errors[fieldName] ? "has-error" : ""}`}
          name={fieldName}
          ref={register({
            required: field.required,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Please enter a valid email address",
            },
          })}
          placeholder={field.placeholder || ""}
        />
        {errors[fieldName] && errors[fieldName].type === "required" && (
          <FormError required="true" />
        )}
        {errors[fieldName] && errors[fieldName].type === "pattern" && (
          <FormError error={errors[fieldName].message} />
        )}
      </>
    )
  }
  if (field._type === "formTextAreaInputField") {
    return (
      <>
        <textarea
          className={`${errors[fieldName] ? "has-error" : ""}`}
          rows={field.rows || 4}
          name={fieldName}
          ref={register({ required: field.required })}
          placeholder={field.placeholder || ""}
        />
        {errors[fieldName] && errors[fieldName].type === "required" && (
          <FormError required="true" />
        )}
      </>
    )
  }
}

export default function Form({ rawPageBuilder }) {
  const formName = slugify(rawPageBuilder.title)
  // const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log(data)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": formName,
        ...data,
      }),
    })
      .then(() => {
        // setSubmitted(true)
        navigate("/thanks")
      })
      .catch(error => alert(error))
  }

  return (
    <div className="container mx-auto px-4">
      <form
        className="form md:w-1/2 mx-auto"
        name={formName}
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="form-name" value={formName} />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" ref={register} />
          </label>
        </p>

        {rawPageBuilder.formFields.map(field => {
          return (
            <div className="field" key={field._key}>
              <FormInput field={field} errors={errors} register={register} />
            </div>
          )
        })}

        <div className="text-right">
          <button className="button primary small" type="submit">
            <span>{rawPageBuilder.submitButtonText || "Submit"}</span>
          </button>
        </div>
      </form>
    </div>
  )
}
