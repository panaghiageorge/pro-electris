import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col } from 'react-bootstrap'
import { Tab, TabPanel, Tabs, TabList } from 'react-web-tabs'
import 'react-web-tabs/dist/react-web-tabs.css'
import UserProfileScreen from './UserProfileScreen'
import UserOrdersScreen from './UserOrdersScreen'
import { logout } from '../actions/userActions'

const ProfileScreen = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <Tabs defaultTab='vertical-tab-one' vertical className='vertical-tabs'>
      <Col md={3}>
        <TabList>
          <Tab tabFor='vertical-tab-one'>
            <div className='iconDiv'>
              <i class='fas fa-user'></i>
            </div>
            Profile
          </Tab>
          <Tab tabFor='vertical-tab-two'>
            <div className='iconDiv'>
              <i class='fas fa-shopping-cart'></i>
            </div>
            Orders
          </Tab>
          <Tab onClick={logoutHandler}>
            <div className='iconDiv'>
              <i class='fas fa-sign-out-alt'></i>{' '}
            </div>
            Logout
          </Tab>
        </TabList>
      </Col>
      <Col md={9} className='profileRight'>
        <TabPanel tabId='vertical-tab-one'>
          <UserProfileScreen />
        </TabPanel>

        <TabPanel tabId='vertical-tab-two'>
          <UserOrdersScreen />
        </TabPanel>
      </Col>
    </Tabs>
  )
}

export default ProfileScreen
