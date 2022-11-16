import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes, authRoutes } from "../routes";
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
    const { user } = useContext(Context)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Element }) =>
                <Route key={path} path={path} element={Element} />
            )}
            {publicRoutes.map(({ path, Element }) =>
                <Route key={path} path={path} element={Element} />
            )}
            <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
    )
})


export default AppRouter;