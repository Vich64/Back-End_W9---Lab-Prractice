// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    
    if (loading) {
        return <div>Loading...</div>; // Or a proper loading spinner
    }
    
    return user ? children : <Navigate to="/" replace />;
}