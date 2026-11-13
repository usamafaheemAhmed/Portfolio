import { Col, Row, Typography } from 'antd'
import React from 'react'

const { Title, Paragraph } = Typography

const AboutSection = () => {
    return (
        <section className="landing-about-section" aria-label="About Me">
            <div className="about-header-minimal">
                <Paragraph className="landing-eyebrow">ABOUT ME</Paragraph>
                <Title level={2} className="about-main-title">
                    I build resilient systems that scale effortlessly under pressure.
                </Title>
            </div>

            <Row gutter={[48, 32]} className="about-editorial-row">
                <Col xs={24} lg={14}>
                    <Paragraph className="editorial-lead">
                        Full-Stack Software Engineer with over 4 years of experience architecting and deploying high-performance web and mobile applications.
                    </Paragraph>
                    <Paragraph className="editorial-body">
                        Based in Lahore, Pakistan, I specialize in the MERN stack, React Native, and Laravel. My day-to-day work involves optimizing database query indexes to slash API latency, building custom matching algorithms, and streamlining multi-cloud CI/CD deployment pipelines across AWS and Azure.
                    </Paragraph>
                    <Paragraph className="editorial-body">
                        I believe in writing clean, dependable code that bridges complex backend logic with smooth, intuitive user interfaces.
                    </Paragraph>
                </Col>

                <Col xs={24} lg={10}>
                    <div className="editorial-meta-box">
                        <div className="meta-group">
                            <span className="meta-label">Core Specialization</span>
                            <span className="meta-val">MERN Stack & Mobile Architectures</span>
                        </div>
                        <div className="meta-group">
                            <span className="meta-label">Current Base</span>
                            <span className="meta-val">Lahore, Pakistan</span>
                        </div>
                        <div className="meta-group">
                            <span className="meta-label">Education</span>
                            <span className="meta-val">BSSE, Lahore Garrison University</span>
                        </div>
                        <div className="meta-group">
                            <span className="meta-label">Primary Role</span>
                            <span className="meta-val">Full Stack Developer at FTS</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default AboutSection