import { FC } from "react";

const Layout: FC = ({ children }) => {
    return (
        <div className="max-w-screen-xl mx-auto p-5">
            { children }
        </div>
    )
}

export default Layout;