import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Start from './start/Start'
import Make from './make/Make'
import Upgrades from './upgrades/Upgrades'
import Achievements from './achievements/Achievements'

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Start}/>
      <Route exact path='/make' component={Make}/>
      <Route exact path='/upgrades' component={Upgrades}/>
      <Route exact path='/achievements' component={Achievements}/>
    </Switch>
  </main>
)

export default Router
