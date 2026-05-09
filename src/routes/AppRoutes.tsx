import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Login from "../pages/Login"
import FighterDetail from "../pages/FighterDetail"
import Layout from "../components/Layout"



function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="login" element={<Login />} />
                    <Route path="fighter/:id" element={<FighterDetail />} />
                </Route>
            </Routes>
        </div>
    )
}
export default AppRoutes