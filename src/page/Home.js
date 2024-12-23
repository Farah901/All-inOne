import React, { useContext } from "react";
import NavBar from '../Components/NavBar'; 
import { LangContext } from "./langContext";
import bigPicture from './bigPicture.jpg'; // Make sure to replace with the actual path to your image

export default function Home() {
  const { title, text, apps } = useContext(LangContext);

  return (
    <>
      <NavBar />
      <div className="homepage">
        <div className="content">
          <h1>{title}</h1>
          <p>{text}</p>
          <div className="apps-container">
            {apps.map((app, index) => (
              <div key={index} className="app-card">
                <h2>{app.name}</h2>
                <p>{app.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="image-container">
          <img src={bigPicture} alt="Big Visual" />
        </div>
      </div>

      <style>
        {`
          .homepage {
            display: flex;
            max-width: 1200px;
            height: 100vh;
            margin: 40px auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            animation: fadeIn 1s ease-in-out;
          }

          .content {
            flex: 1;
            padding-right: 20px;
          }

          .homepage h1 {
            font-size: 2.5em;
            color: #333;
            margin-bottom: 20px;
            animation: slideInFromLeft 1s ease-in-out;
          }

          .homepage p {
            font-size: 1.2em;
            color: #666;
            margin-bottom: 40px;
            animation: slideInFromRight 1s ease-in-out;
          }

          .apps-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
          }

          .app-card {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            width: calc(45% - 20px);
            box-sizing: border-box;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            animation: fadeInUp 1s ease-in-out;
          }

          .app-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
          }

          .app-card h2 {
            font-size: 1.5em;
            color: #007bff;
            margin-top: 0;
          }

          .app-card p {
            font-size: 1em;
            color: #555;
          }

          .image-container {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .image-container img {
            max-width: 100%;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            animation: fadeIn 1s ease-in-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideInFromLeft {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
          }

          @keyframes slideInFromRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </>
  );
}