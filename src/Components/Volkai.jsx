import React, { useState } from "react";
import "./../Styles/Volkai.css";
import { useNavigate } from "react-router-dom";

const Volkai = () => {
  const [accepted, setAccepted] = useState(false);
  const Navigate = useNavigate();
  return (
    <>
      <div className="wrapper">
        <div className="card">
          <div className="header">
            <div className="outer-border">
              <div className="inner-border">
                <div className="header-icon">i</div>
              </div>
            </div>

            <div className="header-text">
              <h2>Before You Start</h2>
              <p>Please review these important guidelines</p>
            </div>
          </div>

          <div className="list">
            <div className="row">
              <svg
                className="icon"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 19.5L19.5 17.5H24.5L26 19.5H27.5C28.3 19.5 29 20.2 29 21V26C29 26.8 28.3 27.5 27.5 27.5H16.5C15.7 27.5 15 26.8 15 26V21C15 20.2 15.7 19.5 16.5 19.5H18Z"
                  stroke="#22d3ee"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />

                <circle
                  cx="22"
                  cy="23.5"
                  r="2.5"
                  stroke="#22d3ee"
                  stroke-width="1.6"
                />
              </svg>

              <div>
                <h4>Ensure your camera is turned ON</h4>
                <span>
                  We need to see you for a realistic interview experience
                </span>
              </div>
            </div>

            <div className="row">
              <svg
                className="icon"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="20"
                  y="15"
                  width="4"
                  height="9"
                  rx="2"
                  stroke="#22d3ee"
                  stroke-width="1.6"
                />

                <path
                  d="M17 22.5C17 25.5 19.5 27.5 22 27.5C24.5 27.5 27 25.5 27 22.5"
                  stroke="#22d3ee"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />

                <path
                  d="M22 27.5V30"
                  stroke="#22d3ee"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />

                <path
                  d="M19.5 30H24.5"
                  stroke="#22d3ee"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>

              <div>
                <h4>Allow microphone access</h4>
                <span>Required to record your verbal responses</span>
              </div>
            </div>

            <div className="row">
              <svg
                className="icon"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16L23.6 20.4L28 22L23.6 23.6L22 28L20.4 23.6L16 22L20.4 20.4L22 16Z"
                  fill="none"
                  stroke="#22d3ee"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />

                <path
                  d="M28.8 16.5V20.5M26.8 18.5H30.8"
                  stroke="#22d3ee"
                  stroke-width="1.4"
                  stroke-linecap="round"
                />

                <path
                  d="M15.8 25.2V29.2M13.8 27.2H17.8"
                  stroke="#22d3ee"
                  stroke-width="1.4"
                  stroke-linecap="round"
                />
              </svg>

              <div>
                <h4>Sit in a quiet, well-lit environment</h4>
                <span>Minimize background noise and ensure good lighting</span>
              </div>
            </div>

            <div className="row">
              <svg
                className="icon"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="22"
                  cy="22"
                  r="7"
                  stroke="#22d3ee"
                  stroke-width="1.6"
                />

                <path
                  d="M22 22V18.5"
                  stroke="#22d3ee"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />

                <path
                  d="M22 22L25.5 24"
                  stroke="#3b82f6"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>

              <div>
                <h4>Answer clearly and concisely</h4>
                <span>Take your time and speak naturally</span>
              </div>
            </div>

            <div className="row">
              <svg
                className="icon"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="22"
                  cy="22"
                  r="7"
                  stroke="#22d3ee"
                  stroke-width="1.8"
                />
              </svg>

              <div>
                <h4>Click "Start Recording Answer" to begin</h4>
                <span>You can pause or repeat a question anytime</span>
              </div>
            </div>
          </div>

          <div className="notice">
            <strong className="record-test">Recording Notice: </strong>
            Your interview responses (audio/video) will be recorded and analyzed
            by AI to generate your performance report. Your data is processed
            securely and used only for interview analysis.
          </div>

          <div>
            <label className="consent">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                classNameName="consent-checkbox"
              />
              I understand and consent to the recording and Ai analysis of my
              interview responsses.
            </label>

            <button
              className={`cta ${accepted ? "active" : ""}`}
              disabled={!accepted}
              onClick={() => Navigate("/Aiinterview")}
            >
              {accepted
                ? "Start Interview"
                : "Please accept consent to continue"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Volkai;
