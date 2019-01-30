import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Start from './start/Start'
import Make from './make/Make'
import Upgrades from './upgrades/Upgrades'
import Achievements from './achievements/Achievements'
import GameTimer from '../components/GameTimer'

const Router = () => (
  <main>
    <GameTimer />
    <Switch basename={'/indie-maker-the-game'}>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Start}/>
      <Route exact path={`${process.env.PUBLIC_URL}/make`} component={Make}/>
      <Route exact path={`${process.env.PUBLIC_URL}/upgrades`} component={Upgrades}/>
      <Route exact path={`${process.env.PUBLIC_URL}/achievements`} component={Achievements}/>
    </Switch>
  </main>
)

export default Router
