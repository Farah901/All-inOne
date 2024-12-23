import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";

export default function NotFound() {
  return (
    <>
      <NavBar />
      <div className="not-found-container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you're looking for does not exist.</p>
          <Link to="/" className="btn btn-primary">
            Go Back to Home
          </Link>
        </div>
      </div>

      <style>
        {`
          .not-found-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f2f5;
            animation: fadeIn 1s ease-in-out;
          }

          .not-found-content {
            text-align: center;
            background: #fff;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            animation: slideInFromBottom 1s ease-in-out;
          }

          .not-found-content h1 {
            font-size: 6em;
            margin: 0;
            color: #dc3545;
            animation: bounce 2s infinite;
          }

          .not-found-content h2 {
            font-size: 2em;
            margin: 20px 0;
            color: #333;
          }

          .not-found-content p {
            font-size: 1.2em;
            color: #666;
            margin-bottom: 20px;
          }

          .btn-primary {
            padding: 10px 20px;
            font-size: 1.2em;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }

          .btn-primary:hover {
            background-color: #0056b3;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideInFromBottom {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-30px); }
            60% { transform: translateY(-15px); }
          }
        `}
      </style>
    </>
  );
}
