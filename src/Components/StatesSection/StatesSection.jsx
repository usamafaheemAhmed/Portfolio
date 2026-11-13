import { Col, Row, Typography } from 'antd'
import React from 'react'
import CountUp from 'react-countup' // Import the library

const { Paragraph } = Typography

const StatesSection = () => {
    return (
        <section className="landing-metrics-section" aria-label="Key Engineering Metrics">
            <Row className="metrics-grid" align="middle">
                {/* 1. Production Apps: 5+ */}
                <Col xs={12} md={6} className="metric-item">
                    <div className="metric-value">
                        <CountUp
                            start={0}
                            end={5}
                            duration={2.5} // Animation duration in seconds
                            separator="," // Adds thousands separator if needed
                        />
                        <span className="metric-accent">+</span>
                    </div>
                    <Paragraph className="metric-label">Production SaaS & Web Apps</Paragraph>
                </Col>

                {/* 2. Active Users: 120K+ */}
                <Col xs={12} md={6} className="metric-item">
                    <div className="metric-value">
                        <CountUp
                            start={0}
                            end={120} // We count up to 120
                            duration={2.5}
                            separator=","
                        />
                        <span className="metric-accent">K+</span> {/* 'K' moves here */}
                    </div>
                    <Paragraph className="metric-label">Active End Users Served</Paragraph>
                </Col>

                {/* 3. System Uptime: 99.98% */}
                <Col xs={12} md={6} className="metric-item">
                    <div className="metric-value">
                        <CountUp
                            start={90} // Start higher for realism (e.g., 90%)
                            end={99.98}
                            duration={3} // Slower duration for precise decimal
                            decimals={2} // Specify we need 2 decimal places
                            separator=","
                        />
                        <span className="metric-accent">%</span>
                    </div>
                    <Paragraph className="metric-label">System Uptime & Reliability</Paragraph>
                </Col>

                {/* 4. API Performance: 40% */}
                <Col xs={12} md={6} className="metric-item">
                    <div className="metric-value">
                        <CountUp
                            start={0}
                            end={40}
                            duration={2}
                            separator=","
                        />
                        <span className="metric-accent">%</span>
                    </div>
                    <Paragraph className="metric-label">Faster Load & API Performance</Paragraph>
                </Col>
            </Row>
        </section>
    )
}

export default StatesSection