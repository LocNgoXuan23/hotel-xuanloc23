import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import { Home, SingleRoom, Room, About, Readme, BookingHistory, Error, Login, Register, ChangePassword, AuthWrapper, PrivateRoute, AdminRoute, Admin, AdminUser, AdminRoom, AdminBooking } from './pages'

function App() {  
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/readme'>
            <Readme />
          </Route>
          <PrivateRoute exact path='/booking/history'>
            <BookingHistory />
          </PrivateRoute>
          <Route exact path='/rooms'>
            <Room />
          </Route>
          <Route exact path="/rooms/:id" children={<SingleRoom />} />
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <PrivateRoute exact path='/changePassword'>
            <ChangePassword />
          </PrivateRoute>

          {/* admin */}
          <AdminRoute exact path='/admin'>
            <Admin />
          </AdminRoute>
          <AdminRoute exact path='/admin/user'>
            <AdminUser />
          </AdminRoute>
          <AdminRoute exact path='/admin/room'>
            <AdminRoom />
          </AdminRoute>
          <AdminRoute exact path='/admin/booking'>
            <AdminBooking />
          </AdminRoute>

          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
