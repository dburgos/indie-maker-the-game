import React from 'react'
import { connect } from 'react-redux'
import { buy, upgrade } from '../../redux/actions'
import Emoji from '../../components/Emoji'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './Upgrades.css';

const mapStateToProps = state => {
  return state;
};

const Upgrades = (state) => (
  <div>
    <Header />
    <ul className="upgrades list-group list-group-flush">
      {state.upgrades.map(el => (
        el.acquired ? null :
          <li className="list-group-item" key={el.id}>
            <div style={{ display: 'inline-block', width: '100%' }}>
              <h3><Emoji symbol={el.icon} /> {el.title}</h3>
              <p>{el.description}
                <button className="green button" disabled={state.make.money < el.cost} onClick={e => {
                  e.preventDefault();
                  state.dispatch(buy(el.id));
                  const upgradeData = el.update;
                  upgradeData.cost = el.cost;
                  state.dispatch(upgrade(upgradeData));
                }}>Buy for ${el.cost}</button></p>
            </div>
          </li>
      ))}
    </ul>
    <Footer />
  </div>
)

export default connect(mapStateToProps)(Upgrades)
