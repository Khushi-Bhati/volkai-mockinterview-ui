import React, { useEffect, useState } from "react";
import "./../Styles/AiInterview.css";

const AIinterview = () => {
  const [seconds, setSeconds] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(true);
  const [buttonActive, setButtonActive] = useState(true);

  const [status, setStatus] = useState("● AI Speaking");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("● Waiting for Response");
      setIsSpeaking(false);
      setButtonActive(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollUp = () => {
    console.log("Scroll up clicked");
    setShowQuestions(true);
  };

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const secs = (sec % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <>
      <>
        <div className="container">
          <header className="header">
            <div>
              <h1>AI Mock Interview</h1>
              <p>Real-time AI interviewer tailored to your job role</p>
            </div>

            <div className="header-right">
              <span
                className={`status ${isSpeaking ? "ai-speaking" : "waiting"}`}
              >
                {status}
              </span>
              <span className="timer">{formatTime(seconds)}</span>
            </div>
          </header>

          <main className="layout">
            <section className="panel camera">
              <div className="camera-placeholder">
                <div className="camera-container">
                  <div className="icon-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      width="50"
                      height="50"
                    >
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                  </div>
                </div>

                <span>Camera feed will appear here</span>
              </div>
              <div className="camera-footer">
                You
                <br />
                <span className="mid-span"> mid</span>
              </div>
              <div className="camera-actions">
                <div className="icon-wrapper">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="13"
                    height="13"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect x="3" y="7" width="18" height="14" rx="2" />

                    <circle cx="12" cy="14" r="3.5" />

                    <path d="M8 7l1.5-3h5L16 7" />
                  </svg>
                </div>

                <div className="icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="13"
                    height="13"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect x="9" y="3" width="6" height="10" rx="3" />

                    <path d="M12 13v4" />

                    <path d="M8 21h8" />

                    <path d="M5 11a7 7 0 0 0 14 0" />
                  </svg>
                </div>
              </div>
            </section>

            <div className="line-one"></div>

            <section className="panel ai">
              <div className="ai-avatar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  width="120"
                  height="120"
                >
                  <path
                    d="M32 14
       C34.5 24 37 26.5 48 29
       C37 31.5 34.5 34 32 46
       C29.5 34 27 31.5 16 29
       C27 26.5 29.5 24 32 14Z"
                    fill="none"
                    stroke="white"
                    stroke-width="3"
                    stroke-linejoin="round"
                  />

                  <rect
                    x="43"
                    y="17"
                    width="8"
                    height="2.5"
                    rx="1.25"
                    fill="white"
                  />
                  <rect
                    x="45.75"
                    y="14.25"
                    width="2.5"
                    height="8"
                    rx="1.25"
                    fill="white"
                  />

                  <rect
                    x="18"
                    y="37"
                    width="7"
                    height="2.5"
                    rx="1.25"
                    fill="white"
                  />
                  <rect
                    x="20.25"
                    y="34.75"
                    width="2.5"
                    height="7"
                    rx="1.25"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="wave">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="ai-label">
                <span className="ai-heading"> Volkai AI Interviewer</span>
                <br />
                Powered by Advanced AI
              </span>
            </section>
            <div className="line-one"></div>

            <aside className={`panel questions ${showQuestions ? "open" : ""}`}>
              <h3>Interview Questions</h3>

              <div className="current-question">
                <div className="badge-row">
                  <span className="badge">CURRENT QUESTION</span>

                  <div className="svg-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                    >
                      <path
                        d="M4 9v6h4l5 4V5L8 9H4z"
                        stroke="#ff6a00"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 8c1.8 1.8 1.8 6.4 0 8"
                        stroke="#ff6a00"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>

                <p>
                  Tell me about yourself and your experience in software
                  development.
                </p>

                <div className="tags">
                  <span className="tag easy">Difficulty: Easy</span>
                  <span className="tag skill">Skill Type: Communication</span>
                </div>
              </div>

              <div className="upcoming">
                <h4>Upcoming Questions</h4>
                <ul>
                  <li>
                    <span className="dot"></span>
                    <div className="text">
                      What motivated you to apply for this position?
                      <small>Easy · Behavioral</small>
                    </div>
                  </li>
                  <li>
                    <span className="dot"></span>
                    <div className="text">
                      Describe a challenging project you worked on and how you
                      overcome obstacles.
                      <small>Medium · Problem Solving</small>
                    </div>
                  </li>
                  <li>
                    <span className="dot"></span>
                    <div className="text">
                      How do you handle tight deadlines and pressue in a
                      fast-paced environment?
                      <small>Medium · Stress Management</small>
                    </div>
                  </li>
                  <li>
                    <span className="dot"></span>
                    <div className="text">
                      Explain a situation where you had to work witha different
                      team memeber.
                      <small>Hard · Teamwork</small>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </main>

          <div className="scroll-up" onClick={handleScrollUp}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 14 12 8 18 14" />
            </svg>
          </div>

          <footer className="controls">
            <button
              className={`primary ${buttonActive ? "recording" : "inactive"}`}
            >
              <span className="circle"></span>

              <span className="text-full">Start Recording Answer</span>
              <span className="text-short">Record</span>
            </button>

            <button className="second-btn">
              <svg
                className="repeat-circle"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#E5E7EB"
                  stroke-width="2"
                  stroke-linecap="round"
                  fill="none"
                />

                <path
                  d="M5 3v4h4"
                  stroke="#E5E7EB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span> Repeat Question</span>
            </button>
            <button className="second-btn">
              <svg
                className="repeat-circle"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span>Exit Interview</span>
            </button>
          </footer>
          <p className="record-hint">
            Click "Start Recording Answer" to record your spoken response
          </p>
        </div>
      </>
    </>
  );
};

export default AIinterview;
