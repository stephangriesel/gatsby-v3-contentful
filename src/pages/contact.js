import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <main className="contact-page">
        <section className="contact-page-section">
          <article>
            <h1>Let's Chat</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              voluptatibus corporis asperiores consequuntur. Illo dolor
              accusamus tempore earum quis adipisci nisi, laborum eos, vero,
              quam veniam ipsum minus. Impedit.
            </p>
          </article>
          <article className="form-section">
            <form
              className="contact-form"
              action="https://formspree.io/f/mknkgeok"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your E-mail</label>
                <input type="text" email="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contact
