import './form.scss'

const Form = () => {
  return (
    <form className="form">
      <input className="form__input" placeholder="What me do?" name="to-do-input"></input>
      <label className="form__label visually-hidden" htmlFor="to-do-input">Fill in to do</label>
    </form>
  )
}

export default Form
