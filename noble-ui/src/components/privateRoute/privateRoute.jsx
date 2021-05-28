import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import api from '../../api/api'

const PrivateRoute = ({ component: Component, ...rest }) => {

  const [check, setCheck] = useState(false)
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    let isSubscribed = true
    api({
      method: 'get',
      url: `/users/current_user`,
    })
      .then((response) => {
        if (isSubscribed) {
          if (!response.data.error) setAuth(true)
          else setAuth(false)
          setCheck(true)
        }
      })
      .catch(() => {
        setAuth(false)
        setCheck(true)
      });
    return () => isSubscribed = false
  }, [])

  return (
    check ? (
      <Route
        {...rest}
        render={(props) =>
          auth ? (
            <Component {...rest} {...props} />
          ) : (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          )
        }
      />
    ) : (
      <></>
    )
  );
};

export default PrivateRoute;