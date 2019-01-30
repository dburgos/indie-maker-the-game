import React from 'react'
import { connect } from 'react-redux'
import Emoji from '../../components/Emoji'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './Achievements.css';

const mapStateToProps = state => {
  return state;
};

const Achievements = (state) => (
  <div>
    <Header />
      <ul className="achievements list-group list-group-flush">
        {state.achievements.map(el => (
          el.acquired ? null :
            <li className={el.unlocked?'':'locked'} key={el.id}>
              <h1><Emoji symbol={el.icon} label="Achievement" /></h1><h3>{el.title}</h3>
              <p>{el.description}</p>
            </li>
        ))}
      </ul>
    <Footer />
  </div>
)

export default connect(mapStateToProps)(Achievements)
