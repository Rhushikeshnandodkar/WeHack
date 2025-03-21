import React from 'react'
import { ALlClassesStyle } from './tutor.style'
import Sidebar from '../../molecules/Sidebar'
import { GlobalStyle } from '../commonpages/common.style'
import Navbar from '../../molecules/Navbar'


function AllClasses() {
  return (
    <>
    <GlobalStyle/>
    <Sidebar />
    <Navbar/>
    <ALlClassesStyle>
        <main className="main-content">
        <div className="header">
            <h1>My Classes</h1>
            <button className="create-class-btn">Create New Class</button>
        </div>
        <div className="class-grid">
            <div className="class-card">
            <div className="class-header">
                <h2 className="class-title">Advanced Machine Learning</h2>
                <div className="class-schedule">Mon, Wed • 10:00 AM - 11:30 AM</div>
            </div>
            <div className="class-body">
                <div className="class-stat">
                <span className="stat-label">Students</span>
                <span className="stat-value">28</span>
                </div>
                <div className="class-stat">
                <span className="stat-label">Average Score</span>
                <span className="stat-value">92%</span>
                </div>
                <div className="class-stat">
                <span className="stat-label">Completion</span>
                <span className="stat-value">85%</span>
                </div>
            </div>
            <div className="class-actions">
                <button className="action-btn">View Details</button>
                <button className="action-btn">Start Class</button>
            </div>
            </div>
            <div className="class-card">
            <div className="class-header">
                <h2 className="class-title">Data Structures &amp; Algorithms</h2>
                <div className="class-schedule">Tue, Thu • 2:00 PM - 3:30 PM</div>
            </div>
            <div className="class-body">
                <div className="class-stat">
                <span className="stat-label">Students</span>
                <span className="stat-value">32</span>
                </div>
                <div className="class-stat">
                <span className="stat-label">Average Score</span>
                <span className="stat-value">88%</span>
                </div>
                <div className="class-stat">
                <span className="stat-label">Completion</span>
                <span className="stat-value">78%</span>
                </div>
            </div>
            <div className="class-actions">
                <button className="action-btn">View Details</button>
                <button className="action-btn">Start Class</button>
            </div>
            </div>
            <div className="class-card">
            <div className="class-header">
                <h2 className="class-title">Web Development Fundamentals</h2>
                <div className="class-schedule">Fri • 1:00 PM - 3:00 PM</div>
            </div>
            <div className="class-body">
                <div className="class-stat">
                <span className="stat-label">Students</span>
                <span className="stat-value">25</span>
                </div>
                <div className="class-stat">
                <span className="stat-label">Average Score</span>
                <span className="stat-value">90%</span>
                </div>
                <div className="class-stat">
                <span className="stat-label">Completion</span>
                <span className="stat-value">92%</span>
                </div>
            </div>
            <div className="class-actions">
                <button className="action-btn">View Details</button>
                <button className="action-btn">Start Class</button>
            </div>
            </div>
        </div>
        </main>

    </ALlClassesStyle>
    </>
  )
}

export default AllClasses