import React, { Component } from 'react'

// ==== Challenge ====
// 1. Update the contents of the `<h1>` tag to say "Hello, World!"
// 2. Save the file and notice the browser updates
// 3. Feel an overwhelming sense of joy and accomplishment
// ===================

export default class HelloWorld extends Component {
  render() {
    return <section id="hello-world" className="content-area">
      <div className="g-row">
        <div className="g-column small-12">
          <h1>Hello, _______!</h1>
        </div>
      </div>
    </section>
  }
}

