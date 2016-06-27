import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Welcome extends Component {
  render() {
    return <section id="welcome" className="content-area">
      <div className="g-row">
        <div className="g-column small-12">
          <h1>Shiny Space Pirates</h1>
          <p>Welcome to the universe!</p>

          <table>
            <thead>
              <tr>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Edit your <Link to="/character-sheet">Character Sheet</Link></td>
                <td>
                  <span className="status not-saved">Not Saved</span>
                </td>
              </tr>
              <tr>
                <td>Build your own <Link to="/spaceship">Spaceship</Link></td>
                <td>
                  <span className="status not-saved">Not Saved</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  }
}

