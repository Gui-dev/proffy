import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Landing } from './../pages/Landing'
import { TeacherList } from './../pages/TeacherList'
import { TeacherForm } from './../pages/TeacherForm'

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Landing }/>
        <Route path="/study" exact component={ TeacherList }/>
        <Route path="/give-classes" exact component={ TeacherForm }/>
      </Switch>
    </BrowserRouter>
  )
}
