import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Landing } from './../pages/Landing'
import { TeacherList } from './../pages/TeacherList'

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Landing }/>
        <Route path="/teachers" exact component={ TeacherList }/>
      </Switch>
    </BrowserRouter>
  )
}
